"use strict"

var shell = require('shelljs')

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt)

  grunt.initConfig({
    "pkg": grunt.file.readJSON('package.json'),

    // "babel": {
      // options: {
      //   sourceMap: true
      // },
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'src',
    //       src: ['**/*.js'],
    //       dest: 'dist',
    //       ext: '.js'
    //     }]
    //   }
    // },
    browserify: {
      dist: {
        files: {
          'dist/bundle.js': 'src/app.js',
        },
        options: {
          transform: ['babelify', 'mithrilify']
        }
      }
    }
  })

  grunt.registerTask('node', 'Run with node', function() {
    shell.exec('DEBUG=mithril node dist/bundle.js')
  })

  grunt.registerTask("default", ["browserify"]);
  grunt.registerTask("run", ["browserify", "node"])
}
