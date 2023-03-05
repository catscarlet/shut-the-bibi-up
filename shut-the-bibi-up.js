// ==UserScript==
// @name                闭嘴吧逼逼话题鸡
// @name:en             SHUT the bilibili topic UP!
// @name:zh-HK          瞌嘴吧逼逼話題雞
// @name:ja             うるさい！bilibili topic！
// @description         隐藏哔哩哔哩弹幕网（www.bilibili.com）个人动态页的话题板块。眼不见心不烦啊。
// @description:zh-HK   隐藏哔哩哔哩弹幕网（www.bilibili.com）个人动态页嘅话题板块。眼唔见心唔烦嘞。
// @description:en      Hide the Bilibili(www.bilibili.com) Topic Panel. Out of sight, out of mind.
// @description:ja      Bilibili(www.bilibili.com)タイムライン ページのトピック セクションを非表示にする。知らぬが仏。
// @namespace           https://github.com/catscarlet/shut-the-bibi-up
// @version             0.0.1
// @author              catscarlet
// @match               https://t.bilibili.com/*
// @icon                https://www.bilibili.com/favicon.ico
// @run-at              document-end
// @grant               none
// @license             GNU AGPLv3
// ==/UserScript==

/*
This project is licensed under **GNU AFFERO GENERAL PUBLIC LICENSE Version 3**
*/

(function() {
    'use strict';

    bodyObserver();

    function bodyObserver() {
        let targetNode = document.querySelector('body');

        let config = {attributes: true, childList: true, subtree: true};

        function callBack(mutations, observer) {
            mutations.forEach(function(mutation) {
                let rst = findTopicPanel();

                if (rst !== null) {
                    observer.disconnect();
                    changeStyles();
                }

            });
        }

        const observer = new MutationObserver(callBack);

        observer.observe(targetNode, config);
    }

    function findTopicPanel() {
        let rst = document.querySelector('.topic-panel');

        return rst;
    }

    function changeStyles() {
        let topicPanelEle = document.querySelector('.topic-panel');

        topicPanelEle.style.display = 'none';
    }

})();

/*
This project is licensed under **GNU AFFERO GENERAL PUBLIC LICENSE Version 3**
*/
