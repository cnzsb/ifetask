var gulp = require('gulp'),
    // minifycss = require('gulp-minify-css'),
    // jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    // del = require('del'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    // cache = require('gulp-cache'),
    // imagemin = require('gulp-imagemin'),    
    browserSync = require('browser-sync');

gulp.task('sass', function () {
	return sass('2016_spring/**/*.scss', {style: 'expanded'})
		.pipe(autoprefixer({
			browsers: [
				'last 2 versions',
				'ie >= 7',
				'ie_mob >= 10',
				'ff >= 30',
				'chrome >= 34',
				'safari >= 7',
				'opera >= 23',
				'ios >= 7',
				'android >= 2.3',
				'bb >= 10'
			]
		}))
		.pipe(gulp.dest('2016_spring/'))
		.pipe(notify({message: 'Sass done!'}));
});

// 默认监控任务
gulp.task('default', ['refresh']);

// 监听所有文件并实时生成和预览
gulp.task('refresh', ['sass'], function () {
	var files = [
		'./**/*.html',
		'./**/*.css',
		'./**/*.js',
		'./**/images/*'
	];

	browserSync.init(files, {
		server: {
			baseDir: '.'
		}
	});

	gulp.watch('2016_spring/**/*.scss', ['sass']);
});

// 监听所有文件并实时生成
gulp.task('watch', ['sass'], function () {
	gulp.watch('2016_spring/**/*.scss', ['sass']);
});