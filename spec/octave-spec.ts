/// <reference path='_all.ts' />

module eadg {
    describe('Octave', function () {
        it('should construct instances and provide getter', function () {
            var octave = OctaveFactory.get('C2');
            expect(octave.name).toBe('C2');
        });

        it('should reuse its instances', function () {
            var octave = OctaveFactory.get('C2');
            expect(octave).toBe(OctaveFactory.get('C2'));
        });
        
        it('should get the next octave', function () {
            var octave = OctaveFactory.get('C3');
            expect(octave.next).toBe(OctaveFactory.get('C4'));
        });
    });
}
