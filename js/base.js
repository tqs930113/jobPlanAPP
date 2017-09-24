// 刷新按钮全局刷新页面
var refreshBtnClick=function(){
				var refreshBtn=$('#refresh');
			refreshBtn.click(function(){
				window.location.reload();
			});
}

// 回退按钮点击事件
var backBtnClick=function(){
	var backBtn=$('#back');
	backBtn.click(function(){
		window.history.go(-1);
	});
}

//推荐按钮点击后呈现推荐智能计算结果
var recommendBtnClick=function(){
	var recommendBtn=$('#recommendBtn');
	var recemmendContent=$('#recommendContent');
	recommendBtn.click(function(){
		$(this).css('backgroundColor','#ddd');
		recemmendContent.show();
	});
}
$(document).ready(function(){
		refreshBtnClick();
		backBtnClick();
		recommendBtnClick();
});