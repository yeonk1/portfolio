document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.swiper-slide .inner').forEach(button => {
    button.addEventListener('click', () => {
      const dataref = button.getAttribute('dataref');


      // Show the relevant modal node
      const targetModalNode = document.querySelector(`.modal-node[dataref="${dataref}"]`);
      if (targetModalNode) {
        targetModalNode.style.display = 'block';
        document.body.classList.add('no-scroll');
      }
    });
  });
  document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const modal = button.closest('.modal-node');
      if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    });
  });
});

$(function(){
  $(window).mousemove(function(e){
    const w = $('.cursor').width()/2
    const h = $('.cursor').height()/2

    gsap.to('.cursor',{
      duration:0.5,
      x:e.clientX-w,
      y:e.clientY-h,
    })
  })


 
  
  $('.sc_top .swiper-button-next').mouseover(function(){ // 
    $('.cursor').addClass('right')
  })
  $('.sc_top .swiper-button-next').mouseleave(function(){
    $('.cursor').removeClass('right')
  })
  $('.sc_top .swiper-button-prev').mouseover(function(){ // 
    $('.cursor').addClass('left')
  })
  $('.sc_top .swiper-button-prev').mouseleave(function(){
    $('.cursor').removeClass('left')
  })


  gsap.to('.loading', {y: '-100%', delay: 2, ease: "power4.out"})
  gsap.fromTo('.loading p', {y: '120%', delay: 1, ease: "power4.out"},{y: '-5%', delay: 1, ease: "power4.out"})



  $('.fix_menu a').click(function(e){ //스크롤 천천히 내리는
    e.preventDefault();
  link = $(this).attr('href');
  position = $(link).offset().top;// 위치를 알려주는 태그 
  
  gsap.to('html',{'scrollTop':position, duration:1})
  
  })

    var swiper = new Swiper(".list", 
    {
      speed : 1000,
      spaceBetween : 1000,

        // pagination: {
        //   el: ".swiper-pagination",
        //   type: "fraction",
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        on:{
          slideChangeTransitionStart:function(){
            curr()
          }
        }
      });

      function curr(){

      currCnt = $('.list .swiper-slide-active').index()+1;
      listCnt = $('.list .swiper-slide').length;

      $('.list .curr').text(currCnt)
      $('.list .total').text(listCnt)
    }curr()



      $('.img_wrap').each(function(index, item){ 

        effectimg = gsap.timeline({
            scrollTrigger:{
                trigger:'.sc_mid',
                start:"-20% 80%",
                end:"bottom 0%",
                 //markers:true,
                scrub:0.3,
            }
        })
        effectimg.to(item, { y:-1000 })
    });


    $('.sc_bottom').each(function(index, item){
      effectimg = gsap.timeline({
          scrollTrigger:{
              trigger:item,
              start:"top 80%",
              // end:"bottom 0%",
              //markers:true,
              // duration:1.5,

          onEnter: () => $('body').addClass('active').children('header').addClass('active'),
          onLeaveBack: () => $('body').removeClass('active').children('header').removeClass('active'),
          }
      })

    });

    let listEffect = gsap.timeline({
      scrollTrigger:{
          trigger:'.sc_bottom',
          start:"-30% 0%",
      },
    });
    listEffect.fromTo('.sc_bottom ul li',{
      opacity:0,
      xPercent:3,
    
    },{
      opacity:1,
      stagger:0.5,
      duration:1,
      xPercent:0,
    });
});

