$.fn.waterfall = function (){
  $items = this.children();
  boxWidth = this.width();
  itemWidth = $items.width();
  var count = 5;
  var space = (boxWidth - itemWidth * count) / (count - 1);
  var arr = [0, 0, 0, 0, 0];
  $items.each(function (i, e) {
    var min = Math.min.apply(null, arr);
    var minIndex = arr.indexOf(min);
    $(this).css({
      left: (itemWidth + space) * minIndex,
      top: min
    })
    arr[minIndex] = min + $(this).height() + space;
  })
//让按钮加载更过显示
  var height = Math.max.apply(null,arr);
  this.height(height);
}