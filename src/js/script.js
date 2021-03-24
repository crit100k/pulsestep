$(document).ready(function(){
    let prev = $(".arrow-left"),
        next = $(".arrow-right");
       



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoHeight:false,
    autoplay: false,
    autoplayTimeout: 5000,
    dots:false,
    // navText: ['<img class="owl-prev_img" src="img/icons/left.svg" alt="left">','<img class="owl-next_img" src="img/icons/right.svg" alt="right">']
})



next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })

})