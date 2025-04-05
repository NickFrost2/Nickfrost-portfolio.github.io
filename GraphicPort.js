//Techpro JS//

//navbar toggle icon
function navbar_toggler() {
  $(".navbar-toggler[data-toggle=collapse]").click(function () {
    if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass("fa-bars")) {
    } else {
      $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
    }
  });
}
navbar_toggler();

// navbar clone in mobile device
function navClone() {
  $(".js-clone-nav").each(function () {
    var $this = $(this);
    $this
      .clone()
      .attr("class", "navbar-nav ml-auto")
      .appendTo(".d2c_mobile_view_body");
  });

  $(".d2c_mobile_view .nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(".d2c_mobile_view").removeClass("show");
    $(this).toggleClass("active");
  });
}
navClone();

// team slider js
$(".d2c_team_slider").slick({
  centerMode: true,
  centerPadding: "0px",
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        centerPadding: "24px",
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "0px",
      },
    },
  ],
});

// js for fancybox slide & button

function fancybox() {
  $("[data-fancybox]").fancybox({
    protect: true,
    buttons: ["fullScreen", "thumbs", "share", "slideShow", "close"],
    image: {
      preload: false,
    },
  });
}
fancybox();

// testimonial slider js
$(".testimonial_slider").slick({
  centerMode: true,
  centerPadding: "0px",
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// Preloader JS
window.addEventListener("load", function () {
  var preloader = document.querySelector(".preloader");
  preloader.classList.add("hide");
});

// ScrollBtn JS
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}

//Waso js//

(function ($) {
  "use strict";

  // PROJECTS IMAGE RESIZE
  function NewsImageResize() {
    var LargeImage = $(".projects-thumb-small .projects-image").height();

    $(".projects-thumb-large").css("height", LargeImage + "px");
  }

  $(window).on("resize", NewsImageResize);
  $(document).on("ready", NewsImageResize);

  $(".custom-link").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);



//Color Change (boostrap)//
// (() => {
//   "use strict";

//   const getStoredTheme = () => localStorage.getItem("theme");
//   const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

//   const getPreferredTheme = () => {
//     const storedTheme = getStoredTheme();
//     if (storedTheme) {
//       return storedTheme;
//     }
//     return window.matchMedia("(prefers-color-scheme: dark)").matches
//       ? "dark"
//       : "light";
//   };

//   const setTheme = (theme) => {
//     if (theme === "auto") {
//       document.documentElement.setAttribute(
//         "data-bs-theme",
//         window.matchMedia("(prefers-color-scheme: dark)").matches
//           ? "dark"
//           : "light"
//       );
//     } else {
//       document.documentElement.setAttribute("data-bs-theme", theme);
//     }
//   };

//   setTheme(getPreferredTheme());

//   const showActiveTheme = (theme, focus = false) => {
//     const themeSwitcher = document.querySelector("#bd-theme");
//     if (!themeSwitcher) return;

//     const activeThemeIcon = document.querySelector(".theme-icon-active");
//     const btnToActive = document.querySelector(
//       `[data-bs-theme-value="${theme}"]`
//     );
//     const iconClass = btnToActive.querySelector("i").classList[1]; // Get FontAwesome icon class

//     document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
//       element.classList.remove("active");
//       element.setAttribute("aria-pressed", "false");
//     });

//     btnToActive.classList.add("active");
//     btnToActive.setAttribute("aria-pressed", "true");

    // Update Font Awesome icon correctly
  //   activeThemeIcon.className = `theme-icon-active fas ${iconClass}`;

  //   if (focus) {
  //     themeSwitcher.focus();
  //   }
  // };

//   window
//     .matchMedia("(prefers-color-scheme: dark)")
//     .addEventListener("change", () => {
//       const storedTheme = getStoredTheme();
//       if (storedTheme !== "light" && storedTheme !== "dark") {
//         setTheme(getPreferredTheme());
//       }
//     });

//   window.addEventListener("DOMContentLoaded", () => {
//     showActiveTheme(getPreferredTheme());

//     document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
//       toggle.addEventListener("click", () => {
//         const theme = toggle.getAttribute("data-bs-theme-value");
//         setStoredTheme(theme);
//         setTheme(theme);
//         showActiveTheme(theme, true);
//       });
//     });
//   });
// })();
