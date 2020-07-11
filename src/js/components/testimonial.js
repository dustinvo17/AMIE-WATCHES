
export default function(){
    $('.testimonial-slides').slick({
        rows: 0 ,
        slidesToShow:$('.testimonial-slides').data('users') * 1,
        prevArrow:"<i class='material-icons chevron chevron_left z-depth-3'>chevron_left</i>",
        nextArrow:"<i class='material-icons  chevron chevron_right z-depth-3'>chevron_right</i>",
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }
            ]
       })
       
 
}