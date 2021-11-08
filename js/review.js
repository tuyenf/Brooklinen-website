var myReview = new Swiper(".myReview", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});