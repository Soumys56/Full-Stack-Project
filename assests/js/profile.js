// const search=document.querySelectorAll("img")[1];
// search.addEventListener('click',()=>{
    
    
// })
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
      clickable: true,
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });