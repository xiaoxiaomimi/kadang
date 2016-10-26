$(function(){
	$.getJSON('../js/json.txt',function(date){
			console.log(date);
			var a=date[0].items;
			$('.con-xin dl dt img').attr('src',a[0].src)
			$('.font-grey').html(a[0].txt)
		})
})
