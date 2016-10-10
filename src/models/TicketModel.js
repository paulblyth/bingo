/**
 * TicketModel class
 *
 * Model for each ticket
 *
 * @module models/TicketModel
 */
class TicketModel {

    /**
     * Constructor method takes an array of rows to set on the instance
     *
     * @param {Array} rows array of rows to set on the instance
     */
    constructor (rows) {
        this.rows = rows;
        this.won = false;
    }

}

export default TicketModel;
