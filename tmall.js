$(document).ready(function(){
	console.log("tmall秒杀，实时监控ing");
    var timer;
	function watch(){
        console.log('watching');
		location.href = 'https://detail.tmall.com/item.htm?id=544751208475&skuId=3447571490096';
		// location.href = 'https://detail.tmall.com/item.htm?id=522834435294&skuId=3476795796129';
		$(".tb-action").each(function(){
            console.log($(this).css("display"));
            if($(this).css("display")=="none"){
                console.log('not start yet');
            }else{
                console.log('start');
                clearTimeout(timer);
                $(".ensureText").click();
            }

		});
	}
    watch();
	timer = setTimeout(watch, 800);
});
