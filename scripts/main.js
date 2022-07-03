// const blueCircle = document.getElementById("blue-circle");
// const redSquare = document.getElementById("red-square");

// const timeline = gsap.timeline({ defaults: { duration: 1 } });
// timeline
//   .from(".triangle", { y: "-100%", ease: "bounce" })
//   .from(blueCircle, { opacity: 0, stagger: 0.5 })
//   .from(redSquare, { x: "-100vw", ease: "power2.in" }, 1)
//   .from(".left", { x: "-100%" }, "<.5")
//   .to(".footer", { y: 0, ease: "elastic" })
//   .fromTo(
//     ".button",
//     { opacity: 0, scale: 0, rotation: 720 },
//     { opacity: 1, scale: 1, rotation: 0 }
//   );

//////////////////////////

const hp1 = document.getElementById("h-part1");
const hp2 = document.getElementById("h-part2");
const hp3 = document.getElementById("h-part3");

const ep1 = document.getElementById("e-part1");
const ep2 = document.getElementById("h-part2");
const ep3 = document.getElementById("e-part3");
const ep4 = document.getElementById("e-part4");

const l1p1 = document.getElementById("l1-part1");
const l1p2 = document.getElementById("l1-part2");

const l2p1 = document.getElementById("l2-part1");
const l2p2 = document.getElementById("l2-part2");

const timeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
  defaults: { duration: 1.5 },
});

timeline
  .from(hp1, { x: "60", y: "20", rotation: 720, delay: 1 })
  .from(".o-part", { x: "-60", y: "20", ease: "power1" })
  .from(l1p2, { y: -20, rotation: 2000 })
  .from(".e-horizontal", { stagger: 0.5, opacity: 0 })
  .fromTo(l2p1, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
  .from(hp2, { opacity: 0 })
  .from(l1p1, { y: 20, ease: "bounce" })
  .fromTo(l2p2, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })
  .from(ep1, { x: 60 })
  .from(hp3, { rotation: 1000, y: 20, scale: 0 })
  .from(hp3, {});
