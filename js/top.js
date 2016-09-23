$(function(){
	//1.获取页面元素
	var $homeRight = $('.homeRight');
	var $hr5 = $('.hr_5');
	//2.滚动

	$(window).on('scroll',function(){
		//获取滚动过的距离

		var scrollTop = $(window).scrollTop();

		//当滚动过的距离大于一定的距离时，显示导航

		if(scrollTop > 300){
			$homeRight.fadeIn();
		}else{
			$homeRight.fadeOut();
		}
	})

	//点击top的时候返回顶部
	$hr5.on('click',function(){
		scrollTop = 0;
	})
})