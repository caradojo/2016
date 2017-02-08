module.exports = function(grunt) {
  grunt.initConfig({

    sync: {
      main: {
        files: [{
              cwd: 'bower_components/',
              src: [  '*/*.js',
                      '*/*.js.map',
                      '*/*.css'],
              dest: 'client/lib'
          },{
              cwd: 'bower_components/angular-gridster/dist/',
              src: [  '*'],
              dest: 'client/lib/angular-gridster/'
          },{
              cwd: 'bower_components/bootstrap/dist/',
              src: [  '*/*'],
              dest: 'client/lib/bootstrap/'
          },{
              cwd: 'bower_components/jquery/dist',
              src: ['*.js', '*.map'],
              dest: 'client/lib/jquery'
          },{
              cwd: 'bower_components/underscore',
              src: ['*.js', '*.map'],
              dest: 'client/lib/underscore'
          }],
        verbose: true // Display log messages when copying files
      }
    }

  });

  grunt.loadNpmTasks('grunt-sync');

  grunt.registerTask('default', ['sync']);
};
