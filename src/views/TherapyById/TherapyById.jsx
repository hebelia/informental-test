<!DOCTYPE html>
<html lang="es" class="h-full">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">

    <title>Informental</title>

    <link rel='shortcut icon' href="https://www.web.informental.com.ar/favicon.ico" type='image/x-icon'>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,500,600">

    <link href="/css/app.css?id=d9cd415d7cf524f6176c" rel="stylesheet">
    <script src="https://www.web.informental.com.ar/assets/js/scroll.js"></script>
    <script src="/js/app.js?id=bed82e13994127a43fff" defer></script>



    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.3.1/main.min.css' rel='stylesheet' />

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/wordcloud.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://code.highcharts.com/modules/data.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>

    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.3.1/main.min.js'></script>


    <style>
        input:checked+svg {
            display: block;
        }
        [x-cloak] {
            display: none !important;
        }
    </style>

    <!-- Livewire Styles -->
<style >
    [wire\:loading], [wire\:loading\.delay], [wire\:loading\.inline-block], [wire\:loading\.inline], [wire\:loading\.block], [wire\:loading\.flex], [wire\:loading\.table], [wire\:loading\.grid] {
        display: none;
    }

    [wire\:loading\.delay\.shortest], [wire\:loading\.delay\.shorter], [wire\:loading\.delay\.short], [wire\:loading\.delay\.long], [wire\:loading\.delay\.longer], [wire\:loading\.delay\.longest] {
        display:none;
    }

    [wire\:offline] {
        display: none;
    }

    [wire\:dirty]:not(textarea):not(input):not(select) {
        display: none;
    }

    input:-webkit-autofill, select:-webkit-autofill, textarea:-webkit-autofill {
        animation-duration: 50000s;
        animation-name: livewireautofill;
    }

    @keyframes livewireautofill { from {} }
</style>
    <!-- Web Application Manifest -->
<link rel="manifest" href="https://www.web.informental.com.ar/manifest.json">
<!-- Chrome for Android theme color -->
<meta name="theme-color" content="#000000">

<!-- Add to homescreen for Chrome on Android -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="application-name" content="VinculaT">
<link rel="icon" sizes="512x512" href="/images/icons/icon-512x512.png">

<!-- Add to homescreen for Safari on iOS -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="VinculaT">
<link rel="apple-touch-icon" href="/images/icons/icon-512x512.png">


<link href="/images/icons/splash-640x1136.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-750x1334.png" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1242x2208.png" media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1125x2436.png" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-828x1792.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1242x2688.png" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1536x2048.png" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1668x2224.png" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-1668x2388.png" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />
<link href="/images/icons/splash-2048x2732.png" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image" />

<!-- Tile for Win8 -->
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/images/icons/icon-512x512.png">

<script type="text/javascript">
    // Initialize the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/serviceworker.js', {
            scope: '.'
        }).then(function (registration) {
            // Registration was successful
            console.log('Laravel PWA: ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('Laravel PWA: ServiceWorker registration failed: ', err);
        });
    }
</script></head>

<body class="">

    <div id="app">
        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
            <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
                class="fixed w-full h-full z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

            
            <div class="block lg:hidden">
                <div @toggle-nav.window="sidebarOpen = !sidebarOpen" x-cloak x-show="sidebarOpen"
    x-transition:enter="transition ease-out duration-100" x-transition:enter-start="-translate-x-full ease-in"
    x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75"
    x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="-translate-x-full ease-in"
    class="fixed z-40 inset-y-0 left-0 w-56 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 h-screen shadow-lg">
    <div class="flex items-center justify-center px-6 mt-8 text-green-300">
        <img src="https://www.web.informental.com.ar/img/logo-informental.jpg" alt="" class="w-full h-auto">
    </div>

    <nav class="mt-8">
        <a class="flex items-center mt-4 py-2 px-6 focus:bg-hover text-text-base"
            href="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-text-300" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="mx-3">Inicio</span>
        </a>

                <a class="flex items-center mt-4 py-2 px-6  focus:bg-hover text-text-base"
            href="https://www.web.informental.com.ar/patients">
            <svg xmlns="http://www.w3.org/2000/svg" class="svg-inline--fa fa-stethoscope fa-w-16 h-6 w-6 text-text-300"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="mx-3">Pacientes</span>
        </a>
        
                <a class="flex items-center mt-4 py-2 px-6 focus:bg-hover bg-hover border-r-4 border-primary-200"
            href="https://www.web.informental.com.ar/therapy">
            <svg class="h-6 w-6 text-text-300" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13M8.2 14.5L9.26 15.55L5.27 19.5L2.74 16.95L3.81 15.9L5.28 17.39M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3M4 5H8V9H4M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
            </svg>

            <span class="mx-3">Trackings</span>
        </a>
        
                <a class="flex items-center mt-4 py-2 px-6 focus:bg-hover text-text-base"
            href="https://www.web.informental.com.ar/professionals">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-text-300" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>

            <span class="mx-3">Profesionales</span>
        </a>
        
                <a class="flex items-center mt-4 py-2 px-6 focus:bg-hover text-text-base"
            href="https://www.web.informental.com.ar/institutions">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-text-300" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span class="mx-3">Instituciones</span>
        </a>
        
                        <a class="flex items-center mt-4 py-2 px-6 text-text-base focus:bg-hover text-text-base"
            href="https://www.web.informental.com.ar/therms">
            <svg class="svg-inline--fa fa-user-md fa-w-14 h-6 w-6 mx-auto fill-current text-text-300" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>n</title><path class="cls-1" d="M123.36472,61.42554,105.03349,24.84444q1.2894-.06886,2.57463-.13979a3.57249,3.57249,0,0,0,0-7.13345c-6.69738-.38391-13.39477-.603-20.09216-.76363q-11.72981-.27228-23.45964-.25871h-.11265q-11.72983-.00938-23.45964.25871c-6.6974.16066-13.39478.37973-20.09216.76363a3.57259,3.57259,0,0,0,0,7.13345q1.28627.072,2.57463.13979L4.63528,61.42554h-1.836v3.91411A14.50191,14.50191,0,0,0,14.66885,79.60028c.03755.00834.073.01461.10848.02086,4.30218.78032,17.87848.78032,22.18066,0,.03548-.00625.073-.01252.1085-.02086A14.50191,14.50191,0,0,0,48.9361,65.33965V61.42554H47.1L28.90444,25.10942c3.85987.1523,7.71973.265,11.5796.35886q9.054.20968,18.11216.2462L53.44275,95.61142a14.31529,14.31529,0,0,0-13.94767,14.31072v1.52933H88.50492v-1.52933A14.31529,14.31529,0,0,0,74.55725,95.61142L69.4038,25.71447q9.05712-.04069,18.11216-.2462c3.85987-.09389,7.71973-.20655,11.5796-.35886L80.9,61.42554H79.0639v3.91411A14.50191,14.50191,0,0,0,90.93351,79.60028c.03547.00834.073.01461.1085.02086,4.30218.78032,17.87848.78032,22.18066,0,.03547-.00625.07093-.01252.10848-.02086a14.50191,14.50191,0,0,0,11.86961-14.26063V61.42554Zm-81.81244,0H10.18513L25.86872,30.12515Zm44.89543,0,15.68357-31.30038,15.68358,31.30038Z"/></svg>
            <span class="mx-3 text-sm">Términos y Condiciones</span>
        </a>

        <a class="flex items-center mt-4 py-2 px-6 text-text-base focus:bg-hover text-text-base"
            href="https://www.web.informental.com.ar/aboutus">
            <svg
                class="svg-inline--fa fa-user-md fa-w-14 h-6 w-6 text-text-300"
                xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
            <span class="mx-3">Acerca de...</span>
        </a>
        

    </nav>
</div>
            </div>

            
            <div class="hidden lg:block">
                <div x-data="sideBarDesktop()" x-show="sideBarDeskIsOpen" x-init="listenFullScreen"
    class="fixed z-30 inset-y-0 left-0 md:w-28 pt-1 transition duration-300 transform bg-white overflow-y-auto scrollbar-none lg:translate-x-0 lg:static lg:inset-0 h-screen shadow-sm">
    <div class="flex items-center justify-center p-2">
        <div class="flex items-center">
            <img src="https://www.web.informental.com.ar/img/logo-informental.jpg" alt="" class="w-auto h-auto">
        </div>
    </div>

    <nav class="mt-6">
        <div
            class="mb-2 py-3 text-center hover:bg-hover text-text-300 ">
            <a href="/">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mx-auto text-text-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p class="text-sm text-text-base mt-1">
                        Inicio</p>
                </span>
            </a>
        </div>

                <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out ">
            <a href="https://www.web.informental.com.ar/patients">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mx-auto text-text-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p class="text-sm text-text-base"
                        fill="none" viewBox="0 0 24 24">Pacientes</p>
                </span>
            </a>
        </div>
        
                <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out bg-hover border-r-4 border-primary-200">
            <a href="https://www.web.informental.com.ar/therapy">
                <span>
                    <svg class="h-6 w-6 mx-auto text-primary-300"
                        viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13M8.2 14.5L9.26 15.55L5.27 19.5L2.74 16.95L3.81 15.9L5.28 17.39M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3M4 5H8V9H4M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" />
                    </svg>
                    <p class="text-sm text-primary-300"
                        fill="none" viewBox="0 0 24 24">Trackings</p>
                </span>
            </a>
        </div>
        
                <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out ">
            <a href="https://www.web.informental.com.ar/professionals">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mx-auto text-text-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    <p class="text-sm text-text-base"
                        fill="none" viewBox="0 0 24 24">Profesionales</p>
                </span>
            </a>
        </div>
        
                <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out ">
            <a href="https://www.web.informental.com.ar/institutions">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mx-auto text-text-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p class="text-sm text-text-base"
                        fill="none" viewBox="0 0 24 24">Instituciones</p>
                </span>
            </a>
        </div>
        
                        <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out ">
            <a href="https://www.web.informental.com.ar/therms">

                <span>
                    <svg class="h-6 w-6 mx-auto fill-current text-text-300" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><title>n</title><path class="cls-1" d="M123.36472,61.42554,105.03349,24.84444q1.2894-.06886,2.57463-.13979a3.57249,3.57249,0,0,0,0-7.13345c-6.69738-.38391-13.39477-.603-20.09216-.76363q-11.72981-.27228-23.45964-.25871h-.11265q-11.72983-.00938-23.45964.25871c-6.6974.16066-13.39478.37973-20.09216.76363a3.57259,3.57259,0,0,0,0,7.13345q1.28627.072,2.57463.13979L4.63528,61.42554h-1.836v3.91411A14.50191,14.50191,0,0,0,14.66885,79.60028c.03755.00834.073.01461.10848.02086,4.30218.78032,17.87848.78032,22.18066,0,.03548-.00625.073-.01252.1085-.02086A14.50191,14.50191,0,0,0,48.9361,65.33965V61.42554H47.1L28.90444,25.10942c3.85987.1523,7.71973.265,11.5796.35886q9.054.20968,18.11216.2462L53.44275,95.61142a14.31529,14.31529,0,0,0-13.94767,14.31072v1.52933H88.50492v-1.52933A14.31529,14.31529,0,0,0,74.55725,95.61142L69.4038,25.71447q9.05712-.04069,18.11216-.2462c3.85987-.09389,7.71973-.20655,11.5796-.35886L80.9,61.42554H79.0639v3.91411A14.50191,14.50191,0,0,0,90.93351,79.60028c.03547.00834.073.01461.1085.02086,4.30218.78032,17.87848.78032,22.18066,0,.03547-.00625.07093-.01252.10848-.02086a14.50191,14.50191,0,0,0,11.86961-14.26063V61.42554Zm-81.81244,0H10.18513L25.86872,30.12515Zm44.89543,0,15.68357-31.30038,15.68358,31.30038Z"/></svg>
                    <p class="text-sm text-text-base"
                        fill="none" viewBox="0 0 24 24">Términos y Condiciones</p>
                </span>
            </a>
        </div>
        <div
            class="mb-2 w-full text-center hover:bg-hover py-3 transition duration-400 ease-in-out ">
            <a href="https://www.web.informental.com.ar/aboutus">
                <span>
                    
                    <svg
                        class="h-6 w-6 mx-auto text-text-300"
                        xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>
                    <p class="text-sm text-text-base"
                        fill="none" viewBox="0 0 24 24">Acerca de...</p>
                </span>
            </a>
        </div>
        

    </nav>
</div>
<script>
    function sideBarDesktop(){
        return {
            sideBarDeskIsOpen:true,
            listenFullScreen(){
                document.addEventListener('fullscreenchange', (event) => {
                    if (document.fullscreenElement) {
                        this.sideBarDeskIsOpen = false;
                    } else {
                        this.sideBarDeskIsOpen = true;
                    }
                });
            }
        }
    }
</script>
            </div>

            <div class="flex-1 flex flex-col overflow-hidden">
                
                <div>
                    <header x-data="headerData()" x-show="headerIsOpen" x-init="listenHeader"
  class="flex justify-between items-center py-3 px-6 bg-white shadow-sm z-30">

  <div class="flex items-center">
    <button @click="$dispatch('toggle-nav')" class="text-gray-500 focus:outline-none lg:hidden">
      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </button>

    
    <div class="flex items-center ml-5 md:ml-5 lg:ml-0">
      <svg class="w-5 h-5 text-text-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      
      <p class="text-text-500 text-lg m-1 font-medium"> ¡Hola Anacleta Johnson! </p>
    </div>
  </div>



  <div class="relative flex items-center space-x-3">

    

    <!-- avatar button -->
    <div class="relative" x-data="{ isOpen: false }">
      <button @click="isOpen = !isOpen" class="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                <svg class="object-cover w-8 h-8 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
      </button>
      <!-- green dot -->
      <div class="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
      <div class="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>

      <!-- Dropdown card -->
      <div @click.away="isOpen = false" x-show.transition.opacity="isOpen"
        class="absolute mt-3 transform -translate-x-48 bg-white rounded-md shadow-lg min-w-max w-56 z-30"
        style="display: none;">
        <div class="flex flex-col p-4 space-y-1 font-medium border-b">
          <span class="text-gray-800">Anacleta Johnson</span>
          <span class="text-sm text-gray-400">zeushera123456@gmail.com</span>
        </div>
        <ul class="flex flex-col p-2 my-2 space-y-1">
          <li>
            <a href="https://www.web.informental.com.ar/users/perfil/edit"
              class="block px-2 py-1 transition rounded-md hover:bg-gray-100">Mi
              Perfil</a>
          </li>
        </ul>
        <div class="flex items-center justify-center p-4 text-blue-700 underline border-t">
          <a class="block px-4 py-2 mt-2 text-sm bg-transparent rounded-md dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="https://www.web.informental.com.ar/logout" onclick="event.preventDefault();
              document.getElementById('logout-form').submit();">Salir</a>
          <form id="logout-form" action="https://www.web.informental.com.ar/logout" method="POST">
            <input type="hidden" name="_token" value="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">          </form>
        </div>
      </div>
    </div>
  </div>
</header>
<script>
  function headerData(){
        return {
            headerIsOpen:true,
            listenHeader(){
                document.addEventListener('fullscreenchange', (event) => {
                    if (document.fullscreenElement) {
                        this.headerIsOpen = false;
                    } else {
                        this.headerIsOpen = true;
                    }
                });
            }
        }
    }
</script>                </div>

                
                <main
                    class="flex-1 overflow-x-hidden bg-background overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
                    @click="sidebarOpen = false">
                    <div class="mx-auto px-4 md:px-4 py-3 min-h-full">

                        <div x-data="show()" x-init="listenFullScreen">
    <style>
        [x-cloak] {
            display: none !important;
        }

        .custom-size-text {
            font-size: 0.75rem;
            line-height: 1rem;
        }
        .label {
            z-index: 1!important;
        }

        .highcharts-tooltip span {
            background-color:white;
            border:1px solid whitesmoke;
            opacity:1;
            z-index:9999!important;
        }

        .tooltip {
            padding:5px;
        }
    </style>
    
    <div class="card py-1 custom-size-text" x-show="showPatient" x-cloak>
        <div class="w-auto flex items-center justify-between">
            <div class="w-auto flex items-center justify-start">
                <a href="https://www.web.informental.com.ar/patients/3"
                    class="rounded-full text-gray-600 p-1 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 mr-5">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </a>
                <p @click="openPatient = !openPatient"
                    class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">
                    Datos Filiatorios</p>
            </div>
            <div class="w-auto flex items-center justify-end">
                <svg @click="openPatient = !openPatient" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
                    viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                    xml:space="preserve" class="w-5 h-5 cursor-pointer transform mr-2"
                    :class="openPatient?'-rotate-180 duration-500':'rotate-0 duration-500'">
                    <g>
                        <path
                            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
                    </g>
                </svg>
            </div>
        </div>
        <div x-show="openPatient" x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="transform opacity-0 scale-95"
            x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75"
            x-transition:leave-start="transform opacity-100 scale-100"
            x-transition:leave-end="transform opacity-0 scale-95"
            class="grid grid-cols-1 md:grid-cols-4 py-3 md:divide-x divide-gray-200">
            <div class="w-auto flex-col items-center justify-center">
                <p class="px-1 text-text-500 font-medium text-center mb-2">Paciente</p>
                                <img class="object-cover w-12 h-12 md:w-36 md:h-36 mx-auto rounded-full shadow-xl mb-2"
                    src="https://pwa.informental.com.ar/storage/users/avatar/10/TxZgQbs5NpdeFU0c9CxvJeDvCqqYCoXifZECji65.jpg"
                     onerror="this.onerror=null;this.src='https://www.web.informental.com.ar/img/default.png'" />
                                <p class="px-1 text-primary-300 font-medium text-sm md:font-bold text-center md:text-lg">
                    Kovacs, Alejandro </p>
            </div>
            <div class="w-auto flex-col items-center justify-center divide-y divide-gray-200">
                <div class="w-auto flex items-center justify-between py-2 pl-1">
                    <div class="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-text-400 mr-2" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                                                <p class="px-1 text-text-500 font-medium">Profesional:</p>
                    </div>
                    <div>
                        <p class="px-1 text-text-500 font-medium pr-2">Johnson, Anacleta </p>
                    </div>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Delegado por:</p>
                    <p class="px-1 text-text-500 font-medium pr-2"> - </p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Tracking:</p>
                    <p class="px-1 text-text-500 font-medium pr-2">111141</p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Estado:</p>
                    <p class="px-1 text-text-500 font-medium pr-2">Activo</p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Inicio:</p>
                    <p class="px-1 text-text-500 font-medium pr-2">21/09/2023</p>
                </div>
            </div>
            <div class="w-auto flex-col items-center justify-center divide-y divide-gray-200">
                <div class="w-auto flex items-center justify-between py-2">
                    <div class="flex items-center h-8 md:h-14">
                        <p class="px-1 text-text-500 font-medium">Duración:</p>
                    </div>
                    <p class="px-1 text-text-500 font-medium pr-2">hace 1 día</p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Fin:</p>
                    <p class="px-1 text-text-500 font-medium pr-2">--/--/----</p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Costo Mensual:</p>
                    <p class="px-1 text-text-500 font-medium pr-2"> - </p>
                </div>
                <div class="w-auto flex items-center justify-between py-2">
                    <p class="px-1 text-text-500 font-medium">Tipo Terapia:</p>
                    <p class="px-1 text-text-500 font-medium pr-2"> - </p>
                </div>
            </div>
            <div class="flex flex-col justify-center w-full md:w-3/4 md:pl-10">
                <button class="btn btn-primary w-full mb-2">Agregar Profesional</button>
                                <form action="https://www.web.informental.com.ar/therapy/endtherapy" method="POST" class="w-full">
                    <input type="hidden" name="_token" value="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">                    <input type="hidden" name="therapy_id" value="31">
                    <button class="btn btn-primary w-full">Finalizar
                        Terapia</button>
                </form>
                            </div>
        </div>
    </div>

    
    <div class="card py-1 custom-size-text" x-show="showCalendar">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            
            <p @click="filtDataTracking = !filtDataTracking"
                class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">
                Datos de Tracking</p>
            
        </div>

        <svg @click="filtDataTracking = !filtDataTracking" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"
            class="w-5 h-5 cursor-pointer transform mr-2"
            :class="filtDataTracking?'rotate-180 duration-500':'rotate-0 duration-500'">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
            </g>
        </svg>
    </div>
    <div x-cloak x-show="filtDataTracking" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">

        <div class="w-auto flex-col items-center justify-center divide-y divide-gray-200">
            <div class="w-auto flex items-center justify-between py-2">
                <p class="px-1 text-text-500 font-medium">Motivo: </p>
                <p class="px-1 text-text-500 font-medium pr-2"> Depresion </p>
            </div>
            <div class="w-auto flex items-center justify-between py-2">
                <p class="px-1 text-text-500 font-medium">Pre-diagnóstico:</p>
                <p class="px-1 text-text-500 font-medium pr-2">Depresion</p>
            </div>
            <div class="w-auto flex items-center justify-between py-2">
                <p class="px-1 text-text-500 font-medium">Diagnóstico:</p>
                <p class="px-1 text-text-500 font-medium pr-2">Depresion</p>
            </div>
            <div class="w-auto flex items-center justify-between py-2">
                <p class="px-1 text-text-500 font-medium">Tipo de codificación:</p>
                <p class="px-1 text-text-500 font-medium pr-2">CIE10</p>
            </div>
            <div class="w-auto flex items-center justify-between py-2">
                <p class="px-1 text-text-500 font-medium">Código</p>
                <p class="px-1 text-text-500 font-medium pr-2">F06.4 - Trastorno de ansiedad orgánico.</p>
            </div>
        </div>
    </div>
</div>
    
    <div class="card py-1 custom-size-text" x-show="showCalendar">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            
            <p @click="filtCalendar = !filtCalendar" class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">Calendario</p>
            
        </div>

        <svg @click="filtCalendar = !filtCalendar" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"
            class="w-5 h-5 cursor-pointer transform mr-2"
            :class="filtCalendar?'rotate-180 duration-500':'rotate-0 duration-500'">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
            </g>
        </svg>
    </div>
    <div x-cloak x-show="filtCalendar" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">


        <div wire:id="2o4IiUGgPV16d3IXUTDB" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;2o4IiUGgPV16d3IXUTDB&quot;,&quot;name&quot;:&quot;therapies.calendar&quot;,&quot;locale&quot;:&quot;es&quot;,&quot;path&quot;:&quot;therapy\/31&quot;,&quot;method&quot;:&quot;GET&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;7567edb6&quot;,&quot;data&quot;:{&quot;therapy&quot;:[],&quot;events&quot;:[]},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;therapy&quot;:{&quot;class&quot;:&quot;App\\Models\\Therapy&quot;,&quot;id&quot;:31,&quot;relations&quot;:[&quot;patient&quot;,&quot;patient.user&quot;,&quot;professional&quot;,&quot;professional.user&quot;,&quot;sessions&quot;,&quot;questions&quot;,&quot;questions.level&quot;,&quot;answers&quot;],&quot;connection&quot;:&quot;mysql&quot;}},&quot;collections&quot;:[&quot;events&quot;]},&quot;checksum&quot;:&quot;fcc84b81bdc1fa4b15eab16930b76019c6f01ed5c82200123fbfae93ec93981f&quot;}}" id='calendar'>
</div>


<!-- Livewire Component wire-end:2o4IiUGgPV16d3IXUTDB -->
    </div>
</div>

    
    <div class="card py-1 custom-size-text" x-show="showSessions">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            
            <p @click="filtSessions = !filtSessions"
                class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">
                Historia Clínica y Anotaciones</p>
            
        </div>

        <svg @click="filtSessions = !filtSessions" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"
            class="w-5 h-5 cursor-pointer transform mr-2"
            :class="filtSessions?'rotate-180 duration-500':'rotate-0 duration-500'">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
            </g>
        </svg>
    </div>
    <div x-cloak x-show="filtSessions" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">

        <div class="flex w-full">
            <form action="https://www.web.informental.com.ar/session" method="POST" enctype="multipart/form-data" class="w-full">
                <input type="hidden" name="_token" value="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">                <section class="mb-1">
                    <div class="container px-3">
                        <input type="hidden" name="therapy_id" value="31">

                        <div class="grid grid-cols-1 md:grid-cols-6 gap-4 mt-4">
                            <div class="">
                                <label for="" class="text-base text-text-300">Fecha</label>
                                <input wire:model="date" class="input-base" id="date" name="date" type="date"
                                    value="2023-09-22">
                                                            </div>

                            <div class="md:col-span-3">
                                <label for="" class="text-base text-text-300">Descripción</label>
                                <textarea wire:model="description" class="input-base" name="description"
                                    id="description" placeholder="Descripción" cols="10" rows="3"></textarea>

                                                            </div>
                            <div>
                                <label for="" class="text-base text-text-300">Tipo</label>
                                <div class="mt-2 ml-4">
                                    <label class="radio">Sesión
                                        <input type="radio" value="Sesión" checked="checked" name="anotation_type">
                                        <span class="check"></span>
                                    </label>
                                    <label class="radio">Anotación
                                        <input type="radio" value="Anotación" name="anotation_type">
                                        <span class="check"></span>
                                    </label>
                                </div>
                            </div>
                            <div class="px-3 w-full text-center mt-10 md:mt-5">
                                <button class="w-full md:w-auto btn btn-primary" wire:loading.attr="disabled">
                                    <div class="flex items-center justify-center">
                                        <div wire:loading.class="hidden">
                                            <svg class="w-5 h-5 mr-1 hidden md:inline-block"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p wire:loading.class="hidden">Guardar</p>
                                    </div>
                                    <div wire:loading.attr.remove="hidden" hidden>
                                        <div class="flex items-center justify-center">
                                            Espere
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="circle-notch"
                                                class="svg-inline--fa fa-circle-notch fa-w-16 w-5 h-5 ml-3 animate-spin"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                </section>
            </form>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col mt-2 w-full">
                <div class="-my-2 overflow-x-auto">
                    <div class="inline-block min-w-full py-2 align-middle">
                        <div class="overscroll-contain border-b border-gray-200">
                            <table class="min-w-full overflow-x-scroll divide-y divide-gray-200 mb-2">
                                <thead class="bg-blue-300">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                            Tipo
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                            Fecha
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                            Descripción
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="bg-white divide-y divide-gray-100">
                                                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
    <div class="card py-1 custom-size-text" x-show="showPonderaciones">
    <div class="flex items-center justify-between">
        <div class="flex items-center">
            
            <p @click="filtPonde = !filtPonde"
                class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">
                Niveles</p>
            
        </div>

        <svg @click="filtPonde = !filtPonde" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"
            class="w-5 h-5 cursor-pointer transform mr-2"
            :class="filtPonde?'rotate-180 duration-500':'rotate-0 duration-500'">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
            </g>
        </svg>
    </div>
    <div x-cloak x-show="filtPonde" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">

        <div class="grid grid-cols-1 md:grid-cols-8">
            <div class="md:col-span-2">
                <form action="https://www.web.informental.com.ar/weighing" method="POST" enctype="multipart/form-data">
                    <input type="hidden" name="_token" value="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">                    <section class="mb-8 mt-3 w-full">
                        <div x-data="ponderacion()" class="container px-3 md:px-6 pt-2">
                            <div class="w-full flex items-center">
                                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Nueva
                                    Ponderación
                                </p>
                            </div>

                            <input type="hidden" name="therapy_id" value="31">

                            <div class="grid grid-cols-1 gap-1 mt-1 divide-y divide-gray-200">
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Básica</label>
                                    <input x-model="basica" @change="sumar" type="number" class="input-base w-20"
                                        step="1" min="1" max="73" id="basic_weighings" name="basic_weighings"
                                        tabindex="-1">
                                                                    </div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Seguridad</label>
                                    <input x-model="seguridad" @change="sumar" type="number" step="1" min="1" max="73"
                                        class="input-base w-20" id="security_weighings" name="security_weighings">
                                                                    </div>

                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Sociales</label>
                                    <input x-model="sociales" @change="sumar" type="number" step="1" min="1" max="73"
                                        class="input-base w-20" id="social_weighings" name="social_weighings"
                                        tabindex="-1">
                                                                    </div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Ocio</label>
                                    <input x-model="ocio" @change="sumar" type="number" step="1" min="1" max="73"
                                        class="input-base w-20" id="leisure_weighings" name="leisure_weighings">
                                                                    </div>

                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Autoestima</label>
                                    <input x-model="autoestima" @change="sumar" type="number" step="1" min="1" max="73"
                                        class="input-base w-20" id="esteem_weighings" name="esteem_weighings"
                                        tabindex="-1">
                                                                    </div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Autorealización</label>
                                    <input x-model="autorealizacion" @change="sumar" type="number" step="1" min="1"
                                        max="73" class="input-base w-20" id="self_realisation_weighings"
                                        name="self_realisation_weighings">
                                                                    </div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">General</label>
                                    <input x-model="general" readonly type="number" step="1" min="1" max="22"
                                        class="input-base bg-gray-200 w-20" id="general_weighings"
                                        name="general_weighings" />
                                                                    </div>
                                <div class="flex items-center justify-between">
                                    <label for="" class="text-sm text-text-300">Total</label>
                                    
                                    <span class="input-base bg-gray-200 w-20" x-text="sumar"></span>
                                                                    </div>
                                <span x-cloak x-show="notonehundred" class="text-red-500" x-text="sumaMsg"></span>
                            </div>
                            <div class="px-3 w-full text-center mt-10 md:mt-5">
                                <button
                                    class="w-full md:w-auto btn btn-primary disabled:opacity-25 transition ease-in-out duration-150"
                                    x-bind:disabled="notonehundred == true">
                                    <div class="flex items-center justify-center">
                                        <div wire:loading.class="hidden">
                                            <svg class="w-5 h-5 mr-1 hidden md:inline-block"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p wire:loading.class="hidden">Guardar</p>
                                    </div>
                                    <div wire:loading.attr.remove="hidden" hidden>
                                        <div class="flex items-center justify-center">
                                            Espere
                                            <svg aria-hidden="true" data-prefix="fas" data-icon="circle-notch"
                                                class="svg-inline--fa fa-circle-notch fa-w-16 w-5 h-5 ml-3 animate-spin"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>



                </form>
            </div>


            <div class="md:col-span-6">
                <div class="overscroll-contain overflow-x-hidden w-full max-h-96 border-b border-gray-200">
                    <table class="divide-y divide-gray-200 w-full">
                        <thead class="bg-blue-300">
                            <tr>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    General
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Básicas
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Seguridad
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Sociales
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Ocio
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Estima
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Autorealización
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Estado
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Desde
                                </th>
                                <th scope="col"
                                    class="px-4 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                    Hasta
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white divide-y divide-gray-100">
                                                        <tr class="transition-all hover:bg-hover hover:shadow">
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        22 %
                                    </div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        13 %</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                                                                Activa
                                                                            </div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        21-09-2023</div>
                                </td>
                                <td class="px-4 py-2 ">
                                    <div class="text-sm text-gray-900">
                                        </div>
                                </td>
                            </tr>
                                                    </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>
    <script type="text/javascript">
        function ponderacion(){
        return {
            notonehundred:false,
            basica: 13,
            seguridad: 13,
            sociales: 13,
            ocio: 13,
            autoestima: 13,
            autorealizacion: 13,
            general: 22,
            sumaMsg: '',
            validarSuma(){
                if(
                    (parseInt(this.basica) + parseInt(this.seguridad) + parseInt(this.sociales) + parseInt(this.ocio) + parseInt(this.autoestima) + parseInt(this.autorealizacion) + parseInt(this.general)) != 100
                ){
                    this.notonehundred = true;
                    this.sumaMsg = "Total debe sumar 100";
                } else {
                    if( this.basica < 1 || this.seguridad < 1 || this.sociales < 1 || this.ocio < 1 || this.autoestima < 1 || this.autorealizacion < 1){
                        this.notonehundred = true;
                        this.sumaMsg = "No pueden haber valores 0 ni vacíos";
                    } else {
                        this.notonehundred = false;
                        this.sumaMsg = "";
                    }
                }
            },
            get sumar(){
                this.validarSuma();
                return parseInt(this.basica) + parseInt(this.seguridad) + parseInt(this.sociales) + parseInt(this.ocio) + parseInt(this.autoestima) + parseInt(this.autorealizacion) + parseInt(this.general);
            }
        }
    }
    </script>
</div>

    
    <div class="card py-1 custom-size-text" x-show="showNiveles"  x-ref="preguntas">
    <div class="flex items-center justify-between">
        <div @click="filtNiveles = !filtNiveles" class="flex items-center">
            
            <p class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">Preguntas</p>
            <p x-show="!filtNiveles" x-transition:enter="transition ease-out duration-200"
                x-transition:enter-start="opacity-0 transform scale-90"
                x-transition:enter-end="opacity-100 transform scale-100"
                x-transition:leave="transition ease-in duration-200"
                x-transition:leave-start="opacity-100 transform scale-100"
                x-transition:leave-end="opacity-0 transform scale-90">
            </p>
        </div>

        <svg @click="filtNiveles = !filtNiveles" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
            viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;" xml:space="preserve"
            class="w-5 h-5 cursor-pointer transform mr-2"
            :class="filtNiveles?'rotate-180 duration-500':'rotate-0 duration-500'">
            <g>
                <path
                    d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                    c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                    c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
            </g>
        </svg>
    </div>
    <div x-cloak x-show="filtNiveles" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 transform scale-90" x-transition:enter-end="opacity-100 transform scale-100"
        x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100 transform scale-100"
        x-transition:leave-end="opacity-0 transform scale-90">

        <div class="flex">
            <div wire:id="QbwMQuqKClYdzDTc8cuw" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;QbwMQuqKClYdzDTc8cuw&quot;,&quot;name&quot;:&quot;therapies.create-questions&quot;,&quot;locale&quot;:&quot;es&quot;,&quot;path&quot;:&quot;therapy\/31&quot;,&quot;method&quot;:&quot;GET&quot;},&quot;effects&quot;:{&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;b019dfa8&quot;,&quot;data&quot;:{&quot;therapy&quot;:[],&quot;inputQuestionBasica&quot;:null,&quot;inputQuestionSeguridad&quot;:null,&quot;inputQuestionSocial&quot;:null,&quot;inputQuestionOcio&quot;:null,&quot;inputQuestionEstima&quot;:null,&quot;inputQuestionRealizacion&quot;:null,&quot;inputQuestionGeneral&quot;:null,&quot;inputQuestionEvento&quot;:null,&quot;arrayQuestions&quot;:[]},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;therapy&quot;:{&quot;class&quot;:&quot;App\\Models\\Therapy&quot;,&quot;id&quot;:31,&quot;relations&quot;:[&quot;patient&quot;,&quot;patient.user&quot;,&quot;professional&quot;,&quot;professional.user&quot;,&quot;sessions&quot;,&quot;questions&quot;,&quot;questions.level&quot;,&quot;answers&quot;,&quot;weighings&quot;,&quot;order_by_is_active&quot;],&quot;connection&quot;:&quot;mysql&quot;}}},&quot;checksum&quot;:&quot;beb2ffbfd0aa5e3b37711f7f5c4aa388678cf834721714ff4e4d2b568ab00db0&quot;}}" class="w-full" x-data="createQuestions()" x-init="init()">
    
        <input type="hidden" name="_token" value="wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx">        <div class="grid grid-cols-2">
            <div class="col-span-2 grid grid-cols-3 gap-2">
                <div>
                    <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas
                        Básicas</p>
                </div>
                <div class="col-span-2">
                    <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                        Asignadas a Básicas</p>
                </div>
            </div>

            
            <div class="col-span-2 ">
                <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed  border-green-400 mb-2">
                    <button @click.prevent="basicaModal = true"
                        class="btn btn-action my-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
                        <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Básicas
                        <div></div>
                    </button>
                    <div class="col-span-2 flex flex-col mt-5 shadow-md">
                        <div class="-my-2 overflow-x-auto">
                            <div class="inline-block min-w-full py-2 align-middle">
                                <div
                                    class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                    <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                        <thead class="bg-blue-300 sticky top-0 z-30">
                                                                                        <tr>
                                                <td colspan="4"
                                                    class="bg-red-300 text-center font-medium text-white w-full h-8">
                                                    <div class="relative">
                                                        <div class="w-full">
                                                            ¡Cuidado! Debes tener al menos una pregunta asignada y
                                                            activa.
                                                        </div>
                                                        <div
                                                            class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                                        </div>
                                                        <div
                                                            class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                                                                        <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                    Pregunta Básica
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                    Estado
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                    Desde
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                    Hasta
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                                                                                
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div x-cloak x-show.transition.duration.500ms="basicaModal"
                    class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
                    <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
                        @click.away="basicaModal = false">
                        <div class="flex justify-between mb-4">
                            <h3 class="font-bold md:text-xl">Añadir preguntas Básicas</h3>
                            <button @click.prevent="basicaModal = false">
                                <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1"
                                    viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                                        fill="#121313" id="Close" />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                </svg>
                            </button>
                        </div>
                        <div class="text-xs mb-6">
                            <div class="">
                                <div class="relative flex items-center">
                                    <input type="search" autocomplete="off" wire:model="inputQuestionBasica"
                                        wire:keyup="buscando" id="patient" name="patient" class="input-base"
                                        placeholder="Buscar o Añadir pregunta básica">
                                </div>
                                                            
                            <div
                                class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:1,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi descanso?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-09-22T17:52:35.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:43,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi descanso?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    43%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:43%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:2,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi alimentaci\u00f3n?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-22T12:02:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:33,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi alimentación?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    33%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:33%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:3,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi salud f\u00edsica?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi salud física?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    6%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:6%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:4,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi salud mental?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi salud mental?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    6%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:6%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:5,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a higiene?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a higiene?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    6%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:6%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:6,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a autocuidado personal?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a autocuidado personal?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    0%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:0%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:7,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi enfermedad?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi enfermedad?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    0%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:0%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:8,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi dolor?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi dolor?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    6%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:6%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:76,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi salud en general?&quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-02-16T13:26:58.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo me siento en relación a mi salud en general?</span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    13%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:13%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:85,&quot;question&quot;:&quot;actividad fisica  &quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2022-07-18T18:34:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-18T18:34:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>actividad fisica  </span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    3%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:3%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                                <button type="button"
                                    class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                    :disabled="false"
                                    wire:click="selectQuestion({&quot;id&quot;:106,&quot;question&quot;:&quot;\u00bfC\u00f3mo te has manejado con respuestas impulsivas? &quot;,&quot;level_id&quot;:1,&quot;created_at&quot;:&quot;2023-04-12T19:33:59.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-04-12T19:33:59.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:1,&quot;name&quot;:&quot;BASICAS&quot;,&quot;low&quot;:-175,&quot;high&quot;:25,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                    <span>¿Cómo te has manejado con respuestas impulsivas? </span>
                                    <div class="relative pt-1">
                                        <div class="flex mb-2 items-center justify-between">
                                            <div>
                                                <span
                                                    class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                    Tracks que la usan
                                                </span>
                                            </div>
                                            <div class="text-right">
                                                <span
                                                    class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                    6%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                            <div style="width:6%"
                                                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <button type="button" class="btn btn-primary" @click.prevent="basicaModal = false">
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div>

        </div>
        
        <div class="col-span-2">
            <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed border-green-400 mb-2">
                <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
                    <div>
                        <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir
                            Preguntas de Seguridad</p>
                    </div>
                    <div class="col-span-2">
                        <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">
                            Preguntas Asignadas a Seguridad</p>
                    </div>
                </div>
                <button @click.prevent="seguridadModal = true"
                    class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
                    <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Seguridad
                    <div></div>
                </button>
                <div class="col-span-2 flex flex-col shadow-md">
                    <div class="-my-2 overflow-x-auto">
                        <div class="inline-block min-w-full py-2 align-middle">
                            <div
                                class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                                    <thead class="bg-blue-300 sticky top-0 z-30">
                                                                                <tr>
                                            <td colspan="4"
                                                class="bg-red-300 text-center font-medium text-white w-full h-8">
                                                <div class="relative">
                                                    <div class="w-full">
                                                        ¡Cuidado! Debes tener al menos una pregunta asignada y activa.
                                                    </div>
                                                    <div
                                                        class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                                    </div>
                                                    <div
                                                        class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                                                                <tr>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                Pregunta Seguridad
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                Estado
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                Desde
                                            </th>
                                            <th scope="col"
                                                class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                                Hasta
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                                                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div x-cloak x-show.transition.duration.500ms="seguridadModal"
                class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
                <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
                    @click.away="seguridadModal = false">
                    <div class="flex justify-between mb-4">
                        <h3 class="font-bold md:text-xl">Añadir preguntas de Seguridad</h3>
                        <button @click.prevent="seguridadModal = false">
                            <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1"
                                viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path
                                    d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                                    fill="#121313" id="Close" />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                                <g />
                            </svg>
                        </button>
                    </div>
                    <div class="text-xs mb-6">
                        <div class="">
                            <div class="relative flex items-center">
                                <input type="search" autocomplete="off" wire:model="inputQuestionSeguridad"
                                    wire:keyup="buscando" class="input-base" placeholder="Ingrese pregunta a buscar">
                            </div>
                                                    
                        <div
                            class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:9,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da mi trabajo?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:30,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da mi trabajo?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                30%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:30%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:10,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da mi ingreso?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da mi ingreso?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:11,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da el entorno f\u00edsico?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da el entorno físico?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:12,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da mi entorno social&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da mi entorno social</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                13%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:13%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:13,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da mi sueldo?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da mi sueldo?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:14,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me mi situaci\u00f3n financiera?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me mi situación financiera?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                3%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:3%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:15,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me dan mis ahorros?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me dan mis ahorros?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:16,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad tengo con respecto a mis deudas?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad tengo con respecto a mis deudas?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:77,&quot;question&quot;:&quot;\u00bfQue tan seguro\/a estoy de mi mismo\/a?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-07-15T20:50:24.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:50:24.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:30,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Que tan seguro/a estoy de mi mismo/a?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                30%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:30%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:89,&quot;question&quot;:&quot;como me siento en relacion a la seguridad del pais?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-08-22T14:23:03.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-08-22T14:23:03.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>como me siento en relacion a la seguridad del pais?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                3%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:3%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:104,&quot;question&quot;:&quot;\u00bfcuanta seguridad me da la casa donde vivo?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2022-09-30T20:14:44.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-30T20:14:44.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿cuanta seguridad me da la casa donde vivo?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                6%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:6%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:105,&quot;question&quot;:&quot;\u00bfCu\u00e1nta seguridad me da mi estudio actual?  &quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2023-04-10T23:37:08.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-04-10T23:37:08.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿Cuánta seguridad me da mi estudio actual?  </span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                3%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:3%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:107,&quot;question&quot;:&quot;\u00bfcuanta confianza tengo al momento de hablar con mi entorno sobre lo que me pasa?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2023-05-04T15:50:57.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-05-04T15:50:57.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿cuanta confianza tengo al momento de hablar con mi entorno sobre lo que me pasa?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                3%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:3%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                        <button type="button"
                                class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                                :disabled="false"
                                wire:click="selectQuestion({&quot;id&quot;:108,&quot;question&quot;:&quot;\u00bfcuanta confianza tengo al momento de hablar con mi entorno sobre lo que me pasa?&quot;,&quot;level_id&quot;:2,&quot;created_at&quot;:&quot;2023-05-04T15:51:07.000000Z&quot;,&quot;updated_at&quot;:&quot;2023-05-04T15:51:07.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:2,&quot;name&quot;:&quot;SEGURIDAD&quot;,&quot;low&quot;:-150,&quot;high&quot;:50,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                                <span>¿cuanta confianza tengo al momento de hablar con mi entorno sobre lo que me pasa?</span>
                                <div class="relative pt-1">
                                    <div class="flex mb-2 items-center justify-between">
                                        <div>
                                            <span
                                                class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                                Tracks que la usan
                                            </span>
                                        </div>
                                        <div class="text-right">
                                            <span
                                                class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                                0%
                                            </span>
                                        </div>
                                    </div>
                                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                        <div style="width:0%"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                        </div>
                                    </div>
                                </div>
                            </button>
                                                    </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button type="button" class="btn btn-primary" @click.prevent="seguridadModal = false">
                        Entendido
                    </button>
                </div>
            </div>
        </div>
</div>

<div class="col-span-2">
    <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed border-green-400 mb-2">
        <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
            <div>
                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas
                    Sociales</p>
            </div>
            <div class="col-span-2">
                <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                    Asignadas a Sociales</p>
            </div>
        </div>
        <button @click.prevent="socialesModal = true"
            class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
            <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Sociales
            <div></div>
        </button>
        <div class="col-span-2 flex flex-col shadow-md">
            <div class="-my-2 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle">
                    <div
                        class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                            <thead class="bg-blue-300 sticky top-0 z-30">
                                                                <tr>
                                    <td colspan="4" class="bg-red-300 text-center font-medium text-white w-full h-8">
                                        <div class="relative">
                                            <div class="w-full">
                                                ¡Cuidado! Debes tener al menos una pregunta asignada y activa.
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Pregunta Sociales
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Estado
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Desde
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Hasta
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div x-cloak x-show.transition.duration.500ms="socialesModal"
        class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
        <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
            @click.away="socialesModal = false">
            <div class="flex justify-between mb-4">
                <h3 class="font-bold md:text-xl">Añadir preguntas Sociales</h3>
                <button @click.prevent="socialesModal = false">
                    <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                            fill="#121313" id="Close" />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </button>
            </div>
            <div class="text-xs mb-6">
                <div class="">
                    <div class="relative flex items-center">
                        <input type="search" autocomplete="off" wire:model="inputQuestionSocial" wire:keyup="buscando"
                            class="input-base" placeholder="Ingrese pregunta a buscar">
                    </div>
                                                    <div
                    class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:17,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a la manera en que me comunico?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:26,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a la manera en que me comunico?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        26%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:26%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:18,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a la manera en que me vinculo?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a la manera en que me vinculo?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        13%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:13%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:19,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi familia?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:20,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi familia?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        20%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:20%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:20,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi pareja?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi pareja?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:21,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n mis relaciones amorosas?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación mis relaciones amorosas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:22,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis padres?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis padres?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:23,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi padre?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi padre?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:24,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi madre?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi madre?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:25,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis hermanos?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis hermanos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:26,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi hermano?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi hermano?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:27,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi hermana?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi hermana?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:28,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis hijos?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis hijos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:29,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi hijo?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-04T23:54:25.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi hijo?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:30,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi hija?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi hija?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:31,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis amigos?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis amigos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:32,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis colegas?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis colegas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:33,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis compa\u00f1eros de trabajo?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis compañeros de trabajo?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:34,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi aceptaci\u00f3n social?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi aceptación social?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:35,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi desenvolvimiento social?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi desenvolvimiento social?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:36,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mis relaciones sexuales?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mis relaciones sexuales?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:78,&quot;question&quot;:&quot;\u00bfComo me siento en cuanto a lo social y lo alimentario?&quot;,&quot;level_id&quot;:3,&quot;created_at&quot;:&quot;2022-07-15T20:54:31.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:54:31.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:3,&quot;name&quot;:&quot;SOCIALES&quot;,&quot;low&quot;:-125,&quot;high&quot;:75,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en cuanto a lo social y lo alimentario?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                    </div>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button" class="btn btn-primary" @click.prevent="socialesModal = false">
                Entendido
            </button>
        </div>
    </div>
</div>
</div>

<div class="col-span-2">
    <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed border-green-400 mb-2">
        <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
            <div>
                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas de
                    Ocio</p>
            </div>
            <div class="col-span-2">
                <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                    Asignadas a Ocio</p>
            </div>
        </div>
        <button @click.prevent="ocioModal = true"
            class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
            <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Ocio
            <div></div>
        </button>
        <div class="col-span-2 flex flex-col shadow-md">
            <div class="-my-2 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle">
                    <div
                        class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                            <thead class="bg-blue-300 sticky top-0 z-30">
                                                                <tr>
                                    <td colspan="4" class="bg-red-300 text-center font-medium text-white w-full h-8">
                                        <div class="relative">
                                            <div class="w-full">
                                                ¡Cuidado! Debes tener al menos una pregunta asignada y activa.
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Pregunta Ocio
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Estado
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Desde
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Hasta
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div x-cloak x-show.transition.duration.500ms="ocioModal"
        class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
        <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
            @click.away="ocioModal = false">
            <div class="flex justify-between mb-4">
                <h3 class="font-bold md:text-xl">Añadir preguntas de Ocio</h3>
                <button @click.prevent="ocioModal = false">
                    <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                            fill="#121313" id="Close" />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </button>
            </div>
            <div class="text-xs mb-6">
                <div class="">
                    <div class="relative flex items-center">
                        <input type="search" autocomplete="off" wire:model="inputQuestionOcio" wire:keyup="buscando"
                            class="input-base" placeholder="Ingrese pregunta a buscar">
                    </div>
                                                    <div
                    class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:37,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a las actividades que realizo?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-22T12:02:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a las actividades que realizo?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:38,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n al tiempo que dedico para mi ocio?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación al tiempo que dedico para mi ocio?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:39,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi participaci\u00f3n en actividades recreativas?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:26,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi participación en actividades recreativas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        26%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:26%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:40,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi desempe\u00f1o en actividades recreativas?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi desempeño en actividades recreativas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:41,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi capacidad de diversi\u00f3n?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi capacidad de diversión?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:42,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi entretenimiento?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi entretenimiento?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:43,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a a mi espacio personal?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a a mi espacio personal?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:79,&quot;question&quot;:&quot;\u00bfComo me siento en cuanto a mi actividad fisica?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-07-15T20:56:27.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:56:27.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en cuanto a mi actividad fisica?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:80,&quot;question&quot;:&quot;\u00bfComo me siento en cuanto a mi actividad fisica?&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-07-15T20:56:47.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:56:47.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en cuanto a mi actividad fisica?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:83,&quot;question&quot;:&quot;Nivel de ansiedad cuando estas sola o aburrida&quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-07-18T18:30:51.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-18T18:30:51.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>Nivel de ansiedad cuando estas sola o aburrida</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:90,&quot;question&quot;:&quot;\u00bfQu\u00e9 tan satisfecho\/a estoy con mi ocio y tiempo libre? &quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-09-20T12:31:54.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-20T12:31:54.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Qué tan satisfecho/a estoy con mi ocio y tiempo libre? </span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:103,&quot;question&quot;:&quot;\u00bfQu\u00e9 tanto disfruto mi tiempo libre y ocio? &quot;,&quot;level_id&quot;:4,&quot;created_at&quot;:&quot;2022-09-28T21:37:10.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:37:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:4,&quot;name&quot;:&quot;OCIO&quot;,&quot;low&quot;:-75,&quot;high&quot;:125,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Qué tanto disfruto mi tiempo libre y ocio? </span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                    </div>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button" class="btn btn-primary" @click.prevent="ocioModal = false">
                Entendido
            </button>
        </div>
    </div>
</div>
</div>


<div class="col-span-2">
    <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed border-green-400 mb-2">
        <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
            <div>
                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas de
                    Autoestima</p>
            </div>
            <div class="col-span-2">
                <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                    Asignadas a Autoestima</p>
            </div>
        </div>
        <button @click.prevent="estimaModal = true"
            class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
            <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Autoestima
            <div></div>
        </button>
        <div class="col-span-2 flex flex-col shadow-md">
            <div class="-my-2 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle">
                    <div
                        class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                            <thead class="bg-blue-300 sticky top-0 z-30">
                                                                <tr>
                                    <td colspan="4" class="bg-red-300 text-center font-medium text-white w-full h-8">
                                        <div class="relative">
                                            <div class="w-full">
                                                ¡Cuidado! Debes tener al menos una pregunta asignada y activa.
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Pregunta Autoestima
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Estado
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Desde
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Hasta
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div x-cloak x-show.transition.duration.500ms="estimaModal"
        class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
        <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
            @click.away="estimaModal = false">
            <div class="flex justify-between mb-4">
                <h3 class="font-bold md:text-xl">Añadir preguntas Autoestima</h3>
                <button @click.prevent="estimaModal = false">
                    <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                            fill="#121313" id="Close" />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </button>
            </div>
            <div class="text-xs mb-6">
                <div class="">
                    <div class="relative flex items-center">
                        <input type="search" autocomplete="off" wire:model="inputQuestionEstima" wire:keyup="buscando"
                            class="input-base" placeholder="Ingrese pregunta a buscar">
                    </div>
                                                    <div
                    class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:44,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi identidad (qui\u00e9n soy)?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi identidad (quién soy)?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:45,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi libertad de expresi\u00f3n?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi libertad de expresión?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:46,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi autonom\u00eda?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi autonomía?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:47,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mis virtudes y defectos?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mis virtudes y defectos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:48,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi autoimagen y aspecto f\u00edsico?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-22T12:02:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi autoimagen y aspecto físico?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        13%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:13%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:49,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi sexualidad?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi sexualidad?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:50,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mis conocimientos y habilidades?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mis conocimientos y habilidades?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:51,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi capacidad de aprendizaje?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi capacidad de aprendizaje?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:52,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi desempe\u00f1o laboral?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi desempeño laboral?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:53,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi autoconfianza?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi autoconfianza?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:54,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a el afecto que recibo de otros?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-04T23:54:25.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a el afecto que recibo de otros?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:55,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a el afecto que doy a otros?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a el afecto que doy a otros?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:56,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi capacidad para resolver problemas?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi capacidad para resolver problemas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:57,&quot;question&quot;:&quot;\u00bfComo me siento en relaci\u00f3n a mi tolerancia a la frustraci\u00f3n?&quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me siento en relación a mi tolerancia a la frustración?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:91,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en relaci\u00f3n a mi autoestima? &quot;,&quot;level_id&quot;:5,&quot;created_at&quot;:&quot;2022-09-20T12:34:17.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-20T12:34:17.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13,&quot;level&quot;:{&quot;id&quot;:5,&quot;name&quot;:&quot;AUTOESTIMA&quot;,&quot;low&quot;:-50,&quot;high&quot;:150,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en relación a mi autoestima? </span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        13%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:13%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                    </div>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button" class="btn btn-primary" @click.prevent="estimaModal = false">
                Entendido
            </button>
        </div>
    </div>
</div>
</div>


<div class="col-span-2">
    <div class="grid grid-cols-3 border-b-2 pb-4 border-dashed border-green-400 mb-2">
        <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
            <div>
                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas de
                    Autorealización</p>
            </div>
            <div class="col-span-2">
                <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                    Asignadas a Autorealización</p>
            </div>
        </div>
        <button @click.prevent="realizacionModal = true"
            class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
            <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Autorealización
            <div></div>
        </button>
        <div class="col-span-2 flex flex-col shadow-md">
            <div class="-my-2 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle">
                    <div
                        class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                            <thead class="bg-blue-300 sticky top-0 z-30">

                                                                <tr>
                                    <td colspan="4" class="bg-red-300 text-center font-medium text-white w-full h-8">
                                        <div class="relative">
                                            <div class="w-full">
                                                ¡Cuidado! Debes tener al menos una pregunta asignada y activa.
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400 animate-ping">
                                            </div>
                                            <div
                                                class="absolute top-0 left-0 -mt-8 -ml-8  w-16 h-16 rounded-full bg-red-400">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Pregunta Autorealizacion
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Estado
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Desde
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Hasta
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div x-cloak x-show.transition.duration.500ms="realizacionModal"
        class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
        <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
            @click.away="realizacionModal = false">
            <div class="flex justify-between mb-4">
                <h3 class="font-bold md:text-xl">Añadir preguntas Autorealización</h3>
                <button @click.prevent="realizacionModal = false">
                    <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                            fill="#121313" id="Close" />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </button>
            </div>
            <div class="text-xs mb-6">
                <div class="">
                    <div class="relative flex items-center">
                        <input type="search" autocomplete="off" wire:model="inputQuestionRealizacion"
                            wire:keyup="buscando" class="input-base" placeholder="Ingrese pregunta a buscar">
                    </div>
                                                    <div
                    class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:58,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n a la planificaci\u00f3n de mis proyectos?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación a la planificación de mis proyectos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:59,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al desarrollo de recursos necesarios para conseguir mis objetivos?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al desarrollo de recursos necesarios para conseguir mis objetivos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:60,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al logro de mis proyectos?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-21T14:39:46.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:30,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al logro de mis proyectos?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        30%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:30%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:61,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al alcance de mis deseos y mis metas?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-22T12:02:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al alcance de mis deseos y mis metas?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:62,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n a mi capacidad de ense\u00f1anza?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación a mi capacidad de enseñanza?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:63,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al mi creatividad?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al mi creatividad?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:64,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al aprendizaje de mis errores?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al aprendizaje de mis errores?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:65,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al ser un ejemplo para otros?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al ser un ejemplo para otros?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:66,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al cumplir mi objetivo acad\u00e9mico\/educativo?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al cumplir mi objetivo académico/educativo?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:67,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al cumplir mi objetivo laboral?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al cumplir mi objetivo laboral?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:68,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n al cumplir mi objetivo familiar\/social?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación al cumplir mi objetivo familiar/social?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:69,&quot;question&quot;:&quot;\u00bfComo me percibo en relaci\u00f3n a mi religi\u00f3n?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como me percibo en relación a mi religión?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:84,&quot;question&quot;:&quot;\u00bfQu\u00e9 tan bien me siento conmigo misma?&quot;,&quot;level_id&quot;:6,&quot;created_at&quot;:&quot;2022-07-18T18:33:02.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-18T18:33:02.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6,&quot;level&quot;:{&quot;id&quot;:6,&quot;name&quot;:&quot;AUTOREALIZACION&quot;,&quot;low&quot;:-25,&quot;high&quot;:175,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Qué tan bien me siento conmigo misma?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                    </div>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button" class="btn btn-primary" @click.prevent="realizacionModal = false">
                Entendido
            </button>
        </div>
    </div>
</div>
</div>


<div class="col-span-2">
    <div class="grid grid-cols-3 pb-4 mb-4">
        <div class="col-span-3 grid grid-cols-3 gap-2 mb-5 mt-3">
            <div>
                <p class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Añadir Preguntas de
                    Evento</p>
            </div>
            <div class="col-span-2">
                <p for="" class="text-text-500 text-md font-medium w-full border-b-2 border-primary-100">Preguntas
                    Asignadas a Evento</p>
            </div>
        </div>
        <button @click.prevent="eventoModal = true"
            class="btn btn-action mb-5 h-12 w-3/4 grid grid-cols-3 hover:text-green-400 hover:font-bold">
            <svg class="w-5 h-5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Evento
            <div></div>
        </button>
        <div class="col-span-2 flex flex-col shadow-md">
            <div class="-my-2 overflow-x-auto">
                <div class="inline-block min-w-full py-2 align-middle">
                    <div
                        class="overscroll-contain max-h-96 border-b border-gray-200 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <table class="min-w-full overflow-x-scroll divide-y divide-gray-200">
                            <thead class="bg-blue-300 sticky top-0 z-30">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Pregunta Evento
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Estado
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Desde
                                    </th>
                                    <th scope="col"
                                        class="px-6 py-3 text-xs font-medium tracking-wider text-left text-text-500 uppercase">
                                        Hasta
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-100">
                                                                                                                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div x-cloak x-show.transition.duration.500ms="eventoModal"
        class="fixed inset-0 z-50 bg-white bg-opacity-75 flex items-center justify-center px-4 md:px-0">
        <div class="flex flex-col bg-white shadow-2xl rounded-lg border-2 border-gray-400 p-6 max-h-screen overflow-y-auto w-full md:w-3/4"
            @click.away="eventoModal = false">
            <div class="flex justify-between mb-4">
                <h3 class="font-bold md:text-xl">Añadir preguntas Eventos</h3>
                <button @click.prevent="eventoModal = false">
                    <svg enable-background="new 0 0 32 32" class="h-8 w-8" id="Слой_1" version="1.1" viewBox="0 0 32 32"
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path
                            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"
                            fill="#121313" id="Close" />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                        <g />
                    </svg>
                </button>
            </div>
            <div class="text-xs mb-6">
                <div class="">
                    <div class="relative flex items-center">
                        <input type="search" autocomplete="off" wire:model="inputQuestionEvento" wire:keyup="buscando"
                            class="input-base" placeholder="Ingrese pregunta a buscar">
                    </div>
                                                    <div
                    class="mt-1 block w-full divide-y  border h-60 overflow-y-auto border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:71,&quot;question&quot;:&quot;\u00bfCu\u00e1ntas horas dormiste hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuántas horas dormiste hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:72,&quot;question&quot;:&quot;\u00bfCu\u00e1l es tu peso?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuál es tu peso?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:73,&quot;question&quot;:&quot;\u00bfCu\u00e1ntas horas hiciese ejercicio hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-03-22T12:02:10.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:10,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuántas horas hiciese ejercicio hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        10%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:10%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:74,&quot;question&quot;:&quot;\u00bfHas tenido relaciones sexuales?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Has tenido relaciones sexuales?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:75,&quot;question&quot;:&quot;\u00bfCu\u00e1ntas horas trabajaste hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuántas horas trabajaste hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:81,&quot;question&quot;:&quot;Ansiedad&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-07-15T20:58:16.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:58:16.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6.666666666666667,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>Ansiedad</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6.6666666666667%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6.6666666666667%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:82,&quot;question&quot;:&quot;\u00bfComo has estado del sentimiento de culpa?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-07-15T20:58:48.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-07-15T20:58:48.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6.666666666666667,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Como has estado del sentimiento de culpa?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6.6666666666667%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6.6666666666667%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:86,&quot;question&quot;:&quot;Nivel de angustia hoy&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-08-19T20:35:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-08-19T20:35:37.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:13.333333333333334,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>Nivel de angustia hoy</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        13.333333333333%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:13.333333333333%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:87,&quot;question&quot;:&quot;Nivel de angustia hoy&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-08-19T20:35:38.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-08-19T20:35:38.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>Nivel de angustia hoy</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:88,&quot;question&quot;:&quot;Nivel de enojo&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-08-19T20:37:51.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-08-19T20:37:51.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3.3333333333333335,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>Nivel de enojo</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3.3333333333333%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3.3333333333333%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:92,&quot;question&quot;:&quot;\u00bfC\u00f3mo me siento en cuanto a mi participaci\u00f3n en la Facultad? &quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-20T12:35:47.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-20T12:35:47.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6.666666666666667,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cómo me siento en cuanto a mi participación en la Facultad? </span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6.6666666666667%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6.6666666666667%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:93,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mi ejercicio diario?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:30:19.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:30:19.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:6.666666666666667,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mi ejercicio diario?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        6.6666666666667%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:6.6666666666667%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:94,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:50.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:50.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:95,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:52.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:52.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:96,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:53.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:53.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:97,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:55.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:55.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:98,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:57.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:57.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:99,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:34:58.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:34:58.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:100,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:35:00.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:35:00.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:0,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        0%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:0%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:101,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:35:02.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:35:02.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3.3333333333333335,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3.3333333333333%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3.3333333333333%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                        <button type="button"
                        class="flex items-center justify-between py-2 px-4 w-full  hover:bg-blue-200 hover:cursor-pointer hover:bg-opacity-50"
                        :disabled="false"
                        wire:click="selectQuestion({&quot;id&quot;:102,&quot;question&quot;:&quot;\u00bfCu\u00e1n satisfecho\/a estoy con mis actividades de hoy?&quot;,&quot;level_id&quot;:8,&quot;created_at&quot;:&quot;2022-09-28T21:35:04.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-09-28T21:35:04.000000Z&quot;,&quot;total&quot;:30,&quot;porc&quot;:3.3333333333333335,&quot;level&quot;:{&quot;id&quot;:8,&quot;name&quot;:&quot;EVENTOS&quot;,&quot;low&quot;:null,&quot;high&quot;:null,&quot;created_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;,&quot;updated_at&quot;:&quot;2022-02-08T12:25:37.000000Z&quot;}})">
                        <span>¿Cuán satisfecho/a estoy con mis actividades de hoy?</span>
                        <div class="relative pt-1">
                            <div class="flex mb-2 items-center justify-between">
                                <div>
                                    <span
                                        class="text-xs  inline-block py-1 px-2 uppercase rounded-full text-gray-100 bg-primary-200">
                                        Tracks que la usan
                                    </span>
                                </div>
                                <div class="text-right">
                                    <span
                                        class="text-xs font-medium inline-block py-1 px-2 text-secondary-400 rounded-full border border-primary-200">
                                        3.3333333333333%
                                    </span>
                                </div>
                            </div>
                            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style="width:3.3333333333333%"
                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-secondary-400">
                                </div>
                            </div>
                        </div>
                    </button>
                                    </div>
            </div>
        </div>
        <div class="flex justify-center">
            <button type="button" class="btn btn-primary" @click.prevent="eventoModal = false">
                Entendido
            </button>
        </div>
    </div>
</div>
</div>


</div>


</div>






    
    
</div>
<script>
    function createQuestions(){
        return {
            questions:[],
            basicaModal:false,
            seguridadModal:false,
            socialesModal:false,
            ocioModal:false,
            estimaModal:false,
            realizacionModal:false,
            eventoModal:false,
            init(){
                                    this.questions.push({"id":70,"question":"\u00bfC\u00f3mo te percib\u00eds a nivel general?","level_id":7,"created_at":"2022-02-08T12:25:37.000000Z","updated_at":"2023-09-22T19:34:10.000000Z","pivot":{"therapy_id":31,"question_id":70,"id":103308,"answer_numeric":null,"answer_text":null,"is_active":0,"is_answered":0,"conversion":null,"score":null,"weighing":null,"level":null,"min":null,"max":null,"weighing_id":null,"start_at":null,"end_at":"2023-09-22 00:00:00","answered_at":null,"created_at":"2023-09-22T19:26:40.000000Z","updated_at":"2023-09-22T19:26:40.000000Z"}});
                            },

        }
    }
</script>
<!-- Livewire Component wire-end:QbwMQuqKClYdzDTc8cuw -->            
        </div>
    </div>
</div>

    <div wire:id="7YMR26NELYlCsHuHEKst" wire:initial-data="{&quot;fingerprint&quot;:{&quot;id&quot;:&quot;7YMR26NELYlCsHuHEKst&quot;,&quot;name&quot;:&quot;therapies.charts&quot;,&quot;locale&quot;:&quot;es&quot;,&quot;path&quot;:&quot;therapy\/31&quot;,&quot;method&quot;:&quot;GET&quot;},&quot;effects&quot;:{&quot;dispatches&quot;:[{&quot;event&quot;:&quot;renderChart&quot;,&quot;data&quot;:{&quot;nivelesProm&quot;:[],&quot;preguntasProm&quot;:[],&quot;dataHistoricProm&quot;:[{&quot;name&quot;:&quot;Hist\u00f3rico&quot;,&quot;data&quot;:[0]}],&quot;dataRangeProm&quot;:[{&quot;name&quot;:&quot;Rango Tiempo&quot;,&quot;data&quot;:[0]}],&quot;nivelineData&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;preguntlineData&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;promDiario&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;words&quot;:&quot;&quot;,&quot;preguntas&quot;:[]}}],&quot;listeners&quot;:[]},&quot;serverMemo&quot;:{&quot;children&quot;:[],&quot;errors&quot;:[],&quot;htmlHash&quot;:&quot;c1ee4839&quot;,&quot;data&quot;:{&quot;therapy&quot;:[],&quot;words&quot;:&quot;&quot;,&quot;to&quot;:&quot;2023-09-24&quot;,&quot;from&quot;:&quot;2023-09-11&quot;,&quot;levels&quot;:null,&quot;questions&quot;:[],&quot;anios&quot;:[&quot;2021&quot;,&quot;2022&quot;,&quot;2023&quot;],&quot;meses&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;,&quot;9&quot;,&quot;10&quot;,&quot;11&quot;,&quot;12&quot;],&quot;semanas&quot;:[],&quot;dias&quot;:[],&quot;selectedTherapy&quot;:&quot;&quot;,&quot;selectedAnio&quot;:&quot;2023&quot;,&quot;selectedMes&quot;:[],&quot;selectedWeek&quot;:[],&quot;selectedDay&quot;:[],&quot;questionTypes&quot;:[],&quot;selectedQtypes&quot;:[],&quot;selectedQuestions&quot;:[],&quot;hoy&quot;:&quot;22\/09\/23&quot;,&quot;semana&quot;:38,&quot;estasemana&quot;:38,&quot;pacientes&quot;:[{&quot;id&quot;:3,&quot;name&quot;:&quot;Kovacs, Alejandro&quot;}],&quot;selectedPatients&quot;:[3],&quot;endDay&quot;:31,&quot;level_line&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;question_line&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;promedio_diario&quot;:{&quot;dates&quot;:[],&quot;series&quot;:[]},&quot;level_avg&quot;:[],&quot;question_avg&quot;:[],&quot;historical_avg&quot;:[{&quot;name&quot;:&quot;Hist\u00f3rico&quot;,&quot;data&quot;:[0]}],&quot;range_avg&quot;:[{&quot;name&quot;:&quot;Rango Tiempo&quot;,&quot;data&quot;:[0]}],&quot;filter_option&quot;:&quot;answer_numeric&quot;,&quot;last_day&quot;:0,&quot;last_week&quot;:0,&quot;last_month&quot;:0,&quot;last_year&quot;:0,&quot;consulta&quot;:[],&quot;preguntas&quot;:[]},&quot;dataMeta&quot;:{&quot;models&quot;:{&quot;therapy&quot;:{&quot;class&quot;:&quot;App\\Models\\Therapy&quot;,&quot;id&quot;:31,&quot;relations&quot;:[&quot;patient&quot;,&quot;patient.user&quot;,&quot;professional&quot;,&quot;professional.user&quot;,&quot;sessions&quot;,&quot;questions&quot;,&quot;questions.level&quot;,&quot;answers&quot;,&quot;weighings&quot;,&quot;order_by_is_active&quot;],&quot;connection&quot;:&quot;mysql&quot;}},&quot;modelCollections&quot;:{&quot;questions&quot;:{&quot;class&quot;:&quot;App\\Models\\Question&quot;,&quot;id&quot;:[70],&quot;relations&quot;:[&quot;level&quot;],&quot;connection&quot;:&quot;mysql&quot;},&quot;questionTypes&quot;:{&quot;class&quot;:&quot;App\\Models\\Level&quot;,&quot;id&quot;:[1,2,3,4,5,6,7,8],&quot;relations&quot;:[],&quot;connection&quot;:&quot;mysql&quot;},&quot;consulta&quot;:{&quot;class&quot;:null,&quot;id&quot;:[],&quot;relations&quot;:[],&quot;connection&quot;:null},&quot;preguntas&quot;:{&quot;class&quot;:null,&quot;id&quot;:[],&quot;relations&quot;:[],&quot;connection&quot;:null}},&quot;collections&quot;:[&quot;level_line&quot;,&quot;question_line&quot;,&quot;promedio_diario&quot;,&quot;level_avg&quot;,&quot;question_avg&quot;,&quot;historical_avg&quot;,&quot;range_avg&quot;]},&quot;checksum&quot;:&quot;34c60d045450609bce4bc00e63beb9f6be283f06e2304897a36b2fb5413dd573&quot;}}" class="grid grid-cols-4 custom-size-text mb-4" x-data="dashboard()" :class="{'mb-0':fscreendash}">
    <div class="col-span-4" :class="{'mt-2':fscreendash}">
        <div class="card py-1 custom-size-text h-50">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <button class="h-6 w-6 flex items-center justify-center hover:bg-blue-100"
                        @click="toggleFullScreen()">
                        <svg x-cloak x-show="!fscreendash" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 64 64">
                            <g id="Layer_44" data-name="Layer 44">
                                <path
                                    d="M52,10.5H41.12a1.5,1.5,0,0,0,0,3h7.26L36.8,25.08a1.5,1.5,0,1,0,2.12,2.12L50.5,15.62v7.26a1.5,1.5,0,0,0,3,0V12A1.5,1.5,0,0,0,52,10.5Z" />
                                <path
                                    d="M15.62,13.5h7.26a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,10.5,12V22.88a1.5,1.5,0,0,0,3,0V15.62L25.08,27.2a1.5,1.5,0,1,0,2.12-2.12Z" />
                                <path
                                    d="M25.08,36.8,13.5,48.38V41.12a1.5,1.5,0,0,0-3,0V52A1.5,1.5,0,0,0,12,53.5H22.88a1.5,1.5,0,0,0,0-3H15.62L27.2,38.92A1.5,1.5,0,0,0,25.08,36.8Z" />
                                <path
                                    d="M52,39.62a1.5,1.5,0,0,0-1.5,1.5v7.26L38.92,36.8a1.5,1.5,0,0,0-2.12,2.12L48.38,50.5H41.12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,52V41.12A1.5,1.5,0,0,0,52,39.62Z" />
                            </g>
                        </svg>
                        <svg x-cloak x-show="fscreendash" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -4199.000000)"
                                    fill="#000000">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path
                                            d="M218,4047 L224,4047 L224,4045 L218,4045 L218,4039 L216,4039 L216,4043.959 L216,4047 L218,4047 Z M218,4053 L224,4053 L224,4051 L218,4051 L216,4051 L216,4051.959 L216,4059 L218,4059 L218,4053 Z M210,4059 L212,4059 L212,4051.959 L212,4051 L210,4051 L204,4051 L204,4053 L210,4053 L210,4059 Z M210,4039 L212,4039 L212,4043.959 L212,4047 L210,4047 L204,4047 L204,4045 L210,4045 L210,4039 Z"
                                            id="exit_full_screen-[#905]"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <svg class="w-3 h-3 text-text-400 ml-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 210.68 210.68"
                        style="enable-background:new 0 0 210.68 210.68;" xml:space="preserve">
                        <path
                            d="M205.613,30.693c0-10.405-10.746-18.149-32.854-23.676C154.659,2.492,130.716,0,105.34,0
                                C79.965,0,56.021,2.492,37.921,7.017C15.813,12.544,5.066,20.288,5.066,30.693c0,3.85,1.476,7.335,4.45,10.479l68.245,82.777v79.23
                                c0,2.595,1.341,5.005,3.546,6.373c1.207,0.749,2.578,1.127,3.954,1.127c1.138,0,2.278-0.259,3.331-0.78l40.075-19.863
                                c2.55-1.264,4.165-3.863,4.169-6.71l0.077-59.372l68.254-82.787C204.139,38.024,205.613,34.542,205.613,30.693z M44.94,20.767
                                C61.467,17.048,82.917,15,105.34,15s43.874,2.048,60.399,5.767c18.25,4.107,23.38,8.521,24.607,9.926
                                c-1.228,1.405-6.357,5.819-24.607,9.926c-16.525,3.719-37.977,5.767-60.399,5.767S61.467,44.338,44.94,40.62
                                c-18.249-4.107-23.38-8.521-24.607-9.926C21.56,29.288,26.691,24.874,44.94,20.767z M119.631,116.486
                                c-1.105,1.341-1.711,3.023-1.713,4.761l-0.075,57.413l-25.081,12.432v-69.835c0-1.741-0.605-3.428-1.713-4.771L40.306,54.938
                                C58.1,59.1,81.058,61.387,105.34,61.387c24.283,0,47.24-2.287,65.034-6.449L119.631,116.486z" />
                    </svg>
                    <p @click="filtOpen = !filtOpen"
                        class="text-text-500 text-sm md:text-lg m-1 font-medium hover:underline hover:font-bold hover:cursor-pointer">
                        Filtros</p>
                    <p x-cloak x-show="filtOpen" x-transition:enter="transition ease-out duration-200"
                        x-transition:enter-start="opacity-0 transform scale-90"
                        x-transition:enter-end="opacity-100 transform scale-100"
                        x-transition:leave="transition ease-in duration-200"
                        x-transition:leave-start="opacity-100 transform scale-100"
                        x-transition:leave-end="opacity-0 transform scale-90" class="text-xs">

                        Paciente:  Kovacs, Alejandro                                                 (Promedio)
                                                (Año: 2023)
                                                                                                                    </p>
                </div>
                <img src="/img/fidget-spinner.gif" class="w-6 h-6" wire:loading alt="spinner" />
                <svg @click="filtOpen = !filtOpen" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="451.847px" height="451.847px"
                    viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 451.847 451.847;"
                    xml:space="preserve" class="w-5 h-5 cursor-pointer transform mr-2"
                    :class="filtOpen?'-rotate-180 duration-500':'rotate-0 duration-500'">
                    <g>
                        <path
                            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
                            c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
                            c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
                    </g>
                </svg>
            </div>
            <div class="grid grid-cols-6 gap-1 ml-1" x-cloak x-show.transition.duration.500ms="filtOpen"
                x-transition:enter="transition ease-out duration-200"
                x-transition:enter-start="opacity-0 transform scale-90"
                x-transition:enter-end="opacity-100 transform scale-100"
                x-transition:leave="transition ease-in duration-200"
                x-transition:leave-start="opacity-100 transform scale-100"
                x-transition:leave-end="opacity-0 transform scale-90">
                <div class="border-r">
                    <h6 class="underline">Terapia</h6>
                    <div
                        class="grid grid-cols-2 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                        <div>Hoy</div>
                        <div>22/09/23</div>
                        <div>Semana</div>
                        <div>38</div>
                                                <div>Paciente </div>
                        <div>
                            <button
                                :class="{'bg-blue-300' : true, 'cursor-not-allowed' : true }"
                                :disabled="true"
                                wire:click="selectPatients(3)"
                                class="border rounded-md mb-1 hover:bg-blue-100" data-id="3">Kovacs, Alejandro</button>
                        </div>
                                                <div class="row-span-2 flex items-center justify-center border-t">
                        </div>
                        <div class="border-t pt-1">
                            
                        </div>

                        <div>
                            
                        </div>
                    </div>
                    <div class="flex flex-wrap content-end h-24 mt-8 mr-1">
                        <h6 class="underline w-full mb-1">Consultas rápidas</h6>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    class="border rounded-md w-full hover:bg-blue-100 px-1"
                                    wire:click="filtered_by_options('score')">Ponderado</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    class="bg-blue-300 border rounded-md w-full hover:bg-blue-100 px-1"
                                    wire:click="filtered_by_options('answer_numeric')">Promedio</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button :class="{'bg-blue-300': semanas[0] == 38}"
                                    class="border rounded-md w-full hover:bg-blue-100 px-1"
                                    @click="weekRange(38);">Ult.
                                    semana</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    :class="{'bg-blue-300': semanas[0] == 37 && semanas[1] == 38 }"
                                    class="border rounded-md w-full hover:bg-blue-100 px-1"
                                    @click="weekRange(37); weekRange(38);">Ult.
                                    15 días</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    :class="{'bg-blue-300': anio == 2023 && (meses.length == 2 && meses[0] == 8 && meses[1] == 8) && !semanas.length && !dias.length }"
                                    wire:click="mespasado" class="border rounded-md w-full hover:bg-blue-100 px-1">Ult.
                                    mes</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    :class="{'bg-blue-300': anio == 2023 && (meses.length == 2 && meses[0] == 6 && meses[1] == 8) && !dias.length && !semanas.length}"
                                    wire:click="ulttrimestre"
                                    class="border rounded-md w-full hover:bg-blue-100 px-1">Ult. trimestre</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    :class="{'bg-blue-300': anio == 2023 && (meses.length == 2 && meses[0] == 3 && meses[1] == 8) && !dias.length && !semanas.length}"
                                    wire:click="ultsemestre"
                                    class="border rounded-md w-full hover:bg-blue-100 px-1">Ult. semestre</button>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="h-6 flex justify-center">
                                <button
                                    :class="{'bg-blue-300': anio == 2022 && !meses.length && !dias.length && !semanas.length}"
                                    wire:click="ultanio" class="border rounded-md w-full hover:bg-blue-100 px-1">Ult.
                                    año</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-5 flex">
                    <div class="border-r mr-1 2xl:w-1/12">
                        <h6 class="underline">Año</h6>
                        <ul
                            class="h-40 pr-1 pt-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                                        <li class="cursor-pointer hover:bg-blue-100 rounded-md mb-1 border 2xl:text-center 2xl:p-1 "
                                wire:click="selectAnio(2021)">2021</li>
                                                        <li class="cursor-pointer hover:bg-blue-100 rounded-md mb-1 border 2xl:text-center 2xl:p-1 "
                                wire:click="selectAnio(2022)">2022</li>
                                                        <li class="cursor-pointer hover:bg-blue-100 rounded-md mb-1 border 2xl:text-center 2xl:p-1 bg-blue-300"
                                wire:click="selectAnio(2023)">2023</li>
                                                    </ul>
                    </div>
                    <div class="border-r mr-1 min-w-min 2xl:w-1/12">
                        <h6 class="underline">Mes</h6>
                        <div
                            class="h-40 grid grid-cols-3 pr-1 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 1 > meses[0] && 1 < meses[1], 'cursor-not-allowed': meses.length == 1 && 1 < meses[0] }"
                                    :disabled="meses.length == 1 && 1 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(1)">1</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 2 > meses[0] && 2 < meses[1], 'cursor-not-allowed': meses.length == 1 && 2 < meses[0] }"
                                    :disabled="meses.length == 1 && 2 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(2)">2</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 3 > meses[0] && 3 < meses[1], 'cursor-not-allowed': meses.length == 1 && 3 < meses[0] }"
                                    :disabled="meses.length == 1 && 3 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(3)">3</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 4 > meses[0] && 4 < meses[1], 'cursor-not-allowed': meses.length == 1 && 4 < meses[0] }"
                                    :disabled="meses.length == 1 && 4 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(4)">4</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 5 > meses[0] && 5 < meses[1], 'cursor-not-allowed': meses.length == 1 && 5 < meses[0] }"
                                    :disabled="meses.length == 1 && 5 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(5)">5</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 6 > meses[0] && 6 < meses[1], 'cursor-not-allowed': meses.length == 1 && 6 < meses[0] }"
                                    :disabled="meses.length == 1 && 6 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(6)">6</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 7 > meses[0] && 7 < meses[1], 'cursor-not-allowed': meses.length == 1 && 7 < meses[0] }"
                                    :disabled="meses.length == 1 && 7 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(7)">7</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 8 > meses[0] && 8 < meses[1], 'cursor-not-allowed': meses.length == 1 && 8 < meses[0] }"
                                    :disabled="meses.length == 1 && 8 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(8)">8</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 9 > meses[0] && 9 < meses[1], 'cursor-not-allowed': meses.length == 1 && 9 < meses[0] }"
                                    :disabled="meses.length == 1 && 9 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(9)">9</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 10 > meses[0] && 10 < meses[1], 'cursor-not-allowed': meses.length == 1 && 10 < meses[0] }"
                                    :disabled="meses.length == 1 && 10 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(10)">10</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 11 > meses[0] && 11 < meses[1], 'cursor-not-allowed': meses.length == 1 && 11 < meses[0] }"
                                    :disabled="meses.length == 1 && 11 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(11)">11</button>
                            </div>
                                                        <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': meses.length == 2 && 12 > meses[0] && 12 < meses[1], 'cursor-not-allowed': meses.length == 1 && 12 < meses[0] }"
                                    :disabled="meses.length == 1 && 12 < meses[0]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="mesRange(12)">12</button>
                            </div>
                                                    </div>
                        <div class="flex items-center justify-center h-10 mt-8">
                            <button x-cloak x-show="meses.length" @click="clearMeses">
                                <svg class="h-6 w-6" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                    enable-background="new 0 0 48 48">
                                    <polygon fill="#F57C00" points="29,23 19,23 7,9 41,9" />
                                    <g fill="#FF9800">
                                        <polygon points="29,38 19,44 19,23 29,23" />
                                        <path
                                            d="M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z" />
                                    </g>
                                    <circle fill="#F44336" cx="38" cy="38" r="10" />
                                    <rect x="32" y="36" fill="#fff" width="12" height="4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="border-r mr-1 min-w-min 2xl:w-2/12">
                        <h6 class="underline">Semana</h6>
                        <div
                            class="h-48 grid grid-cols-8 pr-1 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                             <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 1 > semanas[0] && 1 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 1 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 1 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(1)">1</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 2 > semanas[0] && 2 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 2 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 2 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(2)">2</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 3 > semanas[0] && 3 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 3 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 3 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(3)">3</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 4 > semanas[0] && 4 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 4 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 4 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(4)">4</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 5 > semanas[0] && 5 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 5 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 5 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(5)">5</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 6 > semanas[0] && 6 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 6 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 6 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(6)">6</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 7 > semanas[0] && 7 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 7 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 7 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(7)">7</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 8 > semanas[0] && 8 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 8 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 8 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(8)">8</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 9 > semanas[0] && 9 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 9 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 9 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(9)">9</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 10 > semanas[0] && 10 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 10 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 10 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(10)">10</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 11 > semanas[0] && 11 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 11 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 11 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(11)">11</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 12 > semanas[0] && 12 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 12 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 12 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(12)">12</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 13 > semanas[0] && 13 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 13 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 13 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(13)">13</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 14 > semanas[0] && 14 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 14 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 14 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(14)">14</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 15 > semanas[0] && 15 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 15 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 15 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(15)">15</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 16 > semanas[0] && 16 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 16 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 16 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(16)">16</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 17 > semanas[0] && 17 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 17 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 17 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(17)">17</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 18 > semanas[0] && 18 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 18 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 18 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(18)">18</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 19 > semanas[0] && 19 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 19 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 19 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(19)">19</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 20 > semanas[0] && 20 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 20 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 20 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(20)">20</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 21 > semanas[0] && 21 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 21 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 21 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(21)">21</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 22 > semanas[0] && 22 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 22 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 22 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(22)">22</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 23 > semanas[0] && 23 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 23 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 23 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(23)">23</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 24 > semanas[0] && 24 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 24 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 24 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(24)">24</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 25 > semanas[0] && 25 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 25 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 25 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(25)">25</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 26 > semanas[0] && 26 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 26 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 26 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(26)">26</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 27 > semanas[0] && 27 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 27 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 27 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(27)">27</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 28 > semanas[0] && 28 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 28 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 28 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(28)">28</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 29 > semanas[0] && 29 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 29 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 29 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(29)">29</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 30 > semanas[0] && 30 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 30 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 30 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(30)">30</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 31 > semanas[0] && 31 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 31 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 31 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(31)">31</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 32 > semanas[0] && 32 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 32 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 32 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(32)">32</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 33 > semanas[0] && 33 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 33 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 33 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(33)">33</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 34 > semanas[0] && 34 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 34 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 34 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(34)">34</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 35 > semanas[0] && 35 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 35 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 35 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(35)">35</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 36 > semanas[0] && 36 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 36 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 36 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(36)">36</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 37 > semanas[0] && 37 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 37 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 37 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(37)">37</button>
                        </div>
                         <div class="flex items-center justify-center">
                                <button
                                    :class="{ 'bg-blue-100': semanas.length == 2 && 38 > semanas[0] && 38 < semanas[1], 'cursor-not-allowed text-gray-300': semanas.length == 1 && 38 < semanas[0] || meses.length == 2 && meses[0] == meses[1]}"
                                    :disabled="semanas.length == 1 && 38 < semanas[0] || meses.length == 2 && meses[0] == meses[1]"
                                    class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                    @click="weekRange(38)">38</button>
                        </div>
                                            </div>
                    <div class="flex items-center justify-center h-10">
                        <button x-cloak x-show="semanas.length" @click="clearWeeks">
                            <svg class="h-6 w-6" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                                enable-background="new 0 0 48 48">
                                <polygon fill="#F57C00" points="29,23 19,23 7,9 41,9" />
                                <g fill="#FF9800">
                                    <polygon points="29,38 19,44 19,23 29,23" />
                                    <path
                                        d="M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z" />
                                </g>
                                <circle fill="#F44336" cx="38" cy="38" r="10" />
                                <rect x="32" y="36" fill="#fff" width="12" height="4" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="border-r mr-1 min-w-min 2xl:w-2/12">
                    <h6 class="underline">Día</h6>
                    <div
                        class="h-40 grid grid-cols-7 pr-1 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                         <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 1 > dias[0] && 1 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 1 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 1 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(1)">1</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 2 > dias[0] && 2 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 2 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 2 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(2)">2</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 3 > dias[0] && 3 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 3 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 3 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(3)">3</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 4 > dias[0] && 4 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 4 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 4 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(4)">4</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 5 > dias[0] && 5 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 5 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 5 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(5)">5</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 6 > dias[0] && 6 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 6 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 6 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(6)">6</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 7 > dias[0] && 7 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 7 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 7 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(7)">7</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 8 > dias[0] && 8 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 8 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 8 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(8)">8</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 9 > dias[0] && 9 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 9 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 9 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(9)">9</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 10 > dias[0] && 10 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 10 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 10 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(10)">10</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 11 > dias[0] && 11 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 11 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 11 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(11)">11</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 12 > dias[0] && 12 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 12 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 12 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(12)">12</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 13 > dias[0] && 13 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 13 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 13 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(13)">13</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 14 > dias[0] && 14 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 14 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 14 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(14)">14</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 15 > dias[0] && 15 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 15 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 15 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(15)">15</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 16 > dias[0] && 16 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 16 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 16 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(16)">16</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 17 > dias[0] && 17 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 17 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 17 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(17)">17</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 18 > dias[0] && 18 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 18 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 18 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(18)">18</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 19 > dias[0] && 19 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 19 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 19 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(19)">19</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 20 > dias[0] && 20 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 20 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 20 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(20)">20</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 21 > dias[0] && 21 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 21 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 21 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(21)">21</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 22 > dias[0] && 22 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 22 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 22 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(22)">22</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 23 > dias[0] && 23 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 23 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 23 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(23)">23</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 24 > dias[0] && 24 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 24 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 24 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(24)">24</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 25 > dias[0] && 25 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 25 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 25 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(25)">25</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 26 > dias[0] && 26 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 26 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 26 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(26)">26</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 27 > dias[0] && 27 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 27 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 27 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(27)">27</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 28 > dias[0] && 28 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 28 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 28 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(28)">28</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 29 > dias[0] && 29 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 29 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 29 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(29)">29</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 30 > dias[0] && 30 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 30 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 30 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(30)">30</button>
                    </div>
                     <div class="flex items-center justify-center">
                            <button
                                :class="{ 'bg-blue-100': dias.length == 2 && 31 > dias[0] && 31 < dias[1], 'cursor-not-allowed text-gray-300': dias.length == 1 && 31 < dias[0] || meses.length < 1 || meses[0] != meses[1]}"
                                :disabled="dias.length == 1 && 31 < dias[0] || meses.length < 1 || meses[0] != meses[1]"
                                class="cursor-pointer border rounded-md p-1 hover:bg-blue-100 "
                                @click="diasRange(31)">31</button>
                    </div>
                                    </div>
                <div class="flex items-center justify-center h-10 mt-8">
                    <button x-cloak x-show="dias.length" @click="clearDays">
                        <svg class="h-6 w-6" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48">
                            <polygon fill="#F57C00" points="29,23 19,23 7,9 41,9" />
                            <g fill="#FF9800">
                                <polygon points="29,38 19,44 19,23 29,23" />
                                <path
                                    d="M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z" />
                            </g>
                            <circle fill="#F44336" cx="38" cy="38" r="10" />
                            <rect x="32" y="36" fill="#fff" width="12" height="4" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-28 sm:w-24 border-r mr-1 2xl:w-2/12">
                <h6 class="underline">Niveles</h6>
                <div
                    class=" pr-2 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-x-hidden overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('BASICAS')">BASICAS</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('SEGURIDAD')">SEGURIDAD</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('SOCIALES')">SOCIALES</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('OCIO')">OCIO</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('AUTOESTIMA')">AUTOESTIMA</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('AUTOREALIZACION')">AUTOREALIZACION</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('GENERAL')">GENERAL</p>
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 2xl:text-center "
                        wire:click="verNiveles('EVENTOS')">EVENTOS</p>
                                    </div>
                <div class="flex items-center justify-center h-10 mt-8">
                    <button x-cloak x-show="selectedQtypes.length" @click="clearQtypes">
                        <svg class="h-6 w-6" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48">
                            <polygon fill="#F57C00" points="29,23 19,23 7,9 41,9" />
                            <g fill="#FF9800">
                                <polygon points="29,38 19,44 19,23 29,23" />
                                <path
                                    d="M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z" />
                            </g>
                            <circle fill="#F44336" cx="38" cy="38" r="10" />
                            <rect x="32" y="36" fill="#fff" width="12" height="4" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="sm:max-w-xxs xl:max-w-md 2xl:w-4/12">
                <h6 class="underline">Preguntas</h6>
                <div
                    class="h-56 pr-2 pt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-x-hidden overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                        <p class="cursor-pointer truncate border p-1 rounded-md hover:bg-blue-100 "
                        wire:click="verPreguntas('70')">
                        ¿Cómo te percibís a nivel general?
                    </p>
                                    </div>
                <div class="flex items-center justify-center h-10 mt-8">
                    <button x-cloak x-show="selectedQuestions.length" wire:click="clearSQuestions">
                        <svg class="h-6 w-6" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                            enable-background="new 0 0 48 48">
                            <polygon fill="#F57C00" points="29,23 19,23 7,9 41,9" />
                            <g fill="#FF9800">
                                <polygon points="29,38 19,44 19,23 29,23" />
                                <path
                                    d="M41.5,9h-35C5.7,9,5,8.3,5,7.5v0C5,6.7,5.7,6,6.5,6h35C42.3,6,43,6.7,43,7.5v0C43,8.3,42.3,9,41.5,9z" />
                            </g>
                            <circle fill="#F44336" cx="38" cy="38" r="10" />
                            <rect x="32" y="36" fill="#fff" width="12" height="4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-span-4 card py-1 custom-size-text" x-show.transition.duration.500ms="!filtOpen"
    :class="{'h-50':fscreendash}">
    <div class="mb-2 h-full">
        <div class="grid grid-cols-12 h-full">
            <div class="col-span-2 border-r bg-white">
                <h5 class="font-medium text-center">Ponderado Histórico</h5>
                <div class="h-full flex justify-center items-center">
                    <div id="historico_chart" class="w-full h-full py-2"></div>
                </div>
            </div>
            <div class="col-span-2 border-r bg-white">
                <h5 class="font-medium text-center">Ponderado Rango Tiempo</h5>
                <div class="h-full flex justify-center items-center">
                    <div id="rangetime_chart" class="w-full h-full py-2"></div>
                </div>
            </div>
            <div class="border-r bg-white">
                <div class="h-1/4">
                    <h5 class="font-medium text-center">Ult. día carga</h5>
                    <h6 class="text-center font-normal">0 %</h6>
                </div>
                <div class="h-1/4">
                    <h5 class="font-medium text-center">Ultima semana</h5>
                    <div class="text-center font-normal">0 %</div>
                </div>
                <div class="h-1/4">
                    <h5 class="font-medium text-center">Ultimo mes</h5>
                    <div class="text-center font-normal">0 %</div>
                </div>
                <div class="h-1/4">
                    <h5 class="font-medium text-center">Ultimo año</h5>
                    <div class="text-center font-normal">0 %</div>
                </div>
            </div>
            <div class="col-span-7 bg-white">
                <h5 class="font-medium text-center">Estado diario</h5>
                <div class="h-full flex justify-center items-center">
                    <div id="dailystate_chart" class="w-full h-full py-1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-span-4 card py-1 custom-size-text"
    :class="{'lg:height-three-quarter-screen md:height-three-quarter-screen-14':fscreendash}">
    <div class="grid grid-cols-9 h-full">
        <div class="col-span-2 grid grid-cols-9">
            <div class="col-span-1 flex flex-col">
                <div class="h-full  flex items-center justify-center bg-blue-300  shadow-inner ">
                    <h5 class="font-bold text-center transform -rotate-90">Niveles</h5>
                </div>
                <div class="h-full  flex items-center justify-center bg-blue-300  shadow-inner ">
                    <h5 class="font-bold text-center transform -rotate-90">Preguntas</h5>
                </div>
            </div>
            <div class="col-span-8 bg-white">
                <div class="h-1/2 flex justify-center items-center border-blue-600 border-b border-t">
                    <div id="niveles_chart" class="w-full h-full py-1"></div>
                </div>
                <div class="h-1/2 flex justify-center items-center border-blue-600 border-b">
                    
                    <div id="pregval_chart" class="w-full h-full py-1"></div>
                </div>
            </div>
        </div>
        <div class="col-span-4 border-r bg-white">
            <div class="h-1/2 flex justify-center items-center border-blue-600 border-b border-t border-r">
                <div id="niveline_chart" class="h-full w-full py-1"></div>
            </div>
            <div class="h-1/2 flex justify-center items-center border-blue-600 border-b border-r">
                <div id="preguntline_chart" class="h-full w-full py-1"></div>
            </div>
        </div>
        <div class="col-span-3 bg-white">
            <div class="h-10  flex items-center justify-center bg-blue-300 shadow-inner  border-blue-600 border-t">
                <h5 class="font-bold text-center">Palabras Clave</h5>
            </div>
            <div class="w-full flex justify-center items-center">
                <div id="wordcloud_chart" class="h-40 w-full"></div>
            </div>
            <div :class="{'lg:h-72 lg:max-h-72 md:h-50 md:max-h-50 h-full':fscreendash,'lg:h-64 lg:max-h-64 md:h-40 md:max-h-40 h-full':!fscreendash}"
                class="mt-1 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-white overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <table class="min-w-full divide-y divide-gray-200 ">
                    <thead class="bg-blue-300 shadow-inner sticky top-0">
                        <tr>
                            <th scope="col" class="font-medium text-text-500 uppercase text-left pl-2">
                                Fecha
                            </th>
                            <th scope="col" class="font-medium text-text-500 uppercase text-left pl-2">
                                Cod
                            </th>
                            <th scope="col" class="font-medium text-text-500 uppercase text-left pl-2">
                                Val
                            </th>
                            <th scope="col" class="font-medium text-text-500 uppercase text-left pl-2">
                                Respuesta
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tabla" class="bg-transparent divide-y divide-gray-100 ">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>

    
    
        
                        
        
    
</div>
<style>
    @import  "https://code.highcharts.com/css/highcharts.css";

    [x-cloak] {
        display: none !important;
    }

    .custom-size-text {
        font-size: 0.75rem;
        line-height: 1rem;
    }

    @media (max-width: 1024px) {
        .custom-size-text {
            font-size: 0.50rem;
            line-height: 0.75rem;
        }
    }

    .highcharts-container {
        z-index: auto !important;
    }

    .highcharts-background {
        fill: #efefef;
        stroke: #a4edba;
        stroke-width: 2px;
        background-color: rgba(255, 255, 255, 1);
    }
</style>

<script type="text/javascript">
    function dashboard(){
        return {
            filtOpen:true,
            fscreendash:false,
            anio:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedAnio'),
            meses:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedMes'),
            semanas:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedWeek'),
            dias:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedDay'),
            selectedQtypes:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedQtypes'),
            selectedQuestions:window.Livewire.find('7YMR26NELYlCsHuHEKst').entangle('selectedQuestions'),
            toggleFullScreen(){
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                    this.fscreendash = true;
                } else {
                    if (document.exitFullscreen) {
                    document.exitFullscreen();
                    this.fscreendash = false;
                    }
                }
                window.addEventListener('fullscreenchange', (event) => {
                    if (!document.fullscreenElement) {
                        this.fscreendash = false;
                    }
                });
            },
            mesRange(mes){
                if(this.meses.length){
                    if(this.meses.length == 1){
                        this.meses.push(mes);
                        this.$wire.mesRange(this.meses);
                    } else {
                        this.meses = [mes];
                        this.$wire.mesRange(this.meses);
                    }
                } else {
                    this.meses.push(mes);
                    this.$wire.mesRange(this.meses);
                }
            },
            clearMeses(){
                this.semanas = [];
                this.meses = [];
                this.$wire.mesRange(this.meses);
                this.$wire.weekRange(this.semanas);
            },
            clearQtypes(){
                this.$wire.clearQtypes();
            },
            weekRange(semana){
                if(this.semanas.length){
                    if(this.semanas.length == 1){
                        this.semanas.push(semana);
                        this.$wire.weekRange(this.semanas);
                    } else {
                        this.semanas = [semana];
                        this.$wire.weekRange(this.semanas);
                    }
                } else {
                    this.semanas.push(semana);
                    this.$wire.weekRange(this.semanas);
                }
            },
            clearWeeks(){
                this.semanas = [];
                this.$wire.weekRange(this.semanas);
            },
            diasRange(dia){
                if(this.dias.length){
                    if(this.dias.length == 1){
                        this.dias.push(dia);
                        this.$wire.daysRange(this.dias);
                    } else {
                        this.dias = [dia];
                        this.$wire.daysRange(this.dias);
                    }
                } else {
                    this.dias.push(dia);
                    this.$wire.daysRange(this.dias);
                }
            },
            clearDays(){
                this.dias = [];
                this.$wire.daysRange(this.dias);
            }
        }
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        var words = "";
        var niveline = {"dates":[],"series":[]};
        var preguntline = {"dates":[],"series":[]};
        var dailyState = {"dates":[],"series":[]};
        var dataNivelesProm = [];
        var dataPregProm = [];
        var dataHistoricProm = [{"name":"Hist\u00f3rico","data":[0]}];
        var dataRangeProm = [{"name":"Rango Tiempo","data":[0]}];
        var preguntas = [];

        var lines = words ? words.split(/[,\. ]+/g) : '';
        var words = Highcharts.reduce(lines, function (arr, word) {
                    var obj = Highcharts.find(arr, function (obj) {
                        return obj.name === word;
                    });
                    if (obj) {
                        obj.weight += 1;
                    } else {
                        obj = {
                            name: word,
                            weight: 1
                        };
                        arr.push(obj);
                    }
                    return arr;
                }, []);
        this.renderGrafico(words, dataNivelesProm, dataHistoricProm, dataRangeProm, dailyState, dataPregProm, niveline, preguntline, preguntas);
    });

    window.addEventListener('renderChart', ({detail}) => {
        var words = detail.words;
        var niveline = detail.nivelineData;
        var preguntline = detail.preguntlineData;
        var dailyState = detail.promDiario;
        var dataNivelesProm = detail.nivelesProm;
        var dataPregProm = detail.preguntasProm;
        var dataHistoricProm = detail.dataHistoricProm;
        var dataRangeProm = detail.dataRangeProm;
        var preguntas = detail.preguntas;

        var lines = words ? words.split(/[,\. ]+/g) : '';
        var aux_words = Highcharts.reduce(lines, function (arr, word) {
                    var obj = Highcharts.find(arr, function (obj) {
                        return obj.name === word;
                    });
                    if (obj) {
                        obj.weight += 1;
                    } else {
                        obj = {
                            name: word,
                            weight: 1
                        };
                        arr.push(obj);
                    }
                    return arr;
                }, []);
                this.renderGrafico(aux_words, dataNivelesProm, dataHistoricProm, dataRangeProm, dailyState, dataPregProm, niveline, preguntline, preguntas);
            }, false);

    function renderGrafico(aux_words, dataNivelesProm, dataHistoricProm, dataRangeProm, dailyState, dataPregProm, niveline, preguntline, preguntas){
        const tabla = document.getElementById('tabla');
        preguntas.forEach(element => {

            var row = document.createElement("tr");

            var fecha = document.createElement("td");
            fecha.className = "whitespace-nowrap";
            var textoFecha = document.createTextNode(element.answered_at);

            var cod = document.createElement("td");
            cod.className = "whitespace-nowrap";
            var textoCod = document.createTextNode(element.level);

            var val = document.createElement("td");
            val.className = "whitespace-nowrap";
            var textoVal = document.createTextNode(element.answer_numeric);

            var tex = document.createElement("td");
            tex.className = "whitespace-nowrap";
            var textoTex = document.createTextNode(element.answer_text?element.answer_text:'');

            fecha.appendChild(textoFecha);
            cod.appendChild(textoCod);
            val.appendChild(textoVal);
            tex.appendChild(textoTex);

            row.appendChild(fecha);
            row.appendChild(cod);
            row.appendChild(val);
            row.appendChild(tex);

            tabla.appendChild(row);
        });

        let seriesNivelesProm = [];
        Object.keys(dataNivelesProm).forEach(function(key) {
            seriesNivelesProm.push({
                name: dataNivelesProm[key].name,
                data: dataNivelesProm[key].data
            });
        });

        let seriesHistoricProm = [];
        Object.keys(dataHistoricProm).forEach(function(key) {
            seriesHistoricProm.push({
                name: dataHistoricProm[key].name,
                data: dataHistoricProm[key].data
            });
        });

        let seriesRangeProm = [];
        Object.keys(dataRangeProm).forEach(function(key) {
            seriesRangeProm.push({
                name: dataRangeProm[key].name,
                data: dataRangeProm[key].data
            });
        });

        let seriesPreguntasProm = [];
        Object.keys(dataPregProm).forEach(function(key) {
            seriesPreguntasProm.push({
                name: dataPregProm[key].name,
                data: dataPregProm[key].data
            });
        });

        /*********  PROMEDIO HISTORICO *********/
        Highcharts.chart('historico_chart', {
            chart: {
                type: 'column',
                spacingTop: 0,
                backgroundColor: '#F0F0F0',
                borderColor: '#E5E5E5'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis:{
                labels: {
                    enabled: false
                }
            },
            yAxis:{

                title: true,
                labels: {
                    enabled:true,
                    style: {
                        fontSize: "0.5rem"
                    }
                },
                categories: ['Valoración']
            },
            tooltip: {
                valueSuffix: '',
                backgroundColor: '#fafafa'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled:false,
                floating: false,

            },
            credits: {
                enabled: false
            },
            series: seriesHistoricProm
        });


        /*********  PROMEDIO RANGO TIEMPO *********/
        Highcharts.chart('rangetime_chart', {
                chart: {
                    type: 'column',
                    spacingTop: 0,
                    backgroundColor: '#F0F0F0',
                    borderColor: '#E5E5E5'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis:{
                    labels: {
                        enabled: false
                    }
                },
                yAxis:{
                    title: true,
                    labels: {
                        enabled:true,
                        style: {
                            fontSize: "0.5rem"
                        }
                    },
                    categories: ['Valoración']
                },
                tooltip: {
                    valueSuffix: '',
                    backgroundColor: '#fafafa'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                enabled:false,
                floating: false,

                },
                credits: {
                    enabled: false
                },
                series: seriesRangeProm
        });

        /*********  PROMEDIO NIVELES *********/
        Highcharts.chart('niveles_chart', {
            chart: {
                type: 'column',
                spacingTop: 0,
                backgroundColor: '#F0F0F0',
                borderColor: '#E5E5E5'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                enabled:false,
                labels:{
                    enabled:false
                },
                categories: ['Valoración']
            },
            yAxis: {
                enabled:false,
                title:{
                    enabled:false
                }
            },

            tooltip: {
                valueSuffix: '',
                backgroundColor: '#fafafa'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled:false,
                floating: false,

            },
            credits: {
                enabled: false
            },
            series: seriesNivelesProm
        });

        Highcharts.chart('niveline_chart', {
            xAxis: {
                categories: niveline.dates,
            },
            yAxis: {
                title: {
                text: ''
                }
            },
            legend: {
                enabled:false,
                floating: false,
            },
            title:{
                text:''
            },
            plotOptions: {
                series: {
                    label: {
                    connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true,
                        text: 'Etiqueta',
                        backgroundColor: 'white', // Establece el color de fondo en blanco
                        align: 'center',
                        verticalAlign: 'middle',
                        style: {
                            fontSize: '12px'
                        }
                    },
                }
            },
            tooltip: {
                useHTML: true,
                formatter: function(){
                    const preg = this.series.name;
                    const date = this.x;
                    const row = niveline.series.filter((el) => el.name == preg);
                    const data = row[0].data;
                    const dataRow = data.find(el => el[0] == date);
                    const ponde = dataRow[2];
                    let ponderacion = "";
                    if(ponde){
                        ponderacion = `<p><span class="font-medium underline">Ponderación:</span> ${ponde}%</p>`;
                    }
                    return `
                        <b>${this.x}</b><br>
                        <b>${this.series.name}</b><br><hr>
                        <div class="flex items-center justify-center p-2">
                            <span class="border border-gray-400 rounded-full px-4 ">${this.y}</span>
                        </div>
                        ${ponderacion}
                    `;
                },
                backgroundColor: '#fafafa'
            },
            credits:{
                enabled:false
            },
            series: niveline.series,

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }

            });

        /*********  PREGUNTAS VALORACION *********/
        Highcharts.chart('pregval_chart', {
            chart: {
                type: 'column',
                spacingTop: 0,
                backgroundColor: '#F0F0F0',
                borderColor: '#E5E5E5'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                enabled:false,
                labels:{
                    enabled:false
                }
            },
            yAxis: {
                enabled:false,
                title:{
                    enabled:false
                }
            },

            tooltip: {
                valueSuffix: '',
                backgroundColor: '#fafafa'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled:false,
                floating: false,

            },
            credits: {
                enabled: false
            },
            series: seriesPreguntasProm
        });

        Highcharts.chart('preguntline_chart', {
            xAxis: {
                categories: preguntline.dates,
            },

            yAxis: {
                title: {
                text: ''
                }
            },

            title:{
                text:''
            },
            legend: {
                enabled:false,
                floating: false,

            },


            plotOptions: {
                series: {
                    cursor:'pointer',
                    point: {
                        /* events: {
                            click: function () {
                                alert('Category: ' + this.category + ', value: ' + this.y);
                            }
                        } */
                    },
                    label: {
                        connectorAllowed: false
                    },
                    dataLabels: {
                        enabled: true,
                        text: 'Etiqueta',
                        backgroundColor: 'white', // Establece el color de fondo en blanco
                        align: 'center',
                        verticalAlign: 'middle',
                        style: {
                            fontSize: '12px'
                        }
                    },

                }
            },
            tooltip: {
                        useHTML: true,
                        formatter: function(){
                            const preg = this.series.name;
                            const date = this.x;
                            const row = preguntline.series.filter((el) => el.name == preg);
                            const data = row[0].data;
                            const dataRow = data.find(el => el[0] == date);
                            const resp = dataRow[2];
                            const ponde = dataRow[3];
                            let respuesta = "";
                            if(resp){
                                respuesta = `<p><span class="font-medium underline">Respuesta:</span> ${resp}</p>`;
                            }
                            let ponderacion = "";
                            if(ponde){
                                ponderacion = `<p><span class="font-medium underline">Ponderación:</span> ${ponde}%</p>`;
                            }
                            return `
                                <b>${this.x}</b><br>
                                <b>${this.series.name}</b><br><hr>
                                <div class="flex items-center justify-center p-2">
                                    <span class="border border-gray-400 rounded-full px-4 ">${this.y}</span>
                                </div>
                                ${respuesta}
                                ${ponderacion}
                            `;
                        },
                backgroundColor: '#fafafa'
                    },

            series: preguntline.series,
            credits:{
                enabled:false
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            },


        });

        /*********  CLOUDWORDS *********/
        Highcharts.chart('wordcloud_chart', {
            chart:{
                spacingTop: 0,
                backgroundColor: '#F0F0F0',
                borderColor: '#E5E5E5'
            },
            series: [{
                type: 'wordcloud',
                data: aux_words,
                name: 'Ocurrencias',
                dataLabels: {
                    enabled: true,
                    text: 'Etiqueta',
                    backgroundColor: 'white', // Establece el color de fondo en blanco
                    align: 'center',
                    verticalAlign: 'middle',
                    style: {
                        fontSize: '12px'
                    }
                },
            }],
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },

        });

        Highcharts.chart('dailystate_chart', {
            chart: {
                zoomType: 'x',
                spacingTop: 0,
                backgroundColor: '#F0F0F0',
                borderColor: '#E5E5E5'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: dailyState.dates,
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                fillColor: {
                    linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                    },
                    stops: [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                    lineWidth: 1
                    }
                },
                threshold: null
                }
            },
            series: [{
                type: 'area',
                data: dailyState.series,
                name: 'Ponderación Diaria',
                label: {
                    enabled:true
                },
                dataLabels: {
                    enabled: true,
                    text: 'Etiqueta',
                    backgroundColor: 'white', // Establece el color de fondo en blanco
                    align: 'center',
                    verticalAlign: 'middle',
                    style: {
                        fontSize: '12px'
                    }
                },
            }]
        });

    }


</script>

<!-- Livewire Component wire-end:7YMR26NELYlCsHuHEKst -->
</div>





<script>
    function show(){
        return {
            showTherapy:true,
            showPatient:true,
            openPatient:true,
            /* showTeam:true, */
            showSessions:true,
            showPonderaciones:true,
            showNiveles:true,
            showCalendar:true,
            showDataTracking:true,
            filtSessions:false,
            filtPonde:false,
            filtNiveles:false,
            filtCalendar:false,
            filtDataTracking:false,
            listenFullScreen(){
                document.addEventListener('fullscreenchange', (event) => {
                    if (document.fullscreenElement) {
                        this.showTherapy=false;
                        this.showPatient=false;
                        /* this.showTeam=false; */
                        this.showSessions=false;
                        this.showPonderaciones=false;
                        this.showNiveles=false;
                        this.showCalendar=false;
                        this.showDataTracking=false;
                    } else {
                        this.showTherapy=true;
                        this.showPatient=true;
                        /* this.showTeam=true; */
                        this.showSessions=true;
                        this.showPonderaciones=true;
                        this.showNiveles=true;
                        this.showCalendar=true;
                        this.showDataTracking=true;
                    }
                });
            },
        }
    }
</script>


                    </div>
                </main>
            </div>

        </div>




    </div>

    <script>
    document.addEventListener('livewire:load', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'listMonth',
            themeSystem: 'standard',
            height: 650,
            locale: 'es',
            headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            },
            events: []        });

        calendar.setOption('locale', 'es');
        calendar.render();
    });
      
  
</script>

    <!-- Livewire Scripts -->

<script src="/livewire/livewire.js?id=5cdaa3ec393c09829366" data-turbo-eval="false" data-turbolinks-eval="false" ></script>
<script data-turbo-eval="false" data-turbolinks-eval="false" >
    if (window.livewire) {
	    console.warn('Livewire: It looks like Livewire\'s @livewireScripts JavaScript assets have already been loaded. Make sure you aren\'t loading them twice.')
	}

    window.livewire = new Livewire();
    window.livewire.devTools(true);
    window.Livewire = window.livewire;
    window.livewire_app_url = '';
    window.livewire_token = 'wPA8NbqwbuSPeYcZvEIutKV8VnU62Sp3FVNkq5zx';

	/* Make sure Livewire loads first. */
	if (window.Alpine) {
	    /* Defer showing the warning so it doesn't get buried under downstream errors. */
	    document.addEventListener("DOMContentLoaded", function () {
	        setTimeout(function() {
	            console.warn("Livewire: It looks like AlpineJS has already been loaded. Make sure Livewire\'s scripts are loaded before Alpine.\\n\\n Reference docs for more info: http://laravel-livewire.com/docs/alpine-js")
	        })
	    });
	}

	/* Make Alpine wait until Livewire is finished rendering to do its thing. */
    window.deferLoadingAlpine = function (callback) {
        window.addEventListener('livewire:load', function () {
            callback();
        });
    };

    let started = false;

    window.addEventListener('alpine:initializing', function () {
        if (! started) {
            window.livewire.start();

            started = true;
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        if (! started) {
            window.livewire.start();

            started = true;
        }
    });
</script>

    <script src="https://www.web.informental.com.ar/vendor/sweetalert/sweetalert.all.js"></script>

    </body>

</html>