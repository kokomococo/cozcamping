$(function(){
    $(".m_tap").hide();
    $(".menu_btn").click(function(){
        $(".m_tap").stop().slideDown();

    });
    $(".close_menu").click(function(){
        $(".m_tap").stop().slideUp();

    });


});