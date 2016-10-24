$(function(){

	
	
//	$.getJSON('../js/json.txt',function(date){
//		console.log(date);
//		var a=date[0].items;
//		$('.con-xin dl dt img').attr('src',a[0].src)//a[0]:数组里的第一项
//		$('.font-grey').html(a[0].txt)
//	})
	
	$.getJSON('../js/json.txt',function(date){
		var a = date[0].items;
		var a1 = a.items;
		$.each(a1,function(i,value){
			$('.con-xin .dl'+ i +' dt img').attr('src',a[0].src);
			$('.con-xin .dl'+ i +' dt img').attr('src',a[1].src);
			$('.con-xin .dl'+ i +' dt img').attr('src',a[2].src);
		})
			
	})
	
	
})
