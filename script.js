$(() => {
let repeat = false;//繰り返す(true)か止める(false)か
const images = $('#slide .image');
let index = 0;

// 最初の画像だけ表示させる
	images.eq(index).show();//display: noneを打ち消す

	$('#next').click(() => {
		++index;
		if(repeat) {//繰り返す
		  if(index >= images.length) index %= images.length;//index: 0 1 2 0 1 2 …(画像が3つの場合)
			images.hide();
		  images.eq(index).fadeIn();
		} else {//最後までいったら止める場合
			if(index < images.length) {
				images.hide();
				images.eq(index).fadeIn();
			} else {
				--index;
			}
		}
	});

	$('#rev').click(() => {
	  --index;
		if(repeat) {//繰り返す
		  if(index < 0) index += images.length;
		  images.hide();
		  images.eq(index).fadeIn();
		} else {//止める
			if(index >= 0) {
				images.hide();
				images.eq(index).fadeIn();
			} else {
				++index;
			}
		}
	});
});