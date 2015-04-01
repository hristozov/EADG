module eadg {
    'use strict';

    export interface IMainCtrlScope extends ng.IScope {
        numberOfFrets: number;
        selectedTuning: Tuning;
        availableTunings: Tuning[];
        tones: ActualTone[][];
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

            $scope.tones = [];

            $scope.refresh = function () {
                var tuning = $scope.selectedTuning,
                    result = [],
                    topRow = [],
                    tonesInTuning = tuning.tones;

                for (var i = 0; i <= $scope.numberOfFrets; i++) {
                    topRow.push(i);
                }

                for (var i = 0; i < tonesInTuning.length; i++) {
                    var current = tonesInTuning[i],
                        tonesForString = [current],
                        j = 0;
                    while (j < $scope.numberOfFrets) {
                        current = current.next;
                        tonesForString.push(current);
                        j++;
                    }
                    result.push(tonesForString);
                }
                $scope.tones = result;
                $scope.topRow = topRow;
            };

            $scope.refresh();
        }
    }
}