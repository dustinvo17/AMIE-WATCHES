export default function(){
    let galleryBlocks = $('.gallery-wrapper').data('blocks') * 1
    var modalGallery = document.querySelector('.gallery-modal')
    $('.gallery-wrapper').slick({
       slidesToShow: galleryBlocks >= 4 ? 4 : galleryBlocks,
       prevArrow:"<i class='material-icons chevron chevron_left z-depth-3'>chevron_left</i>",
       nextArrow:"<i class='material-icons  chevron chevron_right z-depth-3'>chevron_right</i>",
       responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false
          }
        }
        ]
    })
    $('.gallery-item').click(function(){
       $('.gallery-img-modal').attr('src',$(this).data('src'))
        M.Modal.getInstance(modalGallery).open();
    })
}