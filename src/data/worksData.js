const worksData = [
    {
        name: "Верстка макета Portpro",
        title: 'Верстка',
        img: "portpro.jpg",
        path: 1,
        stack: ['gulp', 'sass'],
        descrRu: 'Адаптивная верстка интернет - магазина Portpro по PSD макету.',
        descrEn: 'Adaptive layout of the Portpro online store using a PSD layout.',
        link: 'https://github.com/disconnect-ed/HTML-PORTPRO'
    },
    {
        name: "Приложение на React.js - Music-fm",
        title: 'Music-fm',
        img: "music-fm.jpg",
        path: 2,
        stack: ['axios', 'bootstrap', 'md5 (хеширование)', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk'],
        descrRu: 'Приложение на React.js, предназначено для поиска треков, альбомов и исполнителей. В приложении реализованы возможности авторизации, добавление треков/альбомов/исполнителей в избранное. Также есть возможность просмотра своего профиля, друзей и других зарегестрированных пользователей. Приложение использует API сервиса last.fm.',
        descrEn: 'A React.js application designed to find tracks, albums and artists. The application implements authorization capabilities, adding tracks / albums / artists to favorites. It is also possible to view your profile, friends and other registered users. The application uses the last.fm service API.',
        link: 'https://github.com/disconnect-ed/music-fm'
    },
    {
        name: "Приложение на React.js - Movie Searcher",
        title: 'Movie Searcher',
        img: "movie-searcher.jpg",
        path: 3,
        stack: ['axios', 'bootstrap', 'react', 'react-redux', 'react-router-dom', 'react-tabs', 'redux', 'redux-thunk', 'redux-form', 'reselect'],
        descrRu: 'Приложение на React.js, предназначено для поиска фильмов и сериалов. Есть возможность авторизации и добавления контента в избранное. Данное приложение использует API киносервиса themoviedb.org.',
        descrEn: 'React.js application for searching movies and TV shows. It is possible to authorize and add content to favorites. This application uses the themoviedb.org movie service API.',
        link: 'https://github.com/disconnect-ed/Movie-Tv-searcher'
    },
    {
        name: "Приложение на React.js - Социальная сеть",
        title: 'Социальная сеть',
        img: "social-network.jpg",
        path: 4,
        stack: ['axios', 'bootstrap', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk', 'redux-form', 'reselect'],
        descrRu: 'Приложение разрабатывалось по известному (в узких кругах) курсу "React JS - путь самурая".',
        descrEn: 'The application was developed according to the well-known (in narrow circles) course "React JS - the way of the samurai".',
        link: 'https://github.com/disconnect-ed/social-network-samurai-js'
    },
    {
        name: "Приложение на React.js - Weather App",
        title: 'Weather App',
        img: "weather-app.jpg",
        path: 5,
        stack: ['axios', 'bootstrap', 'react', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk'],
        descrRu: 'Мое первое самостоятельное приложение на React.js. Данное приложение использует API сервиса погоды openweathermap.org.',
        descrEn: 'My first standalone React.js application. This application uses the openweathermap.org weather service API.',
        link: 'https://github.com/disconnect-ed/Weather-App'
    },
    {
        name: 'Сайт "Стройинвест" на WordPress',
        title: 'Сайт на WP',
        img: "wp.jpg",
        path: 6,
        stack: ['WordPress', 'gulp', 'sass', 'jquery'],
        descrRu: 'Сайт строительной компании на CMS WordPress.',
        descrEn: 'Construction company website on CMS WordPress.',
        link: ''
    },
    {
        name: "Верстка лэндинга Flaby",
        title: 'Верстка',
        img: "flaby.jpg",
        path: 7,
        stack: ['gulp', 'sass'],
        descrRu: 'Адаптивная верстка лендинга Flaby по PSD макету.',
        descrEn: 'Responsive layout of Flabby landing page using PSD layout.',
        link: 'https://github.com/disconnect-ed/HTML-Flaby'
    },
    {
        name: "Приложение на React JS - Todo App",
        title: 'React JS Todo',
        img: "react-js-todo.png",
        path: 8,
        stack: ['axios', 'firebase', 'formik', 'react', 'redux', 'react-router', 'redux-thunk', 'yup', 'sass'],
        descrRu: 'Приложение разработано на React JS (также есть мобильная версия на React Native). В приложении реализованы авторизация и регистрация новых пользователей. Тема меняется в зависимости от времени суток (утро, день, вечер, ночь). Для работы используется Firebase. Реализовано разделение дел на подгруппы и поиск.',
        descrEn: 'The application is developed in React JS (there is also a mobile version in React Native). The application implements authorization and registration of new users. The theme changes depending on the time of day (morning, afternoon, evening, night). For work, Firebase is used. The division of cases into subgroups and search has been implemented.',
        link: 'https://github.com/disconnect-ed/react-js-todo'
    },
    {
        name: "Приложение на React Native - Todo App",
        title: 'React Native Todo',
        img: "react-native-todo.jpg",
        path: 9,
        stack: ['axios', 'firebase', 'formik', 'react', 'react-native', 'react-hooks', 'expo', 'redux', 'react-navigation', 'redux-thunk', 'yup'],
        descrRu: 'Приложение на React Native (также есть версия на React JS). В приложении реализованы авторизация и регистрация новых пользователей. Тема меняется в зависимости от времени суток (утро, день, вечер, ночь). Для работы используется Firebase. Реализовано разделение дел на подгруппы и поиск.',
        descrEn: 'React Native app (there is also a React JS version). The application implements authorization and registration of new users. The theme changes depending on the time of day (morning, afternoon, evening, night). For work, Firebase is used. The division of cases into subgroups and search has been implemented.',
        link: 'https://github.com/disconnect-ed/react-native-todo'
    },
    {
        name: "Приложение на React Native - Calculator",
        title: 'Calculator',
        img: "react-native-calculator.jpg",
        path: 10,
        stack: ['expo', 'expo-sqlite', 'react', 'react-native', 'react-hooks', 'react-native-paper', 'react-navigation'],
        descrRu: 'Приложение разработано на React Native. Реализован простой калькулятор с двумя экранами (вертикальный и горизонтальный). Доступна история всех расчетов (для записи используется SQLite), есть возможность менять тему (предусмотрена темная и светлая)',
        descrEn: 'The application is developed in React Native. A simple calculator with two screens (vertical and horizontal) has been implemented. The history of all calculations is available (SQLite is used for recording), it is possible to change the theme (dark and light are provided)',
        link: 'https://github.com/disconnect-ed/react-native-calculator'
    },
]

export default worksData