module eadg {
    'use strict';

    export interface IMainCtrlScope extends ng.IScope {
        numberOfFrets: number;
        selectedTuning: Tuning;
        availableTunings: Tuning[];
        showLatinNames: boolean;
        strings: IPitch[][];
        uniquePitches: IPitch[];
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
                Tuning.DADG,
                Tuning.BEADG,
                Tuning.BEADGC
            ];

            $scope.selectedTuning = Tuning.EADG;

            $scope.topRow = [];

            $scope.strings = [];

            $scope.uniquePitches = [];

            $scope.showLatinNames = false;

            $scope.refresh = function () {
                var tuning = $scope.selectedTuning,
                    result = [],
                    topRow = [],
                    stringsInTuning = tuning.strings;

                for (var i = 0; i <= $scope.numberOfFrets; i++) {
                    topRow.push(i);
                }

                var uniquePitches = [];

                for (var i = 0; i < stringsInTuning.length; i++) {
                    var current = stringsInTuning[i],
                        pitchesForString = [current],
                        j = 0;
                    while (j < $scope.numberOfFrets) {
                        current = current.next;
                        pitchesForString.push(current);
                        j++;
                    }

                    var currentUniquePitches = _.pluck(uniquePitches, 'name'),
                        newPitches = _.filter(
                            pitchesForString, function (pitch) {
                                return currentUniquePitches
                                        .indexOf(pitch.name) < 0;
                            });
                    uniquePitches = _.union(uniquePitches, newPitches);

                    result.push(pitchesForString);
                }
                $scope.strings = result;
                $scope.topRow = topRow;
                $scope.uniquePitches = uniquePitches;
            };

            $scope.refresh();
        }
    }
}