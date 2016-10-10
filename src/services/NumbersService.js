import NumberModel from './../models/NumberModel';

class NumbersService {

    constructor () {
        this.numbers = this._buildNumbers();
    }

    _buildNumbers () {
        let numbers = [];

        for (let i = 1; i <= 90; i++) {
            numbers.push(new NumberModel(i));
        }

        return numbers;
    }

    getNumbers () {
        return this.numbers;
    }
}

export default NumbersService;
