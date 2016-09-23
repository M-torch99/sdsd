window.onload = function(){

	var slide = document.getElementsByClassName('slide')[0];
	var aLi = slide.getElementsByTagName('li');
	var btns = document.getElementsByClassName('btns')[0];
	var oBtns = btns.getElementsByTagName('li');
	console.log(oBtns);

	//1.复制一份图片
	slide.innerHTML += slide.innerHTML;

	//2.获取随便一张图片的宽度，并且设置当前显示图片的下标，给Ul设置宽度
	var iWidth = aLi[0].offsetWidth;
	var i = 0;
	slide.style.width = aLi.length * iWidth + 'px';

	//设置定时器，让图片每隔三秒切换
	var timer = setInterval(move,3000);

	//动画切换函数
	function move(){
		i++;
		var iLeft = -i * iWidth;
		startMove(slide,'left',iLeft,next);

		//切换时按钮高亮效果切换
		for(var j = 0;j<oBtns.length;j++){
			if(i == j){
				oBtns[j].children[0].className = 'zzz';
				oBtns[j].children[1].className = 'active';
				oBtns[j].children[2].className = 'active';
			}else{
				oBtns[j].children[0].className = '';
				oBtns[j].children[1].className = '';
				oBtns[j].children[2].className = '';
			}
		}

		//如果是第7张，第一个按钮也高亮
		if(i == aLi.length / 2){
			oBtns[0].children[0].className = 'zzz';
			oBtns[0].children[1].className = 'active';
			oBtns[0].children[2].className = 'active';
		}
	}

	//回调函数,当是第7张的时候立即换成第一张
	function next(){
		if(i == aLi.length / 2){
			slide.style.left = 0;
			i = 0;
		}
	}

	//鼠标移入事件
	for(var j = 0 ;j<oBtns.length;j++){
		oBtns[j].index = j;
		oBtns[j].onmouseenter = function(){
			i = this.index - 1;
			clearInterval(timer);
			move();			
		}

		oBtns[j].onmouseleave = function(){
			//i = this.index - 1;
			move();
			timer = setInterval(move,3000);
		}
	}

}