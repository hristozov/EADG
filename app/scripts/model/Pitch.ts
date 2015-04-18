module eadg {
    export interface IPitch {
        name: string;
        next: IPitch;
        note: INote;
        octave: IOctave;
        noteName: string;
        octaveName: string;
    }

    class PitchImpl implements IPitch {
        public get next():IPitch {
            return PitchFactory.next(this);
        }

        public get name():string {
            return this._note.name + '(' + this._octave.name + ')';
        }

        public get octaveName():string {
            return this._octave.name;
        }

        public get noteName():string {
            return this._note.name;
        }

        public get note():INote {
            return this._note;
        }

        public get octave():IOctave {
            return this._octave;
        }

        constructor(private _octave:IOctave, private _note:INote) {
        }
    }

    export class PitchFactory {
        private static CACHE = {};

        public static get(octave:string, note:string) {
            if (!PitchFactory.CACHE[octave]) {
                PitchFactory.CACHE[octave] = {};
            }

            var existing = PitchFactory.CACHE[octave][note];
            if (existing) {
                return existing;
            }

            var newPitch = new PitchImpl(OctaveFactory.get(octave),
                NoteFactory.get(note));
            PitchFactory.CACHE[octave][note] = newPitch;

            return newPitch;
        }

        public static next(pitch:IPitch):IPitch {
            var newOctave;

            if (pitch.note.isLastInOctave) {
                newOctave = pitch.octave.next;
            } else {
                newOctave = pitch.octave;
            }

            var newNote = pitch.note.next;
            return PitchFactory.get(
                newOctave.name,
                newNote.name);
        }
    }
}