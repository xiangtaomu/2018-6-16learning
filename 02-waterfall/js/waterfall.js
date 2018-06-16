$.fn.waterfall = function (){
  // var $box = this;   父盒子
		var $item = this.children(); //所有的子盒子
		var boxWidth = this.width(); //父盒子的宽度
		var itemWidth = $item.width(); //子盒子的宽度
		var column = 5;//一共有5列
		var gap = (boxWidth - column * itemWidth) / (column - 1);//mind the gap 
		console.log(gap);

		var arr = [0, 0, 0, 0, 0];
		$item.each(function (i, e) {
			var min = Math.min(...arr);  //ES6新语法求数组最小值
			var minIndex = arr.indexOf(min);
			//设置元素的left和top值,确定位置
			$(this).css({
				left: minIndex * (itemWidth + gap),
				top: min
			});

			arr[minIndex] =min + $(this).height() + gap ;
		})
		console.log(arr);

		// 动态设置box的高度,即求arr数组的最大值
		var height = Math.max(...arr);
		this.height(height);
}