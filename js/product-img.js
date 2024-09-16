document.querySelectorAll('.small-img .img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.big-img').innerHTML = "<img src='../product/teszt.png' alt=''>";
    document.querySelector('.big-img img').src = image.getAttribute('src');
  }
});
document.getElementById('vid').onclick = () =>{
  document.querySelector('.big-img').innerHTML =`<iframe src='https://www.youtube.com/embed/zuF1eziIsa4'></iframe>`;
  //document.querySelector('.pop').style.display = 'block';
}