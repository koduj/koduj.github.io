function LearnController($scope) {
    $scope.onlineSectionIsChoosen = false
    $scope.groupSectionIsChoosen = false

    $scope.learnSectionIsHidden = function () {
        return $scope.onlineSectionIsChoosen || $scope.groupSectionIsChoosen
    };

    $scope.selectOnlineSection = function() {
        $scope.onlineSectionIsChoosen = true
    };

    $scope.hideOnlineSection = function() {
        $scope.onlineSectionIsChoosen = false
    };

    $scope.selectGroupSection = function() {
        $scope.groupSectionIsChoosen = true
    };

    $scope.hideGroupSection = function() {
        $scope.groupSectionIsChoosen = false
    };
}
