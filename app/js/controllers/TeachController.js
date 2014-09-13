function TeachController($scope) {
    $scope.clubSectionIsChosen = false
    $scope.workshopsSectionIsChosen = false

    $scope.teachSectionIsHidden = function() {
        return $scope.clubSectionIsChosen || $scope.workshopsSectionIsChosen
    };

    $scope.selectClubSection = function() {
        $scope.clubSectionIsChosen = true
    };

    $scope.hideClubSection = function() {
        $scope.clubSectionIsChosen = false
    };

    $scope.selectWorkshopsSection = function() {
        $scope.workshopsSectionIsChosen = true
    };

    $scope.hideWorkshopsSection = function() {
        $scope.workshopsSectionIsChosen = false
    };
}
