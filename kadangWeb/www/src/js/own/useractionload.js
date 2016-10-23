$(function() {

	var reEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailFlag = false;

	$(".user-load input.user-name").bind("blur", function() {
		var emailStr = $(".user-load input.user-name").val();

		if(emailStr == '') {
			$("p.login1").html("邮箱不能为空！");
		} else if(!reEmail.test(emailStr)) {
			$("p.login1").html("邮箱格式错误！");
		} else {
			$("p.login1").html("<span style='color:deepskyblue'>邮箱输入正确！</span>");
			emailFlag = true;
		}

	})
	
	var rePas = /^\w{6,20}$/;
	var pasFlag = false;

	
	$(".user-load input.paw").bind("blur", function() {
		var pasStr = $(".user-load input.paw").val();
		
		if(pasStr == '') {
			$("p.login2").html("密码不能为空！");
		} else if(!rePas.test(pasStr)) {
			$("p.login2").html("密码格式错误，应为6至20位字符！");
		} else {
			$("p.login2").html("<span style='color:deepskyblue'>密码格式正确！</span>");
			emailFlag = true;
		}
	})
	
	
	
	$(".user-load input.btn-red").bind('click',function(){
		var emailStr = $(".user-load input.user-name").val();
		var pasStr = $(".user-load input.paw").val();
		
		if(emailStr==''){
			$('p.login1').html('邮件不能为空！')
		}
		if(pasStr==''){
			$('p.login2').html('密码不能为空！')
		}
		
		
	})
	
	
//	if($.cookie("userReg")){
//		$each(JSON.Parser($.cookie("userReg")),function(i,n){
//			if(emailStr !== n.username){
//				$('p.login1').html('用户不存在');
//				emailFlag = false;
//			}else if(emailStr == n.username){
//				if(pasStr !== n.password){
//					$('p.login2').html('密码错误')
//				}
//			}
//		})
//	}
//	
//	

//
//	if(emailFlag && pasFlag){
//		
//		var userArr = $.cookie("userReg") ? JSON.parse($.cookie("userReg")) : [];
//		var userObj = {
//			"username":emailStr;
//			"password":pasStr;
//		}
//		userArr.push(userObj);
//		$.cookie("userReg",JSON.stringify(userArr),{path:'/',expires:365});
		
//		alert("")
	}

})