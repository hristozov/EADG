module eadg {
    'use strict';

    export function DotFilter() {
        return function (fretNumber:number) {
            if (fretNumber === 0) {
                return '';
            } else if (fretNumber % 12 === 0) {
                return ':';
            }

            fretNumber = fretNumber % 12;
            if (fretNumber === 3 || fretNumber === 5 || fretNumber === 7 || fretNumber === 9) {
                return '.';
            }
            return '';
        }
    }
}