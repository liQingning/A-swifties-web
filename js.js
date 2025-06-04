let turnblack=0;
let num1=0,num2=0,num3=0,num4=0,num5=0,num6,num7=0,num8,num9=0,num10=0, num11=0,num12=0,num13=0,num14=0,num15=0;
const Taylorswift=document.querySelector('.TaylorSwift');
const body=document.querySelector('body');
const Taylorswift_文本=document.querySelector('.TaylorSwift_文本')
const TaylorSwift_vinyl=document.querySelector('.TaylorSwift_vinyl')
const Taylorswift_audio=document.querySelector('.TaylorSwift_audio')
Taylorswift.addEventListener('click', function() {  
  Taylorswift.classList.toggle('divclicked');
  Taylorswift.classList.toggle('no-hover-effect');
  TaylorSwift_vinyl.classList.toggle('TaylorSwift_vinylclicked')
  num1++;
  if(turnblack===0&&num1%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num1%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  // body.classList.toggle('bodyclicked');
  Taylorswift_文本.classList.toggle('TaylorSwift_文本clicked')
  Taylorswift_audio.classList.toggle('TaylorSwift_audioclicked')
});

const Fearless=document.querySelector('.Fearless');
const Fearless_文本=document.querySelector('.Fearless_文本')
const Fearless_vinyl=document.querySelector('.Fearless_vinyl')
const Fearless_movement=document.querySelector('.Fearless_movement')
const Fearless_audio=document.querySelector('.Fearless_audio')
Fearless.addEventListener('click', function() {  
  Fearless.classList.toggle('divclicked');
  Fearless.classList.toggle('no-hover-effect');
  Fearless_vinyl.classList.toggle('Fearless_vinylclicked')
  num2++;
  if(turnblack===0&&num2%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num2%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  Fearless_audio.classList.toggle('Fearless_audioclicked')
  Fearless_文本.classList.toggle('Fearless_文本clicked')
  
});

const Speaknow=document.querySelector('.Speaknow');
const Speaknow_文本=document.querySelector('.Speaknow_文本')
const Speaknow_vinyl=document.querySelector('.Speaknow_vinyl')
const Speaknow_movement=document.querySelector('.Speaknow_movement')
const Speaknow_audio=document.querySelector('.Speaknow_audio')
Speaknow.addEventListener('click', function() {  
  Speaknow.classList.toggle('divclicked');
  Speaknow.classList.toggle('no-hover-effect');
  Speaknow_vinyl.classList.toggle('Speaknow_vinylclicked')
  num3++;
  if(turnblack===0&&num3%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num3%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  Speaknow_文本.classList.toggle('Speaknow_文本clicked')
  Speaknow_audio.classList.toggle('Speaknow_audioclicked')
});

const red=document.querySelector('.red');
const red_文本=document.querySelector('.red_文本')
const red_vinyl=document.querySelector('.red_vinyl')
const red_movement=document.querySelector('.red_movement')
const red_audio=document.querySelector('.red_audio')
red.addEventListener('click', function() {  
  red.classList.toggle('divclicked');
  red.classList.toggle('no-hover-effect');
  red_vinyl.classList.toggle('red_vinylclicked')
  num4++;
  if(turnblack===0&&num4%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num4%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  red_文本.classList.toggle('red_文本clicked')
  red_audio.classList.toggle('red_audioclicked')
  
});

const o1989=document.querySelector('.o1989');
const o1989_文本=document.querySelector('.o1989_文本')
const o1989_vinyl=document.querySelector('.o1989_vinyl')
const o1989_movement=document.querySelector('.o1989_movement')
const o1989_audio=document.querySelector('.o1989_audio')
o1989.addEventListener('click', function() {  
  o1989.classList.toggle('divclicked');
  o1989.classList.toggle('no-hover-effect');
  o1989_vinyl.classList.toggle('o1989_vinylclicked')
  num5++;
  if(turnblack===0&&num5%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num5%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  o1989_文本.classList.toggle('o1989_文本clicked') 
  o1989_audio.classList.toggle('o1989_audioclicked')
 
});

const reputation=document.querySelector('.reputation');
const reputation_文本=document.querySelector('.reputation_文本')
const reputation_vinyl=document.querySelector('.reputation_vinyl')
const reputation_movement=document.querySelector('.reputation_movement')
const reputation_audio=document.querySelector('.reputation_audio')
reputation.addEventListener('click', function() {  
  reputation.classList.toggle('divclicked');
  reputation.classList.toggle('no-hover-effect');
  reputation_vinyl.classList.toggle('reputation_vinylclicked')
  num6++;
  if(turnblack===0&&num6%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num6%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  reputation_文本.classList.toggle('reputation_文本clicked')
  reputation_audio.classList.toggle('reputation_audioclicked')
});

const lover=document.querySelector('.lover');
const lover_文本=document.querySelector('.lover_文本')
const lover_vinyl=document.querySelector('.lover_vinyl')
const lover_movement=document.querySelector('.lover_movement')
const lover_audio=document.querySelector('.lover_audio')
lover.addEventListener('click', function() {  
  lover.classList.toggle('divclicked');
  lover.classList.toggle('no-hover-effect');
  lover_vinyl.classList.toggle('lover_vinylclicked')
  num7++;
  if(turnblack===0&&num7%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num7%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  lover_文本.classList.toggle('lover_文本clicked')
  lover_movement.classList.toggle('lover_movement_clicked')
  lover_audio.classList.toggle('lover_audioclicked')
});

const folklore=document.querySelector('.folklore');
const folklore_文本=document.querySelector('.folklore_文本')
const folklore_vinyl=document.querySelector('.folklore_vinyl')
const folklore_movement=document.querySelector('.folklore_movement')
const folklore_audio=document.querySelector('.folklore_audio')
folklore.addEventListener('click', function() {  
  folklore.classList.toggle('divclicked');
  folklore.classList.toggle('no-hover-effect');
  folklore_vinyl.classList.toggle('folklore_vinylclicked')
  num8++;
  if(turnblack===0&&num8%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num8%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  folklore_文本.classList.toggle('folklore_文本clicked')
  folklore_movement.classList.toggle('folklore_movement_clicked')
  folklore_audio.classList.toggle('folklore_audioclicked')
});

const evermore=document.querySelector('.evermore');
const evermore_文本=document.querySelector('.evermore_文本')
const evermore_vinyl=document.querySelector('.evermore_vinyl')
const evermore_movement=document.querySelector('.evermore_movement')
const evermore_audio=document.querySelector('.evermore_audio')
evermore.addEventListener('click', function() {  
  evermore.classList.toggle('divclicked');
  evermore.classList.toggle('no-hover-effect');
  evermore_vinyl.classList.toggle('evermore_vinylclicked')
  num9++;
  if(turnblack===0&&num9%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num9%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  evermore_文本.classList.toggle('evermore_文本clicked')
  evermore_movement.classList.toggle('evermore_movement_clicked')
  evermore_audio.classList.toggle('evermore_audioclicked')
});

const redtv=document.querySelector('.redtv');
const redtv_文本=document.querySelector('.redtv_文本')
const redtv_vinyl=document.querySelector('.redtv_vinyl')
const redtv_movement=document.querySelector('.redtv_movement')
const redtv_audio=document.querySelector('.redtv_audio')
redtv.addEventListener('click', function() {  
  redtv.classList.toggle('divclicked');
  redtv.classList.toggle('no-hover-effect');
  redtv_vinyl.classList.toggle('redtv_vinylclicked')
  num13++;
  if(turnblack===0&&num13%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num13%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  redtv_文本.classList.toggle('redtv_文本clicked')
  redtv_movement.classList.toggle('redtv_movement_clicked')
  redtv_audio.classList.toggle('redtv_audioclicked')
});

const fearlesstv=document.querySelector('.fearlesstv');
const fearlesstv_文本=document.querySelector('.fearlesstv_文本')
const fearlesstv_vinyl=document.querySelector('.fearlesstv_vinyl')
const fearlesstv_movement=document.querySelector('.fearlesstv_movement')
const fearlesstv_audio=document.querySelector('.fearlesstv_audio')
fearlesstv.addEventListener('click', function() {  
  fearlesstv.classList.toggle('divclicked');
  fearlesstv.classList.toggle('no-hover-effect');
  fearlesstv_vinyl.classList.toggle('fearlesstv_vinylclicked')
  num14++;
  if(turnblack===0&&num14%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num14%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  fearlesstv_文本.classList.toggle('fearlesstv_文本clicked')
  fearlesstv_movement.classList.toggle('fearlesstv_movement_clicked')
  fearlesstv_audio.classList.toggle('fearlesstv_audioclicked')
});

const midnights=document.querySelector('.midnights');
const midnights_文本=document.querySelector('.midnights_文本')
const midnights_vinyl=document.querySelector('.midnights_vinyl')
const midnights_movement=document.querySelector('.midnights_movement')
const midnights_audio=document.querySelector('.midnights_audio')
midnights.addEventListener('click', function() {  
  midnights.classList.toggle('divclicked');
  midnights.classList.toggle('no-hover-effect');
  midnights_vinyl.classList.toggle('midnights_vinylclicked')
  num10++;
  if(turnblack===0&&num10%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num10%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  midnights_文本.classList.toggle('midnights_文本clicked')
  midnights_movement.classList.toggle('midnights_movement_clicked')
  midnights_audio.classList.toggle('midnights_audioclicked')
});

const tv1989=document.querySelector('.tv1989');
const tv1989_文本=document.querySelector('.tv1989_文本')
const tv1989_vinyl=document.querySelector('.tv1989_vinyl')
const tv1989_movement=document.querySelector('.tv1989_movement')
const tv1989_audio=document.querySelector('.tv1989_audio')
tv1989.addEventListener('click', function() {  
  tv1989.classList.toggle('divclicked');
  tv1989.classList.toggle('no-hover-effect');
  tv1989_vinyl.classList.toggle('tv1989_vinylclicked')
  num11++;
  if(turnblack===0&&num11%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num11%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  tv1989_文本.classList.toggle('tv1989_文本clicked')
  tv1989_movement.classList.toggle('tv1989_movement_clicked')
  tv1989_audio.classList.toggle('tv1989_audioclicked')
});

const speaknowtv=document.querySelector('.speaknowtv');
const speaknowtv_文本=document.querySelector('.speaknowtv_文本')
const speaknowtv_vinyl=document.querySelector('.speaknowtv_vinyl')
const speaknowtv_movement=document.querySelector('.speaknowtv_movement')
const speaknowtv_audio=document.querySelector('.speaknowtv_audio')
speaknowtv.addEventListener('click', function() {  
  speaknowtv.classList.toggle('divclicked');
  speaknowtv.classList.toggle('no-hover-effect');
  speaknowtv_vinyl.classList.toggle('speaknowtv_vinylclicked')
  num12++;
  if(turnblack===0&&num12%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num12%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  speaknowtv_文本.classList.toggle('speaknowtv_文本clicked')
  speaknowtv_movement.classList.toggle('speaknowtv_movement_clicked')
  speaknowtv_audio.classList.toggle('speaknowtv_audioclicked')
});

const ttpd=document.querySelector('.ttpd');
const ttpd_文本=document.querySelector('.ttpd_文本')
const ttpd_vinyl=document.querySelector('.ttpd_vinyl')
const ttpd_movement=document.querySelector('.ttpd_movement')
const ttpd_audio=document.querySelector('.ttpd_audio')
ttpd.addEventListener('click', function() {  
  ttpd.classList.toggle('divclicked');
  ttpd.classList.toggle('no-hover-effect');
  ttpd_vinyl.classList.toggle('ttpd_vinylclicked')
  num15++;
  if(turnblack===0&&num15%2!=0){
    body.classList.toggle('bodyclicked');
    turnblack=1;
  }
  else if(turnblack===1&&num15%2===0){
    body.classList.toggle('bodyclicked');
    turnblack=0;
  }
  ttpd_文本.classList.toggle('ttpd_文本clicked')
  ttpd_movement.classList.toggle('ttpd_movement_clicked')
  ttpd_audio.classList.toggle('ttpd_audioclicked')
});
// const colorchange=document.querySelector('body')
// let totalScroll=0;
// colorchange.addEventListener('wheel',function(event){
//   event.preventDefault();
//   totalScroll += event.deltaY;
//   if(Math.abs(totalScroll)>=900){
//     totalScroll=0;
//     colorchange.classList.toggle('colorchange1')  
//     }
//   });
