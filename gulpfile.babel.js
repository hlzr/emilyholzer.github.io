import gulp from 'gulp'
import del from 'del'

const paths = {
  html: {
    src: 'src/**/*',
    dest: 'dist/',
  },
};

const clean = () => del(['dist']);

// It will move everything from /src/ into dist
function html() {
    return gulp.src(paths.html.src, { sourcemaps: true })
      .pipe(gulp.dest(paths.html.dest))
  }

const compile = gulp.parallel(html);

// Setup the BrowserSync server
import browserSync from 'browser-sync';
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist/',
    },
  });
  done();
}

// Define watchers for each build component, and cumulative watcher

// currently watches everything
const watchHtml = () => gulp.watch(paths.html.src, gulp.series(html, reload));

const watch = gulp.parallel(watchHtml);

// Default Task
const defaultTasks = gulp.series(clean, compile, serve, watch);

// Export named tasks
export {
  clean,
  html,
  compile,
};

export default defaultTasks;
