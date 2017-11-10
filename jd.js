$(document).ready(function(){
	console.log("京东秒杀，实时监控ing");
    var timer;
    function watch(){
        alert("add 0");
        // location.href = 'https://item.jd.com/5646652.html';
        $("#InitCartUrl").click();
    }


    timer = setTimeout(watch, 10000);
});
