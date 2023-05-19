$(document).ready(function () {
    $(".feather-search").click(function () {
        $(".search-box").toggle();
        $("input[type='text']").focus()
    });
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return !1
    });
    $('#page-scroll').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear')
    });
    $(document).on('click', 'a.page-scroll', function (event) {
        var $anchor = $(this);
        $('html,body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 45)
        }, 1500, 'easeInOutExpo');
        event.preventDefault()
    });

});

function openNav() {
    document.getElementById("mySidenav1").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav1").style.width = "0";
}