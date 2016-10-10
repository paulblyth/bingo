class TicketListController {

    constructor ($scope, TicketsService, NumbersService) {
        $scope.tickets = TicketsService.getTickets(NumbersService.getNumbers());
    }

}

export default TicketListController;
