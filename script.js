/*
 * Copyright (c) 2014
 * ==================================
 * powered by revaxarts.com (http://revaxarts.com)
 * original filename: dashboardplus.user.js
 * filesize: 951 Bytes
 * last modified: Thu, 12 Jun 2014 07:46:24 +0200
 *
 */
// ==UserScript==
// @name			Dashboard Plus for Envato Marketplaces
// @creator			userscripts@revaxarts.com
// @namespace		revaxarts.com
// @description		Dashboard Plus for the Marketplaces.
// @date			2015-09-04
// @version			1.4.9
// @include			http://activeden.net*
// @include			http://audiojungle.net*
// @include			http://themeforest.net*
// @include			http://videohive.net*
// @include			http://graphicriver.net*
// @include			http://3docean.net*
// @include			http://codecanyon.net*
// @include			http://photodune.net*
// @include			https://activeden.net*
// @include			https://audiojungle.net*
// @include			https://themeforest.net*
// @include			https://videohive.net*
// @include			https://graphicriver.net*
// @include			https://3docean.net*
// @include			https://codecanyon.net*
// @include			https://photodune.net*
// ==/UserScript==



// Define the base URI
var dashboardplus_base_uri = './bootstrap.js';

// Function to inject a script
function injectScript(srcUrl) {
    var script = document.createElement('script');
    script.src = srcUrl;
    (document.head || document.documentElement).appendChild(script);
}

// Inject the inject.js script
injectScript(chrome.runtime.getURL('inject.js'));

// Inject the bootstrap.js script from the dashboardplus base URI
injectScript(chrome.runtime.getURL('bootstrap.js'));