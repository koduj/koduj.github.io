module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    bases: ['.'],
                    port: 9000,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },

        concat: {
            options: {
                stripBanners: true,
                banner: "/* koduj.com */\n\n'use strict'\n\n",
                separator: "\n"
            },
            all: {
                src: [
                    'app/js/*.js',
                    'app/js/controllers/**/*.js'
                ],
                dest: 'js/koduj.js'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            all: {
                files: ['*.html', '**/*.css', 'app/js/**/*.js', '*.md', '**/*.md'],
                tasks: ['concat']

            }
        },

        open: {
            all: {
                path: 'http://localhost:9000/'
            }
        }
    });

    grunt.registerTask('server', [ 'express', 'open', 'concat', 'watch' ]);
};