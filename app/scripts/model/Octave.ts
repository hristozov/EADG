module eadg {
    export interface IOctave {
        name:string;
        next:IOctave;
    }

    class OctaveImpl implements IOctave {
        public get name():string {
            return this._name;
        }

        public get next():IOctave {
            return OctaveFactory.next(this);
        }

        constructor(private _name:string) {
        }
    }

    export class OctaveFactory {
        private static C0 = new OctaveImpl('C0');
        private static C1 = new OctaveImpl('C1');
        private static C2 = new OctaveImpl('C2');
        private static C3 = new OctaveImpl('C3');
        private static C4 = new OctaveImpl('C4');
        private static C5 = new OctaveImpl('C5');

        private static OCTAVES:IOctave[] = [
            OctaveFactory.C0,
            OctaveFactory.C1,
            OctaveFactory.C2,
            OctaveFactory.C3,
            OctaveFactory.C4,
            OctaveFactory.C5
        ];

        public static get(name:string):IOctave {
            return _.select(
                OctaveFactory.OCTAVES,
                function (octave) {
                    return octave.name === name;
                })[0];
        }

        public static next(octave:IOctave):IOctave {
            var index = OctaveFactory.OCTAVES.indexOf(octave);
            return OctaveFactory.OCTAVES[index + 1];
        }
    }
}