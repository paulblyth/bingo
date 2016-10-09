import { RULES } from './../common/constants';

export default class {

    constructor ($scope, TicketStringService, NumbersService) {
        this.$scope = $scope;
        this.TicketStringService = TicketStringService;
        this.NumbersService = NumbersService;

        $scope.tickets = this.buildTickets(TicketStringService.getString());
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
                number = this.NumbersService.getNumbers()[(parseInt(numbers[x], 10) - 1)];
                x++;
            }

            cells.push(number);
        }

        return cells;
    }

    buildRow (rowString) {
        let row = {
            cells: this.buildCells(rowString)
        };

        return row;
    }

    buildRows (ticketString) {
        let rows = [];
        let rowLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_ROW * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let rowStrings = ticketString.match(rowLengthRegexp);

        for (let i = 0; i < rowStrings.length; i++) {
            rows.push(this.buildRow(rowStrings[i]));
        }

        return rows;
    }

    buildTicket (ticketString) {
        let ticket = {
            rows: this.buildRows(ticketString)
        };

        return ticket;
    }

    buildTickets (ticketString) {
        let tickets = [];
        let ticketLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_TICKET * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let ticketStrings = ticketString.match(ticketLengthRegexp);

        for (let i = 0; i < ticketStrings.length; i++) {
            tickets.push(this.buildTicket(ticketStrings[i]));
        }

        return tickets;
    }
};
