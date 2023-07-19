// header part
const navMenu = document.getElementById('nav-menu'),
      navToggle= document.getElementById("nav-toggle"),
      navClose= document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show_menu')
        })
      }

      if(navClose){
          navClose.addEventListener('click', () =>{
              navMenu.classList.remove('show_menu')
          })
      }


    //   scroll header
    function scrollHeader(){
        const header = document.getElementById('header-part')
        // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
        if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    // accordion js
    const accordionItems = document.querySelectorAll('.question_item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.question_header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.question_content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}


// ======== scrollup javascript=====

// function scrollUp(){
//     const scrollUp = document.getElementById('scroll-up')

//     if(this.scrollY>=400)scrollUp.classList.add('show_scroll');
//     else scrollUp.classList.remove('show_scroll')

// window.addEventListener('scroll', scrollUp)
// }

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if
    (this.scrollY >= 400) scrollUp.classList.add('show_scroll');
     else 
     scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)


// animationn effect

const sr = ScrollReveal({
    origin : 'top',
    duration : 2500,
    delay : 400,
    distance : '60px',
})

sr.reveal('.home_data')
sr.reveal('.home_img',{delay : 500})
sr.reveal('.home_social',{delay : 600})
sr.reveal('.about_img, .contact_box', {origin: 'left'})
sr.reveal('.about_data, .contact_form',{origin: 'right'})
sr.reveal('.question_item, .products_card, .footer_content')