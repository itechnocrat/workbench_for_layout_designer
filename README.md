# Workbench for layout designer
## Навеяно этим:
[OptimizedHTML 4: Startup HTML template based on Gulp & Bootstrap 4](https://github.com/agragregra/OptimizedHTML-4/)  
[OptimizedHTML 5: Облегчённый стартер для вёрстки сайтов](https://webdesign-master.ru/blog/tools/2019-07-15-optimizedhtml-5.html)  
[WPGulp](https://github.com/ahmadawais/WPGulp)  
### Структура каталогов
```
.
├── app
│   ├── css
│   ├── favicon
│   ├── fonts
│   ├── img
│   ├── js
│   ├── lib
│   ├── php
│   └── vendor
├── src             содержит все необходимое для сборки приложения в каталог `app`
│   ├── css         Содержит файл `header.css` с первыми строчками будущего style.css, которые нельзя обработать sass
│   ├── favicon     .
│   ├── fonts       Содержит шрифты, которые будут скопированы в `./app/fonts`
│   ├── img         Содержит файлы изображений, которые будут скопированы в `./app/img`
│   ├── index       Содержит все, что должно оказаться в корне DocumentRoot web-сервера (в корне app)
│   ├── js          Содержит javascript-файлы пользователя, который будет скопирован в `./app/js/custom.js` и в `./app/js/custom.min.js`
│   ├── lib         Для каких-то библиотек
│   ├── php         Содержит файлы с кодом на PHP, будет скопирована в app
│   ├── sass        файлы в формате sass
│   ├── scss        файлы в формате scss
│   └── vendor      Для каких-то библиотек, например, Мasonry, Lazy loading img & background
└── z               Плейсхолдер для вспомогательных каталогов
    ├── backup      Что нибудь уберечь от метлы
    ├── temp        Временный каталог, для чего нибудь
    ├── test        Для тестов
    └── trash       Корзина

```

#### Gulp tasks
- sass2css

	генерирует css из sass

- css_inclusion

	вызывает task `sass`, берет файлы `./src/css/header.css` и `./app/css/style.css`, и объединяет их в `./app/css/style.css`

- vendorJS

	 копирует js-библиотеки из `./src/vendor` в `./app/js/vendor.js` и `./app/js/vendor.min.js`

- customJS

	 копирует javascript-файл пользователя в `./app/js/custom.js` и в `./app/js/custom.min.js`

- images

	 оптимизирует файлы изображений из `./src/img` и переносит их в `./app/img`

- purification-srcVendor

	 очищает каталоги `./src/vendor/**/` от ненужного

- clean-css

	 удаляет каталог `./app/css`

- clean-js

	 удаляет каталог `./app/js`

- clean-img

	 удаляет каталог `./app/img`

- clean-fonts

	 удаляет каталог `./app/fonts`

- clean-cache

	 очищает кэш gulp

- clean

	 последовательно запускает: purification-srcVendor, clean-css, clean-js, clean-img, clean-fonts, clean-cache

- mkdir

	 создает систему каталогов перед началом работы

- installFonts

	 переносит файлы шрифтов из `./scr/fonts` в `./app/fonts`

- prod

	 адаптирует проект под особые случи, когда простой перенос файлов из ./app не подходит

- translate

	 локализация Wordpress

- rsync

	 копирование готового приложения на удаленный сервер

- default

	 объединяющая все задачи задача

```javascript
gulp.task(
    'default',
    gulp.series(
        // вручную выполнить make_all_dirs
        // вручную перенести из github содержимое каталога /src/sass,
        // наполнить необходимым остальные каталоги
        'copyAllSrc2App',
        // 'image_processing_1',
        'sass2css',
        'processingUserJs',
        'image_processing_2',
        // 'syncFiles',
        // reload,
        gulp.parallel(
            // httpd_proxy,
            httpd_local,
            () => {
                // index files
                gulp.watch(filesSrcIndex, gulp.series('copyIndexFiles', reload))
                // fonts
                // gulp.watch(filesSrcFonts, gulp.series('copyFonts', 'syncFiles', reload))
                gulp.watch(filesSrcFonts, gulp.series('copyFonts', reload))
                // img
                // gulp.watch(filesSrcImg, gulp.series('image_processing_2', 'syncFiles', reload))
                gulp.watch(filesSrcImg, gulp.series('image_processing_2', reload))
                // js
                // gulp.watch(filesSrcJs, gulp.series('processingUserJs', 'syncFiles', reload))
                gulp.watch(filesSrcJs, gulp.series('processingUserJs', reload))
                // php
                // gulp.watch(filesSrcPhp, gulp.series('copyPhp2AppPhp', 'syncFiles', reload))
                gulp.watch(filesSrcPhp, gulp.series('copyPhp2AppPhp', reload))
                // sass
                // gulp.watch(filesSrcSass, gulp.series('sass2css', 'syncFiles', reload))
                gulp.watch(filesSrcSass, gulp.series('sass2css', reload))
            }
        )
    )
)
```

#### Работа

##### Очистить app
```sh
gulp cleanDirAppTotal
```

##### Очистить каталоги по отдельности
```sh
gulp cleanDirAppCss
gulp cleanDirAppFavicon
gulp cleanDirAppFonts
gulp cleanDirAppImg
gulp cleanDirAppJs
gulp cleanDirAppLib
gulp cleanDirAppPhp
gulp cleanDirAppVendor
gulp cleanDirApp
gulp cleanCache
```

##### Создание структуры app
```sh
gulp makeAllAppDirs
```

##### Копирование всякого из src в app
```sh
gulp copyAllSrc2App
```

##### Запуск

```sh
gulp
```

---

Взять самые важные файлы:

gulpfile.js  
gulpfile.config.js  
package.json  

не очень важные

.gitignore  
.eslintignore  
.eslintrc.json  
.jsconfig.json  

    // вручную выполнить makeWholeProjectStructure
    // вручную перенести из github содержимое каталога /src/sass,
    // наполнить необходимым остальные каталоги

Клонировать структуру каталогов

Проверить обновления, при необходимости обновить:

`ncu`

Установить модули node:

`npm i`

Создать структуру каталогов приложения:

```sh
npm run mkAllDirs
```

Скопировать из шаблона в новую структуру проекта:
```sh
src/sass
app/index.html
app/ht.access
./src/css/header.css
./src/js/user.js
./src/img/monkey_1.png
```

**To Do**
Автоматизировать это

Если файла header.css не будет, то в task `default` раскомментировать `styling` и закомментировать `sass_to_css_with_css_inclusion`.

Запустить все:
```sh
gulp
```
**To Do**
При отсутствии картинки в src img происходит ошибка, сделать проверку каталога на пустоту

Установить требуемые фреймворки:
Устарело, не надо - bootstrap и jquery устанавливаются с помощью npm

- bootstrap
- jquery

```sh
bower install bootstrap
bower install jquery
```

Если Bower нет, то установить:

```sh
sudo npm i -g bower
```
