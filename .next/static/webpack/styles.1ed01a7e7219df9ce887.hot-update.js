webpackHotUpdate("styles",{

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"example":"bJtHPFLkXppppUiox1sca","slide":"ayeJSHp8htX-ThNVQ-ARM","slick-slider":"_2Vy3RwpBAwvv-vwazpmKoy","slick-list":"_2hsETj3vkvztvn1xAPfcmT","slick-track":"_2P7l9QnkeZnG3Xf_CIQWst","img-wrapper":"_3zxe8xL-8rZLZpWriNR-MP"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1561375808553");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1ed01a7e7219df9ce887.hot-update.js.map