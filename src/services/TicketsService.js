import TicketModel from './../models/TicketModel';
import RowModel from './../models/RowModel';

import { RULES } from './../common/constants';

// eslint-disable-next-line
const TICKETSTRING = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';

class TicketsService {

    constructor () {
        this.allNumbers = null;
    }

    setAllNumbers (allNumbers) {
        this.allNumbers = allNumbers;
    }

    buildCells (rowString) {
        let cells = [];
        let cellsRegExp = new RegExp(`.{1,${RULES.NUMBER_OF_DIGITS}}`, 'g');
        let numbers = rowString.match(cellsRegExp);
        let x = 0;

        for (let i = 0; i < RULES.COLUMN_CONSTRAINTS.length; i++) {
            let number = null;

            // if our current number is less than the constraint then
            // get the appropriate number to return
            if (numbers[x] < RULES.COLUMN_CONSTRAINTS[i]) {
                number = this.allNumbers[(parseInt(numbers[x], 10) - 1)];
                x++;
            }

            cells.push(number);
        }

        return cells;
    }

    buildRows (ticketString) {
        let rows = [];
        let rowLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_ROW * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let rowStrings = ticketString.match(rowLengthRegexp);

        for (let i = 0; i < rowStrings.length; i++) {
            let cells = this.buildCells(rowStrings[i]);
            let row = new RowModel(cells);
            rows.push(row);
        }

        return rows;
    }

    getTickets (allNumbers) {
        this.setAllNumbers(allNumbers);

        let tickets = [];
        let ticketLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_TICKET * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let ticketStrings = TICKETSTRING.match(ticketLengthRegexp);

        for (let i = 0; i < ticketStrings.length; i++) {
            let rows = this.buildRows(ticketStrings[i]);
            let ticket = new TicketModel(rows);
            tickets.push(ticket);
        }

        return tickets;
    }

}

export default TicketsService;
