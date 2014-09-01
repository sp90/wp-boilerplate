module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            main: { //The source files get concatted in the order they are listed here
                src: [
                    'public/js/libs/angular.js',
                    'public/js/libs/angular-route.js',
                    'public/js/libs/modernizr-v2.8.3.js',
                    'public/js/libs/jquery-v1.11.1.js',
                    'public/js/libs/lodash.compat-v2.4.1.js',
                    'public/js/libs/snap.js',
                    'public/js/plugins/browserVersion.js',
                    'public/js/plugins/smartresize.js',
                    'public/js/main.js'
                ],
                dest: 'public/js/build/all.js'
            }
        },
        uglify: { // Task
            options: { // Target options
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n \n This is build by Simon Petersen github.com/sp90',
                mangle: {
                    except: ['jQuery', 'angular']
                }
            },
            dist: { // Target
                files: {
                    'public/js/build/all.min.js': ['<%= concat.main.dest %>']
                }
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options //// nested, compact, compressed, expanded.
                    style: 'compressed'
                },
                files: { // Dictionary of files
                    'public/css/app.css': 'public/sass/app.scss' // 'destination': 'source'
                }
            }
        },
        watch: { // Task
            js: {
                files: ['public/js/**/*.js'], // Which files to watch for changes
                tasks: ['concat'] // what task to be made when files changes
            },
            sass: {
                files: ['public/sass/**/*.scss'], // Which files to watch for changes
                tasks: ['sass'] // what task to be made when files changes
            }
        },
        concurrent: { // Task
            watchAll: { // Multiple tasks at once (improve build time)
                tasks: ['watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        clean: ['.sass-cache']
    });

    // Task stack
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    // Task groups when a command is run the tasks inside 
    // the array get executed in the order they are entered inside the array
    //
    // grunt.registerTask('name', ['task1', 'task2', 'tas...]);
    //
    grunt.registerTask('default', ['concat']);
    grunt.registerTask('dev', ['concurrent']);
    grunt.registerTask('build', ['concat', 'uglify', 'sass', 'clean']);
};