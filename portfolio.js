var selected;
$(document).ready(function () {
    var temp=1;
    $(".box").click(function () {
        $(".points").css({"background-color": "#333333", "color": "grey"});
        $(this).children().css({"background-color": "grey", "color": "black"});
        var select = $(this).children().attr("id");
        if (select === "point3");
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
        $(".home-box").fadeOut(500);
        $(".page").hide(1500);
        $("#test").fadeIn(2000);

        $(".box").animate({"margin-top":"30vh",
            "width":"20vw",
            "height":"20vw",
            "margin-left":"auto"},{duration: 1500,queue: false});
        $(".points").animate({"width":"16vw",
            "height":"16vw","font-size": "2vw","padding-top": "6.5vw"},{duration: 2000, queue:false});
        $(".points").css({"background-color":"#333333","color":"gray"});

        $(".profile-pic").animate({"width":"18vw","height":"18vw"},2000);
        $(".header").hide(500);
        temp=1;
        $(selected).children().hide(500);
    })

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
    selected="#"+select+"i";
    $(selected).show(1000);
    $(selected).children().fadeIn(4000);
    $(selected).siblings().hide(1000);
}