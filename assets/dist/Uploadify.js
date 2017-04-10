define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'FontIcon', 'Button', 'FormControl', 'utils/Dom', 'Dialog', 'MessageBox'], function (module, React, ReactDOM, classnames, BaseComponent, FontIcon, Button, FormControl, Dom, Dialog, MessageBox) {
    "use strict";

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

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

    var PropTypes = React.PropTypes;

    var Uploadify = function (_BaseComponent) {
        _inherits(Uploadify, _BaseComponent);

        function Uploadify(props) {
            _classCallCheck(this, Uploadify);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Uploadify).call(this, props));

            _this.buttonText = _this.props.buttonText || "upload";
            _this.uploader = null;
            _this.params = props.params;
            _this.addState({
                files: props.files || []
            });
            return _this;
        }

        _createClass(Uploadify, [{
            key: "getButton",
            value: function getButton() {
                var mode = this.props.mode;
                if (mode === "grid") {
                    return React.createElement(
                        "div",
                        { className: "cm-uploadify-button", ref: "button" },
                        React.createElement(
                            "span",
                            { className: "cm-uploadify-plus" },
                            "+"
                        ),
                        React.createElement(
                            "span",
                            null,
                            this.buttonText
                        )
                    );
                } else {
                    return React.createElement(
                        "div",
                        { className: "cm-uploadify-button", ref: "button" },
                        React.createElement(
                            Button,
                            { icon: "upload", theme: "primary" },
                            this.buttonText
                        )
                    );
                }
            }
        }, {
            key: "init",
            value: function init() {
                if (this.props.onInit) {
                    this.props.onInit();
                }

                this.emit("init");
            }
        }, {
            key: "start",
            value: function start() {
                this.uploader.start();
            }
        }, {
            key: "filesAdded",
            value: function filesAdded(up, files) {
                var arr = this.state.files;
                arr = arr.concat(files);
                this.setState({
                    files: arr
                });

                if (this.props.auto) {
                    this.start();
                }

                if (this.props.onFilesAdded) {
                    this.props.onFilesAdded(up, files);
                }

                this.emit("filesAdded", up, files);
            }
        }, {
            key: "progress",
            value: function progress(up, file) {
                var fileWrap = Dom.dom(Dom.query("#" + file.id));
                var progress = Dom.dom(Dom.query(".cm-uploadify-progress", fileWrap[0]));
                progress.css("width", file.percent + "%");

                if (this.props.onProgress) {
                    this.props.onProgress(up, file);
                }

                this.emit("progress", up, file);
            }
        }, {
            key: "fileUploaded",
            value: function fileUploaded(up, file, ret) {
                var fileWrap = Dom.dom(Dom.query("#" + file.id));
                if (file.status === 4) {
                    fileWrap.addClass("cm-uploadify-failed");
                }
                if (file.status === 5) {
                    fileWrap.addClass("cm-uploadify-done");
                }

                if (this.props.onFileUploaded) {
                    this.props.onFileUploaded(up, file, ret);
                }

                this.emit("fileUploaded", up, file, ret);
            }
        }, {
            key: "uploadComplete",
            value: function uploadComplete(up, files) {
                if (this.props.onUploadComplete) {
                    this.props.onUploadComplete(up, files);
                }

                this.emit("uploadComplete", up, files);
            }
        }, {
            key: "onError",
            value: function onError(up, error) {
                if (this.props.onException) {
                    this.props.onException(up, error);
                }

                console.log(error);
                if (error.code == -600) {
                    this.refs.msg.show("上传的文件大小超出范围，请重新选择");
                } else {
                    this.refs.msg.show(error.message);
                }
                this.emit("exception", up, error);
            }
        }, {
            key: "removeFile",
            value: function removeFile(file) {
                this.uploader.removeFile(file);
                var files = this.state.files;
                if (files) {
                    files.forEach(function (f, index) {
                        if (file.id == f.id) {
                            files.splice(index, 1);
                        }
                    });
                    this.setState({ files: files });
                }

                if (this.props.onRemoveFile) {
                    this.props.onRemoveFile(file);
                }
                this.emit("removeFile", file);
            }
        }, {
            key: "renderFiles",
            value: function renderFiles() {
                var _this2 = this;

                var files = this.state.files;
                return files.map(function (file, index) {
                    return _this2.renderFile(file, index);
                });
            }
        }, {
            key: "renderFile",
            value: function renderFile(file, index) {
                if (this.props.mode === "falls") {
                    var picture = null;
                    if (this.props.thumbnail) {
                        picture = React.createElement(
                            "span",
                            { className: "cm-uploadify-thumbnail" },
                            React.createElement("img", { ref: "prev_" + file.id, onClick: this.openLightBox.bind(this, file) })
                        );
                        this.preloadImage(file);
                    } else {
                        picture = React.createElement("i", { className: "fa fa-paperclip mr-5" });
                    }
                    return React.createElement(
                        "div",
                        { className: "cm-uploadify-item", key: index, id: file.id },
                        picture,
                        React.createElement(
                            "span",
                            { className: "cm-uploadify-name", title: file.name },
                            file.name
                        ),
                        React.createElement("i", { className: "fa fa-trash-o cm-uploadify-close", onClick: this.removeFile.bind(this, file) }),
                        React.createElement("div", { className: "cm-uploadify-progress" })
                    );
                }

                if (this.props.mode === "grid") {
                    this.preloadImage(file);
                    return React.createElement(
                        "div",
                        { className: "cm-uploadify-item", key: index, id: file.id },
                        React.createElement(
                            "span",
                            { className: "cm-uploadify-thumbnail" },
                            React.createElement("img", { ref: "prev_" + file.id })
                        ),
                        React.createElement("i", { className: "fa fa-eye cm-uploadify-view", onClick: this.openLightBox.bind(this, file) }),
                        React.createElement("i", { className: "fa fa-trash-o cm-uploadify-close", onClick: this.removeFile.bind(this, file) }),
                        React.createElement("div", { className: "cm-uploadify-progress" })
                    );
                }

                return null;
            }
        }, {
            key: "openLightBox",
            value: function openLightBox(file) {
                var img = this.refs["prev_" + file.id];
                if (img) {
                    img = ReactDOM.findDOMNode(img);
                    var src = img.src;
                    var temp = new Image();
                    temp.src = src;

                    this.refs.lightBox.src = src;
                    var w = temp.width;
                    var h = temp.height;

                    var screenWidth = window.screen.availWidth;
                    var screenHeight = window.screen.availHeight;
                    var maxWidth = screenWidth / 2;
                    var maxHeight = screenHeight * 0.7;
                    var imgWidth = w,
                        imgHeight = 0;
                    if (w > maxWidth) {
                        imgWidth = maxWidth;
                    }
                    imgHeight = imgWidth / w * h;
                    if (imgHeight > maxHeight) {
                        imgHeight = maxHeight;
                        imgWidth = imgHeight / h * w;
                    }

                    this.refs.lightBox.width = imgWidth;
                    this.refs.lightBox.height = imgHeight;

                    this.refs.dialog.setTitle(file.name);
                    this.refs.dialog.open(img);
                }
            }
        }, {
            key: "preloadImage",
            value: function preloadImage(file) {
                var _this3 = this;

                var preload = new mOxie.Image();
                preload.onload = function () {
                    var imgsrc = preload.type == 'image/jpeg' ? preload.getAsDataURL('image/jpeg', 80) : preload.getAsDataURL(); //得到图片src,实质为一个base64编码的数据
                    var image = ReactDOM.findDOMNode(_this3.refs["prev_" + file.id]);
                    if (image) {
                        image.src = imgsrc;
                    }
                    preload.destroy();
                    preload = null;
                };
                preload.load(file.src || file.getSource());
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                var button = ReactDOM.findDOMNode(this.refs.button);
                var _props = this.props;
                var maxSize = _props.maxSize;
                var mimeTypes = _props.mimeTypes;

                var uploader = new plupload.Uploader({
                    runtimes: 'html5,flash,html4',
                    browse_button: button, // you can pass an id...
                    url: this.props.url,
                    flash_swf_url: requirejs.dir + '/../lib/Moxie.swf',
                    file_data_name: this.props.name || "file",
                    filters: {
                        max_file_size: maxSize || '2mb',
                        mime_types: mimeTypes
                    },
                    multi_selection: this.props.multi || true,
                    multipart_params: this.params,

                    init: {
                        PostInit: this.init.bind(this),
                        FilesAdded: this.filesAdded.bind(this),
                        UploadProgress: this.progress.bind(this),
                        FileUploaded: this.fileUploaded.bind(this),
                        UploadComplete: this.uploadComplete.bind(this),
                        Error: this.onError.bind(this)
                    }
                });

                uploader.init();
                this.uploader = uploader;
            }
        }, {
            key: "setParams",
            value: function setParams(params) {
                this.params = params;
                this.uploader.setOption("multipart_params", params);
            }
        }, {
            key: "render",
            value: function render() {
                var _props2 = this.props;
                var className = _props2.className;
                var mode = _props2.mode;
                var style = _props2.style;
                var thumbnail = _props2.thumbnail;

                className = classnames(className, "cm-uploadify", _defineProperty({}, "cm-uploadify-" + mode, this.props.mode));

                var listClass = classnames("cm-uploadify-list", {
                    'cm-uploadify-picture': thumbnail || mode === "grid"
                });
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    this.getButton(),
                    React.createElement(
                        "div",
                        { className: listClass, ref: "list" },
                        this.renderFiles()
                    ),
                    React.createElement(
                        Dialog,
                        { title: " ", ref: "dialog" },
                        React.createElement("img", { ref: "lightBox", className: "cm-uploadify-lightbox" })
                    ),
                    React.createElement(MessageBox, { ref: "msg", title: "提示" })
                );
            }
        }]);

        return Uploadify;
    }(BaseComponent);

    Uploadify.defaultProps = {
        mode: "falls"
    };

    Uploadify.propTypes = {
        /**
         * 模式
         * @attribute mode
         * @type {String}
         */
        mode: PropTypes.string
    };

    module.exports = Uploadify;
});
