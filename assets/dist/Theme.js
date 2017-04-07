define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.requireCss = requireCss;
    exports.setTheme = setTheme;
    var THEME = exports.THEME = 'default';

    function requireCss(pack) {
        require(['css!../theme/' + THEME + '/' + pack + '.min.css']);
    }

    function setTheme(theme) {
        exports.THEME = THEME = theme;
    }
});
