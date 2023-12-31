[![Netlify Status](https://api.netlify.com/api/v1/badges/bc7ef7cf-1333-4eec-b2fd-095f924bcc45/deploy-status)](https://app.netlify.com/sites/nimble-entremet-e15378/deploys)

# ☕ 클론코딩
교재의 예제를 보고 헤로피커리 랜딩 페이지(홈페이지)를 만드는 예제입니다.  
꼭 ⬇️ 아래 내용 모두 읽어보시고, ⬆️ 완성된 코드도 확인해 보세요.

[DEMO] (https://nimble-entremet-e15378.netlify.app/)
[DEMO/signin] (https://nimble-entremet-e15378.netlify.app/signin/)

![jin2joa Coffee] (images/main_screen.png)

## 문자 코딩(Character Encoding) 설정

문자가 인코딩되는 방식을 설정합니다.  
```html
  <meta charset="UTF-8"/>
```
- uft-8 : 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
- EUC-KR : 하나의 완성된 글자를 인식

## 뷰포트(Viewport) 렌더링 방식 설정

웹페이지가 화면(viewport)에 표현되는 방식을 설정합니다.  
모바일 환경에서 적용됩니다.  
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(yes)/축소(no)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## Favicon(파비콘, favorites icon)

