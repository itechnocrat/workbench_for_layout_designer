# Workbench for layout designer

## Навеяно этим:

[OptimizedHTML 4: Стартовый шаблон для верстки сайтов с Bootstrap 4 на борту](https://webdesign-master.ru/blog/tools/optimizedhtml-4.html)  

[OptimizedHTML 5 - Облегченный стартер для верстки сайтов](https://webdesign-master.ru/blog/tools/optimizedhtml-5.html)  

[WPGulp](https://github.com/ahmadawais/WPGulp)  

### Требования

- Nodejs 14.21.3  
- Gulp-cli

```sh
gulp -v
```

### Использование

1 Клонировать репозиторий в какой либо каталог  

```sh
gh repo clone itechnocrat/workbench_for_layout_designer
```

или

```sh
git clone https://github.com/itechnocrat/workbench_for_layout_designer
```

2 Перейти в каталог `workbench_for_layout_designer`

```sh
cd workbench_for_layout_designer
```

Каталог возможно и переименовать по своему усмотрению

3 Установить пакеты Node.js:  

```sh
npm i
```

4 Создать структуру каталогов:  

```sh
gulp makeWholeProjectStructure
```

5 Поместить favicon в: `src/favicon`  
6 Поместить файлы нужных шрифтов в: `src/fonts`  
7 Поместить файлы нужных изображений в: `src/img`  
8 Развернуть ресурсы:  

```sh
gulp copyAllSrc2App
```  

9 Запустить проект:  

```sh
gulp
```

### Разное

Очистить каталог app  

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

Создание структуры `app`  

```sh
gulp makeAllAppDirs
```

Копирование всякого из `src` в `app`  

```sh
gulp copyAllSrc2App
```

Запуск  

```sh
gulp
```

### Структура каталогов

<pre>
.
├── app             Собственно итоговое приложение
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
│   ├── js          Содержит javascript-файлы пользователя; будет скопирован в `./app/js/custom.js` и в `./app/js/custom.min.js`
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
</pre>
