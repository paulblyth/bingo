import TicketModel from './../models/TicketModel';
import RowModel from './../models/RowModel';

import { RULES } from './../common/constants';

// eslint-disable-next-line
const TICKETSTRING = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';

/**
 * TicketsService class
 *
 * Builds and returns the tickets
 */
class TicketsService {

    /**
     * Sets up the inital state of the instance
     */
    constructor () {
        this.allNumbers = null;
        this.tickets = null;
    }

    /**
     * Sets the all numbers on the instance
     *
     * @param {Array} allNumbers - array of numbers in the game to set on the instance
     */
    setAllNumbers (allNumbers) {
        this.allNumbers = allNumbers;
    }

    /**
     * Returns an array of cells
     *
     * @return {Array}
     */
    buildCells (rowString) {
        let cells = [];
        let cellsRegExp = new RegExp(`.{1,${RULES.NUMBER_OF_DIGITS}}`, 'g');
        let numbers = rowString.match(cellsRegExp);
        let x = 0;

        // loops through the column constraints (max number for that column) and picks the next number from our rowString;
        // if the number is below the column constraint then add it to the array - otherwise null
        for (let i = 0; i < RULES.COLUMN_CONSTRAINTS.length; i++) {
            let number = null;

            // if our current number is less than the constraint then
            // get the appropriate number model to add to the array
            if (numbers[x] < RULES.COLUMN_CONSTRAINTS[i]) {
                number = this.allNumbers[(parseInt(numbers[x], 10) - 1)];
                x++;
            }

            cells.push(number);
        }

        return cells;
    }

    /**
     * Returns an array of rows
     *
     * @return {Array}
     */
    buildRows (ticketString) {
        let rows = [];
        let rowLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_ROW * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let rowStrings = ticketString.match(rowLengthRegexp);

        // loops through the array of row strings and instantiates a RowModel for each
        for (let i = 0; i < rowStrings.length; i++) {
            let cells = this.buildCells(rowStrings[i]);
            let row = new RowModel(cells);

            rows.push(row);
        }

        return rows;
    }

    /**
     * Returns an array of tickets
     *
     * @return {Array}
     */
    buildTickets () {
        let tickets = [];
        let ticketLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_TICKET * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let ticketStrings = TICKETSTRING.match(ticketLengthRegexp);

        // loops through the array of ticket strings and instantiates a TicketModel for each
        for (let i = 0; i < ticketStrings.length; i++) {
            let rows = this.buildRows(ticketStrings[i]);
            let ticket = new TicketModel(rows);

            tickets.push(ticket);
        }

        return tickets;
    }

    /**
     * Returns the tickets; generates the tickets if they haven't already been built
     *
     * @param {Array} allNumbers - array of numbers within the game
     * @return {Array}
     */
    getTickets (allNumbers) {
        this.setAllNumbers(allNumbers);

        // if we don't have tickets, build them
        if (!this.tickets) {
            this.tickets = this.buildTickets();
        }

        return this.tickets;
    }

}

export default TicketsService;
