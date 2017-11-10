$(document).ready(function(){
	console.log("tmall秒杀，实时监控ing");
    var timer;
	function watch(){
		location.href = 'https://detail.tmall.com/item.htm?id=544751208475&skuId=3447571490096';
		$(".tb-action").each(function(){
            if($(this).css("display")=="none"){
                console.log('not start yet');
            }else{
               console.log('start');
                clearTimeout(timer);
               $("#J_LinkBuy").click();
            }
		});
	}
	timer = setTimeout(watch, 800);

});
