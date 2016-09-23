$(function(){
	var $btn = $('button');
	var $tel = $('.tel');
	var $pwd = $('.pwd');
	var $pwd1 = $('.pwd_1');
	var $verify = $('.verify');
	//点击的时候输入框高亮
	$tel.click(function(){
		$tel.find('input').addClass('active');
	})

	$pwd.click(function(){
		$pwd.find('input').addClass('active');
	})

	$pwd1.click(function(){
		$pwd1.find('input').addClass('active');
	})

	// $verify.click(function(){
	// 	$verify.find('input').addClass('active');
	// })

	//注册验证
	//点击注册按钮验证
	$btn.click(function(){

		var tel = $tel.find('input').val();
		var pwd = $pwd.find('input').val();
		var pwd1 = $pwd1.find('input').val();
		var verity = $verity.find('input').val();

		if(tel == ''){
			$('.after').eq(0).text('请输入手机号码');
			$('.after').eq(0).show();
		}

		if(pwd == ''){
			$('.after').eq(1).text('请输入密码');
			$('.after').eq(1).show();
		}

		if(pwd1 == ''){
			$('.after').eq(2).text('请确认密码');
			$('.after').eq(2).show();
		}

		if(verity == ''){
			$('.after').eq(3).text('请输入验证码');
			$('.after').eq(3).show();
		}

	})

	//手机号码验证
	$tel.find('input').blur(function(){
		$tel.find('input').removeClass('active');
		var tel  = $(this).val();//失去焦点后再获取文本框的数据
		if(tel == ''){

			$(this).next('span').text('请输入手机号码');
			$(this).next().show();
		
		}else if(isMobile(tel) == false){
			$(this).next().text('请输入正确手机号');
			$(this).next().show();
		}else if(isMobile(tel) == true){
			$(this).next().hide();
		}
	})

	//密码验证
	$pwd.find('input').blur(function(){
		$pwd.find('input').removeClass('active');
		var pwd = $(this).val();
		if(pwd == ''){
			$(this).next('span').text('请输入密码');
			$(this).next().show();
		}else{
			$(this).next().hide();
		}
		//密码再验证
		$pwd1.find('input').blur(function(){
			$pwd1.find('input').removeClass('active');
			var pwd1 = $(this).val();
			if(pwd1 == ''){
				$(this).next('span').text('请再次输入密码');
				$(this).next().show();
			}else if(pwd1 != pwd){
				$(this).next('span').text('两次输入的密码必须一致！');
				$(this).next().show();
			}
		})
	})

	//验证码验证
	$verify.find('input').blur(function(){
		var verity = $(this).val();
		var sjyzm  = $('.siyzm').text();

		if(verity == ''){
			$(this).next().text('请输入验证码')
			$(this).next().show();
		}if(verity != sjyzm){
			$(this).next().text('验证码错误');
			$(this).next().show();
		}else{
			$(this).next().hide();
		}
	})

	//用户注册，设置cookie
	$btn.click(function(){
		if($('.siyzm').text() == $verity.val()){
			var tel = $('.tel').eq(1).val();
			var pwd = $('.pwd').eq(1).val();

			setCookie('tel', tel, 100);
			setCookie('pwd', pwd, 100);

			$btn.submit();
			alert('恭喜，注册成功')

		}else{
			alert('注册失败');
			return false;//表单比提交
		}
	})

})

//验证码的刷新
window.onload = function () {
	 var sxyzm = document.getElementsByClassName("sxyzm")[0];

	sxyzm.onclick = function() {
        var oSpan = document.getElementsByClassName("sjyzm")[0];
        var str = "abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var code = "";
        for( var i = 0; i < 4; i ++){
            //获取字符串下标的随机数
            var s = parseInt(Math.random()*str.length);
            //通过下标取得字符串的内容
            code += str[s];
        }
        oSpan.innerHTML = code;
    }


}