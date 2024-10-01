const Taylorswift=document.querySelector('.TaylorSwift');
const body=document.querySelector('body');
const Taylorswift_文本=document.querySelector('.TaylorSwift_文本')
const TaylorSwift_vinyl=document.querySelector('.TaylorSwift_vinyl')

Taylorswift.addEventListener('click', function() {  
  
  Taylorswift.classList.toggle('divclicked');
  Taylorswift.classList.toggle('no-hover-effect');
  TaylorSwift_vinyl.classList.toggle('TaylorSwift_vinylclicked')
  body.classList.toggle('bodyclicked');
  Taylorswift_文本.classList.toggle('TaylorSwift_文本clicked')
});