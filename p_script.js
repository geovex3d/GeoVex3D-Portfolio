document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  htmlElement.style.setProperty("--scroll", percentOfScreenHeightScrolled)
}

const copybtn = document.getElementById('copybtn');
const notif = document.getElementById('notif');
const textToCopy = 'geovex3d.contact@gmail.com';

copybtn.addEventListener('click', () => {
  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  notif.style.translate = '0px 0px';
  setTimeout(() => {
    notif.style.translate = '0px 140px';
  }, 2000);
  copybtn.style.color = "rgb(166, 255, 93)";
});

const fadeElement = document.querySelector('.contact div', '.contact img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
        } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5
});

observer.observe(fadeElement);

