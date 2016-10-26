$(function() {
	if($.cookie("currentLogin")) {
		$(".hello span a.font").html($.cookie("currentLogin"));
		
		$("dt.user-name a").html($.cookie("currentLogin"));
	}
	
	$(".quit a").bind("click", function() {
		
		$.removeCookie("currentLogin", { path: '/' });
		window.location.reload();
		
	})
	
	
	
})
