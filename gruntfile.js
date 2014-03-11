module.exports = function(grunt){
grunt.loadNpmTasks('grunt-contrib-uglify');    
grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.initConfig({
    	uglify:{
    		my_target:{
    			files:{
    				'_/js/model.js':['_/components/js/jquery-1.8.3.js','_/components/js/model.js']
    			}
    		} /*uglify*/,
    		watch:{
    			files:['_/components/js/model.js'],
    			task:['uglify']
    		}//watch

    	}

    })//initConfig
    grunt.registerTask('default', 'watch');

}	