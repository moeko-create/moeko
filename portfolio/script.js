/*ローディング〜画面遷移
・－・・　・・　・－・－・　－・・・　・・　－－・　－・・－　－－－・－　*/
const loadingScreenGray =document.querySelector('#loading')
const loadingScreenGreen =document.querySelector('#loading-screen')
const loadingText =document.querySelector('#loading p')

window.addEventListener('load',() =>{
//ローディング（グレースクリーン）
loadingScreenGray.animate({
  opacity:[1,0],
  visibility:'hidden'},
{
duration:2000,
delay:1200,
easing:'ease',
fill:'forwards',
}
);

//ローディング（薄緑スクリーン）
loadingScreenGreen.animate(
  {transform: [
    'translate(0, 100vh)',
    'translate(0, 0)',
    'translate(0, -100vh)',
  ]},
  {
    duration:2000,
    delay:800,
    easing:'ease',
    fill:'forwards',
    }
)
})

//ローディング（テキスト）
loadingText.animate(
[{opacity:1,
  offset:.8
},
{
  opacity:0,
  offset:1
}],
{
  duration:1500,
  easing:'ease',
  fill:"forwards"
}
)


/*画像ギャラリー
・－・・　・・　・－・－・　－・・・　・・　－－・　－・・－　－－－・－　*/
const mainImg =document.querySelector('.gallery-top img');
const artImgs =document.querySelectorAll('.gallery-imgs img');
const text =document.querySelector('.text')


artImgs.forEach ((artImg) =>{
artImg.addEventListener('mouseover', (event) =>{
mainImg.src = event.target.src;
mainImg.animate({
  opacity:[0,1]},500
);
text.textContent = event.target.alt;}
)})


/*スライドメニュー
・－・・　・・　・－・－・　－・・・　・・　－－・　－・・－　－－－・－　*/
const menuOpen =document.querySelector('#menu-open');
const menuClose =document.querySelector('#menu-close');
const menuPanel =document.querySelector('#menu-panel');
const menuOptions ={
  duration:1400,
  easing:'ease',
  fill:'forwards'
};
const menuItems =document.querySelectorAll('.menu-list li')


menuOpen.addEventListener('click',() => {
  //メニューを開く
  menuPanel.animate(
    {translate:['100vw',0]},
  menuOptions
  );
  menuItems.forEach((menuItem,index) => {
   menuItem.animate({
    opacity:[0,1],
    translate:['2rem',0],
   },
   {
      duration:2400,
      easing:'ease',
      fill:'forwards',
      delay:300 * index
    }
  )
  })
  });

//メニューを閉じる
menuClose.addEventListener('click',() =>{
  menuPanel.animate({translate:[0,'100vw']},menuOptions);
  menuItems.forEach((menuItem) =>{
    menuItem.animate({opacity:[1,0]},
      menuOptions)
  })
}
)


/*スクロールで要素を表示
・－・・　・・　・－・－・　－・・・　・・　－－・　－・・－　－－－・－　*/
const animateFade = (entries,obs) =>{
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
    //console.log(entry.target)
    entry.target.animate(
        {
          opacity: [0, 1],
          filter: ['blur(.4rem)', 'blur(0)'], 
          translate: ['0 4rem', 0],
        },
        {
          duration: 2000,
          easing: 'ease',
          fill: 'forwards',
        }
    ) 
    obs.unobserve(entry.target);}
     })
}

const fadeObserver = new IntersectionObserver(animateFade);

const fadeElememts = document.querySelectorAll('.fadein');
fadeElememts.forEach((fadeElement) =>{
  fadeObserver.observe(fadeElement)
}
)
