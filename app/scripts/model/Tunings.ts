module eadg {
    export class Tuning {
        public static EADG:Tuning = new Tuning([
            PitchFactory.get('C1', 'E'),
            PitchFactory.get('C1', 'A'),
            PitchFactory.get('C2', 'D'),
            PitchFactory.get('C2', 'G')
        ]);

        public static EbAbDbGb:Tuning = new Tuning([
            PitchFactory.get('C1', 'D#'),
            PitchFactory.get('C1', 'G#'),
            PitchFactory.get('C2', 'C#'),
            PitchFactory.get('C2', 'F#')
        ]);

        public static DADG:Tuning = new Tuning([
            PitchFactory.get('C1', 'D'),
            PitchFactory.get('C1', 'A'),
            PitchFactory.get('C2', 'D'),
            PitchFactory.get('C2', 'G')
        ]);

        public static BEADG:Tuning = new Tuning([
            PitchFactory.get('C0', 'B'),
            PitchFactory.get('C1', 'E'),
            PitchFactory.get('C1', 'A'),
            PitchFactory.get('C2', 'D'),
            PitchFactory.get('C2', 'G')
        ]);

        public static BEADGC:Tuning = new Tuning([
            PitchFactory.get('C0', 'B'),
            PitchFactory.get('C1', 'E'),
            PitchFactory.get('C1', 'A'),
            PitchFactory.get('C2', 'D'),
            PitchFactory.get('C2', 'G'),
            PitchFactory.get('C3', 'C')
        ]);

        public get strings():IPitch[] {
            return this._strings;
        }

        public get name():String {
            var result = "",
                pitches = this.strings,
                pitch;
            for (var i = 0; i < pitches.length; i++) {
                pitch = pitches[i];
                result += pitch.noteName;
            }
            return result;
        }

        constructor(private _strings:IPitch[]) {
        }
    }
}