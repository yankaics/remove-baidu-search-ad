// ==UserScript==
// @namespace         https://www.github.com/Cat7373/

// @name              移除百度搜索的广告
// @name:en           Remove Baidu Search AD
// @name:zh           移除百度搜索的广告
// @name:zh-CN        移除百度搜索的广告

// @description       移除百度搜索的广告如搜索结果里的百度推广
// @description:en    Remove Baidu search advertising such as search results, Baidu Promotion
// @name:zh           移除百度搜索的广告如搜索结果里的百度推广
// @name:zh-CN        移除百度搜索的广告如搜索结果里的百度推广

// @homepageURL       https://github.com/Cat7373/remove-baidu-search-ad/
// @supportURL        https://github.com/Cat7373/remove-baidu-search-ad/issues/
// @updateURL         https://raw.githubusercontent.com/Cat7373/remove-baidu-search-ad/master/remove_baidu_search_ad.js

// @compatible        chrome 49.0.2623.75 + TamperMonkey + 脚本 0.1.5 测试通过
// @compatible        firefox 未测试
// @compatible        opera 未测试
// @compatible        safari 未测试

// @author            Cat73
// @version           0.1.5
// @license           LGPLv3

// @match             http://www.baidu.com/s*
// @match             https://www.baidu.com/s*
// @grant             none
// @run-at            document-end
// ==/UserScript==
'use strict';

function remove (div) {
    div.innerHTML = "";
    div.style.display = "none";
}

function clearLoop () {
    // 移除网页右边的推广
    var ec_im_container_div = document.getElementById("ec_im_container");
    if (ec_im_container_div) {
        remove(ec_im_container_div);
    }

    // 移除搜索结果头部与尾部的推广
    var result_div = document.getElementById("content_left");
    if (result_div) {
        var nodes = result_div.childNodes;
        for (var id in nodes) {
            var current = nodes[id];
            if (current.nodeName == "DIV") {
                if (current.className.indexOf("result") == -1 && current.className.indexOf("hit_top_new") == -1) {
                    remove(current);
                }
            }
        }
    }
}

setInterval(clearLoop, 500);
