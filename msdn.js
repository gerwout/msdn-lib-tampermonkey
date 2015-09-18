// ==UserScript==
// @name           Make the MSDN class library full width
// @namespace      https://github.com/gerwout
// @description    Make the MSDN class library full width
// @include        https://msdn.microsoft.com/en-us/library/*
// @grant          none
// @version        0.1
// ==/UserScript==

// Make the page container span the full width.
element = document.getElementById('body');
element.style.maxWidth="100%";
element = document.getElementById('rightNavigationMenu');
element.style.display="none";
element = document.getElementById('breadcrumbDesktop');
element.style.margin="0";
element = document.getElementById('content');
element.style.margin="0";
element.style.width="83%";