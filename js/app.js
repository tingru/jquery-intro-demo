/* app.js
* main script file for our little application
* */

"use strict";

$(document).ready(function() {
    $('p a[href!="#top"]').attr('target', '_blank');
    $('section').hide().fadeIn(1000);

    $('nav a, p a[href="#top"]').click(function(evenObject) {
        console.log(this.hash);
        var targetElement =$(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top - navHeight}, 700);

        evenObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceholder =$('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos =$(this).scrollTop();
        //console.log(scrollPos);
        if (scrollPos >navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function() {
       window.location ='http://ischool.uw.edu';
    });
});
