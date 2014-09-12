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
