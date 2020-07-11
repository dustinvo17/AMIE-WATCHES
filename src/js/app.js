import $ from 'jquery'
window.$ =  window.jquery = $
document.$ = document.jquery =  $
import '../materialize-src/js/bin/materialize'
require('slick-carousel')
import stickyBar from './components/stickyBar'
import {toggleSearchForm} from './components/header'
import slickBlog from './components/blog-post-slick'
import slickTestimonial from './components/testimonial'
import gallery from './components/gallery'
import featureProductSlide from './components/featureProductSlide'
import {openNav, closeNav} from './components/canvas'
import Vue from 'vue'
import axios from 'axios';
window.Vue = Vue
window.axios = axios

require('./vue-components/cart-instances')
toggleSearchForm()
$(window).scroll(stickyBar)
$(window).ready( function() {
   
   var slide = document.querySelector('.hero-slider');
   let options = {
      numVisible:1,
      fullWidth:true,
      dist:0,
   

      indicators:true
   }
   if($(slide).data('dots') == false) {
      options.indicators = false
   }

     var instance = M.Carousel.init( slide, options)
     if($(slide).data('slide-enable') == true && $(slide).data('blocks') * 1 > 1) {
         setInterval(function(){instance.next()},$(slide).data('speed') * 1000 )
     }
    
     M.Dropdown.init($('.dropdown-trigger'), {
        hover: true,
        coverTrigger:false
     });
     var modalGallery = document.querySelector('.gallery-modal')
     M.Modal.init(modalGallery,{})
    slickBlog()
    slickTestimonial()
     gallery()
     featureProductSlide()
     $('.header-cart-icon').click(function(){
       openNav()
     })
     $('.header-hamburger').click(function(){
      openNav(true)
     })
     $('.close-menu-icon').click(function(){
        closeNav(true)
     })
   
    
});
