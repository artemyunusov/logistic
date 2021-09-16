// let form = document.querySelector('form');
// let inputs = form.querySelectorAll('.form-input');

// let patterns = {
//   name: /.+/,
//   phone: /^\d{7,14}$/,
//   mail: /^.+@.+\..+$/
// }

// //check whether the inputs r empty?
// //add error
// //remove error
// //btn clicked!

// form.addEventListener('submit', function(e){
//   let err = false;

//   inputs.forEach(element => {
//     element.value = element.value.trim();
//     let pattern = patterns[element.name];

//     if(!pattern.test(element.value)){
//       err = true;
//       element.classList.add('error');
//     }
//   });

//   if(err){
//     e.preventDefault();
//   }
// })

// form.addEventListener('focusin', function(e){
//   if(e.target.classList.contains('form-input')){
//     e.target.classList.remove('error');
//   }
// })

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