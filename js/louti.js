$(function(){
	//获取页面元素
	var $dh = $('.dh');
	var $dLi = $('.dh').find('li');
	var $floor = $('.floor');

	//点击楼层导航，跳转到相应的楼层
	$dLi.on('click',function(){
		var index = $(this).index();
		var scrollTop = $floor.eq(index).offset().top + $floor.eq(index).outerHeight()/2-400;
		$('html,body').animate({scrollTop:scrollTop});
	})
})