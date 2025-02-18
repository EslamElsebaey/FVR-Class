$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // Account User Menu
  $(".user-menu .menu-anchor").click(function () {
    $(this).toggleClass("active").siblings(".sub-menu").slideToggle();
    $(".user-menu .menu-anchor")
      .not(this)
      .removeClass("active")
      .siblings(".sub-menu")
      .slideUp();
  });
  // if($(window).width() < 992) {
  //   $(".user-menu .menu-anchor").removeClass("active");
  //   $(".user-menu .sub-menu .sub-anchor").removeClass("active");
  //   $(".user-menu .sub-menu").css("display" , "none");
  // }

  // Toggle menu in Mobile
  $(".user-nav-toggle").click(function (e) {
    $(this).parents(".user-nav").toggleClass("active");
  });

  // ************************************************************************************************
  // Change color of selected option  to black
  $(".myselect").on("change", function () {
    $(this)
      .siblings(".select2-container")
      .find(".select2-selection__rendered")
      .addClass("text-black");
  });

  // ************************************************************************************************

  // Files Inputs
  const inputFile = $(".input-file");

  $(".add-file-btn").on("click", function (e) {
    e.preventDefault();
    $(this).siblings(".input-file").click();
  });

  inputFile.on("change", function () {
    if (this.files.length === 1) {
      const file = this.files;
      let fileNameText = file[0].name;
      let inputWidth = $(this).closest(".file-input-wrapper").width();
      if (inputWidth >= 400) {
        if (fileNameText.length > 36) {
          fileNameText = fileNameText.substring(0, 33) + "...";
        }
      } else {
        if (fileNameText.length > 26) {
          fileNameText = fileNameText.substring(0, 23) + "...";
        }
      }

      const fileName = $("<p>").addClass("file-name").text(fileNameText);
      $(this).closest(".file-input-wrapper").find(".file-name").remove();
      $(this).closest(".file-input-wrapper").append(fileName);
      console.log(file);
    }
  });

  // ************************************************************************************************

  // Fancybox
  // Fancybox.bind("[data-fancybox='eduContent-images-gallery']", {
  //    buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
  // });
  // $('[data-fancybox="eduContent-images-gallery"]').fancybox({

  // });

  // Fancybox.bind('[data-fancybox="eduContent-images-gallery"]', {
  //   // Your custom options for a specific gallery
  // });

  // fancybox

  // $('[data-fancybox="eduContent-images-gallery"]').fancybox({
  //   buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
  // });

  if ($("[data-fancybox='eduContent-images-gallery']").length) {
    Fancybox.bind('[data-fancybox="eduContent-images-gallery"]', {
      Carousel: {
        transition: "slide",
        infinite: false,
      },
    });
  }

  // ************************************************************************************************

  //  Modals

  // Classes Modals
  $(".edit-class-btn").on("click", function () {
    $(".edit_class_modal").fadeIn();
  });
  $(".delete-class-btn").on("click", function () {
    $(".delete_class_modal").fadeIn();
  });
  $(".copy-class-btn").on("click", function () {
    $(".copy_class_modal").fadeIn();
  });

  // Students Modals
  $(".add-student-btn").on("click", function () {
    $(".add_student_modal").fadeIn();
  });

  $(".edit-student-btn").on("click", function () {
    $(".edit_student_modal").fadeIn();
  });
  $(".delete-student-btn").on("click", function () {
    $(".delete_student_modal").fadeIn();
  });

  // History Modals
  $(".view-attendance-btn").on("click", function () {
    $(".attendance_history_modal").fadeIn();
  });
  $(".view-points-btn").on("click", function () {
    $(".points_history_modal").fadeIn();
  });

  // Student List Modals
  $(".view-list-btn").on("click", function () {
    $(".student_list_modal").fadeIn();
  });

  // Sessions Modals

  //  Content Modals (new content & video-content & images-content)
  $(".add-eduContent-btn").on("click", function () {
    $(".add_eduContent_modal").fadeIn();
  });
  $(".video-eduContent-btn").on("click", function () {
    $(".video_eduContent_modal").fadeIn();
  });
  $(".images-eduContent-btn").on("click", function () {
    $(".images_eduContent_modal").fadeIn();
  });

  // Attendances & Absences

  $(".attendanceAbsence-page .student-card-btn").on("click", function () {
    $(".confirm_attendanceAbsence_modal").fadeIn();
  });

  $(".add-student-attendance-btn").on("click", function () {
    $(".add_student_attendance_modal").fadeIn();
  });

  // Add Points Modal

  $(".add-points-btn").on("click", function () {
    $(".add_points_modal").fadeIn();
    $("body").addClass("overflowHidden");
    $(".add_points_modal .modal_box").addClass("transition-box");
  });

  $(".add_points_modal .confirm-btn").on("click", function () {
    $(".add_points_modal").fadeOut();
    $(".add_points_success_modal").fadeIn();
    $(".add_points_success_modal .modal_box").addClass("transition-box");
  });

  // Deduct Points Modal
  $(".deduct-points-btn").on("click", function () {
    $(".deduct_points_modal").fadeIn();
    $("body").addClass("overflowHidden");
    $(".deduct_points_modal .modal_box").addClass("transition-box");
  });

  $(".deduct_points_modal .confirm-btn").on("click", function () {
    $(".deduct_points_modal").fadeOut();
    $(".deduct_points_success_modal").fadeIn();
    $(".deduct_points_success_modal .modal_box").addClass("transition-box");
  });

  // Common in Add & Deduct Points Modal
  $(
    ".add_points_success_modal .proceed-btn , .deduct_points_success_modal .proceed-btn"
  ).on("click", function () {
    $(".general_modal").fadeOut();
    $("body").removeClass("overflowHidden");
    $(".modal_box").removeClass("transition-box");
    $(".student-card-btn input").prop("checked", false);
  });

  // Finish Session

  $(".finish-session-btn").on("click", function () {
    $(".finish_session_modal").fadeIn();
  });

  // Create Groups
  $(".add-groups-btn").on("click", function () {
    $(".create_groups_modal").fadeIn();
  });

  // Group increment and decrement counter
  $(".plus-icon").on("click", function () {
    let currentNumber = parseInt($(".students-number").text(), 10);
    $(".students-number").text(currentNumber + 1);
  });

  $(".minus-icon").on("click", function () {
    let currentNumber = parseInt($(".students-number").text(), 10);
    if (currentNumber !== 0) {
      $(".students-number").text(currentNumber - 1);
    }
  });

  // ////////////////////////////////////////////////////////////////////
  //  Common In All Modals
  $(".modal_btn").on("click", function () {
    $(".modal_box").addClass("transition-box");
    $("body").addClass("overflowHidden");
  });

  $(".general_modal , .close_modal , .modal_btns .outline-btn").on(
    "click",
    function () {
      $(".general_modal").fadeOut();
      $("body").removeClass("overflowHidden");
      $(".modal_box").removeClass("transition-box");
    }
  );

  $(".modal_box:not(.images_eduContent_modal .modal_box) , .modal_title").on(
    "click",
    function (e) {
      e.stopPropagation();
    }
  );
  // ************************************************************************************************

  //  Select2

  if ($(".myselect").length > 0) {
    $(".myselect").select2();
    $(".form select").select2({
      minimumResultsForSearch: -1,
    });
  }

  // ***********************************************************************************************
  // SWIPERS

  // Main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

  // Main Swiper
  const Reviewswiper = new Swiper(".reviews .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".reviews .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
    },
  });

  // ***********************************************************************************************
  // Faq

  $(".faq-item").on("click", function () {
    $(this).children(".faq-answer").slideToggle(300);
    $(this).toggleClass("active").siblings().removeClass("active");
    $(".faq-answer").not($(this).children(".faq-answer")).slideUp(300);
  });

  // Inteltelinput
  let input = $("input[type=tel]");
  for (let i = 0; i < input.length; i++) {
    intlTelInput(input[i], {
      utilsScript: "utils.js",
      autoPlaceholder: "aggressive",
      separateDialCode: true,
      initialCountry: "sa",
      preferredCountries: ["sa", "kw", "ae", "bh", "om", "qa", "eg"],
    });
  }

  // Terms Sticky nav

  // if ($(window).width() > 992) {
  //   $(".terms-privacy-wrapper .nav-list li a").on("click", function () {
  //     let id = $(this).attr("href");
  //     $(".topic").removeClass("pt-80");
  //     $(id).addClass("pt-80");
  //     $(window).on("scroll", function () {
  //       if ($(window).scrollTop() == 0) {
  //         $(".topic").removeClass("pt-80");
  //       }
  //     });
  //   });
  // }

  // ***********************************************************************************************

  // Mobile Side Menu

  $(".bars").click(function () {
    $(".navigation").addClass("show-navigation");
    $("body").addClass("overflowHidden");
  });

  $(".close-btn").click(function () {
    $(".navigation").removeClass("show-navigation");
    $("body").removeClass("overflowHidden");
  });

  // ***********************************************************************************************
  // show password
  $(".pass-input-wrapper .icon").click(function () {
    $(this).toggleClass("fa-eye-slash").toggleClass("fa-eye");
    let input = $(this).siblings(".input");
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // ***********************************************************************************************

  // Fixed header

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  // ***********************************************************************************************

  //  Footer Dropdown Menu

  if ($(window).width() < 768) {
    $(".footer-title").click(function () {
      $(this).next(".collapse-ul").slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next(".collapse-ul").slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }
  // ***********************************************************************************************
}); // End Document Ready
