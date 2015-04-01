module eadg {
    export class Tuning {
        public static EADG:Tuning = new Tuning([
            new ActualTone(Octave.C1, Tone.E),
            new ActualTone(Octave.C1, Tone.A),
            new ActualTone(Octave.C2, Tone.D),
            new ActualTone(Octave.C2, Tone.G)
        ]);

        public static EbAbDbGb:Tuning = new Tuning([
            new ActualTone(Octave.C1, Tone.D_SHARP),
            new ActualTone(Octave.C1, Tone.G_SHARP),
            new ActualTone(Octave.C2, Tone.C_SHARP),
            new ActualTone(Octave.C2, Tone.F_SHARP)
        ]);

        public static BEADG:Tuning = new Tuning([
            new ActualTone(Octave.C0, Tone.B),
            new ActualTone(Octave.C1, Tone.E),
            new ActualTone(Octave.C1, Tone.A),
            new ActualTone(Octave.C2, Tone.D),
            new ActualTone(Octave.C2, Tone.G)
        ]);

        public static BEADGC:Tuning = new Tuning([
            new ActualTone(Octave.C0, Tone.B),
            new ActualTone(Octave.C1, Tone.E),
            new ActualTone(Octave.C1, Tone.A),
            new ActualTone(Octave.C2, Tone.D),
            new ActualTone(Octave.C2, Tone.G),
            new ActualTone(Octave.C3, Tone.C)
        ]);

        public get tones():ActualTone[] {
            return this._tones;
        }

        public get name():String {
            var result = "",
                tones = this.tones,
                tone;
            for (var i=0; i<tones.length; i++) {
                tone = tones[i];
                result += tone.tone;
            }
            return result;
        }

        constructor(private _tones:ActualTone[]) {
        }
    }
}