define(["module", "react", 'react-dom', "classnames", "core/BaseComponent", 'Core', 'utils/strings', 'utils/Dom', 'FontIcon', 'utils/grids', 'FormControl'], function (module, React, ReactDOM, classnames, BaseComponent, Core, strings, Dom, FontIcon, grids, FormControl) {
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

    var Upload = function (_BaseComponent) {
        _inherits(Upload, _BaseComponent);

        function Upload(props) {
            _classCallCheck(this, Upload);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Upload).call(this, props));

            _this.addState({
                fileName: null,
                status: false
            });
            return _this;
        }

        _createClass(Upload, [{
            key: "selectedFile",
            value: function selectedFile(event) {
                var file = ReactDOM.findDOMNode(this.refs.file);
                var path = file.value;
                var index = path.lastIndexOf("\\");
                path = path.substr(index + 1);
                this.setState({
                    fileName: path
                });

                Dom.attr(file, "title", path);

                if (this.props.onChange) {
                    this.props.onChange(path, file);
                }
            }
        }, {
            key: "getValue",
            value: function getValue() {
                return this.state.fileName;
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

                var txt = this.state.fileName || this.props.placeHolder;
                txt = React.createElement(
                    "div",
                    { className: "cm-upload-fileName" },
                    txt
                );
                return React.createElement(
                    "div",
                    { className: className, style: style },
                    React.createElement("input", { type: "file", name: this.props.name, ref: "file", onChange: this.selectedFile.bind(this), className: "cm-upload-pick-helper" }),
                    React.createElement(
                        "div",
                        { className: "cm-upload-pick-btn" },
                        txt
                    ),
                    React.createElement(FontIcon, { icon: icon, title: "上传", ref: "uploadBtn" })
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

    FormControl.register(Upload, "file");

    module.exports = Upload;
});
