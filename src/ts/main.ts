import scrollRevealBuilder from "scrollreveal";

const ScrollReveal = scrollRevealBuilder({reset: true});


ScrollReveal.reveal('.anim-flower', {
  duration: 3000,
  delay: 0,
  distance: '150px',
  opacity: 0,
  easing: 'ease-in-out',
  origin: 'bottom',
});

ScrollReveal.reveal('.anim-2', {
  duration: 1500,
  delay: 0,
  opacity: 0,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '50px',
  rotate: { x: 0, y: 0, z: 40 },
  scale: 0.5,
});
