$(function(){
	//大图
	var $picList = $('.picList');
	var $pLi = $picList.find('li');
	var $tab = $('.tab');
	var $tLi = $tab.find('li');
	var $bPic = $('.bpic');
	var $bImg = $bPic.find('li');

	$tLi.on('click',function(){
		console.log(1);
		var index = $(this).index();
		//按钮切换
		$tLi.removeClass('active');
		$tLi.eq(index).addClass('active');
		//图片切换
		$pLi.removeClass('show');
		$pLi.eq(index).addClass('show');
		//放大镜对应大图片切换
		$bImg.removeClass('z-act');
		$bImg.eq(index).addClass('z-act');

	})

	//点击左右按钮图片切换
	// var iWidth = $('.tab li:first').outerWidth();  
	// 	var index = 0;
	// 	//console.log(iWidth);
	// 	function movebtn(){
	// 		index++;
	// 		if (index >= 4) {
	// 			index = 3;
				
	// 		}
	// 		if ( index <= -1) {
	// 			index = 1;
				
	// 		}
	// 		var iLeft = -1*index*iWidth;
	// 		console.log(iLeft)
	// 		$('.tab').animate({'left':iLeft});

	// 	}
	// 	$('.new-left').click(function(){		
	// 		index -= 2;
	// 		movebtn();
	// 		console.log(index)
	// 	});

	// 	$('.new-right').click(function(){
	// 		movebtn();
	// 	});

})