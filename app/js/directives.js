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
