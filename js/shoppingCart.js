$(function(){
	// var e = e || window.event;
	var $aLi = $('.goods').find('li').eq(4);

	var num = 1;
		$aLi.find('a').eq(0).click(function(){
			console.log(1)
			num --;
			if(num <= 0){
				num = 0;
			}

		$(this).next('input').val(num);
			//console.log($price);
		var $total = $('.total');
		$('.goods').find('li').eq(5).html(num*$price);
		$('.total').find('li').eq(1).children('span').html(num*$price)
		$('.total').find('li').eq(2).children('span').html(num*$price+8)

		// e.preventDefault();
	})
		var $price = $('.goods').find('em').html();
		$aLi.find('a').eq(1).click(function(){
			console.log(1)
			num ++;
			if(num >= 50){
				num = 50;
			}

			$(this).prev('input').val(num);
			//console.log($price);
			var $total = $('.total');
		$('.goods').find('li').eq(5).html(num*$price);
		$('.total').find('li').eq(1).children('span').html(num*$price)
		$('.total').find('li').eq(2).children('span').html(num*$price+8)

		// e.preventDefault();
	})



///////////------加入购物车----/////////////
	var $list = $('.list');
	var $allA  = $('.add');
	var $currentMg = $('.list').find('dl').eq(0).find('dd').find('p');
	//获取购物车,用于放置商品
	var $cartList = $('.cart-list dl');
 	//给按钮绑定点击事件
	$('.add').click(function(e){
		//获取图片的父级
		var $currentDt = $(this).parent('dd').prev('dt');
		//获取图片
		var $img = $currentDt.children('img');
		//复制图片
		var $cloneImg = $img.clone();
		//给复制的图片写样式,并且写入到页面中
		$cloneImg.css({
			width:$img.width(),
			position:'absolute',
			left:$img.offset().left,
			top:$img.offset().top,
		}).appendTo('body');

		//复制图片的动画效果
		$cloneImg.animate({
			left:$cartList.offset().left,
            top:$cartList.offset().top + $cartList.outerHeight(),
            width:10,
            opacity:0.5,
		},function(){
			//删除用于动画的图片
			$cloneImg.remove();
			//删除购物车列表中的“添加到购物车”按钮
			var $cloneMg = $currentMg.clone();
			$cloneMg.css({
				'font-size':12,
				color:'#999999',
			})
			var $cloneDt = $currentDt.clone();
			//复制所有商品的信息
			$cloneDt.next('dd').find('a').remove();
			//3)在购物车列表中添加移除按钮,点击按钮时，删除购物车中对应的商品
			var $closeBtn = $('<span>');
			$closeBtn.addClass('btn-close').html('&times').appendTo($cloneDt);
			
			 $cloneDt.appendTo($cartList);
              $cloneMg.appendTo($cartList);

              //点击按钮，删除购物车的对应商品
             $closeBtn.click(function(){
                $(this).closest('dt').remove();
                $cloneMg.remove();
            });

               

		})

		e.preventDefault();
	})

})