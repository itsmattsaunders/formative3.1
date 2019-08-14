module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['css/style.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    },
    uglify:{
        my_target:{
            files: {
                'js/script.min.js':['js/script.js']
            }
        }
    },
    jshint: {
      files: ['*.js', 'js/script.js'],
      options: {
        globals: {
          jQuery: true,
        }
      }
    },
    watch:{
      js: {
        files: ['js/script.js', 'js/!.min.js'],
        tasks: ['jshint', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify']);

};
