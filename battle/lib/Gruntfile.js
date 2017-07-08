module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../javascripts/quiz.js']
    },
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        predef: ["document", "console", "$", "event", "alert", "XMLHttpRequest" ],
        esnext: true,
        globalstrict: true,
        browserify: true,
        globals: {}
      }
    },
    sass: {
      dist: {
        files: {
// target: source
          '../css/style.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch', 'browserify']);
};