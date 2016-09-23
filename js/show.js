$(function(){
	//显示隐藏
	var $bdsUnfold = $('#bds-unflod');
	var $bdsFloat = $('.bds-float');
	var $bdsHeader = $('.bds-header');

	$bdsUnfold.on('click',function(){
		$(this).fadeOut();
		$bdsFloat.fadeIn();
	});;

	$bdsHeader.find('a').on('click',function(){
		$bdsHeader.parent().parent().fadeOut();
		$bdsUnfold.fadeIn();
	})

	//二级菜单
	var $menu = $('.menu');
	var $dl = $('.menu').find('dl');
	var $show = $('.menu_2');
	$dl.on('mousemove',function(){
		var index = $(this).index();
		$show.eq(index).fadeIn();
	}).on('mouseleave',function(){
		var index = $(this).index();
		$show.eq(index).fadeOut();
	})
})