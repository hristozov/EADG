module eadg {
    export class Tuning {
        public static EADG:Tuning = new Tuning([
            new ActualPitch(Octave.C1, Pitch.E),
            new ActualPitch(Octave.C1, Pitch.A),
            new ActualPitch(Octave.C2, Pitch.D),
            new ActualPitch(Octave.C2, Pitch.G)
        ]);

        public static EbAbDbGb:Tuning = new Tuning([
            new ActualPitch(Octave.C1, Pitch.D_SHARP),
            new ActualPitch(Octave.C1, Pitch.G_SHARP),
            new ActualPitch(Octave.C2, Pitch.C_SHARP),
            new ActualPitch(Octave.C2, Pitch.F_SHARP)
        ]);

        public static BEADG:Tuning = new Tuning([
            new ActualPitch(Octave.C0, Pitch.B),
            new ActualPitch(Octave.C1, Pitch.E),
            new ActualPitch(Octave.C1, Pitch.A),
            new ActualPitch(Octave.C2, Pitch.D),
            new ActualPitch(Octave.C2, Pitch.G)
        ]);

        public static BEADGC:Tuning = new Tuning([
            new ActualPitch(Octave.C0, Pitch.B),
            new ActualPitch(Octave.C1, Pitch.E),
            new ActualPitch(Octave.C1, Pitch.A),
            new ActualPitch(Octave.C2, Pitch.D),
            new ActualPitch(Octave.C2, Pitch.G),
            new ActualPitch(Octave.C3, Pitch.C)
        ]);

        public get strings():ActualPitch[] {
            return this._strings;
        }

        public get name():String {
            var result = "",
                pitches = this.strings,
                pitch;
            for (var i=0; i<pitches.length; i++) {
                pitch = pitches[i];
                result += pitch.pitch;
            }
            return result;
        }

        constructor(private _strings:ActualPitch[]) {
        }
    }
}