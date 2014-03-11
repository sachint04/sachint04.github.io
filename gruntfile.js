module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-minify');   
	grunt.loadNpmTasks('grunt-contrib-uglify');    
	grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.initConfig({
    	uglify:{
    		my_target:{
    			files:{
    				'_/js/model.js':['_/components/js/libs/*.js']
    			}
    		}, /*uglify*/
    		watch:{
    			files:['_/components/js/*.js'],
    			task:['uglify']
    		}//watch

    	}

    })//initConfig
    grunt.registerTask('default', ['watch']);

}	