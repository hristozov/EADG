/// <reference path='_all.ts' />

module eadg {
    describe('Dot filter', function () {
        var filter;
        beforeEach(function () {
            filter = DotFilter();
        });

        it('should return valid output', function () {
            expect(_.map(_.range(0, 25), filter)).toEqual([
                '', '', '', '.',
                '', '.',
                '', '.',
                '', '.',
                '', '',
                ':',
                '', '', '.',
                '', '.',
                '', '.',
                '', '.',
                '', '',
                ':']);
        });
    });
}
