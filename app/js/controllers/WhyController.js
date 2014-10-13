function WhyController($scope) {
    $scope.languageSectionIsChosen = false
    $scope.polandSectionIsChosen = false
    $scope.consumptionSectionIsChosen = false

    $scope.whySectionIsHidden = function() {
        return $scope.languageSectionIsChosen || $scope.polandSectionIsChosen || $scope.consumptionSectionIsChosen
    };

    $scope.selectLanguageSection = function() {
        $scope.languageSectionIsChosen = true
    };

    $scope.hideLanguageSection = function() {
        $scope.languageSectionIsChosen = false
    };

    $scope.selectPolandSection = function() {
        $scope.polandSectionIsChosen = true
    };

    $scope.hidePolandSection = function() {
        $scope.polandSectionIsChosen = false
    };

    $scope.selectConsumptionSection = function() {
        $scope.consumptionSectionIsChosen = true
    };

    $scope.hideConsumptionSection = function() {
        $scope.consumptionSectionIsChosen = false
    };
}
