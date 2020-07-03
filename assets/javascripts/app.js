$(document).ready(function(){
    // $(".nav-item").click(function(){
    //     alert("you click me")
    // })

     $('.carousel').carousel({
       
       interval: 500
      })
    // $('.carousel').owlCarousel({
    //     autoPlay:true,
    //     slideSpeed:1000
    //   })

    $('body').scrollspy({ target: '#navbar-example2' })
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    })

    $("#happyhours").click(function(){
     // alert("hello I am clicked")
    })
});