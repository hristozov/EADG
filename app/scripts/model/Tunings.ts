module eadg {
    export class Tuning {
        public static EADG:ActualTone[] = [
            new ActualTone(Octave.C1, Tone.E),
            new ActualTone(Octave.C1, Tone.A),
            new ActualTone(Octave.C2, Tone.D),
            new ActualTone(Octave.C2, Tone.G)
        ];

        public static EbAbDbGb:ActualTone[] = [
            new ActualTone(Octave.C1, Tone.D_SHARP),
            new ActualTone(Octave.C1, Tone.G_SHARP),
            new ActualTone(Octave.C2, Tone.C_SHARP),
            new ActualTone(Octave.C2, Tone.F_SHARP)
        ];
    }
}