var cover = $("<div><p>Hey there mister or miss!</p></div>");
cover.addClass("popUp");
cover.hide();

$("body").append(cover);

$("a").click(function(){
    var idVal = $(this).attr("href");
    $("html, body").animate({
        'scrollTop':$(idVal+"Section").offset().top
    },300)
});

$("#clickButton").click(function(){
    $("#helloPeople").hide();
    cover.show();
    $("body").append(ele, cover);
})

cover.click(function(){
    $(this).hide();
    $("#helloPeople").show();
    $("body").append(ele, cover);
});

