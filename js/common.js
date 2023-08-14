// 검색창 요소 찾기
const searchEl = document.querySelector('.search');
const searchIpuntEl = searchEl.querySelector('input');
  
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function(){
  searchIpuntEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchIpuntEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchIpuntEl.setAttribute('placeholder', '통합검색');
  });

// 검색창 요소 내부 실제 input 요소에 포커스가 해제되면 실행
searchIpuntEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchIpuntEl.setAttribute('placeholder', '');
});

// 현재 년도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


