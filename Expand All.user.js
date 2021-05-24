// ==UserScript==
// @name         Show All Courses
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://i.sjtu.edu.cn/xsxk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let btn = document.createElement("button");
    btn.innerText = "Show All Courses";
    btn.style.cssText = "position:fixed;left:15px;top:60px;z-index:10000;padding:5px 10px;font-size:12px;";
    document.body.append(btn);
    btn.onclick = function(){
    //document.getElementsByClassName("nav nav-tabs sl_nav_tabs")[0].onclick = function(){
        while(!document.getElementById("nodata") &&
              document.getElementById("endsign").style.cssText.match("display: none"))
        {
            loadCoursesByPaged()
        }}
})();