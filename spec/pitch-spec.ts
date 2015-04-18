/// <reference path='_all.ts' />

module eadg {
    describe('Pitch', function () {
        it('should reuse its instances', function () {
            var pitch1 = PitchFactory.get('C0', 'B'),
                pitch2 = PitchFactory.get('C0', 'B');
            expect(pitch1).toBe(pitch2);
        });
        
        it('should give the next pitch', function () {
            expect(PitchFactory.get('C1', 'B').next)
                .toBe(PitchFactory.get('C2', 'C'));
            expect(PitchFactory.get('C2', 'G#').next)
                .toBe(PitchFactory.get('C2', 'A'));
        });
    });
}
