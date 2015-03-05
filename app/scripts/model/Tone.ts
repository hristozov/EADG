module eadg {
    export class Tone {
        public static A = new Tone('A');
        public static A_SHARP = new Tone('A#');
        public static B = new Tone('B');
        public static C = new Tone('C');
        public static C_SHARP = new Tone('C#');
        public static D = new Tone('D');
        public static D_SHARP = new Tone('D#');
        public static E = new Tone('E');
        public static F = new Tone('F');
        public static F_SHARP = new Tone('F#');
        public static G = new Tone('G');
        public static G_SHARP = new Tone('G#');

        public static TONES:Tone[] = [
            Tone.A,
            Tone.A_SHARP,
            Tone.B,
            Tone.C,
            Tone.C_SHARP,
            Tone.D,
            Tone.D_SHARP,
            Tone.E,
            Tone.F,
            Tone.F_SHARP,
            Tone.G,
            Tone.G_SHARP
        ];

        public get isLastInOctave():boolean {
            return this === Tone.B;
        }

        public get next():Tone {
            var idx = Tone.TONES.indexOf(this);
            return Tone.TONES[(idx + 1) % Tone.TONES.length];
        }

        public get name():string {
            return this._name;
        }

        constructor(private _name:string) {
        }
    }

    export class ActualTone {
        public get next():ActualTone {
            var newOctave;

            if (this._tone.isLastInOctave) {
                newOctave = this._octave.next;
            } else {
                newOctave = this._octave;
            }

            var newTone = this._tone.next;

            return new ActualTone(newOctave, newTone);
        }

        public get name():string {
            return this._tone.name + '(' + this._octave.name + ')';
        }

        public get octave():string {
            return this._octave.name;
        }

        public get tone():string {
            return this._tone.name;
        }

        constructor(private _octave:Octave, private _tone:Tone) {
        }
    }
}