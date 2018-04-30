var selected;

$(document).ready(function () {

    var temp=1;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $("#phone").show();
        $(".box").css("display","none");
        $("#home").hide();
        $(".page").css("height","96vh");

    }

    else
    {
        $("#pc").show();
    }
    $(".phone-menu-item").click(function(){

        var select = $(this).children().attr("id");
        if (select === "point3"||select==="phone-pic");
        else
        {

            if (temp === 1) {
                animation();
                temp = 0;

            }
            pages(select);
        }
    });
    $(".phone-box").click(function(){

        var select = $(this).children().attr("id");
        if (select === "point3"||select==="phone-pic");
        else
        {

            if (temp === 1) {
                animation();
                temp = 0;

            }
            pages(select);
        }

    });
    $(".box").click(function () {
        $(".points").css({"background-color": "#ebebeb", "color": "grey"});
        $(this).children().css({"background-color": "grey", "color": "black"});
        var select = $(this).children().attr("id");
        if (select === "point3"||select==="phone-pic");
        else
        {

            if (temp === 1) {
                animation();
                temp = 0;

            }
            pages(select);
        }
    });

    $("#home").click(function () {
		$("#menu-bar").hide(500);
        $(".home-box").fadeOut(500);
        $(".page").hide(1500);
        $("#test").fadeIn(2000);

        $(".box").animate({"margin-top":"30vh",
            "width":"20vw",
            "height":"20vw",
            "margin-left":"auto"},{duration: 1500,queue: false});
        $(".points").animate({"width":"16vw",
            "height":"16vw","font-size": "2vw","padding-top": "6.5vw"},{duration: 2000, queue:false});
        $(".points").css({"background-color":"#ebebeb","color":"gray"});

        $(".profile-pic").animate({"width":"18vw","height":"18vw"},2000);
        $(".header").hide(500);
        temp=1;
        $(selected).children().hide(500);
    });


    $("#phone-back").click(function (){
        $(".page").fadeOut(1000).delay(1000);

        $("#phone").show(1000);
    });

    $("#menu-image").click(function () {
        $("#menu-bar").toggle(500);
    });



});
function animation()
{

    $("#test").hide(2000);
    $(".profile-pic").animate({"width":"2vw","height":"2vw"},2000);
    $(".box").animate({"margin-top":"0vh",
        "width":"10vw",
        "height":"10vw"},2000);
    $(".points").animate({"width":"8vw",
        "height":"8vw","font-size": "1vw","padding-top": "3.25vw"},2000);

    $(".page").show(2000);
    $(".header").fadeIn(5000);
    $(".home-box").show(4000);

}
function pages(select) {
    if(select.match("phone"))
    {
        select=select.replace("-phone","");
        $("#phone-top").show(2500);
        $("#pc-header").hide();
        $(".page").show(2000);
    }
    else if(select.match("menu"))
    {
        select=select.replace("-menu","");
        $("#menu-bar").hide(500);
    }

    selected = "#" + select + "i";
    $(".phone").fadeOut(500).delay(1000);
    $(selected).show(1000);
    $(selected).children().fadeIn(4000);
    $(selected).siblings().hide(1000);
}