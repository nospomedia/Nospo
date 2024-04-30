const typeWriter = document.getElementById('typewriter-text');
const text = 'Viski Cola and Tekila';

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);

const texts = ['Fat', 'Motorcycle Tvvvv Tvvvvv', 'Romanian', 'Gypsy', 'Amazing', 'Mega Fat'];
const element = document.getElementById('alternating-text');

let i = 0;
const listener = e => {
  i = i < texts.length - 1 ? i + 1 : 0;
  element.innerHTML = texts[i];
};

element.innerHTML = texts[0];
element.addEventListener('animationiteration', listener, false);

// ----------------------------------------------------------------------------hover//

let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});

//----------------------------------------------------------------------------------grid//

const showWarningInChromiumWithNoSupport = () => {
    if (!navigator.userAgentData || !navigator.userAgentData.brands) return;
  
    const chromium = navigator.userAgentData.brands.filter(
      (b) => b.brand == "Chromium"
    );
    if (!chromium) return;
  
    if (chromium[0].version >= 107) return;
    document.querySelector(".warning").style.display = "block";
  };
  
  showWarningInChromiumWithNoSupport();

  //--------------------------------------------------------------------------------------slide//

  document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 1;

    setInterval(() => {
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        }
        const translateValue = -100 * currentSlide + '%';
        sliderContainer.style.transform = `translateX(${translateValue})`;
        currentSlide++;
    }, 3000); // Change the interval (in milliseconds) as needed
});
