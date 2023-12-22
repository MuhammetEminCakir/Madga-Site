if($('.index-banner-area').length > 0) {
  var swiper = new Swiper(".index-banner-area", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  }
  
if($('.index-users-area').length > 0) {
  var swiper = new Swiper(".index-users-area", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row",
  },
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      grid: {
        rows: 3,
        fill: "row",
      },
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row",
      },
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 6,
      grid: {
        rows: 1,
        fill: "row",
      },
      spaceBetween: 30,
    },
  },
  });
  }

function openAdvantage(evt, advantageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(advantageName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function hMenu() {
  var x = document.getElementById("rList");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
