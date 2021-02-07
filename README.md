# Workbench for layout designer
## Навеяно этим:
[OptimizedHTML 4: Startup HTML template based on Gulp & Bootstrap 4](https://github.com/agragregra/OptimizedHTML-4/)  
[OptimizedHTML 5: Облегчённый стартер для вёрстки сайтов](https://webdesign-master.ru/blog/tools/2019-07-15-optimizedhtml-5.html)  
[WPGulp](https://github.com/ahmadawais/WPGulp)  

### Использование
1. Клонировать репозиторий  
```sh
gh repo clone itechnocrat/workbench_for_layout_designer
```
2. Создать структуру каталогов:  
```sh
gulp makeWholeProjectStructure
```
3. Поместить favicon в: `src/favicon`  
4. Поместить файлы нужных шрифтов в: `src/fonts`  
5. Поместить файлы нужных изображений в: `src/img`  
6. Установить пакеты Node.js:  
```sh
#ncu
npm i
```
7. Развернуть ресурсы:  
```sh
gulp copyAllSrc2App
``` 
8. Запустить проект:  
```sh
gulp
```
### Разное
Очистить app  
```sh
gulp cleanDirAppTotal
```
Очистить каталоги по отдельности  
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
Создание структуры app  
```sh
gulp makeAllAppDirs
```
Копирование всякого из src в app  
```sh
gulp copyAllSrc2App
```
Запуск  

```sh
gulp
```
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
