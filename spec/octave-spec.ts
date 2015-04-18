/// <reference path='libs/jasmine.d.ts' />
//// <reference path='../app/scripts/_all.ts' />

module eadg {
    describe('Octave', function () {
        it('should construct instances and provide getter', function () {
            var octave = new Octave('C2');
            expect(octave.name).toBe('C2');
        });
    });
}