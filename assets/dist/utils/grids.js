define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.setOptions = setOptions;
    exports.getGrid = getGrid;
    var GRIDS = {};
    var OFFSETS = {};
    var RESPONSIVE = {
        'sm': '35.5',
        'md': '48',
        'lg': '64',
        'xl': '80'
    };
    var gridPre = 'cm-grid';
    var offsetPre = 'cm-offset';
    var defaultResponsive = 'md';

    function setOptions(options) {
        if (!options) {
            return;
        }
        if (options.gridPre) {
            gridPre = options.gridPre;
        }
        if (options.offsetPre) {
            offsetPre = options.offsetPre;
        }
        if (options.responsive) {
            defaultResponsive = options.responsive;
        }
    }

    function getGrid(options) {
        if (!options) {
            return '';
        }

        if (typeof options === 'number') {
            options = { width: options };
        }

        var _options = options;
        var width = _options.width;
        var offset = _options.offset;
        var responsive = _options.responsive;

        var gridClass = generate(width, 'grid', responsive);
        var offsetClass = generate(offset, 'offset', responsive);

        return gridPre + ' ' + gridPre + '-1 ' + gridClass + ' ' + offsetClass;
    }

    function generate(width, type, responsive) {
        if (!width || width <= 0) {
            return '';
        }

        width = (width * 100).toFixed(4);
        width = width.substr(0, width.length - 1);

        responsive = responsive || defaultResponsive;
        var key = responsive + '-' + width.replace('.', '-');
        if (type === 'grid') {
            if (!GRIDS[key]) {
                generateGrid(width, key, responsive);
            }
            return gridPre + '-' + key;
        } else {
            if (!OFFSETS[key]) {
                generateOffset(width, key, responsive);
            }
            return offsetPre + '-' + key;
        }
    }

    function generateGrid(width, key, responsive) {
        GRIDS[key] = true;
        var minWidth = RESPONSIVE[responsive];
        var text = '@media screen and (min-width: ' + minWidth + 'em) { .' + gridPre + '-' + key + '{width: ' + width + '%} }';

        createStyle(text);
    }

    function generateOffset(width, key, responsive) {
        OFFSETS[key] = true;
        var minWidth = RESPONSIVE[responsive];
        var text = '@media screen and (min-width: ' + minWidth + 'em) { .' + offsetPre + '-' + key + '{margin-left: ' + width + '%} }';

        createStyle(text);
    }

    function createStyle(text) {
        if (document.createStyleSheet) {
            var s = document.createStyleSheet();
            var rules = text.replace(/\/\*[^\*]*\*\//g, "").replace(/@[^{]*\{/g, '').match(/[^\{\}]+\{[^\}]+\}/g);
            for (var i = 0; i < rules.length; i++) {
                var m = rules[i].match(/(.*)\s*\{\s*(.*)\}/);
                if (m) {
                    try {
                        s.addRule(m[1], m[2]);
                    } catch (e) {}
                }
            }
        } else {
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = text;
            document.head.appendChild(style);
        }
    }

    (function () {
        var text = [];

        text.push('.' + gridPre + '{display: inline-block;zoom: 1;letter-spacing: normal;word-spacing: normal;text-rendering: auto;box-sizing: border-box;}');

        text.push('.' + gridPre + '-1{width:100%}');
        createStyle(text.join(''));
    })();
});
