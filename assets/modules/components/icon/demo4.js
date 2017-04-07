define(["module", "react", "../BaseDemo", "FontIcon", "Label"], function (module, React, BaseDemo, FontIcon, Label) {
    "use strict";

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Demo = function (_BaseDemo) {
        _inherits(Demo, _BaseDemo);

        function Demo() {
            _classCallCheck(this, Demo);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
            key: "render",
            value: function render() {
                var webIcons = ["address-book", "address-book-o", "address-card", "address-card-o", "adjust", "american-sign-language-interpreting", "anchor", "archive", "area-chart", "arrows", "arrows-h", "arrows-v", "american-sign-language-interpreting", "assistive-listening-systems", "asterisk", "at", "audio-description", "car", "balance-scale", "ban", "university", "bar-chart", "bar-chart", "barcode", "bars", "bath", "bath", "battery-full", "battery-empty", "battery-quarter", "battery-half", "battery-three-quarters", "battery-full", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-o", "bell-slash", "bell-slash-o", "bicycle", "binoculars", "birthday-cake", "blind", "bluetooth", "bluetooth-b", "bolt", "bomb", "book", "bookmark", "bookmark-o", "braille", "briefcase", "bug", "building", "building-o", "bullhorn", "bullseye", "bus", "taxi", "calculator", "calendar", "calendar-check-o", "calendar-minus-o", "calendar-o", "calendar-plus-o", "calendar-times-o", "camera", "camera-retro", "car", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "cart-arrow-down", "cart-plus", "cc", "certificate", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "child", "circle", "circle-o", "circle-o-notch", "circle-thin", "clock-o", "clone", "times", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "comment", "comment-o", "commenting", "commenting-o", "comments", "comments-o", "compass", "copyright", "creative-commons", "credit-card", "credit-card-alt", "crop", "crosshairs", "cube", "cubes", "cutlery", "tachometer", "database", "deaf", "deaf", "desktop", "diamond", "dot-circle-o", "download", "id-card", "id-card-o", "pencil-square-o", "ellipsis-h", "ellipsis-v", "envelope", "envelope-o", "envelope-open", "envelope-open-o", "envelope-square", "eraser", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "external-link", "external-link-square", "eye", "eye-slash", "eyedropper", "fax", "rss", "female", "fighter-jet", "file-archive-o", "file-audio-o", "file-code-o", "file-excel-o", "file-image-o", "file-video-o", "file-pdf-o", "file-image-o", "file-image-o", "file-powerpoint-o", "file-audio-o", "file-video-o", "file-word-o", "file-archive-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "bolt", "flask", "folder", "folder-o", "folder-open", "folder-open-o", "frown-o", "futbol-o", "gamepad", "gavel", "cog", "cogs", "gift", "glass", "globe", "graduation-cap", "users", "hand-rock-o", "hand-lizard-o", "hand-paper-o", "hand-peace-o", "hand-pointer-o", "hand-rock-o", "hand-scissors-o", "hand-spock-o", "hand-paper-o", "handshake-o", "deaf", "hashtag", "hdd-o", "headphones", "heart", "heart-o", "heartbeat", "history", "home", "bed", "hourglass", "hourglass-start", "hourglass-half", "hourglass-end", "hourglass-end", "hourglass-half", "hourglass-o", "hourglass-start", "i-cursor", "id-badge", "id-card", "id-card-o", "picture-o", "inbox", "", "industry", "info", "info-circle", "university", "key", "keyboard-o", "language", "laptop", "leaf", "gavel", "lemon-o", "level-down", "level-up", "life-ring", "life-ring", "life-ring", "life-ring", "lightbulb-o", "line-chart", "location-arrow", "lock", "low-vision", "magic", "magnet", "share", "reply", "reply-all", "male", "map", "map-marker", "map-o", "map-pin", "map-signs", "meh-o", "microchip", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "mobile", "money", "moon-o", "graduation-cap", "motorcycle", "mouse-pointer", "music", "bars", "newspaper-o", "object-group", "object-ungroup", "paint-brush", "paper-plane", "paper-plane-o", "paw", "pencil", "pencil-square", "pencil-square-o", "percent", "phone", "phone-square", "picture-o", "picture-o", "pie-chart", "plane", "plug", "plus", "plus-circle", "plus-square", "plus-square-o", "podcast", "power-off", "print", "puzzle-piece", "qrcode", "question", "question-circle", "question-circle-o", "quote-left", "quote-right", "random", "recycle", "refresh", "registered", "times", "bars", "reply", "reply-all", "retweet", "road", "rocket", "rss", "rss-square", "bath", "search", "search-minus", "search-plus", "paper-plane", "paper-plane-o", "server", "share", "share-alt", "share-alt-square", "share-square", "share-square-o", "shield", "ship", "shopping-bag", "shopping-basket", "shopping-cart", "shower", "sign-in", "sign-language", "sign-out", "signal", "sign-language", "sitemap", "sliders", "smile-o", "snowflake-o", "futbol-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-desc", "sort-numeric-asc", "sort-numeric-desc", "sort-asc", "space-shuttle", "spinner", "spoon", "square", "square-o", "star", "star-half", "star-half-o", "star-half-o", "star-half-o", "star-o", "sticky-note", "sticky-note-o", "street-view", "suitcase", "sun-o", "life-ring", "tablet", "tachometer", "tag", "tags", "tasks", "taxi", "television", "terminal", "thermometer-full", "thermometer-empty", "thermometer-quarter", "thermometer-half", "thermometer-three-quarters", "thermometer-full", "thermometer-empty", "thermometer-full", "thermometer-half", "thermometer-quarter", "thermometer-three-quarters", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "window-close", "window-close-o", "tint", "caret-square-o-down", "caret-square-o-left", "toggle-off", "toggle-on", "caret-square-o-right", "caret-square-o-up", "trademark", "trash", "trash-o", "tree", "trophy", "truck", "tty", "television", "umbrella", "universal-access", "university", "unlock", "unlock-alt", "sort", "upload", "user", "user-circle", "user-circle-o", "user-o", "user-plus", "user-secret", "user-times", "users", "address-card", "address-card-o", "video-camera", "volume-control-phone", "volume-down", "volume-off", "volume-up", "exclamation-triangle", "wheelchair", "wheelchair-alt", "wifi", "window-close", "window-close-o", "window-maximize", "window-minimize", "window-restore", "wrench"];
                webIcons = webIcons.map(function (icon, index) {
                    return React.createElement(
                        Label,
                        { grid: 1 / 8, className: "iconItem", key: index },
                        React.createElement(FontIcon, { icon: icon }),
                        React.createElement(
                            "span",
                            null,
                            icon
                        )
                    );
                });

                return React.createElement(
                    "div",
                    { className: "icons icon-list" },
                    webIcons
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
