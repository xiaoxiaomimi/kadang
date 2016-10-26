$(function() {
	//轮播图
	var timer = null;
	var count = 0;
	$('.lunbo-img').eq(0).fadeIn().siblings('.lunbo-img').fadeOut();
	$('.lunbo-li').on({'mouseover':function(){
		clearInterval(timer);
	},'mouseout':function(){
		timer = setInterval(autoPlay,5000);
	},'click':function(){
		count = $(this).index();
		play(count);
	}})
	
	timer = setInterval(autoPlay,5000);
	function autoPlay(){
		count++;
		if(count==$('.lunbo-img').length){
			count=0;
		}
		$('.lunbo-img').eq(count).fadeIn().siblings('.lunbo-img').fadeOut();
		$('.lunbo-li').eq(count).addClass('active').siblings().removeClass('active');
	}
	function play(count){
		$('.lunbo-img').eq(count).fadeIn().siblings('.lunbo-img').fadeOut();
		$('.lunbo-li').eq(count).addClass('active').siblings().removeClass('active');
	}

//	var mySwiper = new Swiper(".swiper-container", {
//		"effect": "coverflow",
//		"autoplayDisableOnInteraction": false,
//		"autoplay": 2000,
//		"speed": 1000,
//		"loop": true,
//		"pagination": ".swiper-pagination",
//		"paginationClickable": true,
//		"paginationBulletRender": function(index, className) {
//			return '<span class="' + className + '">' + (index + 1) + '</span>';
//		}
//	})


	$("ul.all-gifts-cont > li").hover(function(){
		
		$(this).children("div").children('ul').show();//右边盒子出现
		
	},function(){
		
		$(this).children("div").children('ul').hide();
	})
	
	
	window.onscroll = function(){
		var t = $(window).scrollTop();
		if(t>=185){
			$('.box5').show();
		}else{
			$('.box5').hide();
		}
	}

	
	$('.box5').bind('click',function(){
//		$(window).scrollTop()=0;
//		alert($(window).scrollTop());
//		$(window).scrollTop()=0;
		$('body,html').animate({
			scrollTop:0
		})
	})
	
	
	
	
//	导航div的固定
	var $fixedBox = $(".fixedBox").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() >= $fixedBox){
			$('.fixedBox').attr("style","position: fixed;top:-45px;left:32px;z-index: 10;")
		}else{
			$('.fixedBox').removeAttr('style');
		}
	}).trigger('scroll');
	
			
			
			
			//json传"爆款推荐"区的图片和文字
			$.getJSON("js/json.txt",function(date){
//				console.log(date[0].hotrecomment[0].src);
				var num = date[0];
				var num1 = num.hotrecomment;
				
				$.each(num1,function(i,value){
					$('#stylish .com'+ (i+1) +' .big').attr('src',num1[i].src)
					$('#stylish .com'+ (i+1) +' p').html(num1[i].txt)
				})
			})
})







