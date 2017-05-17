define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'utils/UUID', 'core/Ajax', 'internal/EnhancedButton', 'utils/strings', 'utils/Dom', 'FontIcon', 'WebUploader', 'utils/grids', 'jquery'], function (module, React, ReactDOM, classnames, BaseComponent, Core, UUID, Ajax, EnhancedButton, strings, Dom, FontIcon, WebUploader, grids, jquery) {
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

    var substitute = strings.substitute;
    var PropTypes = React.PropTypes;

    var getGrid = grids.getGrid;

    /**
     * Upload 类
     * @class Upload
     * @constructor
     * @extend BaseComponent
     */

    var Upload = function (_BaseComponent) {
        _inherits(Upload, _BaseComponent);

        function Upload(props) {
            _classCallCheck(this, Upload);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Upload).call(this, props));

            _this.addState({
                fileName: null,
                status: false
            });

            _this.uploader = null;
            _this.pickId = "pick_" + UUID.v4();
            _this.file = null;
            _this.params = {};
            return _this;
        }

        _createClass(Upload, [{
            key: "setParams",
            value: function setParams(params) {
                this.params = params;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.initWebUploader();
            }
        }, {
            key: "initWebUploader",
            value: function initWebUploader() {
                var dir = requirejs.dir;
                if (this.uploader) {
                    return;
                }
                this.uploader = WebUploader.create({
                    // swf文件路径
                    swf: dir + '/Uploader.swf',
                    // 文件接收服务端。
                    server: this.props.service,
                    // 选择文件的按钮。
                    pick: {
                        id: "#" + this.pickId,
                        multiple: this.props.multiple
                    },
                    accept: this.props.accept,
                    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
                    resize: false,
                    auto: this.props.autoUpload,
                    fileVal: this.props.name,
                    formData: this.params
                });

                var scope = this;
                this.uploader.on('fileQueued', function (_file) {
                    scope.fileQueued(_file);
                });

                this.uploader.on('uploadProgress', function (file, percentage) {
                    scope.updateProgress(percentage);
                });

                this.uploader.on('uploadSuccess', function (file, reason) {
                    scope._uploadSuccess(file, reason);
                });

                this.uploader.on('uploadError', function (file) {
                    scope._uploadError(file);
                });

                this.uploader.on('uploadComplete', function (file) {
                    scope._uploadComplete(file);
                });
            }
        }, {
            key: "fileQueued",
            value: function fileQueued(file) {
                var _this2 = this;

                if (this.props.multiple) {} else {
                    (function () {
                        var lastFile = _this2.file;
                        if (lastFile) {
                            _this2.uploader.removeFile(lastFile);
                        }

                        _this2.file = file;

                        var ele = ReactDOM.findDOMNode(_this2.refs.progress);
                        ele.parentNode.style.display = "block";
                        Dom.attr(ele, "title", "上传");
                        Dom.withoutTransition(ele, function () {
                            ele.style.width = "0";
                        });

                        var te = Dom.query(".webuploader-element-invisible", ReactDOM.findDOMNode(_this2));
                        var label = Dom.next(te);
                        Dom.attr(label, "title", file.name);

                        _this2.setState({
                            fileName: file.name,
                            status: false
                        });
                    })();
                }
            }
        }, {
            key: "uploadFile",
            value: function uploadFile() {
                this.uploader.upload();
            }
        }, {
            key: "updateProgress",
            value: function updateProgress(percentage) {
                var ele = ReactDOM.findDOMNode(this.refs.progress);
                ele.style.width = percentage * 100 + "%";
            }
        }, {
            key: "_uploadSuccess",
            value: function _uploadSuccess(file) {
                this.setState({
                    status: "success"
                });
            }
        }, {
            key: "_uploadError",
            value: function _uploadError(file, reason) {
                var ele = ReactDOM.findDOMNode(this.refs.uploadBtn);
                Dom.attr(ele, "title", "上传文件错误");
                console.log(reason);
                this.setState({
                    status: "error"
                });
            }
        }, {
            key: "_uploadComplete",
            value: function _uploadComplete(file) {
                var _this3 = this;

                if (this.state.status === "error") {
                    return;
                }
                setTimeout(function () {
                    var ele = ReactDOM.findDOMNode(_this3.refs.progress);
                    ele.parentNode.style.display = "none";
                    ele.style.width = "0";
                    _this3.setState({
                        status: false
                    });
                }, 1300);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props;
                var disabled = _props.disabled;
                var readOnly = _props.readOnly;
                var className = _props.className;
                var style = _props.style;
                var grid = _props.grid;


                className = classnames("cm-upload", className, getGrid(grid), {
                    disabled: disabled || readOnly
                });

                var icon = "upload";

                if (this.state.status === "success") {
                    icon = "check";
                }
                if (this.state.status === "error") {
                    icon = "exclamation-triangle";
                }
                var txt = this.state.fileName || this.props.placeHolder;
                txt = React.createElement(
                    "div",
                    { className: "cm-upload-fileName" },
                    txt
                );
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement(
                        "span",
                        null,
                        " "
                    ),
                    React.createElement(
                        "div",
                        { id: this.pickId, className: "cm-upload-pick-btn" },
                        txt
                    ),
                    React.createElement(FontIcon, { icon: icon, title: "上传", ref: "uploadBtn", onClick: this.uploadFile.bind(this) }),
                    React.createElement(
                        "div",
                        { className: "cm-upload-progress" },
                        React.createElement("div", { className: "cm-progress-bar", ref: "progress" })
                    )
                );
            }
        }]);

        return Upload;
    }(BaseComponent);

    Upload.propTypes = {
        /**
         * 默认选中的值
         * @attribute value
         * @type {String}
         */
        value: PropTypes.string,
        /**
         * 自定义class
         * @attribute className
         * @type {String}
         */
        className: PropTypes.string,
        /**
         * 禁用
         * @attribute disabled
         * @type {Boolean}
         */
        disabled: PropTypes.bool,
        /**
         * 只读
         * @attribute readOnly
         * @type {Boolean}
         */
        readOnly: PropTypes.bool,
        /**
         * 多选状态
         * @attribute multi
         * @type {Boolean}
         */
        multi: PropTypes.bool,
        /**
         * 自定义样式
         * @attribute style
         * @type {Object}
         */
        style: PropTypes.object,
        /**
         * holder文字
         * @attribute placeholder
         * @type {String}
         */
        placeholder: PropTypes.string
    };

    module.exports = Upload;
});
