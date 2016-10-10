/**
 * NumberModel class
 *
 * Model for each number
 */
class NumberModel {

    /**
     * Constructor method takes a number to set on the instance and sets its called state to false
     *
     * @param {Number} number value to set on the instance
     */
    constructor (number) {
        this.number = number;
        this.called = false;
    }

    /**
     * Sets the called state of the model
     *
     * @param {Boolean} bool boolean value to update the state to
     */
    setCalled (bool) {
        this.called = bool;
    }
}

export default NumberModel;
