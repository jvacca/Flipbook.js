'use strict';
 
var
  LIVERELOAD_PORT = 35729,
  lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT }),
  mountFolder = function( connect, dir ) {
    return connect.static(require('path').resolve(dir));
  };

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        dirs: {
            src_path: 'src/',
            dest_path: 'lib/',
            archive_path: '_archive'
        },

        concat: {
            build: {
                src: [
                    '<%= dirs.src_path %>version.js',
                    '<%= dirs.src_path %>utils.js',
                    '<%= dirs.src_path %>events.js',
                    '<%= dirs.src_path %>config.js',
                    '<%= dirs.src_path %>classes/DisplayObject.js',
                    '<%= dirs.src_path %>classes/*.js',
                    '<%= dirs.src_path %>main.js'
                ],
                dest: '<%= dirs.dest_path %><%= pkg.name %>-NEXT.combined.js'
            },

            dist: {
                src: [
                    '<%= dirs.src_path %>version.js',
                    '<%= dirs.src_path %>utils.js',
                    '<%= dirs.src_path %>events.js',
                    '<%= dirs.src_path %>config.js',
                    '<%= dirs.src_path %>classes/DisplayObject.js',
                    '<%= dirs.src_path %>classes/*.js',
                    '<%= dirs.src_path %>main.js'
                ],
                dest: '<%= dirs.dest_path %><%= pkg.name %>-<%= pkg.version %>.combined.js'
            }
        },

        uglify: {
            build: {
                src: '<%= dirs.dest_path %><%= pkg.name %>-NEXT.combined.js',
                dest: '<%= dirs.dest_path %><%= pkg.name %>-NEXT.min.js'
            },

            dist: {
                src: '<%= dirs.dest_path %><%= pkg.name %>-<%= pkg.version %>.combined.js',
                dest: '<%= dirs.dest_path %><%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },

        compress: {
          archived: {
            options: {
              archive: '_archive/<%= pkg.name %>-<%= grunt.template.today("yyyy-mm-dd") %>.zip'
            },
            expand: true,
            src: ['<%= dirs.dest_path %>*.js'],
            flatten: true
          }
        },

        clean: {
            build: {
                src: '<%= dirs.dest_path %>'
            }
        },

        copy: {
          main: {
            expand: true,
            src: '<%= dirs.dest_path %>*.js',
            dest: '<%= dirs.archive_path %>',
          },
        },

        version: {
            project: {
              src: ['package.json']
            }
        },

        watch: {
            js: {
                files: '<%= dirs.src_path %>**/*.js',
                tasks: ['build'],
                options: {
                    livereload: true
                }
            },

            livereload: {
                options: {
                  livereload: LIVERELOAD_PORT
                },

                files: [
                  'examples/index.html',
                  'examples/scripts/tests.js',
                ]
            }
        },

        connect: {
            server: {
              options: {
                port: 9000,
                livereload: true,
                hostname: '*'
              }
            },
            livereload: {
                options: {
                  middleware: function( connect ) {
                    return [
                      lrSnippet,
                      mountFolder(connect, './')
                    ];
                  }
                }
            }
        },

        open: {
            build : {
              path : 'http://localhost:9000/examples/index.html',
              app: 'Google Chrome'
            },
        }

    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('build', [
        'concat:build',
        'uglify:build',
    ]);

    grunt.registerTask('build_release', [
        'compress:archived',
        'clean',
        'concat:dist',
        'uglify:dist',
    ]);

    grunt.registerTask('dev', [
        'connect',
        'open',
        'watch'
    ]);

    grunt.registerTask('stage', [
        'copy:stage'
    ]);
    
};