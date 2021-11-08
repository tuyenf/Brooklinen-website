var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  

  var colorDot = Array.from(document.querySelectorAll('.color-select .dot'))
  
  const chooseColor = (e) => {
      colorDot.forEach(a => a.classList.remove('dot--active'))

      let n = colorDot.indexOf(e.target)
      colorDot[n].classList.add('dot--active')

  } 

  colorDot.forEach(b => b.addEventListener('click', chooseColor))

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
      },
      1000: {
        slidesPerView: 6,
    spaceBetween: 10,
    slidesPerGroup: 6,
      }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });