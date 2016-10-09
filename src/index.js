import angular from 'angular';

import './index.scss';

const TICKETSTRING = '011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985';
const ROWS = 3;
const COLUMNS = 10;

const RULES = {
    COLUMN_CONSTRAINTS: [10, 20, 30, 40, 50, 60, 70, 80, 90],
    NUMBER_OF_DIGITS: 2,
    NUMBERS_IN_TICKET: 15, // it's actually 15, but counting for digits (e.g. XX)
    NUMBERS_IN_ROW: 5 // it's actually 5, but counting for digits (e.g. XX)
};

let bingoApp = angular.module('bingoApp', []);

bingoApp.controller('TicketListController', function TicketListController($scope) {

    $scope.buildCells = function (rowString) {
        let cells = [];
        let cellsRegExp = new RegExp(`.{1,${RULES.NUMBER_OF_DIGITS}}`, 'g');
        let numbers = rowString.match(cellsRegExp);
        let x = 0;

        for (let i = 0; i < RULES.COLUMN_CONSTRAINTS.length; i++) {
            let number = null;
            if (numbers[x] < RULES.COLUMN_CONSTRAINTS[i]) {
                number = numbers[x];
                x++;
            }
            cells.push({
                number: number
            });
        }

        return cells;
    };

    $scope.buildRow = function (rowString) {
        let row = {
            cells: $scope.buildCells(rowString)
        };

        return row;
    };

    $scope.buildRows = function (ticketString) {
        let rows = [];
        let rowLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_ROW * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let rowStrings = ticketString.match(rowLengthRegexp);

        for (let i = 0; i < rowStrings.length; i++) {
            rows.push($scope.buildRow(rowStrings[i]));
        }

        return rows;
    };

    $scope.buildTicket = function (ticketString) {
        let ticket = {
            rows: $scope.buildRows(ticketString)
        };

        return ticket;
    };

    $scope.buildTickets = function () {
        let tickets = [];
        let ticketLengthRegexp = new RegExp(`.{1,${(RULES.NUMBERS_IN_TICKET * RULES.NUMBER_OF_DIGITS)}}`, 'g');
        let ticketStrings = TICKETSTRING.match(ticketLengthRegexp);

        for (let i = 0; i < ticketStrings.length; i++) {
            tickets.push($scope.buildTicket(ticketStrings[i]));
        }

        return tickets;
    };

    $scope.tickets = $scope.buildTickets();
});
