/**
 * TicketModel class
 *
 * Model for each ticket
 */
class TicketModel {

    /**
     * Constructor method takes an array of rows to set on the instance
     *
     * @param {Array} rows array of rows to set on the instance
     */
    constructor (rows) {
        this.rows = rows;
    }


    /**
     * Method to get the lowest numbers remaining in a row
     */
    updateRemaining () {
        let remaining = null;

        for (let i = 0; i < this.rows.length; i++) {
            this.rows[i].updateRemaining();

            if (remaining === null || this.rows[i].remaining < remaining) {
                remaining = this.rows[i].remaining;
            }
        }

        this.remaining = remaining;
    }

}

export default TicketModel;
