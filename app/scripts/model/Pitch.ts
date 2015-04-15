module eadg {
    export class Pitch {
        public static A = new Pitch('A');
        public static A_SHARP = new Pitch('A#');
        public static B = new Pitch('B');
        public static C = new Pitch('C');
        public static C_SHARP = new Pitch('C#');
        public static D = new Pitch('D');
        public static D_SHARP = new Pitch('D#');
        public static E = new Pitch('E');
        public static F = new Pitch('F');
        public static F_SHARP = new Pitch('F#');
        public static G = new Pitch('G');
        public static G_SHARP = new Pitch('G#');

        public static TONES:Pitch[] = [
            Pitch.A,
            Pitch.A_SHARP,
            Pitch.B,
            Pitch.C,
            Pitch.C_SHARP,
            Pitch.D,
            Pitch.D_SHARP,
            Pitch.E,
            Pitch.F,
            Pitch.F_SHARP,
            Pitch.G,
            Pitch.G_SHARP
        ];

        public get isLastInOctave():boolean {
            return this === Pitch.B;
        }

        public get next():Pitch {
            var idx = Pitch.TONES.indexOf(this);
            return Pitch.TONES[(idx + 1) % Pitch.TONES.length];
        }

        public get name():string {
            return this._name;
        }

        constructor(private _name:string) {
        }
    }

    export class ActualPitch {
        public get next():ActualPitch {
            var newOctave;

            if (this._pitch.isLastInOctave) {
                newOctave = this._octave.next;
            } else {
                newOctave = this._octave;
            }

            var newTone = this._pitch.next;

            return new ActualPitch(newOctave, newTone);
        }

        public get name():string {
            return this._pitch.name + '(' + this._octave.name + ')';
        }

        public get octave():string {
            return this._octave.name;
        }

        public get pitch():string {
            return this._pitch.name;
        }

        constructor(private _octave:Octave, private _pitch:Pitch) {
        }
    }
}