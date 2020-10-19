const skillsData = [
    {
        title: "React JS",
        img: "react.svg",
        level: 40,
        descrRu: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость.",
        descrEn: 'An open source JavaScript library for developing user interfaces. React is developed and maintained by Facebook, Instagram and the community of individual developers and corporations. React can be used to develop single page and mobile apps. Its goal is to provide high speed, simplicity and scalability.',
        path: 1
    },
    {
        title: "React Native",
        img: "reactNative.svg",
        level: 30,
        descrRu: "React Native – это фреймворк для создания кроссплатформенных приложений на языке JavaScript. Он позволяет писать приложения для IOS, Android, Windows Phone и даже VR (на React VR можно создавать приложения для шлемов и очков виртуальной реальности).",
        descrEn: 'React Native is a framework for building cross-platform JavaScript applications. It allows you to write apps for IOS, Android, Windows Phone and even VR (you can create apps for helmets and virtual reality glasses on React VR).',
        path: 2
    },
    {
        title: "Redux",
        img: "redux.svg",
        level: 70,
        descrRu: "Redux — библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения. Чаще всего используется в связке с React или Angular для разработки клиентской части. Содержит ряд инструментов, позволяющих значительно упростить передачу данных хранилища через контекст.",
        descrEn: 'Redux is an open source JavaScript library for managing application state. Most often used in conjunction with React or Angular for client-side development. Contains a number of tools to greatly simplify the transfer of warehouse data through context.',
        path: 3
    },
    {
        title: "JavaScript",
        img: "js.svg",
        level: 40,
        descrRu: "Мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией стандарта ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
        descrEn: 'Multiparadigm programming language. Supports object oriented, imperative, and functional styles. It is an implementation of the ECMAScript standard. JavaScript is commonly used as an embedded language for programmatically accessing application objects. It is most widely used in browsers as a scripting language to add interactivity to web pages.',
        path: 4
    },
    {
        title: "TypeScript",
        img: "typescript.svg",
        level: 25,
        descrRu: "TypeScript — это расширенная версия JavaScript, главной целью которого является упрощение разработки крупных JS-приложений. Этот язык добавляет много новых принципов — классы, дженерики, интерфейсы, статические типы, что значительно упрощает разработку.",
        descrEn: 'TypeScript is an extended version of JavaScript with the main purpose of making it easier to develop large JS applications. This language adds many new principles - classes, generics, interfaces, static types, which greatly simplifies development.',
        path: 5
    },
    {
        title: "HTML5",
        img: "html.svg",
        level: 70,
        descrRu: "Стандартизированный язык разметки документов во Всемирной паутине. Большинство веб-страниц содержат описание разметки на языке HTML. Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный текст отображается на экране монитора компьютера или мобильного устройства.",
        descrEn: 'A standardized markup language for documents on the World Wide Web. Most web pages contain HTML markup descriptions. HTML is interpreted by browsers; the formatted text obtained as a result of interpretation is displayed on the screen of a computer monitor or mobile device.',
        path: 6
    },
    {
        title: "CSS3",
        img: "css.svg",
        level: 50,
        descrRu: "Формальный язык описания внешнего вида документа, написанного с использованием языка разметки. Преимущественно используется как средство описания, оформления внешнего вида веб-страниц, написанных с помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам, например, к SVG или XUL.",
        descrEn: 'A formal language for describing the appearance of a document written using a markup language. It is primarily used as a means of describing, decorating the appearance of web pages written using HTML and XHTML markup languages, but can also be applied to any XML documents, such as SVG or XUL.',
        path: 7
    },
    {
        title: "Sass",
        img: "sass.svg",
        level: 50,
        descrRu: "Метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей. Язык Sass имеет два синтаксиса: 1) sass — отличается отсутствием фигурных скобок, в нём вложенные элементы реализованы с помощью отступов; 2) SCSS (Sassy CSS) — использует фигурные скобки, как и сам CSS.",
        descrEn: 'A CSS-based metalanguage designed to increase the level of abstraction of CSS code and simplify cascading style sheet files. The Sass language has two syntaxes: 1) sass - it is distinguished by the absence of curly braces, in it nested elements are implemented using indentation; 2) SCSS (Sassy CSS) - uses curly braces just like CSS itself.',
        path: 8
    },
    {
        title: "Firebase",
        img: "firebase.svg",
        level: 15,
        descrRu: "Основной сервис — облачная СУБД класса NoSQL, позволяющая разработчикам приложений хранить и синхронизировать данные между несколькими клиентами. Поддержаны особенности интеграции с приложениями под операционные системы Android и iOS, реализовано API для приложений на JavaScript, Java, Objective-C и Node.js, также возможно работать напрямую с базой данных в стиле REST из ряда JavaScript-фреймворков, включая AngularJS, React, Vue.js, Ember.js и Backbone.js.",
        descrEn: 'The main service is a cloud-based NoSQL DBMS that allows application developers to store and synchronize data between multiple clients. Features of integration with applications for Android and iOS operating systems are supported, API for applications in JavaScript, Java, Objective-C and Node.js is implemented, it is also possible to work directly with a REST-style database from a number of JavaScript frameworks, including AngularJS, React, Vue.js, Ember.js and Backbone.js.',
        path: 9
    },
    {
        title: "Bootstrap 4",
        img: "bootstrap.svg",
        level: 55,
        descrRu: "Свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса, включая JavaScript-расширения.",
        descrEn: 'Free set of tools for creating websites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation boxes, and other web interface components, including JavaScript extensions.',
        path: 10
    },
    {
        title: "Wordpress",
        img: "wp.svg",
        level: 10,
        descrRu: "Система управления содержимым сайта с открытым исходным кодом; написана на PHP; сервер базы данных - MySQL. Сфера применения - от блогов до достаточно сложных новостных ресурсов. Встроенная система «тем» и «плагинов» вместе с удачной архитектурой позволяет конструировать проекты широкой функциональной сложности.",
        descrEn: 'Open source content management system; written in PHP; database server - MySQL. Scope of application - from blogs to fairly complex news resources. The built-in system of "themes" and "plug-ins" together with a good architecture allows to design projects of wide functional complexity.',
        path: 11
    },
    {
        title: "PHP",
        img: "php.svg",
        level: 10,
        descrRu: "Скриптовый язык общего назначения, интенсивно применяемый для разработки веб-приложений. В настоящее время поддерживается подавляющим большинством хостинг-провайдеров и является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.",
        descrEn: 'A general-purpose scripting language heavily used for developing web applications. Currently supported by the vast majority of hosting providers and is one of the leaders among the languages used to create dynamic websites.',
        path: 12
    }
]

export default skillsData