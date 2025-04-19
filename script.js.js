
// Set background music volume
const bgMusic = document.getElementById('bgMusic');
if (bgMusic) {
  bgMusic.volume = 0.3; // Set volume to 30%
}

var strokesLeftBottom = $('#LeftBottomGroup_1_ path[id^=Stroke]').toArray().reverse();
var strokesLeftTop = $('#LeftTopGroup_1_ path[id^=Stroke]').toArray().reverse();
var strokesRightBottom = $('#RightBottomGroup_1_ path[id^=Stroke]').toArray().reverse();
var strokesRightTop = $('#RightTopGroup_1_ path[id^=Stroke]').toArray().reverse();

var stemGroup1 = ['#Stem2_1_', '#Stem3_1_', '#Stem4_1_', '#Stem5a_1_', '#Stem5b_1_', '#Stem6_1_', '#Stem7a_1_', '#Stem7b_1_', '#Stem7c_1_', '#Stem8_1_'];
var stemGroup2 = ['#Stem17_1_', '#Stem18_1_', '#Stem19_1_', '#Stem20a_1_', '#Stem20b_1_', '#Stem21_1_', '#Stem22a_1_', '#Stem22b_1_', '#Stem22c_1_', '#Stem23_1_'];
var stemGroup3 = ['#Stem10_1_', '#Stem11_1_', '#Stem12a_1_', '#Stem12b_1_'];
var stemGroup4 = ['#Stem26_1_', '#Stem27_1_', '#Stem28a_1_', '#Stem28b_1_'];
var stemGroup5 = ['#Stem13a_1_', '#Stem13b_1_', '#Stem13c_1_'];
var stemGroup6 = ['#Stem29a_1_', '#Stem29b_1_', '#Stem29c_1_'];

var leafGroup1 = ['#Leaf2_1_','#Leaf17_1_'];
var leafGroup2 = ['#Leaf4_1_','#Leaf5a_1_', '#Leaf5b_1_'];
var leafGroup3 = ['#Leaf19_1_','#Leaf20a_1_', '#Leaf20b_1_'];
var leafGroup4 = ['#Leaf11_1_','#Leaf12a_1_', '#Leaf12b_1_'];
var leafGroup5 = ['#Leaf27_1_','#Leaf28a_1_', '#Leaf28b_1_'];
var leafGroup6 = ['#Leaf13a_1_','#Leaf13b_1_', '#Leaf13c_1_'];
var leafGroup7 = ['#Leaf29a_1_','#Leaf29b_1_', '#Leaf29c_1_'];

var budGroup1 = ['#Bud3_1_', '#Bud6_1_'];
var budGroup2 = ['#Bud18_1_', '#Bud21_1_'];
var budGroup3 = ['#Bud7a_1_', '#Bud7b_1_', '#Bud7c_1_', '#Bud8_1_'];
var budGroup4 = ['#Bud22a_1_', '#Bud22b_1_', '#Bud22c_1_', '#Bud23_1_'];
var budGroup5 = ['#Bud10_1_', '#Bud26_1_'];

var dots = $('#Dots_1_');

var tl = gsap.timeline()
.set('#Footer_group_1_', {autoAlpha: 1})
.fromTo(['#Stem16_1_','#Stem1_1_'], {opacity: 0, y: 20}, {duration:1.5, opacity: 1, y: 0}, 'start')
.fromTo('#BaseGroup16_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%'}, {duration:1, scale:1}, 1.2, 'flower1')
.fromTo('#PinkFlowerGroup16_1_', {autoAlpha: 1, scale: 0, transformOrigin: '35% 110%'}, {duration:2, scale:1}, 'flower1-=0.55')
.fromTo('#BaseGroup1_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '90% 130%'}, {duration:1, scale:1}, 1.2, 'flower1')
.fromTo('#PinkFlowerGroup1_1_', {autoAlpha: 1, scale: 0, transformOrigin: '65% 110%'}, {duration:2, scale:1}, 'flower1-=0.55')
.fromTo( ['#Stem9_1_','#Stem25_1_'], {opacity:0, y:20}, {duration:2, opacity:1, y:0}, 'flower1+=0.5')
.fromTo('#BaseGroup9_1_ path', {autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%'}, {duration:1, scale:1}, 'flower2-=0.5')
.fromTo('#PinkFlowerGroup9_1_', {autoAlpha: 1, scale: 0, transformOrigin: '5% 110%'}, {duration:2, scale:1}, 'flower2');

// Animation for text slides
function animateSlides() {
  const slide1Top = document.getElementById('slide1-top');
  const slide1Bottom = document.getElementById('slide1-bottom');
  const slide2 = document.getElementById('slide2');
  
  // Initially hide all slides
  gsap.set([slide1Top, slide1Bottom, slide2], { opacity: 0 });
  
  // Create timeline for text animations
  const textTl = gsap.timeline();
  
  // Animate first slide at top
  textTl.to(slide1Top, {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  })
  // Animate second slide at bottom after a delay
  .to(slide1Bottom, {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    delay: 4
  })
  // Keep both slides visible for 4 seconds then fade out
  .to([slide1Top, slide1Bottom], {
    opacity: 0,
    duration: 1,
    delay: 5,
    ease: "power2.out"
  })
  // Animate third slide
  .to(slide2, {
    opacity: 1,
    duration: 4,
    ease: "power2.out"
  })
  // Keep third slide visible for 4 seconds then fade out
  .to(slide2, {
    opacity: 0,
    duration: 1,
    delay: 4,
    ease: "power2. out",
    onComplete: animateSlides // Loop the animation
  });
}

// Initial animation of strokes
tl.fromTo(strokesLeftBottom, {opacity:0, y:20}, { opacity: 1, y: 0, duration:2, stagger:1 }, 1)
.fromTo(strokesRightBottom, {opacity:0, y:20}, { opacity: 1, y: 0, duration:2, stagger:1 }, 1)
.fromTo(strokesLeftTop, {opacity:0, y:20}, { opacity: 1, y: 0, duration:2, stagger:1 }, 'flower1+=0.5')
.fromTo(strokesRightTop, {opacity:0, y:20}, { opacity: 1, y: 0, duration:2, stagger:1 }, 'flower1+=0.5')
.add(() => {
  animateSlides();
}, "+=2");
