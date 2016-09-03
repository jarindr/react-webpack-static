var gulp = require('gulp')
var critical = require('critical').stream

// Generate & Inline Critical-path CSS
gulp.src('public/**/*.html', { base: 'public' })
  .pipe(require('gulp-filter')(file => {
    const fileContents = file.contents.toString('utf8')

    // Skip files without stylesheets (e.g. redirect files)
    if (fileContents.indexOf('<link href') === -1) return false

    // If file has already been processed, skip it.
    if (fileContents.indexOf('<!-- critical css -->') > -1) return false

    // Add <!-- critical css --> before the first link tag to prevent this
    // script from processing the same file twice.
    const nextFileContents = fileContents.replace('<link href', '<!-- critical css --><link href')
    file.contents = new Buffer(nextFileContents, 'utf8')
    return true
  }))
  .pipe(critical({ base: 'public/', inline: true, minify: true, height: 2000 }))
  .pipe(require('gulp-size')({ showFiles: true, gzip: true }))
  .pipe(gulp.dest('public'))
