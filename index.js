const hamburgerEle=document.getElementById('hamburger-menu')
const hamBtnContainer=document.getElementById('hamburger-btn-container')
const logoImg=document.getElementById('logo-img')

hamburgerEle.onclick=function(){
    hamBtnContainer.classList.toggle('hamburger-btn-container')
    logoImg.classList.toggle('logo-hamburger')
}