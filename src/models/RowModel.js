/**
 * RowModel class
 *
 * Model for each row
 *
 * @module models/RowModel
 */
class RowModel {

    /**
     * Constructor method takes an array of cells to set on the instance
     *
     * @param {Array} cells array of cells to set on the instance
     */
    constructor (cells) {
        this.cells = cells;
    }
}

export default RowModel;
