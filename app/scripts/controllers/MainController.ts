module eadg {
    'use strict';

    export interface IMainCtrlScope extends ng.IScope {
        numberOfFrets: number;
        selectedTuning: Tuning;
        availableTunings: Tuning[];
        pitches: ActualPitch[][];
        refresh: ()=>void;
        topRow: string[];
    }

    export class MainController {
        //noinspection JSUnusedGlobalSymbols
        public static $inject = [
            '$scope'
        ];

        constructor(private $scope:IMainCtrlScope) {
            $scope.numberOfFrets = 24;

            $scope.availableTunings = [
                Tuning.EADG,
                Tuning.EbAbDbGb,
                Tuning.BEADG,
                Tuning.BEADGC
            ];

            $scope.selectedTuning = Tuning.EADG;

            $scope.topRow = [];

            $scope.pitches = [];

            $scope.refresh = function () {
                var tuning = $scope.selectedTuning,
                    result = [],
                    topRow = [],
                    stringsInTuning = tuning.strings;

                for (var i = 0; i <= $scope.numberOfFrets; i++) {
                    topRow.push(i);
                }

                for (var i = 0; i < stringsInTuning.length; i++) {
                    var current = stringsInTuning[i],
                        pitchesForString = [current],
                        j = 0;
                    while (j < $scope.numberOfFrets) {
                        current = current.next;
                        pitchesForString.push(current);
                        j++;
                    }
                    result.push(pitchesForString);
                }
                $scope.pitches = result;
                $scope.topRow = topRow;
            };

            $scope.refresh();
        }
    }
}