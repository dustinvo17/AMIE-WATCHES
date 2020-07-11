export function openNav(header=false) {
  let marginRight = window.matchMedia('(max-width: 600px)').matches ? "0" : "480px"

  if(header == true){
    
    document.querySelector('.header-menu').style.right = "0";
  }else {
    document.querySelector('.minicart').style.right = "0";
  }

    document.querySelector('.body-main').style.marginRight = marginRight;
    document.querySelector('.body-main').classList.add('body-canvas')
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  export function closeNav(header=false) {
    let marginRight = window.matchMedia('(max-width: 600px)').matches ? "-80%" : "-480px"
    if(header == true){
      document.querySelector('.header-menu').style.right = marginRight;
    }else {
      document.querySelector('.minicart').style.right = marginRight;
    }

    document.querySelector('.body-main').style.marginRight = "0";
    document.querySelector('.body-main').classList.remove('body-canvas')
  }