// ==UserScript==
// @name         Show All Courses
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  A script to expand all when selecting courses in SJTU
// @author       tauyoung
// @match        https://i.sjtu.edu.cn/xsxk/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	let btn = document.createElement("button");
	btn.innerText = "Show All Courses";
	btn.style.cssText = "position:fixed;left:15px;top:60px;z-index:10000;padding:5px 10px;font-size:12px;";
	document.body.append(btn);
	btn.onclick = function () {
		// This is the core function. Copy and paste the following lines to the browser console.
		while (!document.getElementById("nodata") &&
			document.getElementById("endsign").style.cssText.match("display: none")) {
			loadCoursesByPaged()
		}
	}
})();