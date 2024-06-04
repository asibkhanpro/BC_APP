(function ($) {


  AOS.init();
    $("#owl-demo").owlCarousel({
        loop:true,
        margin: 10,
        items: 2,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        dots: false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
    //Counter Number
    $('.works-area').on('inview', function(event, visible) {
        if (visible) {
            $(this).find('.works-main').each(function () {
                $(this).addClass('show');
            });
            $(this).unbind('inview');
        }
    });
    $("#noibu-slider").owlCarousel({
        loop:true,
        margin: 10,
        responsiveClass:true,
        dots: true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav:false,
                loop:false
            },
            600:{
                items:1,
                nav:true,
                loop:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });
    const tabs = document.querySelectorAll('.navtab');
    const contents = document.querySelectorAll('.content');
    const underline = document.querySelector('.underline');
    
    function updateUnderline() {
      const activeTab = document.querySelector('.navtab.active');
      underline.style.width = `${activeTab.offsetWidth}px`;
      underline.style.left = `${activeTab.offsetLeft}px`;
    }
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        contents.forEach(content => {
          if (content.id === target) {
            content.classList.add('active');
          } else {
            content.classList.remove('active');
          }
        });
      });
    });
    
    window.addEventListener('resize', updateUnderline);
    updateUnderline();
    

})(jQuery);