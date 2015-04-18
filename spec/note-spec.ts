/// <reference path='_all.ts' />

module eadg {
    describe('Note', function () {
        it('should reuse its instances', function () {
            var note1 = NoteFactory.get('C'),
                note2 = NoteFactory.get('C');
            expect(note1).toBe(note2);
        });

        it('should give the next note', function () {
            expect(NoteFactory.get('B').next).toBe(NoteFactory.get('C'));
            expect(NoteFactory.get('C').next).toBe(NoteFactory.get('C#'));
            expect(NoteFactory.get('G#').next).toBe(NoteFactory.get('A'));
        });

        it('should provide latin names', function () {
            var noteNames = ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
                latinNames = _.map(noteNames, function (noteName) {
                    return NoteFactory.get(noteName).latinName;
                });

            expect(latinNames)
                .toEqual(['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si'])
        });
    });
}
