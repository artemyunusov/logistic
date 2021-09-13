$(document).ready(function() {
  $(".form").submit(function() {
      $.ajax({
          type: "POST",
          url: "send.php",
          data: $(this).serialize()
      }).done(function() {  
       $('.form')[0].reset();
       $("#sucess").alert('xorowo');
      });
      return false;
  });
});

let faq = document.querySelector('.faq');

faq.addEventListener('click', function(e){
  // console.log(e.target);

  if(e.target.classList.contains('faq-title-h')){
    let target = e.target.parentNode.nextElementSibling;

    if(target.classList.contains('show')){

      let anim = target.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(10px)'}
      ],
        { duration: 500 }
      );

      anim.addEventListener('finish', function(){
        target.classList.remove('show');
      })

    }
    else{
      target.classList.add('show');
    }

    // console.log(target);

    // target.classList.toggle("show");
  }
})

let counters = document.querySelectorAll('.works-col-h');
let speed = 2200;

let elem = document.querySelector('.works');

  window.addEventListener('scroll', function(){
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

        if(posElem < windowH + 200){
          updCount();
        }
      })
  })

let burger = document.querySelector('.burger');
let mask = document.querySelector('.body-mask');
let nav = document.querySelector('.nav-mob');

burger.addEventListener('click', function(){

  if(burger.classList.contains('burger-clicked')){
    burger.classList.remove('burger-clicked');
    mask.classList.remove('active');
    nav.classList.remove('active');
  }

  else{
    burger.classList.add('burger-clicked');
    mask.classList.add('active');
    nav.classList.add('active');
  }
})