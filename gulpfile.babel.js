const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass') // https://css-tricks.com/gulp-for-beginners
const autoprefixer = require('gulp-autoprefixer')
const rsync = require('gulp-rsync')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const imagemin = require('gulp-imagemin')
const imageResize = require('gulp-image-resize')
const cache = require('gulp-cache')
const responsive = require('gulp-responsive')
const del = require('del')
// const mkdir = require('make-dir') // https://github.com/sindresorhus/make-dir
const fs = require('fs')
const tap = require('gulp-tap')
const path = require('path')
const newfile = require('gulp-file')
const config = require('./gulpfile.config.js')
// const { notify } = require('browser-sync')
const emptyDir = require('empty-dir')
//
const CSSpreprocessor = 'sass'
const dirRootApp = './'
const nameDirApp = 'app'
const dirApp = dirRootApp + nameDirApp + '/'
// const filesApp = dirApp + '*' // это index файлы
const dirAppCss = dirApp + 'css/'
const dirAppFavicon = dirApp + 'favicon/'
const dirAppFonts = dirApp + 'fonts/'
const dirAppImg = dirApp + 'img/'
const dirAppJs = dirApp + 'js/'
const dirAppLib = dirApp + 'lib/'
const dirAppPhp = dirApp + 'php/'
const dirAppVendor = dirApp + 'vendor/'
//
const dirSrc = dirRootApp + 'src/'
const dirSrcCss = dirSrc + 'css/'
const dirSrcFonts = dirSrc + 'fonts/'
const filesSrcFonts = dirSrcFonts + '**/*'
const dirSrcImg = dirSrc + 'img/'
const filesSrcImg = dirSrcImg + '**/*'
const dirSrcIndex = dirSrc + 'index/'
const filesSrcIndex = dirSrcIndex + '*'
const dirSrcJs = dirSrc + 'js/'
const filesSrcJs = dirSrcJs + '*.js'
const dirSrcLib = dirSrc + 'lib/'
const dirNodeModules = dirRootApp + 'node_modules/'
const dirDistJQuery = dirNodeModules + 'jquery/dist/'
const filesJsJQuery = dirDistJQuery + '*.js'
const dirDistBootstrap = dirNodeModules + 'bootstrap/dist/js/'
const filesJsBootstrap = dirDistBootstrap + '*.js'
const dirDistPoper = dirNodeModules + 'popper.js/dist/umd/'
const filesJsPopper = dirDistPoper + '*.js'
const dirSrcPhp = dirSrc + 'php/'
const filesSrcPhp = dirSrcPhp + '**/*.php'
const dirSrcSass = dirSrc + CSSpreprocessor + '/'
const filesSrcSass = dirSrcSass + '**/*.' + CSSpreprocessor
const dirSrcVendor = dirSrc + 'vendor/'
const filesVendor = dirSrcVendor + '**/*.*'
// const filesHtml = dirApp + '/*.html'
const dirSrcFavicon = dirSrc + 'favicon/'
const fileFavicon = dirSrcFavicon + '*'
const sassOptErrLogToConsole = true
const sassOptStyleCSS = 'expanded' // sassOptStyleCSS: 'compact' or 'compressed' or 'nested' or 'expanded'
const sassOptPrecision = 10

/**
 * @description Helper function for error handler
 */
const errorHandler = r => {
  notify.onError('\n\nERROR: <%= error.message %>\n')(r)
  // beep()
  // this.emit('end')
}

/**
 * @description Helper function to allow browser reload with Gulp 4.
 */
const reload = done => {
  browserSync.reload()
  done()
}

/**
 * @description Helper function to CSS & auto-inject into browsers with Gulp 4.
 */
const stream = done => {
  browserSync.stream()
  done()
}

/**
 * @description Local Web-Server
 * @link https://www.browsersync.io/docs/options#page-top
 * @param {Mixed} done Done
 */
const httpdLocal = done => {
  browserSync.init({
    server: { baseDir: dirApp },
    open: true,
    injectChanges: false,
    watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
    watch: true,
    browser: ['firefox'],
    // reloadDelay: 500,
    notify: false,
    online: false
    // tunnel: false,
    // tunnel: 'projectname'
    // Demonstration page: http://projectname.localtunnel.me
  })
  done()
}

/**
 * @description Local Server through proxy
 * @see https://www.browsersync.io/docs/options#page-top
 */
const httpdProxy = done => {
  browserSync.init({
    ui: false,
    // ui: { port: 8080 },
    // files: ["app/css/style.css", "app/js/*.js"],
    // watchEvents: ['change', 'add', 'unlink', 'addDir', 'unlinkDir'],
    // watch: true,
    // this should be used as an alternative to the files option.
    // When this option is used, some directories will be ignored automatically such as
    // node_modules bower_components .sass-cache .vscode .git .idea
    // ignore: ["app/css/style.css", "app/js/*.js"], // Patterns for any watchers to ignore.
    // Anything provided here will end up inside watchOptions.ignored
    // ignore: [filesSrcPhp, filesAppPhp],
    // single: true, // Serve an index.html file for all non-asset routes.
    // Useful when using client-routers
    // watchOptions: { ignoreInitial: true, ignored: '*.txt' },
    // server: dirApp,
    proxy: config.ipAddressWebServer,
    // proxy: 'localhost',
    // port: 3000,
    // middleware:,
    // serveStatic: ['.', './app/css'], // Add additional directories from which static files
    // should be served. Should only be used in proxy or snippet mode.
    // serveStaticOptions: { extensions: ['html'] },
    // https:,
    // httpModule:,
    // cwd:,
    // callbacks:,
    // ghostMode: { clicks: true, scroll: false, location: true, forms: true}, // Clicks,
    // Scrolls & Form inputs on any device will be mirrored to all others.
    // logLevel: "info", // Can be either "info", "debug", "warn", or "silent"
    // logPrefix: "",
    // logConnections:,
    // logFileChanges: true, // Log information about changed files
    // logSnippet:,
    // snippetOptions:,
    // rewriteRules: , // Replace every occurrence of the word browserSync with 'kittenz'
    // tunnel: "my-private-site", // Demonstration page: http://my-private-site.localtunnel.me
    // online: false,
    // open: false, // Decide which URL to open automatically when browserSync starts.
    // Defaults to "local" if none set.
    // browser: ['chromium-browser', 'firefox', 'brave']
    // browser: ["chromium-browser"]
    browser: ['firefox']
    // browser: ["brave"],
    // cors:,
    // xip:,
    // reloadOnRestart:,
    // notify: true,
    // scrollProportionally: true,
    // scrollThrottle: 100, // only send scroll events every 100 milliseconds
    // scrollRestoreTechnique: 'window.name', // Decide which technique should be used to
    // restore scroll position following a reload.Can be window.name or cookie
    // scrollElements: ['.scroller'], // Sync the scroll position of any element on the page.
    // Add any amount of CSS selectors
    // scrollElementMapping: ['.scroller-mobile', '.scroller'], // Sync the scroll position of
    // any element on the page - where any scrolled element will cause all others to match
    // scroll position. This is helpful when a breakpoint alters which element is actually
    // scrolling
    // reloadDelay: 2000, // Wait for 2 seconds before any browsers should try to inject/reload
    // a file.
    // reloadDebounce: 2000, // Wait 2 seconds after a reload event before allowing more.
    // reloadThrottle: 500, // Emit only the first event during sequential time windows of a
    // specified duration.
    // plugins:,
    // injectChanges: true
    // Inject CSS changes or don't try to inject, just do a page refresh
    // startPath: "/info.php", // Open the first browser window at URL + "/info.php"
    // minify: false, // Don't minify the client-side JS
    // host: "192.168.1.1", // Override host detection if you know the correct IP to use.
    // https://github.com/shakyshane/dev-ip
    // localOnly: false, // For use in electron development
    // codeSync: true, // Don't send any file-change events to browsers
    // timestamps: false, // Don't append timestamps to injected files
    // scriptPath:
    // function(path, port, options) { return options.getIn(['urls', 'local']) + path; },
    // This will result in something like
    // http://localhost:3002/browser-sync/browser-sync-client.1.6.0.js
    // socket:
    // script:
  })
  done()
}

/**
 * @description Convert SASS to CSS
 */
gulp.task('sass2css', () => {
  return (
    gulp
      .src(filesSrcSass, { allowEmpty: true })
      // .pipe( plumber( errorHandler ) )
      // .pipe( sourcemaps.init() )
      .pipe(
        sass({
          errLogToConsole: sassOptErrLogToConsole,
          outputStyle: sassOptStyleCSS,
          precision: sassOptPrecision
        })
      )
      // .on("error", notify.onError()))
      .on('error', sass.logError)
      // .pipe( sourcemaps.write( { includeContent: false } ) )
      // .pipe( sourcemaps.init( { loadMaps: true } ) )
      .pipe(
        autoprefixer({
          grid: true,
          overrideBrowserslist: config.BROWSERS_LIST
        })
      )
      // .pipe( sourcemaps.write( dirApp + '/css' ) )
      // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
      .pipe(gulp.dest(dirAppCss))
  )
  // .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
  // .pipe( mmq({ log: true }) ) // Merge Media Queries only for .min.css version.
  // .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
  // .pipe( minifycss( { maxLineLen: 10, debug: true }, ( details ) => {
  //   console.log( `${details.name}: ${details.stats.originalSize}` );
  //   console.log( `${details.name}: ${details.stats.minifiedSize}` );
  // } ) )
  // .pipe( rename( { suffix: '.min' } ) )
  // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
  // .pipe( gulp.dest( dirAppCss ) );
  // .pipe( filter( '**/*.css' ) ) // Filtering stream to only css files.
  // Reloads style.min.css if that is enqueued:
  // .pipe(browserSync.stream()) // Reloads style.min.css if that is enqueued.
  // .pipe(notify({ message: '\n\nCSS Build Finished\n', onLast: true }))
})

/**
 * @description SASS to CSS с внедрением дефолтного кода CSS
 */
// gulp.task( 'sass_to_css_with_css_inclusion', gulp.series( 'styling', () => {
//   return gulp
//     .src( [
//       dirSrcCss + '/header.css',
//       dirAppCss + '/style.css',
//       // dirAppCss + 'style.min.css',
//     ], { allowEmpty: true } )
//     .pipe( concat( 'style.css' ) )
//     .pipe( gulp.dest( dirAppCss ) )
//     // .pipe(filter(dirApp + '*.css'))
//     .pipe( browserSync.stream() )
//     // .pipe( minifycss( { maxLineLen: 10, debug: true }, ( details ) => {
//     //     console.log( `${details.name}: ${details.stats.originalSize}` );
//     //     console.log( `${details.name}: ${details.stats.minifiedSize}` );
//     // } ) )
//     // .pipe( rename( { suffix: '.min' } ) )
//     // .pipe( gulp.dest( dirAppCss ) )
//     .pipe( notify( { message: '\n\nCSS Build Finished\n', onLast: true } ) );
// } ) );

/**
 * @description Processing Image
 * @version 1
 */
gulp.task('imageProcessingA', () => {
  return gulp
    .src(filesSrcImg)
    .pipe(imageResize({ width: '50%' }))
    .pipe(
      cache(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 3 }),
          // 0-7 low-high.
          imagemin.svgo({
            plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
          })
        ])
      )
    )
    .pipe(gulp.dest(dirAppImg))
  // .pipe(notify({ message: '\n\n✅  ===> Image processing — completed!\n', onLast: true }))
})

/**
 * @param {number} imagesQuality Responsive images quality
 */
const imagesQuality = 95

/**
 * @description Produce @1x images
 */
gulp.task('imageProcessing_1x', () => {
  return (
    gulp
      .src(filesSrcImg + '.{png,jpg,jpeg,webp,raw}', { allowEmpty: false })
      // .pipe(newer('app/img/@1x'))
      .pipe(
        responsive({
          '**/*': { width: '50%', quality: imagesQuality }
        })
      )
      // .on('error', function (e) { console.log(e) })
      // .pipe(rename(function (path) {path.extname = path.extname.replace('jpeg', 'jpg')}))
      .pipe(gulp.dest(dirAppImg + '/@1x'))
  )
  // .pipe(notify({
  //   message: '\n\n✅  ===> Image processing 1x — completed!\n',
  //   onLast: true
  // }))
})

/**
 * @description Produce @2x images
 */
gulp.task('imageProcessing_2x', () => {
  return (
    gulp
      .src(filesSrcImg + '.{png,jpg,jpeg,webp,raw}', { allowEmpty: false })
      // .pipe(newer('app/img/@2x'))
      .pipe(
        responsive({
          '**/*': { width: '100%', quality: imagesQuality }
        })
      )
      // .on('error', function (e) { console.log(e) })
      // .pipe(rename(function (path) {path.extname = path.extname.replace('jpeg', 'jpg')}))
      .pipe(gulp.dest(dirAppImg + '/@2x'))
  )
  // .pipe(notify({
  //     message: '\n\n✅  ===> Image processing 2x — completed!\n',
  //     onLast: true
  // }))
})

/**
 * @description Processing Image
 * @version 2
 */
// gulp.task('imageProcessingB', gulp.series('imageProcessing_1x', 'imageProcessing_2x', reload))
gulp.task(
  'imageProcessingB',
  gulp.series('imageProcessing_1x', 'imageProcessing_2x')
)

/**
 * @description Processing User JS
 */
gulp.task('processingUserJs', () => {
  return (
    gulp
      .src(filesSrcJs, { since: gulp.lastRun('processingUserJs') })
      // .pipe( plumber( errorHandler ) )
      .pipe(
        babel({
          presets: [
            [
              '@babel/preset-env',
              // Preset to compile your modern JS to ES5.
              {
                targets: { browsers: config.BROWSERS_LIST }
                // Target browser list to support.
              }
            ]
          ]
        })
      )
      // .pipe( remember( filesSrcJs ) ) // Bring all files back to stream.
      // .pipe( concat( 'user.js' ) ) // Rename
      // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
      .pipe(gulp.dest(dirAppJs))
      // .pipe(
      //   rename( {
      //     basename: 'user',
      //     suffix: '.min'
      //   } )
      // )
      // .pipe( uglify() )
      // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
      .pipe(gulp.dest(dirAppJs))
  )
  // .pipe(notify({ message: '\n\n✅  ===> User JS minify — completed!\n', onLast: true }))
})

/**
 * @description Copy js BootStrap from node_modules/bootstrap/dist/js/* to app/lib
 */
gulp.task('copyBootstrap2AppLib', () => {
  return gulp.src(filesJsBootstrap).pipe(gulp.dest(dirAppLib))
})

/**
 * @description Copy fonts from src/fonts/** to app/fonts/
 */
gulp.task('copySrcFontsToApp', () => {
  return gulp.src(dirSrcFonts + '/**/**/*').pipe(gulp.dest(dirAppFonts))
})

/**
 * @description Copy Index files
 */
gulp.task('copySrcIndex2AppRoot', () => {
  return gulp.src(filesSrcIndex).pipe(gulp.dest(dirApp))
})

/**
 * @description Copy js Jquery from node_modules/jquery/dist/jquery.js to app/lib
 * @param {string} filesJsJQuery node_modules/jquery/dist/jquery.js
 */
gulp.task('copyJquery2AppLib', () => {
  return gulp.src(filesJsJQuery).pipe(gulp.dest(dirAppLib))
})

/**
 * @description Copy Popper from node_modules/popper.js/dist/umd/* в app/lib
 */
gulp.task('copyPopper2AppLib', () => {
  return gulp.src(filesJsPopper).pipe(gulp.dest(dirAppLib))
})

/**
 * @description Copy PHP from src/php/** /* to app/php
 */
gulp.task('copyScrPhp2AppPhp', () => {
  return gulp.src(filesSrcPhp).pipe(gulp.dest(dirAppPhp))
})

/**
 * @description Copy Vendor
 */
gulp.task('copySrcVendor2AppVendor', () => {
  return gulp.src(filesVendor).pipe(gulp.dest(dirAppVendor))
})

/**
 * @description Copy favicon
 */
gulp.task('copySrcFavicon2AppFavicon', () => {
  return gulp.src(fileFavicon).pipe(gulp.dest(dirAppFavicon))
})

/**
 * @description Copy SRC to APP
 */
gulp.task(
  'copyAllSrc2App',
  gulp.series(
    'copyBootstrap2AppLib', // test ok
    'copySrcFontsToApp', // test ok
    'copySrcIndex2AppRoot', // test ok
    'copyJquery2AppLib', // test ok
    'copyPopper2AppLib', // test ok
    'copyScrPhp2AppPhp', // test ok
    'copySrcVendor2AppVendor', // test ok
    'copySrcFavicon2AppFavicon' // test ok
  )
)

/**
 * @description Merge Jquery JS and BootStrap JS
 */
// gulp.task( 'jq&bsjs', () => {
//   return gulp
//     .src( [fileJQ, fileBSjs] ) // Only run on changed files.
//     // .src( [fileJQ, fileBSjs], { since: gulp.lastRun( 'jq&bsjs' ) } ) // Only run on changed files.
//     .pipe( plumber( errorHandler ) )
//     .pipe(
//       babel( {
//         presets: [
//           [
//             '@babel/preset-env', // Preset to compile your modern JS to ES5.
//             {
//               targets: { browsers: m.BROWSERS_LIST } // Target browser list to support.
//             }
//           ]
//         ]
//       } )
//     )
//     // .pipe( remember( fileJQ, fileBSjs, fileSrcJs ) ) // Bring all files back to stream.
//     .pipe( remember( fileJQ, fileBSjs ) ) // Bring all files back to stream.
//     .pipe( concat( 'jq_and_bsjs.js' ) )
//     // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
//     .pipe( gulp.dest( dirAppJs ) )
//     .pipe(
//       rename( {
//         basename: 'jq_and_bsjs',
//         suffix: '.min'
//       } )
//     )
//     .pipe( uglify() )
//     // .pipe( lineec() ) // Consistent Line Endings for non UNIX systems.
//     .pipe( gulp.dest( dirAppJs ) )
//     .pipe( notify({ message: '\n\n✅  ===> Jquery JS and BootStrap JS minify — completed!\n', onLast: true }) );
// } );

/**
 * @description Create app structure
 */
gulp.task('makeAllAppDirs', done => {
  config.DIR_APP_STRUCTURE.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
      console.log('Created:', dir)
    }
  })
  done()
})

/**
 * @description Create structure project
 */
gulp.task('makeAllSrcDirs', done => {
  config.DIR_SRC_STRUCTURE.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
      console.log('Created:', dir)
    }
  })
  done()
})

/**
 * @description Create project structure (z)
 */
gulp.task('makeProjectStuff', done => {
  config.DIR_PROJECT_STUFF.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
      console.log('Created:', dir)
    }
  })
  done()
})

/**
 * @description
 */
gulp.task(
  'makeWholeProjectStructure',
  gulp.series('makeAllAppDirs', 'makeAllSrcDirs', 'makeProjectStuff')
)

/**
 * @description Expand All Project and Make all dir and all copy SRC to APP
 */
gulp.task(
  'expandAllProject',
  gulp.series(
    // 'makeWholeProjectStructure',
    'makeAllAppDirs',
    // 'makeAllSrcDirs',
    // 'makeProjectStuff'
    'copyAllSrc2App'
  )
)

/**
 * @description Create file
 * @link https://gist.github.com/omniphx/e6279a2b21f8c6e2e26a
 */
// gulp.task('new-file', (done) => {
//     gulp.src(dirSrcJs)
//         .pipe(tap(function (file) {
//             let fileName = path.basename(file.path) + '.js'
//             let contents = 'hello!'
//             return newfile(fileName, contents)
//                 .pipe(gulp.dest('dist'))
//         }))
//     done()
// })

/**
 * @description Clean project - Deleting CSS files inside the app folder
 */
gulp.task('cleanDirAppCss', () => {
  return del([dirAppCss + '/*.css', dirAppCss + '/*.*.css', dirAppCss], {
    force: true
  }).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Deleting favicon in app folder
 */
gulp.task('cleanDirAppFavicon', () => {
  return del([dirAppFavicon + '*', dirAppFavicon], { force: true }).then(
    paths => {
      return console.log('Deleted files and folders:\n', paths.join('\n'))
    }
  )
})

/**
 * @description Deleting fonts files inside the app folder
 */
gulp.task('cleanDirAppFonts', () => {
  return del([dirAppFonts + '/*.*', dirAppFonts + '/**/*.*', dirAppFonts], {
    force: true
  }).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Deleting img files inside the app folder
 */
gulp.task('cleanDirAppImg', () => {
  return del(
    [
      dirAppImg + '/*.{jpg,png,svg}',
      dirAppImg + '/**/*.{jpg,png,svg}',
      dirAppImg
    ],
    { force: true }
  ).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Deleting js files inside the app folder
 */
gulp.task('cleanDirAppJs', () => {
  return del([dirAppJs + '/*.js', dirAppJs + '/*.*.js', dirAppJs], {
    force: true
  }).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Deleting libs inside the app folder
 */
gulp.task('cleanDirAppLib', () => {
  return del([dirAppLib + '/*.*', dirAppLib], { force: true }).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Deleting PHP files inside the app folder
 */
gulp.task('cleanDirAppPhp', () => {
  return del([dirAppPhp + '/**/*.*', dirAppPhp], { force: true }).then(
    paths => {
      return console.log('Deleted files and folders:\n', paths.join('\n'))
    }
  )
})

/**
 * @description Deleting vendor in app folder
 */
gulp.task('cleanDirAppVendor', () => {
  return del([dirAppVendor + '/**/*.*', dirAppVendor], { force: true }).then(
    paths => {
      return console.log('Deleted files and folders:\n', paths.join('\n'))
    }
  )
})

/**
 * @description Deleting app folders
 * @version 0
 */
gulp.task('cleanDirApp', () => {
  return del([dirApp + '*', dirApp], { force: true }).then(paths => {
    return console.log('Deleted files and folders:\n', paths.join('\n'))
  })
})

/**
 * @description Clean cache
 */
gulp.task('cleanCache', function (done) {
  return cache.clearAll(done)
})

/**
 * @description Total clean task
 */
gulp.task(
  'cleanDirAppTotal',
  gulp.series(
    'cleanDirAppCss', // test ok
    'cleanDirAppFavicon', // test ok
    'cleanDirAppFonts', // test ok
    'cleanDirAppImg', // test ok
    'cleanDirAppJs', // test ok
    'cleanDirAppLib', // test ok
    'cleanDirAppPhp', // test ok
    'cleanDirAppVendor', // test ok
    'cleanDirApp', // test ok
    'cleanCache' // test ok
  )
)

/**
 * @description Deploy - syncFiles to DocumentRoot web-server
 */
gulp.task('syncFiles', () => {
  return gulp.src(dirApp + '**').pipe(
    rsync({
      destination: '/home/t/technocrat/dev_lp_automation.ru/public_html',
      root: dirApp,
      //
      hostname: config.ipAddressWebServer,
      // username: 'vagrant',
      username: 'technocrat',
      //
      // shell: true,
      // port: true,
      archive: true,
      // dryrun: true,
      incremental: true,
      progress: true,
      // relative: false,
      // emptyDirectories: true,
      // times: true,
      compress: true,
      // recursive: true,
      clean: true,
      // chmod: --chmod=STRING
      // chown: rsync --chown=STRING
      exclude: ['.git', '.git/', '.git/**', '.git/**/*', 'ht.access'],
      include: ['*.htaccess'],
      update: true,
      // silent: true,
      // links: true,
      command: true
    })
  )
})

/**
 * @description Gulp Default task
 */
gulp.task(
  'default',
  gulp.series(
    // 'copyAllSrc2App',
    // 'imageProcessingA',
    'sass2css',
    'processingUserJs',
    'imageProcessingB',
    // 'syncFiles',
    // reload,
    gulp.parallel(
      // httpd_proxy,
      httpdLocal,
      () => {
        // index files
        gulp.watch(filesSrcIndex, gulp.series('copySrcIndex2AppRoot', reload))
        // fonts
        // gulp.watch(filesSrcFonts, gulp.series('copySrcFontsToApp', 'syncFiles', reload))
        gulp.watch(filesSrcFonts, gulp.series('copySrcFontsToApp', reload))
        // img
        // gulp.watch(filesSrcImg, gulp.series('imageProcessingB', 'syncFiles', reload))
        gulp.watch(filesSrcImg, gulp.series('imageProcessingB', reload))
        // js
        // gulp.watch(filesSrcJs, gulp.series('processingUserJs', 'syncFiles', reload))
        gulp.watch(filesSrcJs, gulp.series('processingUserJs', reload))
        // php
        // gulp.watch(filesSrcPhp, gulp.series('copyScrPhp2AppPhp', 'syncFiles', reload))
        gulp.watch(filesSrcPhp, gulp.series('copyScrPhp2AppPhp', reload))
        // sass
        // gulp.watch(filesSrcSass, gulp.series('sass2css', 'syncFiles', reload))
        gulp.watch(filesSrcSass, gulp.series('sass2css', reload))
      }
    )
  )
)
