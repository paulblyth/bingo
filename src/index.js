import './index.scss';

import angular from 'angular';

import TicketListController   from './controllers/TicketListController';
import NumberSelectController from './controllers/NumberSelectController';

import TicketsService  from './services/TicketsService';
import NumbersService  from './services/NumbersService';

let bingoApp = angular.module('bingoApp', []);

bingoApp.controller('TicketListController', TicketListController)
            .service('TicketsService', TicketsService)
            .service('NumbersService', NumbersService);

bingoApp.controller('NumberSelectController', NumberSelectController)
            .service('NumbersService', NumbersService);
