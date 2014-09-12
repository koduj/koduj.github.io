/* koduj.com - 2014-09-13 */

'use strict'

var kodujApp = angular.module('KodujComApp', [
    'app.directives',
    'ngSanitize',
    'ngAnimate'
])

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

var directives = angular.module('app.directives', [])
directives.directive('markdown', function ($sanitize) {
    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            if (attrs.markdown) {
                scope.$watch(attrs.markdown, function (newVal) {
                    var html = newVal ? $sanitize(marked(newVal)) : '';
                    element.html(html);
                });
            } else {
                var html = $sanitize(marked(element.text()));
                element.html(html);
            }
        }
    };
});

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

function MainController($scope) {

}

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
