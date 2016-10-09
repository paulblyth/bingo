class NumberModel {
    constructor (number) {
        this.number = number;
        this.called = false;
    }

    setCalled (bool) {
        this.called = bool;
    }
};

export default NumberModel;
