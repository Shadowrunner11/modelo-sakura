import ScrollReveal from "scrollreveal";


const animFlower = ScrollReveal();

animFlower.reveal('.anim-flower', {
  duration: 3000,
  delay: 0,
  distance: '150px',
  opacity: 0,
  easing: 'ease-in-out',
  origin: 'bottom',
  reset: true
});

const anim2 = ScrollReveal();

anim2.reveal('.anim-2', {
  duration: 1500,
  delay: 0,
  opacity: 0,
  easing: 'ease-in-out',
  reset: true,
  origin: 'left',
  distance: '50px',
  rotate: { x: 0, y: 0, z: 40 },
  scale: 0.5,
});
