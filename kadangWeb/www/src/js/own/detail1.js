$(function(){

		//tab切换
			$('.all-four-imgs li').click(function(){
		//		console.log($(this).index());
				$('#big-img').attr('src','../img/home/tab4'+ $(this).index() +'.jpg_mid.jpg')
				$('.bigImg').attr('src','../img/home/tab'+ ($(this).index()+ 1) + ($(this).index()+ 1) +'.jpg_max.jpg')
		
			})


			
	$('.wai-box').hover(
		function(){
			$('.smallCursor,.bigCursor').show()
		},
		function(){
			$('.smallCursor,.bigCursor').hide()
		}
	)
	$(document).mousemove(function(e){
		var left = e.pageX - $('.wai-box').offset().left - $('.smallCursor').width()/2;
		var top = e.pageY - $('.wai-box').offset().top - $('.smallCursor').height()/2;
		if(left<0){
			left = 0;
		}else if(left > ($('.wai-box').width()-$('.smallCursor').width())){
			left = $('.wai-box').width()-$('.smallCursor').width()
		}
		if(top<0){
			top = 0;
		}else if(top > ($('.wai-box').height()-$('.smallCursor').height())){
			top = $('.wai-box').height()-$('.smallCursor').height()
		}
		$('.smallCursor').css({left: left, top: top});
		$('.bigCursor .bigImg').css({marginTop: top * -2 , marginLeft: left * -2});//大图片跟着鼠标移动
	})
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
})			