/**
 * NumberSelectController class
 *
 * Controller for the number generator
 */
class NumberSelectController {

    /**
     * Sets up the $scope for the ng-directive
     *
     * @param {Angular.$scope} $scope
     * @param {NumbersService} NumbersService instance of the NumbersService to get the numbers
     */
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

    /**
     * Recursive function to generate and return the next unique number
     *
     * @returns {Number}
     */
    generateNextNumber () {
        let number = this.generateNumber();

        if (this.$scope.usedNumbers.includes(number)) {
            return this.generateNextNumber();
        }

        return number;
    }

    /**
     * Returns a unique number between 1-90 inclusively
     *
     * @return {Number}
     */
    generateNumber () {
        return Math.round(Math.random() * 89) + 1;
    }

    /**
     * Sets the current number on the $scope and disables the button if all the numbers have been called
     *
     * @param {Number} number the number to set as the current number
     */
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
