$(function(){
	//获取页面元素
	var $btn = $('input[type="button"]');
	var $pwd = $('.pwd');
	var $yhm = $('.yhm');

	$yhm.click(function(){
		$yhm.find('input').addClass('active');
	});

	$pwd.click(function(){
		$pwd.find('input').addClass('active');
	})

	//登录验证
	$('.denglu').click(function(){
		var tel = $('.yhm').find('input').val();
		var pwd = $('.pwd').find('input').val();

		if(tel ==''){

			$('.after').eq(0).text('请输入手机号码');
			$('.after').eq(0).show();

		}

		if(pwd == ''){
			$('.after').eq(1).text('请输入密码');
			$('.after').eq(1).show();
		}
		
	})

	//手机号的验证

	$('.yhm').find('input').blur(function(){
		var tel = $(this).val();//失去焦点后再获取文本框的数据
		$yhm.find('input').removeClass('active');
		if(tel == ''){
			$(this).next('span').text('请输入手机号码');
			$(this).next('span').show();
		}else if(isMobile(tel) == false){
			$(this).next('span').text('请输入正确的号码');
			$(this).next('span').show();
		}else if(isMobile(tel) == true){
			$(this).next('span').hide();
		}

	})

	//密码验证
	$('.pwd').find('input').blur(function(){
		var pwd = $(this).val();//失去焦点后再获取文本框的数据
		$pwd.find('input').removeClass('active');
		if(pwd == ''){
			$(this).next('span').text('请输入密码');
			$(this).next('span').show();
		}else{
			$(this).next().hide();
		}
	})

	//用户登录，获取cookie
	$btn.click(function(){
		var tel = $('.yhm').find('input').val();
		var pwd = $('.pwd').find('input').val();

		if(tel == getCookie('tel') && pwd == getCookie('pwd')){
			$btn.submit();
		}else{
			alert('用户名或密码错误');
			return false;//过期则表单不提交
		}
	})

})