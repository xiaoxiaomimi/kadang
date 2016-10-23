$(function(){
	//头部我的卡当
	$(".one").hover(function(){
		$(".moveout1").show()
		$(".cover").show();
		$(".one").addClass("bordered")
	},function(){
		$(".moveout1").hide()
		$(".cover").hide()
		$(".one").removeClass("bordered");
	})
	
	$(".search-btn").hover(function(){
		$(".search").addClass("search-bg-change");
	},function(){
		$(".search").removeClass("search-bg-change");
	})
	
	//登录页面
	$(".p2").click(function(){
		$(".load").show(800);
	})
	$(".load-missing").click(function(){
		$(".load").hide(800);
	})
	
	//注册页面
	$(".p3").click(function(){
		$(".register").show(800);
	})
	$(".register-missing").click(function(){
		$(".register").hide(800);
	})
})
