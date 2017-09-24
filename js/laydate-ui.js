
var deleteDateItem =function(element){
	$(element).parent().remove();
};

	$(document).ready(function(){
		// 设置日历弹出框的皮肤颜色
		laydate.skin('molv');
		// 调整日历弹出窗插件的样式
		var laydateIcon =$('.laydate-icon');
		var laydate_box=$('#laydate_box');
		var date=$('#date');
		var tempValue=date[0].value;
		var count=0;
		var Sinput='';
		var chooseDates=$('.choose-dates');

		laydateIcon.on('click',function(){
			laydate({elem: '#date'});
		});	

		setInterval(function(){
		//监听期望日期选中的日期是否变化，如果变化怎新增input内容。
			if(tempValue !== date[0].value){
				// console.log(Sinput);
				tempValue=date[0].value;
				Sinput='<div class="date_itme"><input type="text" id="date_'+count+'" name="date_'+count+'"  value="'+tempValue+'"><span class="delete_icon" id="delete_'+count+'" onClick="deleteDateItem(this);"></span></div>';
				count++;
				chooseDates.append(Sinput);

			}
		},500);
	});