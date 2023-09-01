// scripts.js

const hoverElements = document.querySelectorAll('.product-card');

hoverElements.forEach(element => {
  const productImage = element.querySelector('.hover-effect');
  const productImageHover = element.querySelector('.hover-image');

  element.addEventListener('mouseover', () => {
    productImage.style.display = 'none';
    productImageHover.style.display = 'block';
  });

  element.addEventListener('mouseout', () => {
    productImage.style.display = 'block';
    productImageHover.style.display = 'none';
  });
});


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}

window.onload = fadeOut();