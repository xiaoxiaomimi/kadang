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
	
})