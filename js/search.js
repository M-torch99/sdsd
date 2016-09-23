$(function(){
	
	//懒加载
	var $plist = $('.plist');
	var flag = 0;
	//全局配置
	$.ajaxSetup({
		url:'../data/search.json',
		dataType:'json',
		success:function(res){
			//console.log(res);
			var $ul =$('<ul class="plist"></ul>')
			$.each(res,function(idx,item){
				//console.log(idx ,item);
				if ((idx - flag)<8 && (idx - flag) >= 0) {
					$('<li/>').html('<img src="../images/s'+(idx+1)+'.jpg">'+'<p>'+item.title+'</p>'+'<a href="#">'+item.price1+'<span>'+item.span+'</span></a>'+'<del>'+item.price2+'</del>').appendTo($ul);
				}
			});
			$ul.appendTo('.piclist')
		}
	})

	$.ajax();

		$(window).on('scroll',function(){
			var scrollTop = $(window).scrollTop();
			if(flag >= 24){
				return;
			}
			if ( scrollTop >= $(document).height() - $(window).height() - 400) {	
				$.ajax();
				flag +=8;

			}	 
		});


		$(window).trigger('scroll');


	//改变透明度
	var $proli = $('.piclist');
	$proli.on('mouseenter','.plist li',function(){
		$(this).stop().animate({
			'opacity':0.5,
		})
	})

	$proli.on('mouseleave','.plist li',function(){
		$(this).stop().animate({
			'opacity':1,
		})
	})	
	
})