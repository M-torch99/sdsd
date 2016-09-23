$(function(){

	//获取页面元素
	var $picList = $('.picList');
	var $large = $('.large');
	var $tabs = $('.tab');
	var $sImg = $('.tab').find('li');
	var $bPic = $('.bpic')
	//鼠标移入事件
	$picList.on('mousemove',function(e){
		$large.show();
		$bPic.show();
		//先获取鼠标点击的位置
		var x = e.pageX;
		var y = e.pageY;
		//小图的坐标
		var $sL = $picList.offset().left;
		var $sT = $picList.offset().top;
		//获取放大镜的宽高
		var $lw = $large.outerWidth();
		var $lh = $large.outerHeight();
		//让鼠标始终在放大镜中间的位置显示
		var $left = x - $sL - $lw/2;
		var $top = y - $sT - $lh/2;

		//判断临界条件，不让放大镜移出小图框内
		if($left<0){
			$left=0;
		}else if($left>$picList.outerWidth() - $lw){
			$left = $picList.outerWidth() - $lw;
		}

		if($top<0){
			$top = 0
		}else if($top>$picList.outerHeight() - $lh){
			$top = $picList.outerHeight() - $lh;
		}

		//移动比例
		var bl_left = $left/($picList.outerWidth() - $lw);
		var bl_top = $top/($picList.outerHeight() - $lh);

		//大图移动的位置
		var $b_left = ($bPic.find('img').outerWidth() - $bPic.outerWidth())*bl_left;
		var $b_top = ($bPic.find('img').outerHeight() - $bPic.outerHeight())*bl_top;

		//大图和放大镜同时移动
		$large.css({'left':$left,'top':$top});
		$bPic.find('img').css({'left':-$b_left,'top':-$b_top});
	}).on('mouseleave',function(){
		//鼠标离开时隐藏
		$large.hide();
		$bPic.hide();
	})

	
})