import NumberModel from './../models/NumberModel';

/**
 * NumbersService class
 *
 * Creates a number model for every number in the game (1-90)
 *
 * @module services/NumbersService
 */
class NumbersService {

    /**
     * Sets up the numbers on instantiation
     */
    constructor () {
        this.numbers = this._buildNumbers();
    }

    /**
     * Builds the numbers
     */
    _buildNumbers () {
        let numbers = [];

        for (let i = 1; i <= 90; i++) {
            numbers.push(new NumberModel(i));
        }

        return numbers;
    }

    /**
     * Returns an array of numbers
     *
     * @return {Array}
     */
    getNumbers () {
        return this.numbers;
    }
}

export default NumbersService;
