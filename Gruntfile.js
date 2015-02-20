/* jshint node: true */

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        "kev-mode.modinfo",
        "player.config",
        "recipes/**/*.recipe"
      ]
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')

  grunt.registerTask('test', ['jshint'])
  grunt.registerTask('default', 'test')
};
