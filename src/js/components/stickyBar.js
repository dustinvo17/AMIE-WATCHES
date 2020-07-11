// cacluate when user scroll below both navbar and announce bar 
let totalHeight = 0;
let fixAnnounceBarHeight = 0;
let windowScroll = 0;
export default function stickyAnnounceBar() {

    const announceBar = $('.announce-bar')
    const headerNavbar = $('.navbar-header')
    const announceSectionHeight = $('#shopify-section-announcement').height()
   
    // condition only run first time to calcuate total scroll px on window  and announcebar height to place navbar below it
    if ($('#shopify-section-announcement').height() != 0 && totalHeight == 0 && fixAnnounceBarHeight == 0) {
        // this block only run once 
      
     
        totalHeight += announceSectionHeight
        totalHeight += headerNavbar.height()
    
        fixAnnounceBarHeight = announceSectionHeight
      

    }
   

    
        if (announceBar) {
    
            if (announceBar.data('sticky-bar') == true) {
    
                if ($(window).scrollTop() > totalHeight) {
                    announceBar.addClass('sticky-bar')
    
                } else if ($(window).scrollTop() == 0) {
                    announceBar.removeClass('sticky-bar')
    
                }
    
    
            }
    
        }
        if (headerNavbar) {
            if (headerNavbar.data('sticky-bar') == true) {
                if ($(window).scrollTop() > totalHeight) {
                    headerNavbar.addClass('sticky-bar header-border-sticky ')
    
    
                    // check if announcement has enabled sticky to make header navbar below it
                    if (announceBar && announceBar.data('sticky-bar') == true) {
                        headerNavbar.css({
                            top: `${fixAnnounceBarHeight}px`
                        })
    
                    }
                    else {
                        headerNavbar.css({
                            top: 0
                        })
                    }
    
    
    
                    // hide logo on sitcky bar
                    $('.logo-image').hide()
    
                } else if ($(window).scrollTop() == 0) {
                    headerNavbar.removeClass('sticky-bar header-border-sticky')
                    $('.logo-image').show()
    
                }
            }
        }

    

}
