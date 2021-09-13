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