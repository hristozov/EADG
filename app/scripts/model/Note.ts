module eadg {
    export interface INote {
        next: INote;
        name: string;
        isLastInOctave: boolean;
        latinName: string;
    }

    class NoteImpl implements INote {
        private static LATIN_NAMES = {
            'A': 'La',
            'A#': 'La#',
            'B': 'Si',
            'C': 'Do',
            'C#': 'Do#',
            'D': 'Re',
            'D#': 'Re#',
            'E': 'Mi',
            'F': 'Fa',
            'F#': 'Fa#',
            'G': 'Sol',
            'G#': 'Sol#'
        };

        public get isLastInOctave():boolean {
            return this === NoteFactory.get('B');
        }

        public get next():INote {
            return NoteFactory.next(this);
        }

        public get name():string {
            return this._name;
        }

        public get latinName():string {
            return NoteImpl.LATIN_NAMES[this._name];
        }

        constructor(private _name:string) {
        }
    }

    export class NoteFactory {
        private static A = new NoteImpl('A');
        private static A_SHARP = new NoteImpl('A#');
        private static B = new NoteImpl('B');
        private static C = new NoteImpl('C');
        private static C_SHARP = new NoteImpl('C#');
        private static D = new NoteImpl('D');
        private static D_SHARP = new NoteImpl('D#');
        private static E = new NoteImpl('E');
        private static F = new NoteImpl('F');
        private static F_SHARP = new NoteImpl('F#');
        private static G = new NoteImpl('G');
        private static G_SHARP = new NoteImpl('G#');

        private static NOTES_SEQ:INote[] = [
            NoteFactory.A,
            NoteFactory.A_SHARP,
            NoteFactory.B,
            NoteFactory.C,
            NoteFactory.C_SHARP,
            NoteFactory.D,
            NoteFactory.D_SHARP,
            NoteFactory.E,
            NoteFactory.F,
            NoteFactory.F_SHARP,
            NoteFactory.G,
            NoteFactory.G_SHARP
        ];

        private static NOTES = {
            'A': NoteFactory.A,
            'A#': NoteFactory.A_SHARP,
            'Bb': NoteFactory.A_SHARP,
            'B': NoteFactory.B,
            'C': NoteFactory.C,
            'C#': NoteFactory.C_SHARP,
            'Db': NoteFactory.C_SHARP,
            'D': NoteFactory.D,
            'D#': NoteFactory.D_SHARP,
            'Eb': NoteFactory.D_SHARP,
            'E': NoteFactory.E,
            'F': NoteFactory.F,
            'F#': NoteFactory.F_SHARP,
            'Gb': NoteFactory.F_SHARP,
            'G': NoteFactory.G,
            'G#': NoteFactory.G_SHARP,
            'Ab': NoteFactory.G_SHARP
        };

        public static next(note:INote):INote {
            var idx = NoteFactory.NOTES_SEQ.indexOf(note);
            return NoteFactory.NOTES_SEQ[(idx + 1) % NoteFactory.NOTES_SEQ.length];
        }

        public static get(name:string):INote {
            return NoteFactory.NOTES[name.toUpperCase()];
        }
    }
}