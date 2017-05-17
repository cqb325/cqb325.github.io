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
                var webIcons = ["check-square", "check-square-o", "circle", "circle-o", "dot-circle-o", "minus-square", "minus-square-o", "plus-square", "plus-square-o", "square", "square-o"];
                var paymentIcons = ["cc-amex", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "credit-card", "credit-card-alt", "google-wallet", "paypal"];
                var chartIcons = ["area-chart", "bar-chart", "bar-chart-o", "line-chart", "pie-chart"];
                var currencyIcons = ["bitcoin", "btc", "cny", "dollar", "eur", "euro", "gbp", "gg", "gg-circle", "ils", "inr", "jpy", "krw", "money", "rmb", "rouble", "rub", "ruble", "rupee", "shekel", "sheqel", "try", "turkish-lira", "usd", "won", "yen"];
                var textEditorIcons = ["align-center", "align-justify", "align-left", "align-right", "bold", "chain", "chain-broken", "clipboard", "columns", "copy", "cut", "dedent", "eraser", "file", "file-o", "file-text", "file-text-o", "files-o", "floppy-o", "font", "header", "indent", "italic", "link", "list", "list-alt", "list-ol", "list-ul", "outdent", "paperclip", "paragraph", "paste", "repeat", "rotate-left", "rotate-right", "save", "scissors", "strikethrough", "subscript", "superscript", "table", "text-height", "text-width", "th", "th-large", "th-list", "underline", "undo", "unlink"];
                var directionalIcons = ["angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-o-down", "arrow-circle-o-left", "arrow-circle-o-right", "arrow-circle-o-up", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows", "arrows-alt", "arrows-h", "arrows-v", "caret-down", "caret-left", "caret-right", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "caret-up", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "exchange", "hand-o-down", "hand-o-left", "hand-o-right", "hand-o-up", "long-arrow-down", "long-arrow-left", "long-arrow-right", "long-arrow-up", "toggle-down", "toggle-left", "toggle-right", "toggle-up"];
                var videoPlayerIcons = ["arrows-alt", "backward", "compress", "eject", "expand", "fast-backward", "fast-forward", "forward", "pause", "pause-circle", "pause-circle-o", "play", "play-circle", "play-circle-o", "random", "step-backward", "step-forward", "stop", "stop-circle", "stop-circle-o", "youtube-play"];
                var brandIcons = ["500px", "adn", "amazon", "android", "angellist", "apple", "bandcamp", "behance", "behance-square", "bitbucket", "bitbucket-square", "bitcoin", "black-tie", "bluetooth", "bluetooth-b", "btc", "buysellads", "cc-amex", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "chrome", "codepen", "codiepie", "connectdevelop", "contao", "css3", "dashcube", "delicious", "deviantart", "digg", "dribbble", "dropbox", "drupal", "edge", "eercast", "empire", "envira", "etsy", "expeditedssl", "fa", "facebook", "facebook-f", "facebook-official", "facebook-square", "firefox", "first-order", "flickr", "font-awesome", "fonticons", "fort-awesome", "forumbee", "foursquare", "free-code-camp", "ge", "get-pocket", "gg", "gg-circle", "git", "git-square", "github", "github-alt", "github-square", "gitlab", "gittip", "glide", "glide-g", "google", "google-plus", "google-plus-circle", "google-plus-official", "google-plus-square", "google-wallet", "gratipay", "grav", "hacker-news", "houzz", "html5", "imdb", "instagram", "internet-explorer", "ioxhost", "joomla", "jsfiddle", "lastfm", "lastfm-square", "leanpub", "linkedin", "linkedin-square", "linode", "linux", "maxcdn", "meanpath", "medium", "meetup", "mixcloud", "modx", "odnoklassniki", "odnoklassniki-square", "opencart", "openid", "opera", "optin-monster", "pagelines", "paypal", "pied-piper", "pied-piper-alt", "pied-piper-pp", "pinterest", "pinterest-p", "pinterest-square", "product-hunt", "qq", "quora", "ra", "ravelry", "rebel", "reddit", "reddit-alien", "reddit-square", "renren", "resistance", "safari", "scribd", "sellsy", "share-alt", "share-alt-square", "shirtsinbulk", "simplybuilt", "skyatlas", "skype", "slack", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "spotify", "stack-exchange", "stack-overflow", "steam", "steam-square", "stumbleupon", "stumbleupon-circle", "superpowers", "telegram", "tencent-weibo", "themeisle", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "usb", "viacoin", "viadeo", "viadeo-square", "vimeo", "vimeo-square", "vine", "vk", "wechat", "weibo", "weixin", "whatsapp", "wikipedia-w", "windows", "wordpress", "wpbeginner", "wpexplorer", "wpforms", "xing", "xing-square", "y-combinator", "y-combinator-square", "yahoo", "yc", "yc-square", "yelp", "yoast", "youtube", "youtube-play", "youtube-square"];
                var medicalIcons = ["ambulance", "h-square", "heart", "heart-o", "heartbeat", "hospital-o", "medkit", "plus-square", "stethoscope", "user-md", "wheelchair", "wheelchair-alt"];

                var data = [{
                    text: "Form Control Icons",
                    icons: webIcons
                }, {
                    text: "Payment Icons",
                    icons: paymentIcons
                }, {
                    text: "Chart Icons",
                    icons: chartIcons
                }, {
                    text: "Currency Icons",
                    icons: currencyIcons
                }, {
                    text: "Text Editor Icons",
                    icons: textEditorIcons
                }, {
                    text: "Directional Icons",
                    icons: directionalIcons
                }, {
                    text: "Video Player Icons",
                    icons: videoPlayerIcons
                }, {
                    text: "Brand Icons",
                    icons: brandIcons
                }, {
                    text: "Medical Icons",
                    icons: medicalIcons
                }];
                var eles = data.map(function (item, index2) {
                    var icons = item.icons.map(function (icon, index) {
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
                        { key: index2 },
                        React.createElement(
                            "h1",
                            { className: "page-h1" },
                            item.text
                        ),
                        React.createElement(
                            "div",
                            { className: "icons icon-list" },
                            icons
                        )
                    );
                });

                return React.createElement(
                    "div",
                    null,
                    eles
                );
            }
        }]);

        return Demo;
    }(BaseDemo);

    module.exports = Demo;
});
