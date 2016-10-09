import './index.scss';

import angular from 'angular';

import TicketListController from './controllers/TicketListController';
import TicketStringService  from './services/TicketStringService';
import NumbersService       from './services/NumbersService';

let bingoApp = angular.module('bingoApp', []);

bingoApp.controller('TicketListController', TicketListController)
            .service('TicketStringService', TicketStringService)
            .service('NumbersService', NumbersService);
