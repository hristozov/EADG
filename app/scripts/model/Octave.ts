module eadg {
    export class Octave {
        public static C0 = new Octave('C0');
        public static C1 = new Octave('C1');
        public static C2 = new Octave('C2');
        public static C3 = new Octave('C3');
        public static C4 = new Octave('C4');
        public static C5 = new Octave('C5');

        public static OCTAVES = [
            Octave.C0,
            Octave.C1,
            Octave.C2,
            Octave.C3,
            Octave.C4,
            Octave.C5
        ];

        public get name():string {
            return this._name;
        }

        public get next():Octave {
            var index = Octave.OCTAVES.indexOf(this);
            return Octave.OCTAVES[index + 1];
        }

        constructor(private _name:string) {
        }
    }
}