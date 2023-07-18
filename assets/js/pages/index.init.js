$(function () {
    var _windowWidth = $(window).width();
    if (_windowWidth<1280) {
      $('.chat-conversation, .chat-input-section').removeClass('pe-8 ps-8').addClass('pe-4 ps-4');
      $(".ctext-wrap-content").removeClass("w-75").addClass("w-100");
    }else{
        $('.chat-conversation, .chat-input-section').addClass('pe-8 ps-8').removeClass('pe-4 ps-4');
        $(".ctext-wrap-content").addClass("w-75").removeClass("w-100");
    }
  });

$(document).ready(function() {
    $(".popup-img").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-img-mobile",
        image: {
            verticalFit: !0
        }
    }), $("#user-status-carousel").owlCarousel({
        items: 4,
        loop: !1,
        margin: 16,
        nav: !1,
        dots: !1
    }), $("#chatinputmorelink-carousel").owlCarousel({
        items: 2,
        loop: !1,
        margin: 16,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 5,
                nav: !1
            },
            992: {
                items: 8
            }
        }
    }), $("#user-profile-hide").click(function() {
        $(".user-profile-sidebar").hide()
    }), $(".user-profile-show").click(function() {
        $(".user-profile-sidebar").show()
    }), $(".chat-user-list li a").click(function() {
        $(".user-chat").addClass("user-chat-show")
    }), $(".user-chat-remove").click(function() {
        $(".user-chat").removeClass("user-chat-show")
    })
    typeWriter();
});



var i = 0;
var txt = "The cost of a flight from India to Dubai can vary depending on a variety of factors, such as the time of year, the airline, the route, and how far in advance you book your ticket. As an AI language model, I do not have access to real-time data and prices."+ "\r\n" +"I suggest checking with various airlines and travel agencies to compare prices and find the best deal for your specific travel dates and preferences. You can also use online travel platforms like Kayak, Skyscanner, or Expedia to search for flights and compare prices. Additionally, you can check the official website of the airline you prefer to fly with, as they often have promotional offers and deals on their website.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("content-typign").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}