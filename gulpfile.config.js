module.exports = {
  syntaxSass: 'sass',
  bsOptProxy: 'localhost',
  bsOptOpen: true,
  bsOptInjectChanges: true,
  bsOptNotify: false,
  bsOptOnline: false,
  sassOptErrLogToConsole: true,
  sassOptStyleCSS: 'expanded',
  // Available options → 'compact' or 'compressed' or 'nested' or 'expanded'
  sassOptPrecision: 10,
  ipAddressWebServer: 'violet.timeweb.ru',

  DIR_STRUCTURE: [
    'app',
    'app/css',
    'app/fonts',
    'app/favicon',
    'app/img',
    'app/js',
    'app/libs',
    'app/php',
    'app/vendor',
    'src',
    'src/css',
    'src/fonts',
    'app/favicon',
    'src/img',
    'src/js',
    'src/lib',
    'src/php',
    'src/sass',
    'src/scss',
    'src/temp',
    'src/test',
    'src/vendor'
  ],
  DIR_APP_STRUCTURE: ['app', 'app/css', 'app/fonts', 'app/favicon', 'app/img', 'app/js', 'app/lib', 'app/php', 'app/vendor'],
  DIR_SRC_STRUCTURE: [
    'src',
    'src/css',
    'src/fonts',
    'app/favicon',
    'src/img',
    'src/js',
    'src/lib',
    'src/index',
    'src/php',
    'src/sass',
    'src/scss',
    'src/vendor'
  ],
  DIR_PROJECT_STUFF: ['z', 'z/backup', 'z/temp', 'z/test', 'z/trash', 'z/resource'],
  // Browsers you care about for autoprefixing. Browserlist https://github.com/ai/browserslist
  // The following list is set as per WordPress requirements. Though, Feel free to change.
  BROWSERS_LIST: [
    'last 2 version',
    '> 1%',
    'ie >= 11',
    'last 1 Android versions',
    'last 1 ChromeAndroid versions',
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'last 2 Edge versions',
    'last 2 Opera versions'
  ]
}
