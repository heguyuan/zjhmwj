/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */

// 当前table相关信息

(function ($) {
    $.extend({
        // 通用方法封装处理
        common: {
            isNum: function (value) {
                if (typeof value === 'number') {
                    return true
                }
                return false

            },
            //超过多少字省略
            omit: function (value, length) {
                var _length = $.common.isEmpty(length) ? 20 : length;
                var _value = $.common.nullToStr(value);
                let _text = "";
                if (_value.length > _length) {
                    _text = _value.substr(0, _length) + "...";
                    _value = _value.replace(/\'/g, "&apos;");
                    _value = _value.replace(/\"/g, "&quot;");
                    return $.common.sprintf('<span  class="tooltip-show" data-toggle="tooltip" title="%s">%s</span>', value, _text);
                } else {
                    return _value;
                }
            },

            // 判断字符串是否为空
            isEmpty: function (value) {
                if (value == null || this.trim(value) == "") {
                    return true;
                }
                return false;
            },
            // 判断一个字符串是否为非空串
            isNotEmpty: function (value) {
                return !$.common.isEmpty(value);
            },
            html2Escape: function (sHtml) {

                return sHtml + "".replace(/[<>&"]/g, function (c) {
                    return {
                        '<': '&lt;',
                        '>': '&gt;',
                        '&': '&amp;',
                        '"': '&quot;'
                    }[c];
                });


            },

            // 空对象转字符串
            nullToStr: function (value) {
                if ($.common.isEmpty(value)) {
                    return "-";
                }
                return value;
            },
            // 是否显示数据 为空默认为显示
            visible: function (value) {
                if ($.common.isEmpty(value) || value == true) {
                    return true;
                }
                return false;
            },
            // 空格截取
            trim: function (value) {
                if (value == null) {
                    return "";
                }
                return value.toString().replace(/(^\s*)|(\s*$)|\r|\n/g, "");
            },
            // 比较两个字符串（大小写敏感）
            equals: function (str, that) {
                return str == that;
            },
            // 比较两个字符串（大小写不敏感）
            equalsIgnoreCase: function (str, that) {
                return String(str).toUpperCase() === String(that).toUpperCase();
            },
            // 将字符串按指定字符分割
            split: function (str, sep, maxLen) {
                if ($.common.isEmpty(str)) {
                    return null;
                }
                var value = String(str).split(sep);
                return maxLen ? value.slice(0, maxLen - 1) : value;
            },
            // 字符串格式化(%s )
            sprintf: function (str) {
                var args = arguments, flag = true, i = 1;
                str = str.replace(/%s/g, function () {
                    var arg = args[i++];
                    if (typeof arg === 'undefined') {
                        flag = false;
                        return '';
                    }
                    return arg == null ? '' : arg;
                });
                return flag ? str : '';
            },
            // 日期格式化 时间戳  -> yyyy-MM-dd HH-mm-ss
            dateFormat: function (date, format) {
                var that = this;
                if (that.isEmpty(date)) return "";
                if (!date) return;
                if (!format) format = "yyyy-MM-dd";
                switch (typeof date) {
                    case "string":
                        date = new Date(date.replace(/-/g, "/"));
                        break;
                    case "number":
                        date = new Date(date);
                        break;
                }
                if (!date instanceof Date) return;
                var dict = {
                    "yyyy": date.getFullYear(),
                    "M": date.getMonth() + 1,
                    "d": date.getDate(),
                    "H": date.getHours(),
                    "m": date.getMinutes(),
                    "s": date.getSeconds(),
                    "MM": ("" + (date.getMonth() + 101)).substr(1),
                    "dd": ("" + (date.getDate() + 100)).substr(1),
                    "HH": ("" + (date.getHours() + 100)).substr(1),
                    "mm": ("" + (date.getMinutes() + 100)).substr(1),
                    "ss": ("" + (date.getSeconds() + 100)).substr(1)
                };
                return format.replace(/(yyyy|MM?|dd?|HH?|ss?|mm?)/g,
                    function () {
                        return dict[arguments[0]];
                    });
            },
            // 获取节点数据，支持多层级访问
            getItemField: function (item, field) {
                var value = item;
                if (typeof field !== 'string' || item.hasOwnProperty(field)) {
                    return item[field];
                }
                var props = field.split('.');
                for (var p in props) {
                    value = value && value[props[p]];
                }
                return value;
            },
            // 指定随机数返回
            random: function (min, max) {
                return Math.floor((Math.random() * max) + min);
            },
            // 判断字符串是否是以start开头
            startWith: function (value, start) {
                var reg = new RegExp("^" + start);
                return reg.test(value)
            },
            // 判断字符串是否是以end结尾
            endWith: function (value, end) {
                var reg = new RegExp(end + "$");
                return reg.test(value)
            },
            // 判断字符串是否是以end结尾
            contains: function (value, str) {
                return value.indexOf(str) > -1
            },
            menuBlank: function (_this) {
                // 新窗口打开外网以http://开头，如http://ruoyi.vip

                var dataUrl = $(_this).attr('href');
                if (!$.common.startWith(dataUrl, "http")) {
                    dataUrl = "http://" + dataUrl
                }
                window.open(dataUrl);
                return false;
            },
            // 数组去重
            uniqueFn: function (array) {
                var result = [];
                var hashObj = {};
                for (var i = 0; i < array.length; i++) {
                    if (!hashObj[array[i]]) {
                        hashObj[array[i]] = true;
                        result.push(array[i]);
                    }
                }
                return result;
            },
            // 数组中的所有元素放入一个字符串
            join: function (array, separator) {
                if ($.common.isEmpty(array)) {
                    return null;
                }
                return array.join(separator);
            },
            // 获取form下所有的字段并转换为json对象
            formToJSON: function (formId) {
                var json = {};
                $.each($("#" + formId).serializeArray(), function (i, field) {
                    if (json[field.name]) {
                        json[field.name] += ("," + field.value);
                    } else {
                        json[field.name] = field.value;
                    }
                });
                return json;
            },
            // 数据字典转下拉框
            strsToSelect: function (datas, value, name, htmlColor) {
                var actions = [];
                actions.push($.common.sprintf("<select class='form-control' style='background-color: %s' name='%s'>", htmlColor, name));
                actions.push('<option value="" ></option>')
                datas.forEach(function (dict, index) {
                    actions.push($.common.sprintf("<option value='%s'", dict));
                    if (dict == ('' + value)) {
                        actions.push(' selected');
                    }
                    actions.push($.common.sprintf(">%s</option>", dict));
                })
                actions.push('</select>');
                return actions.join('');
            },
            // 数据字典转可编辑下拉source
            dictToSource: function (datas, noDefault) {
                let assembly_plan_state_source = noDefault ? [] : [{text: '', value: ''}];
                datas.forEach(function (dict, index) {
                    assembly_plan_state_source.push({
                        text: dict.dictLabel,
                        value: dict.dictValue
                    })
                })
                return assembly_plan_state_source;
            },
            // 数据字典转下拉框
            objsToSelect: function (datas, value, id, htmlColor) {
                var actions = [];
                actions.push($.common.sprintf("<select class='form-control' style='background-color: %s' id='%s'>", htmlColor, id));
                datas.forEach(function (obj, index) {
                    actions.push($.common.sprintf("<option value='%s'", obj.no + ' - ' + obj.name));
                    if (obj.name == ('' + value)) {
                        actions.push(' selected');
                    }
                    actions.push($.common.sprintf(">%s</option>", obj.name));
                })
                actions.push('</select>');
                return actions.join('');
            },
            ldictToSource: function (datas) {
                let assembly_plan_state_source = [{label: '', value: 0}]
                datas.forEach(function (dict, index) {
                    assembly_plan_state_source.push({
                        label: dict.dictLabel,
                        value: Number(dict.dictValue)
                    })
                })
                return assembly_plan_state_source;
            },
            ldictToSourceText: function (datas) {
                let assembly_plan_state_source = [{label: '', value: 0}]
                datas.forEach(function (dict, index) {
                    assembly_plan_state_source.push({
                        label: dict.dictLabel,
                        value: dict.dictValue
                    })
                })
                return assembly_plan_state_source;
            },
            // 获取obj对象长度
            getLength: function (obj) {
                var count = 0;
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        count++;
                    }
                }
                return count;
            },
            // 判断移动端
            isMobile: function () {
                return navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
            },
            isImage: function (value) {
                var reg = new RegExp("(\\.png|\\.jpg|\\.jpeg|\\.gif)$");
                return reg.test(value)
            },
            // 数字正则表达式，只能为0-9数字
            numValid: function (text) {
                var patten = new RegExp(/^[0-9]+$/);
                return patten.test(text);
            },
            // 英文正则表达式，只能为a-z和A-Z字母
            enValid: function (text) {
                var patten = new RegExp(/^[a-zA-Z]+$/);
                return patten.test(text);
            },
            // 英文、数字正则表达式，必须包含（字母，数字）
            enNumValid: function (text) {
                var patten = new RegExp(/^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/);
                return patten.test(text);
            },
            // 英文、数字、特殊字符正则表达式，必须包含（字母，数字，特殊字符!@#$%^&*()-=_+）
            charValid: function (text) {
                var patten = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#\$%\^&\*\(\)\-=_\+])[A-Za-z\d~!@#\$%\^&\*\(\)\-=_\+]{6,}$/);
                return patten.test(text);
            },
            //获取url参数   http://xxx.cn?a=1   param
            getQueryParameter: function (param) {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == param) {
                        return decodeURI(pair[1]);
                    }
                }
                return ('');
            },
            // 下划线转换驼峰
            toHump: function (name) {
                return name.replace(/\_(\w)/g, function (all, letter) {
                    return letter.toUpperCase();
                });
            },
            // 驼峰转换下划线
            toLine: function (name) {
                return name.replace(/([A-Z])/g, "_$1").toLowerCase();
            },
            // 是否数组
            isArrayFn: function (value) {
                if (typeof Array.isArray === "function") {
                    return Array.isArray(value);
                } else {
                    return Object.prototype.toString.call(value) === "[object Array]";
                }
            },
            selectFile: function (_url) {
                if ($.common.isArrayFn(_url)) {
                    if (_url.length > 1) {
                        $.common.selectPics(_url.join(","))
                    } else {
                        if ($.common.isImage(_url)) {
                            $.common.selectPics(_url.join(","))
                            return
                        }
                        if ($.common.endWith(_url, ".pdf") || $.common.endWith(_url, ".PDF")) {
                            if (!$.common.startWith(_url, "http")) {
                                _url = kkPrefix + _url
                            }
                            window.open(_url);
                            return
                        }
                        $.get(ctx + "kk/getView/one?filename=" + _url, function (result) {
                            if (result.code == web_status.SUCCESS) {
                                if ($.common.isMobile()) {
                                    window.location.href = result.data.onlinePreviewUrls
                                } else {
                                    window.open(result.data.onlinePreviewUrls);
                                }
                            }
                        })
                    }
                } else {
                    if (_url.indexOf(",") > -1) {
                        $.common.selectPics(_url)
                    } else {
                        if ($.common.isImage(_url) || $.common.endWith(_url, ".pdf") || $.common.endWith(_url, ".PDF")) {
                            if ($.common.isImage(_url)) {
                                $.common.selectPics(_url)
                                return
                            }
                            if (!$.common.startWith(_url, "http")) {
                                _url = kkPrefix + _url
                            }
                            window.open(_url);
                            return
                        }
                        $.get(ctx + "kk/getView/one?filename=" + _url, function (result) {
                            if (result.code == web_status.SUCCESS) {
                                if ($.common.isMobile()) {
                                    window.location.href = result.data.onlinePreviewUrls
                                } else {
                                    window.open(result.data.onlinePreviewUrls);
                                }

                            }
                        })
                    }
                }
            },
            addHav: function (_tbName, _columnName, _id) {
                let url = ctx + "free/addHav?tbName=" + _tbName + "&id=" + _id + "&col=" + _columnName;
                $.operate.postSilent(url)
            },
            selectFileAndHav: function (_url, _tbName, _columnName, _id) {
                $.common.addHav(_tbName, _columnName, _id)
                $.common.selectFile(_url)
            },
            selectPics: function (_pics) {
                window.open(ctx + "free/picture?pics=" + _pics);
            },
            downFile: function (_url) {
                if (!$.common.startWith(_url, "http")) {
                    _url = kkPrefix + _url
                }
                window.open(_url);
            },
            myUpload: function (ths, $el) {
                if (!$el) {
                    $el = $(ths).next()
                }
                var data = new FormData();
                data.append("file", $(ths)[0].files[0]);
                $.ajax({
                    type: "POST",
                    url: ctx + "kk/upload",
                    data: data,
                    cache: false,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    success: function (result) {
                        if (result.code == web_status.SUCCESS) {
                            $el.val(result.fileName)
                        }
                    },
                    error: function () {
                        $.modal.alertError("文件上传失败。");
                    }
                });
            },
            copytextDecode: function (_text) {
                $.common.copytext(decodeURIComponent(_text))
            },
            copytext: function (_text) {
                var oInput = document.createElement('input');
                oInput.value = _text;
                document.body.appendChild(oInput);
                oInput.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                oInput.className = 'oInput';
                oInput.style.display = 'none';
                $.modal.msgSuccess("复制成功")
            },
            hasAnyPermissions: function (_perm) {
                var url = ctx + "common/hasAnyPermissions?perm=" + _perm
                let data = false
                $.ajax({
                    url: url,
                    async: false,
                    type: "get",
                    success: function (result, status) {
                        data = result.code === web_status.SUCCESS
                    }
                });
                return data
            },
            getTableInfo: function (_tbName, _functionType) {
                var url = ctx + "tool/tb/selectTableInfo/" + _tbName;
                if (_functionType) {
                    url += "?functionType=" + _functionType
                }
                let data = undefined
                $.ajax({
                    url: url,
                    async: false,
                    type: "get",
                    success: function (result, status) {
                        if (result.code == web_status.SUCCESS) {
                            data = result.data
                        } else if (result.code == web_status.WARNING) {
                            $.modal.alertWarning(result.msg)
                        } else {
                            $.modal.alertError(result.msg);
                        }
                    }
                });
                return data
            },
            getTableInfoAndData: function (_tbName, _id) {
                let url = ctx + "common/getOne?id=" + _id + "&tbName=" + _tbName;
                let data = undefined
                $.ajax({
                    url: url,
                    async: false,
                    type: "get",
                    success: function (result, status) {
                        if (result.code == web_status.SUCCESS) {
                            data = result.data
                        } else if (result.code == web_status.WARNING) {
                            $.modal.alertWarning(result.msg)
                        } else {
                            $.modal.alertError(result.msg);
                        }
                    }
                });
                return data
            },
            getTableInfoAndCaseData: function (_tbName, _id) {
                let url = ctx + "common/getCaseOne?id=" + _id + "&tbName=" + _tbName;
                let data = undefined
                $.ajax({
                    url: url,
                    async: false,
                    type: "get",
                    success: function (result, status) {
                        if (result.code == web_status.SUCCESS) {
                            data = result.data
                        } else if (result.code == web_status.WARNING) {
                            $.modal.alertWarning(result.msg)
                        } else {
                            $.modal.alertError(result.msg);
                        }
                    }
                });
                return data
            },
            operUrl: function (_tbName, _oper, _prefix) {
                let prefix = _prefix ? _prefix : ctx + 'common'
                switch (_oper) {
                    case 'add':
                    case 'edit':
                        return prefix + '/' + _oper + '?tbName=' + _tbName + '&id={id}'
                    default:
                        return prefix + '/' + _oper + '?tbName=' + _tbName
                }
            },
            objectToQueryString: queryParameters => {
                return queryParameters
                    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
                        const symbol = queryString.length === 0 ? '?' : '&';
                        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
                        return queryString;
                    }, '')
                    : '';
            },
            downImportTemp: function (_filename) {
                window.location.href = kkPrefix + "/profile/download/" + encodeURI(_filename);
            }
        },
        dateUtil: {
            diffDay: function (date_1, date_2) {
                // 计算两个日期之间的差值
                let totalDays, diffDate
                let myDate_1 = Date.parse(date_1)
                let myDate_2 = date_2 ? Date.parse(date_2) : new Date()
                // 将两个日期都转换为毫秒格式，然后做差
                diffDate = myDate_1 - myDate_2 // 取相差毫秒数的绝对值

                totalDays = Math.floor(diffDate / (1000 * 3600 * 24)) // 向下取整
                // console.log(totalDays)

                return totalDays    // 相差的天数
            },
            absDiffDay: function (date_1, date_2) {
                return Math.abs($.dateUtil.diffDay(date_1, date_2))    // 相差的天数
            }
        }
    })
    ;
})(jQuery);
