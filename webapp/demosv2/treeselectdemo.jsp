<%@ page language="java" pageEncoding="utf-8"%>
<jsp:include page="/include/header2.jsp"/>
<script>
function selectByTree(selectionModevar, treecheckable) {
	$.selectByTree({
		checkable: treecheckable,
		component:"treeselectdemo",
		selectionMode:selectionModevar,
		callback:function(data) {
			$("#xuanzhong").text(JSON.stringify(data));
			return true;
		},
		data:"treeparentsid=1234",
		queryval:"人",
		selectedItemSids:"1234" // 逗号分割的字符串
	});
}
</script>
</head>
<body style="height: 100%;overflow: auto; padding: 5px;">
<button onclick="selectByTree('multipleRows', false)">selectByTree(多选)</button>
<button onclick="selectByTree('multipleRows', true)">selectByTree(多选含复选框)</button>
<button onclick="selectByTree('singleRow', false)">selectByTree(单选)</button>
<div id="xuanzhong"></div>
</body>
</html>