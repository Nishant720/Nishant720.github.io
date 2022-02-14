// Nav Menu Hide on Click
$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});
// !Nav Menu Hide on Click

// Nav Style on Scroll
$(document).ready(function() {
    function HeaderMenu() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".navigation-menu").addClass("header-menu");
        } else {
            $(".navigation-menu").removeClass("header-menu");
        }
    }

    $(window).on("scroll", function() {
        HeaderMenu();
    });
});
// !Nav Style on Scroll


// Work Style on Scroll
$(document).ready(function() {
    var lastScrollTop = 0;

    function WorkMenu() {
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            $(".work-menu").addClass("box-menu");
        } else {
            $(".work-menu").removeClass("box-menu");
        }

        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $(".work-menu").addClass("sticky-menu");
        } else {
            $(".work-menu").removeClass("sticky-menu");
        }
        lastScrollTop = st;
    }

    $(window).on("scroll", function() {
        WorkMenu();
    });
});
// !Work Style on Scroll

// Image Modal Pop-up
$(document).ready(function() {
    $('.popup-link').magnificPopup({ type: 'image' });

    $('.parent-idea').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    });
    $('.parent-persona').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
        type: 'image'
    });
});
// !Image Modal Pop-up


// Loader
$(window).on('load', function() {
    setTimeout(removeLoader, 00);
    //wait for page load PLUS two seconds.
});

function removeLoader() {
    $(".loader-screen").fadeOut(100);
}

function autograph() {
    var parent = document.querySelector('.signature'),
        path = document.querySelector('.signature__path'),
        length = path.getTotalLength();

    path.style.transition = path.style.WebkitTransition = 'none';

    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = path.style.webkitTransition = 'stroke-dashoffset 3.75s linear';
    path.style.strokeDashoffset = '0';
    path.style.strokeDashoffset = Math.abs(length) * -1.5;
};

setInterval(function() {
    autograph();
}, 4000)

autograph();
//! Loader


var McButton = $("[data=hamburger-menu]");
var McBar1 = McButton.find("b:nth-child(1)");
var McBar2 = McButton.find("b:nth-child(2)");
var McBar3 = McButton.find("b:nth-child(3)");



McButton.click(function() {
    $(this).toggleClass("active");

    if (McButton.hasClass("active")) {
        McBar1.velocity({ top: "50%" }, { duration: 200, easing: "swing" });
        McBar3.velocity({ top: "50%" }, { duration: 200, easing: "swing" })
            .velocity({ rotateZ: "90deg" }, { duration: 800, delay: 200, easing: [500, 20] });
        McButton.velocity({ rotateZ: "135deg" }, { duration: 800, delay: 200, easing: [500, 20] });
    } else {
        McButton.velocity("reverse");
        McBar3.velocity({ rotateZ: "0deg" }, { duration: 800, easing: [500, 20] })
            .velocity({ top: "100%" }, { duration: 200, easing: "swing" });
        McBar1.velocity("reverse", { delay: 800 });
    }
});

$(document).ready(function() {
    var getProductHeight = $('.product.active').height();
  
    $('.products').css({
      height: getProductHeight
    });
  
    function calcProductHeight() {
      getProductHeight = $('.product.active').height();
  
      $('.products').css({
        height: getProductHeight
      });
    }
  
    function animateContentColor() {
      var getProductColor = $('.product.active').attr('product-color');
  
      $('body').css({
        background: getProductColor
      });
  
      $('.title').css({
        color: getProductColor
      });
  
      $('.btn').css({
        color: getProductColor
      });
    }
  
    var productItem = $('.product'),
      productCurrentItem = productItem.filter('.active');
  
    $('#next').on('click', function(e) {
      e.preventDefault();
  
      var nextItem = productCurrentItem.next();
  
      productCurrentItem.removeClass('active');
  
      if (nextItem.length) {
  
        productCurrentItem = nextItem.addClass('active');
      } else {
        productCurrentItem = productItem.first().addClass('active');
      }
  
      calcProductHeight();
      animateContentColor();
    });
  
    $('#prev').on('click', function(e) {
      e.preventDefault();
  
      var prevItem = productCurrentItem.prev();
  
      productCurrentItem.removeClass('active');
  
      if (prevItem.length) {
        productCurrentItem = prevItem.addClass('active');
      } else {
        productCurrentItem = productItem.last().addClass('active');
      }
  
      calcProductHeight();
      animateContentColor();
    });
  
    // Ripple
    $('[ripple]').on('click', function(e) {
      var rippleDiv = $('<div class="ripple" />'),
        rippleSize = 60,
        rippleOffset = $(this).offset(),
        rippleY = e.pageY - rippleOffset.top,
        rippleX = e.pageX - rippleOffset.left,
        ripple = $('.ripple');
  
      rippleDiv.css({
        top: rippleY - (rippleSize / 2),
        left: rippleX - (rippleSize / 2),
        background: $(this).attr("ripple-color")
      }).appendTo($(this));
  
      window.setTimeout(function() {
        rippleDiv.remove();
      }, 1900);
    });
  });