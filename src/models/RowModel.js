/**
 * RowModel class
 *
 * Model for each row
 */
class RowModel {

    /**
     * Constructor method takes an array of cells to set on the instance
     *
     * @param {Array} cells array of cells to set on the instance
     */
    constructor (cells) {
        this.cells = cells;
        this.remaining = cells.length;
    }

    /**
     * Method to count the remaining numbers left to call in a row
     */
    updateRemaining () {
        let remaining = this.cells.length;

        for (let i = 0; i < this.cells.length; i++) {
            if (!this.cells[i] || this.cells[i].called) {
                remaining--;
            }
        }

        this.remaining = remaining;
    }
}

export default RowModel;
