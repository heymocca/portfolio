var gulp = require( 'gulp' ),
	watch = require( 'gulp-watch' ),
    browserSync = require('browser-sync').create();


    gulp.task( 'watch', function() {
        notify: false,
        browserSync.init({
            server: {
                baseDir: "app"
            }
        });

    	watch( './app/index.html', function() {
    		browserSync.reload();
    	});

        watch('./app/assets/styles/**/*.css', function() {
            gulp.start('cssInject');
        });

    });

    // watch css file changes
    gulp.task('cssInject', ['styles'], function() {
        return gulp.src('./app/compile/styles/styles.css')
        .pipe(browserSync.stream());
    });
