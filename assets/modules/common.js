/**
 * ajax请求数据
 * @param url
 * @param params
 * @param type
 * @param success
 */
function ajaxData(url, params, type, success) {
    if (typeof type == 'function') {
        success = type;
        type = 'post';
    }
    type = type || 'post';

    $.ajax({
        url: url,
        dataType: 'json',
        type: type,
        data: params
    }).then(function (ret) {
        if (success) {
            success(ret);
        }
    });
}

/**
 * 显示提示信息
 */
function showTipDialog(msg) {
    $("#tip-dialog .message-content").html(msg);
    $("#tip-dialog").modal("show");
}

/**
 * 显示
 */
function showToast() {
    $("#loadingToast").show();
}

/**
 * 隐藏
 */
function hideToast() {
    $("#loadingToast").hide();
}

/**
 * 横向柱状图参数
 * @param ret
 * @param type 1=="bar" 2=="line"
 */
function renderBarChartParams(ret, type) {
    type = type || 1;

    var params = {
        chart: {
            type: 'bar',
            zoomType: 'x',
            backgroundColor: "#ffffff"
        },
        credits: {
            enabled: false   //右下角不显示LOGO
        },
        title: {
            text: ret.title,
            style: {
                font: '16px "SimHei"',
                color: '#393942'
            }
        },
        xAxis: {
            categories: ret.categories,
            labels: {
                step: 1,
                align: 'right',
                style: {
                    fontSize: '12px'
                }
            },
            x: -10
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:12px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
            borderColor: '#2e7bb6'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                pointWidth: 30 //设置每个柱自身的宽度
            }
        },
        exporting: {
            enabled: false  //设置导出按钮不可用
        },
        legend: {
            enabled: true,
            symbolWidth: 5,
            borderWidth: 0
        },
        series: ret.series
    };
    if (type == 2) {
        params.chart.type = "";
        params.chart.defaultSeriesType = "line";
    }
    //line and column
    if (type == 3) {
        delete params.chart.type;
        params.chart.zoomType = "xy";
    }

    return params;
}


$(function(){
    $(".dropdown-menu").on("click", "a",function(){
        var parent = $(this).parents(".btn-group");
        $(".btn", parent).eq(0).html($(this).html());
        $("input", parent).eq(0).val($(this).parent().data("value"));
    });

    $(".input-checkbox input").on("click", function () {
        var name = $(this).attr("name");
        var ps = $("input[name=" + name + "]");
        ps.each(function () {
            if ($(this).is(":checked")) {
                $(this).next("label").addClass("checked");
            } else {
                $(this).next("label").removeClass("checked");
            }
        });
    });

    $("input.mobileOnly").on("input", function(){
        var val = $(this).val();
        val = val.replace(/[^0-9]+/g, "");
        $(this).val(val);

        if(val.length == $(this).attr("maxlength")){
            $(this).blur();
        }
    });

    $(".province-menu").append('<li data-value="" ><a href="#">选择地区</a></li>'+
            '<li data-value="全国" ><a href="#">全国</a></li>'+
            '<li data-value="北京" ><a href="#">北京</a></li>'+
            '<li data-value="天津" ><a href="#">天津</a></li>'+
            '<li data-value="上海" ><a href="#">上海</a></li>'+
            '<li data-value="重庆" ><a href="#">重庆</a></li>'+
            '<li data-value="河北" ><a href="#">河北</a></li>'+
            '<li data-value="山西" ><a href="#">山西</a></li>'+
            '<li data-value="辽宁" ><a href="#">辽宁</a></li>'+
            '<li data-value="吉林" ><a href="#">吉林</a></li>'+
            '<li data-value="黑龙江" ><a href="#">黑龙江</a></li>'+
            '<li data-value="江苏" ><a href="#">江苏</a></li>'+
            '<li data-value="浙江" ><a href="#">浙江</a></li>'+
            '<li data-value="安徽" ><a href="#">安徽</a></li>'+
            '<li data-value="福建" ><a href="#">福建</a></li>'+
            '<li data-value="江西" ><a href="#">江西</a></li>'+
            '<li data-value="山东" ><a href="#">山东</a></li>'+
            '<li data-value="河南" ><a href="#">河南</a></li>'+
            '<li data-value="湖北" ><a href="#">湖北</a></li>'+
            '<li data-value="湖南" ><a href="#">湖南</a></li>'+
            '<li data-value="广东" ><a href="#">广东</a></li>'+
            '<li data-value="海南" ><a href="#">海南</a></li>'+
            '<li data-value="四川" ><a href="#">四川</a></li>'+
            '<li data-value="贵州" ><a href="#">贵州</a></li>'+
            '<li data-value="云南" ><a href="#">云南</a></li>'+
            '<li data-value="陕西" ><a href="#">陕西</a></li>'+
            '<li data-value="甘肃" ><a href="#">甘肃</a></li>'+
            '<li data-value="青海" ><a href="#">青海</a></li>'+
            '<li data-value="西藏" ><a href="#">西藏</a></li>'+
            '<li data-value="广西" ><a href="#">广西</a></li>'+
            '<li data-value="内蒙古" ><a href="#">内蒙古</a></li>'+
            '<li data-value="宁夏" ><a href="#">宁夏</a></li>'+
            '<li data-value="新疆" ><a href="#">新疆</a></li>');
    
    $("[required]").each(function(){
        $(this).closest(".form-group").children("label").eq(0).prepend("<span class='required-item'>*</span>");
    });
	
});


/**
 * 初始化日期选择器
 */
function initDateRangePicker() {
    var ele = $('.dateRange-picker');

    if (window.moment) {
        //var start = moment().subtract(1, 'days').format("YYYY-MM-DD");
        //var end = moment().subtract(7, 'days').format("YYYY-MM-DD");
        ele.each(function () {
            var cont = $(this).parent().children(".dropdown-menu");

            var singleDate = ele.data("singledate");
            var format = ele.data("format");
            var options = {
                container: cont,
                inline: true,
                alwaysOpen: true,
                separator: ' ~ ',
                format: format || 'YYYY-MM-DD',
                showShortcuts: true,
                shortcuts: {
                    'prev-days': [3, 5, 7],
                    'prev': ['week', 'month'],
                    'next-days': null,
                    'next': null
                },
                getValue: function () {
                    return this.value;
                },
                setValue: function (s) {
                    this.value = s;
                }
            };
            options.singleDate = singleDate;
            if (options.singleDate) {
                options.shortcuts = false;
                options.showShortcuts = false;
            }

            $(this).dateRangePicker(options).bind('datepicker-apply', function (event, obj) {
                cont.parent().removeClass("open");
            });

            if (options.singleDate) {
                //$(this).data('dateRangePicker').setDateRange(start, start);
            } else {
                //$(this).data('dateRangePicker').setDateRange(start, end);
            }
        });
    }
}

function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,                 //月份
        "d+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


/**
 * Created by yxl on 2015/1/15.
 */


if (jQuery) {
    jQuery(function () {
        jQuery("form").on("blur", "input[type='text'],textarea", function (e) {
            jQuery(this).val(jQuery.trim(jQuery(this).val()));
        });
    });
}
// 日期格式化
// 格式 YYYY/yyyy/YY/yy 表示年份
// MM/M 月份 (01-12 / 1-12)
// W/w 星期
// dd/DD/d/D 日期
// hh/HH/h/H 时间
// mm/m 分钟
// ss/SS/s/S 秒
//---------------------------------------------------
Date.prototype.Format = function (formatStr) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, this.getMonth() > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, this.getMonth() + 1);

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    return str;
};

//为原型链绑定trim()去两边空格
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
};

//扩展jQuery.validator表单验证   -- by yxl
if (jQuery.validator) {
    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || (/^1[3-8][0-9]{9}$/.test(value));
    }, "请填写正确的手机号码");
    jQuery.validator.addMethod("discount", function (value, element) {
        return this.optional(element) || (/^(100|[1-9]\d|\d)$/.test(value));
    }, "请填写正确的折扣，0-100的整数");
    jQuery.validator.addMethod("price", function (value, element) {
        return this.optional(element) || (/^\d+(.\d{1,2})?$/.test(value));
    }, "请填写正确的价格，两位小数的正数");

    jQuery.validator.addMethod("tel", function (value, element) {
        return this.optional(element) || (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value));
    }, "请填写正确的电话号码");

    jQuery.validator.addMethod("qq", function (value, element) {
        return this.optional(element) || (/^[1-9]*[1-9][0-9]*$/.test(value));
    }, "请填写正确的QQ号码");

    jQuery.validator.addMethod("idcard", function (value, element) {
        return this.optional(element) || (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value));
    }, "请填写正确的身份证号码");

    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value));
    }, "请输入正确格式的电子邮件");

    jQuery.validator.addMethod("verifyPwd", function (value, element, param) {
        return this.optional(element) || (value === $(param).val());
    }, "两次密码不一致");

    jQuery.validator.addMethod("noSpecial", function (value, element, param) {
        return this.optional(element) || (/^[\u4E00-\u9FA5A-Za-z0-9_&]+$/.test(value));
    }, "不能输入特殊字符");

    jQuery.validator.addMethod("searchBox", function (value, element, param) {
        return this.optional(element) || (/\s*^[\u4E00-\u9FA5A-Za-z0-9\s*]+$/.test(value));
    }, "只能输入汉字字母和数字");

    jQuery.validator.addMethod("userName", function (value, element, param) {
        return this.optional(element) || (/^[\u4E00-\u9FA5A-Za-z0-9*]+$/.test(value));
    }, "只能输入汉字字母和数字");

    jQuery.validator.addMethod("cmaxLength", function (value, element, param) {
        if (value !== "") {
            var cn = value.match(/[\u4E00-\u9FA5A]/g);
            var length = cn ? cn.length + value.length : value.length;
            return length <= param;
        } else {
            return true;
        }
    }, "不能超过{0}个字符");

    jQuery.validator.addMethod("numAlphabet", function (value, element, param) {
        return this.optional(element) || (/^[A-Za-z0-9]+$/.test(value)); //字母 、数字、下划线
    }, "请输入字母或数字");

    jQuery.validator.addMethod("format1", function (value, element, param) {
        return this.optional(element) || (/^[A-Za-z0-9\_]+$/.test(value)); //字母 、数字、下划线
    }, "请输入字母数字或下划线");

    jQuery.validator.addMethod("format2", function (value, element, param) {
        return this.optional(element) || (/^[A-Za-z0-9\_]+$/.test(value) || (value === "******")); //字母 、数字、下划线
    }, "请输入字母数字或下划线");

    jQuery.validator.addMethod("positive", function (value, element, param) {
        return this.optional(element) || (/^[1-9]+\d*$/.test(value));
    }, "请输入正整数");

    jQuery.validator.addMethod("gtETo", function (value, element, param) {
        var targetValue = $(param).val();
        if (value !== "" && targetValue !== "") {
            return Number(value) >= Number(targetValue);
        }
        return true;
    }, "必须大于等于{0}");

    jQuery.validator.addMethod("ltETo", function (value, element, param) {
        var targetValue = $(param).val();
        if (value !== "" && targetValue !== "") {
            return Number(value) <= Number(targetValue);
        }
        return true;
    }, "必须小于等于{0}");


    jQuery.validator.addMethod("strictPwd", function (value, element, param) {
        return this.optional(element) || (/^(?![a-zA-Z0-9]+$)(?![^a-zA-Z/D]+$)(?![^0-9/D]+$).{10,20}$/.test(value));
    }, "必须包含字母、数字、特殊符号且长度10到20位");

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "请修正该字段",
        email: "请输入正确格式的电子邮件",
        url: "请输入合法的网址",
        date: "请输入合法的日期",
        dateISO: "请输入合法的日期 (ISO).",
        number: "请输入合法的数字",
        digits: "只能输入非负整数",
        creditcard: "请输入合法的信用卡号",
        equalTo: "请再次输入相同的值",
        accept: "请输入拥有合法后缀名的字符串",
        maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 位的字符串"),
        minlength: jQuery.validator.format("请输入一个长度最少是 {0} 位的字符串"),
        rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
        range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
        max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
        min: jQuery.validator.format("请输入一个最小为 {0} 的值")
    });
}



//处理packValidate验证错误提示 与 默认提示显示冲突
function hasPrompt() {
    //有错误提示或输入框不为空时  隐藏输入规则提示  --输入框增加 class=“hasPrompt”  输入框后增加输入规则提示信息  <span class="prompt">规则内容</span>
    $('form').submit(function () {
        $('form input[type=text].hasPrompt, form input[type=password].hasPrompt, form textarea.hasPrompt').each(function (index, element) {
            if ($(this).nextAll('.error').css('display') || this.value !== "") {
                $(this).nextAll('.prompt').hide();
            } else {
                $(this).nextAll('.prompt').show();
            }
        });
    });

    $('form input[type=text].hasPrompt, form input[type=password].hasPrompt, form textarea.hasPrompt').on('keyup', function () {
        if ($(this).nextAll('.error').css('display') || this.value !== "") {
            $(this).nextAll('.prompt').hide();
        } else {
            $(this).nextAll('.prompt').show();
        }
    });
}


function renderWidget(React, ReactDOM, Widget, props, target){
    var ele = React.createElement(Widget, props);
    return ReactDOM.render(ele, target);
}