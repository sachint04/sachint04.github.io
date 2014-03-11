module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-cssmin');   
	grunt.loadNpmTasks('grunt-contrib-uglify');    
	grunt.loadNpmTasks('grunt-contrib-watch');    
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	//uglify:{
    		// my_target:{
    			// files:{
    				// '_/js/model.js':['_/components/js/libs/*.js']
    			// }
    		// }, /*uglify*/ 		
    	//}
 		// watch:{
		// files:['_/components/js/*.js'],
		// task:['uglify']
		// },//watch			
    	concat: {
	        css: {
	           src: ['css/bootstrap.min.css', 'css/_style.css'],
	            dest: 'css/style.css'
	        }
	    }

    })//initConfig
    grunt.registerTask('default', ['concat:css']);

}	