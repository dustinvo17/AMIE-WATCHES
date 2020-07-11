export default function(){

    let featuredProductSlide = $('.featured-product__image1')
    featuredProductSlide.slick({
      slidesToShow:1,
      slidesToScroll: 1,
      prevArrow:"<i class='material-icons chevron chevron_left z-depth-3'>chevron_left</i>",
      nextArrow:"<i class='material-icons  chevron chevron_right z-depth-3'>chevron_right</i>"
    
    })
    $('.featured-product__image-slide-item ').click(function(){
       let index = $(this).data('index') * 1
       featuredProductSlide.slick('slickGoTo',index)
       $('.product-image-border').removeClass('product-image-border')
       $(this).addClass('product-image-border')
    })
    // change border focus small  main image
    featuredProductSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
     console.log(currentSlide)
     let currentItem = $(`.featured-product__image-slide-item${currentSlide}`)
     currentItem.removeClass('product-image-border')
     let nextItem = $(`.featured-product__image-slide-item${nextSlide}`)
     nextItem.addClass('product-image-border')
   });
}