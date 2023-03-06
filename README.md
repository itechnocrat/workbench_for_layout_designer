# Workbench for layout designer

## Навеяно этим:

<<<<<<< HEAD
[OptimizedHTML 4: Startup HTML template based on Gulp & Bootstrap 4](https://github.com/agragregra/OptimizedHTML-4/)  

[OptimizedHTML 5: Облегчённый стартер для вёрстки сайтов](https://webdesign-master.ru/blog/tools/2019-07-15-optimizedhtml-5.html)  

[WPGulp](https://github.com/ahmadawais/WPGulp)  
=======
1. [OptimizedHTML 4: Startup HTML template based on Gulp & Bootstrap 4](https://github.com/agragregra/OptimizedHTML-4/)  
2. [OptimizedHTML 5: Облегчённый стартер для вёрстки сайтов](https://webdesign-master.ru/blog/tools/2019-07-15-optimizedhtml-5.html)  
3. [WPGulp](https://github.com/ahmadawais/WPGulp)
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

### Требования

- Nodejs 14.21.3  
- Gulp-cli

### Использование

<<<<<<< HEAD
1 Клонировать репозиторий в какой либо каталог  
=======
1 Клонировать репозиторий  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
gh repo clone itechnocrat/workbench_for_layout_designer
#or
git clone https://github.com/itechnocrat/workbench_for_layout_designer
```

<<<<<<< HEAD
2 Перейти в каталог `workbench_for_layout_designer`

```sh
cd workbench_for_layout_designer
```

Каталог возможно и переименовать по своему усмотрению

3 Установить пакеты Node.js:  
=======
2 Установить пакеты Node.js:  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
#ncu
npm i
```

<<<<<<< HEAD
4 Создать структуру каталогов:  
=======
3 Создать структуру каталогов:  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
gulp makeWholeProjectStructure

```

<<<<<<< HEAD
5 Поместить favicon в: `src/favicon`  
6 Поместить файлы нужных шрифтов в: `src/fonts`  
7 Поместить файлы нужных изображений в: `src/img`  
8 Развернуть ресурсы:  

```sh
gulp copyAllSrc2App
```  

9 Запустить проект:  
=======
4 Поместить favicon в: `src/favicon`  

5 Поместить файлы нужных шрифтов в: `src/fonts`  

6 Поместить файлы нужных изображений в: `src/img`  

7 Развернуть ресурсы:  

```sh
gulp copyAllSrc2App
```

8 Запустить проект:  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
gulp
```

### Разное

<<<<<<< HEAD
Очистить каталог app  
=======
Очистить app  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

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

<<<<<<< HEAD
Создание структуры `app`  
=======
Создание структуры app  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
gulp makeAllAppDirs
```

<<<<<<< HEAD
Копирование всякого из `src` в `app`  
=======
Копирование всякого из src в app  
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966

```sh
gulp copyAllSrc2App
```

Запуск  

```sh
gulp
```

### Структура каталогов

<<<<<<< HEAD
<pre>
=======
```sh
>>>>>>> a4784d9a952245b42d5e0a499de99d5ed381f966
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
└── z               Placeholder для вспомогательных каталогов
    ├── backup      Что нибудь уберечь от метлы
    ├── temp        Временный каталог, для чего нибудь
    ├── test        Для тестов
    └── trash       Корзина
</pre>
