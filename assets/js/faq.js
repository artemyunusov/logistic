// $(document).ready(function() {
//   $(".form").submit(function() {
//       $.ajax({
//           type: "POST",
//           url: "send.php",
//           data: $(this).serialize()
//       }).done(function() {  
//        $('.form')[0].reset();
//        $("#sucess").alert('xorowo');
//       });
//       return false;
//   });
// });

$(function(){

  $('.faq .faq-text:first').show();

  $('.faq .faq-title').on('click', function(){
    $('.faq-title').removeClass('active');
    $(this).addClass('active');
    let answer = $(this).next();
    let icon = $(this).children;
    
    $('.faq .faq-text:visible').not(answer).slideUp(400);
    answer.slideDown(400);
  });
  
});

let counters = document.querySelectorAll('.works-col-h');
let speed = 300;

let elem = document.querySelector('.works');

  window.addEventListener('load', countUp)
  window.addEventListener('scroll', countUp)

  function countUp(){
    let posElem = elem.offsetTop;
    let windowH = Math.ceil(window.pageYOffset + innerHeight / 3);

    counters.forEach(counter => {
      let fl = false;
      let updCount = () => {
        let target = +counter.getAttribute('data-num');
        let count = +counter.innerText;
    
        let inc = target / speed;
    
        if(count < target){
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updCount, 1);
        } else{
          count.innerText = target;
        }
      }

      if(posElem < windowH + 300){
        updCount();
      }
    })
  }

// let burger = document.querySelector('.burger');
// let mask = document.querySelector('.body-mask');
// let nav = document.querySelector('.nav-mob');

$(".burger").click(function () {
  $(this).toggleClass('burger-clicked');
  $('.body-mask').toggleClass('mob-active');
  $('.nav-mob').toggleClass('mob-active');
  $(document.body).toggleClass('oh');
});

let mask = document.querySelector('.body-mask');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-mob');
let menuFixed = document.querySelector('.nav-fixed');
let menu = document.querySelector('.nav');
let links = document.querySelectorAll('.nav-link');
let mobLinks = document.querySelectorAll('.nav-fixed-link');

menuFixed.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-fixed-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
    if(mask.classList.contains('mob-active')){
      mask.classList.remove('mob-active');
      document.body.classList.remove('oh');
      burger.classList.remove('burger-clicked');
      nav.classList.remove('mob-active');
    }
  }
})

menu.addEventListener('click', function(e){
  let link = e.target;

  if(link.classList.contains('nav-link')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }
})

function scrollToTarget(id){
  let target = document.querySelector(id);
  let pos = target.offsetTop + 10;

  window.scrollTo({
    top: pos,
    behavior: "smooth"
  })
}

// window.addEventListener('scroll', function(e){
//   for(let i = links.length - 1; i >= 0; i--){
//     let link = links[i];
//     let hght = document.querySelector(link.hash);
//     if(window.pageYOffset + window.innerHeight/2.2 > hght.offsetTop){
//       link.classList.add('some');
//       console.log(2)
//       break;
//     }
//   }
// })

let toTop = document.querySelector('.to-top');
// let winPos = window.pageYOffset;

// console.log(winPos, innerHeight);

window.addEventListener('scroll', function(){
  let winPos = window.pageYOffset;

  if(winPos > innerHeight / 2){
    toTop.classList.add('show-tt');
  }
  else{
    toTop.classList.remove('show-tt');
  }

})

window.addEventListener('load', function(){
  let winPos = window.pageYOffset;

  if(winPos > innerHeight  / 2){
    toTop.classList.add('show-tt');
  }
  else{
    toTop.classList.remove('show-tt');
  }

})

toTop.addEventListener('click', function(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

let contact = document.querySelector('.safe-btn');

contact.addEventListener('click', function(e){
  let link = e.target.parentNode;
  let hash = link.hash;

  if(link.classList.contains('safe-btn')){
    e.preventDefault();
    scrollToTarget(link.hash);
  }

})