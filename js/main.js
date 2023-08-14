// 페이지를 스크롤할 때 요소를 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      diplay: 'none' 
    });
    // 상단으로 이동 버튼 보이기
    gsap.to(toTopEl, .6, {
      opacity: 1,
      x: 0
    });

    } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      diplay: 'block' 
    });
    // 상단 이동버튼 숨기기
    gsap.to(toTopEl, .6, {
      opacity: 0,
      x: 100
    });
    
  }
});

toTopEl.addEventListener('click', function() {
  gsap.to(window, .6, {
    scrollTo: 0
  });
});


//비주얼 영역에 요소를 차례데로 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1 
  });
});

// 슬라이드 요소 관리 
new Swiper('.notice .swiper', {
  direction: 'vertical', //수직 슬라이드
  autoplay: true, // 자동재생 여부
  loop: true // 반복 재생 여부
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
    autoplay: true,
    loop: true,
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용
      el: '.promotion .swiper-pagination', // 페이지 번호 요소
      clickable: true // 사용자의 페이지 번호 제어 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용
      prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
      nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
  }
});

new Swiper('.awards .swiper', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
  }
});

/**
 * Promotion 슬라이드 토글 기능
 */
// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('section.promotion');
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

/**
 * 부유하는 요소 관리(애니메이션)
 */
gsap.to('.floating1', 1.5, {
  delay: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInout
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-button-prev',
    nextEl: '.awards .swiper-button-next'
  }
});
