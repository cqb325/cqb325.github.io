define(['module', 'utils/strings'], function (module, strings) {
    'use strict';

    var substitute = strings.substitute;

    var format = function format(str, params) {
        return function () {
            var args = Array.prototype.slice.call(arguments);
            return substitute.apply(this, [str, args]);
        };
    };

    var Validation = {
        methods: {
            required: function required(value) {
                if (value == undefined || value == null) {
                    return false;
                }
                return (value + "").length > 0;
            },

            email: function email(value) {
                return (/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
                );
            },

            url: function url(value) {
                return (/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value)
                );
            },

            minLength: function minLength(value, param) {
                var length = value ? value.length : 0;
                return length >= param;
            },

            maxLength: function maxLength(value, param) {
                var length = value ? value.length : 0;
                return length <= param;
            },

            min: function min(value, param) {
                return value >= param;
            },

            max: function max(value, param) {
                return value <= param;
            },

            range: function range(value, param) {
                return value >= param[0] && value <= param[1];
            },

            equalTo: function equalTo(value, param) {
                var target = param;
                if (typeof param == 'function') {
                    target = target();
                }
                var targetValue = target.getValue ? target.getValue() : "";
                return value === targetValue;
            },

            price: function price(value, param) {
                return (/^\d+(.\d{1,2})?$/.test(value)
                );
            },

            idCard: function idCard(value, param) {
                return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
                );
            },

            noSpecial: function noSpecial(value, param) {
                return (/^[\u4E00-\u9FA5A-Za-z0-9_&]+$/.test(value)
                );
            },

            userName: function userName(value, param) {
                return (/^[\u4E00-\u9FA5A-Za-z0-9*]+$/.test(value)
                );
            },

            mobile: function mobile(value, param) {
                return (/^1[3-8][0-9]{9}$/.test(value)
                );
            },

            /**
             * 汉字为一个字符
             * @param value
             * @param param
             * @returns {boolean}
             */
            mixMaxLength: function mixMaxLength(value, param) {
                if (value != "") {
                    var cn = value.match(/[\u4E00-\u9FA5A]/g);
                    var length = cn ? cn.length + value.length : value.length;
                    return length <= param;
                } else {
                    return true;
                }
            }
        },

        addMethod: function addMethod(name, method, message) {
            this.methods[name] = method;
            this.messages[name] = message != undefined ? message : this.messages[name];
        },


        messages: {
            required: "请填写该项内容.",
            email: "请输入正确的邮箱地址.",
            url: "请输入正确的URL地址.",
            equalTo: "输入的内容不一致.",
            maxLength: format("不能超过{0}个字符."),
            minLength: format("至少输入{0}个字符."),
            range: format("请输入{0}~{1}的数值."),
            max: format("不能大于{0}."),
            min: format("不能小于{0}."),
            price: "请填写正确的价格，两位小数的正数",
            idCard: "请填写正确的身份证号码",
            noSpecial: "不能输入特殊字符",
            userName: "只能输入汉字字母和数字",
            mobile: "请输入合法的手机号",
            remote: "请修正此字段",
            mixMaxLength: format("不能超过{0}个字符")
        }
    };

    module.exports = Validation;
});
