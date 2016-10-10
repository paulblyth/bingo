/**
 * TicketListController class
 *
 * Sets tickets on the scope for the ng-controller directive
 *
 * @module controllers/TicketListController
 */
class TicketListController {

    /**
     * Sets up the $scope.tickets value
     *
     * @param {Angular.$scope} $scope
     * @param {TicketsService} TicketsService instance of the TicketsService to get the tickets
     * @param {NumbersService} NumbersService instance of the NumbersService to get the numbers
     */
    constructor ($scope, TicketsService, NumbersService) {
        $scope.tickets = TicketsService.getTickets(NumbersService.getNumbers());
    }

}

export default TicketListController;
