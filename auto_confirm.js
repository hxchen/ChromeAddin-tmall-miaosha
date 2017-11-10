/**
 * Created by haixiangchen on 2017/11/10.
 */
$(document).ready(function(){
    var e = $(".order-submitOrder a");
    console.log((e).attr("title"));
    $(e).click();

    var w = $("div.wrapper");
    $(w).click();


    var a = $("a.go-btn");
    $(a).click();
    console.log($(a).attr("data-reactid"));
    console.log(a);

    var order_frontTrace = $("div.order-frontTrace");
    $(order_frontTrace).click();

    var order_urlTransfer = $("div.order-urlTransfer");
    $(order_urlTransfer).click();

    var order_ncCheckCode = $("div.order-ncCheckCode");
    $(order_ncCheckCode).click();

    var order_submitOrder = $("div.order-submitOrder");
    $(order_submitOrder).click();

});