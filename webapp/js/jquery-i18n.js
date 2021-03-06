
// 国际化优先加载
jQuery.extend({

	i18nCache:{},
	i18n: function(key) {
		if ($.i18nCache[key])
			return $.i18nCache[key];
		var sysprop = "";
		$.ajax({
			url:ctxPath + "/common/getI18nStr.vot?key=" + key,
			async:false,
			success:function(data) {
				sysprop = data;
			}
		});
		return sysprop;
	}
});

//全局统一国际化数据，非初始化时块，抢先加载，优化加载速度
var thekeys = "antelope.ok,antelope.add,antelope.changetheme,antelope.changelanguage,antelope.register,antelope.cancel,antelope.savesuccess,antelope.confirmok," +
		"antelope.close,antelope.form.confirmoperat,antelope.savesuccess,antelope.form.nowprefix,antelope.form.nowsuffix,antelope.ui.fileupload.addattach," +
		"antelope.ui.fileupload.allowmax.prefix,antelope.ui.fileupload.allowmax.suffix,antelope.ui.fileupload.fileistobig,antelope.assigneeunit," +
		"antelope.assigneename,antelope.auditresult,antelope.auditphase,antelope.auditcomment,antelope.audittime,antelope.operation,antelope.delete," +
		"antelope.view,antelope.config,antelope.explain,antelope.release,antelope.modify,antelope.exp,antelope.singleselect,antelope.ordernum," +
		"antelope.firstpage,antelope.lastpage,antelope.prepage,antelope.nextpage,antelope.rowperpageprefix,antelope.rowperpagesuffix,antelope.totalpageprefix," +
		"antelope.totalpagesuffix,antelope.row,antelope.choose,antelope.confirmtodelete,antelope.ui.uploaddialog.fileupload";

if (typeof ___i18nCache != 'undefined') {
	$.i18nCache = ___i18nCache; 
} else {
	$.ajax({
		url: ctxPath + "/common/getBatchI18nStr.vot",
		data: {keys:thekeys},
		async: false,
		success: function(vals) {
			for (var key in vals) {
				$.i18nCache[key] = vals[key];
			}
		},
		dataType:"json",
		type:"POST"
	});
}
