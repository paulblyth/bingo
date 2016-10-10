class NumberSelectController {

    constructor ($scope, NumbersService) {
        this.$scope = $scope;
        this.$scope.currentNumber = null;
        this.$scope.disableButton = false;

        this.NumbersService = NumbersService;

        this.$scope.usedNumbers = [];

        let self = this;

        this.$scope.getNextNumber = function () {
            self.setCurrentNumber(self.generateNextNumber());
        };

        this.$scope.getNextNumber();
    }

    generateNextNumber () {
        let number = this.generateNumber();

        if (this.$scope.usedNumbers.includes(number)) {
            return this.generateNextNumber();
        }

        return number;
    }

    generateNumber () {
        return Math.round(Math.random() * 89) + 1;
    }

    setCurrentNumber (number) {
        this.$scope.usedNumbers.unshift(number);
        this.NumbersService.getNumbers()[number - 1].setCalled(true);

        this.$scope.currentNumber = number;

        if (this.$scope.usedNumbers.length === this.NumbersService.getNumbers().length) {
            this.$scope.disableButton = true;
        }
    }
}

export default NumberSelectController;
