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

ScrollReveal.reveal('.anim-3', {
  duration: 1000,
  delay: 0,
  opacity: 0,
  easing: 'ease-in-out',
  origin: 'left',
  distance: '0px',
  scale: 0.5,
});


ScrollReveal.reveal('.anim-4', {
  duration: 1000,
  delay: 0,
  easing: 'ease-in-out',
  origin: 'bottom',
  distance: '100px',
  opacity: 0,
  scale: 0.5,
});
