$(function() {

	var reEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var emailFlag = false;

	$(".user-register input.user-name").bind("blur", function() {
		var emailStr = $(".user-register input.user-name").val();

		if(emailStr == '') {
			$("p.tips1").html("邮箱不能为空！");
		} else if(!reEmail.test(emailStr)) {
			$("p.tips1").html("邮箱格式错误！");
		} else {
			$("p.tips1").html("<span style='color:deepskyblue'>邮箱输入正确！</span>");
			emailFlag = true;
		}

	})

	var rePas = /^\w{6,20}$/;
	var pasFlag = false;

	$(".user-register input.paw").bind("blur", function() {
		var pasStr = $(".user-register input.paw").val();

		if(pasStr == '') {
			$("p.tips2").html("密码不能为空！");
		} else if(!rePas.test(pasStr)) {
			$("p.tips2").html("密码格式错误，应为6至20位字符！");
		} else {
			$("p.tips2").html("<span style='color:deepskyblue'>密码格式正确！</span>");
			pasFlag = true;
		}
	})

	$(".user-register input.btn-red").bind('click', function() {
		var emailStr = $(".user-register input.user-name").val();
		var pasStr = $(".user-register input.paw").val();

		if(emailStr == '') {
			$('p.tips1').html('邮件不能为空！')
		}
		if(pasStr == '') {
			$('p.tips2').html('密码不能为空！')
		}
		
		
		if($.cookie("userReg")) {
			$.each(JSON.parse($.cookie("userReg")), function(i, n) {
				//n.username 即为我们输入进去的邮箱
				if(emailStr == n.username) {
					$('p.tips1').html('该邮箱已被注册');
					emailFlag = false;//就不会进
				}
			});
		}

		if(emailFlag && pasFlag) {

			var userArr = $.cookie("userReg") ? JSON.parse($.cookie("userReg")) : [];//用parse()方法转成JSON对象的数组

			var userObj = { //将输入的值存一个新定义json对象对象中
				"username": emailStr,
				"password": pasStr
			}

			userArr.push(userObj); //将json对象添加到userArr里面

			$.cookie("userReg", JSON.stringify(userArr), {path: '/',expires: 365});
			//创建cookie(名字，cookie的值存储的是string，所以要转，{路径，有效日期})

			alert("注册成功！");
		}

	})

})