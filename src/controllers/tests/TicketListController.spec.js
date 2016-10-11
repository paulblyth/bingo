let env = {};

describe('TicketListController', function () {

    beforeEach(function () {
        env.sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        env.sandbox.restore();
    });

    describe('test true', function () {

        it('should equal true', function () {
            expect(true).to.equal(true);
        });

    });

});
