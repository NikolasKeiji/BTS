gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true
});
gsap.from(".hover-image",{
  opacity:0,
  y:-20,
  duration:2,
  filter: "blur(2px)"
});

const h1 = document.querySelector("h1.reveal-text");
const blockH1 = h1.querySelector(".block");

const lines = document.querySelectorAll(".text-hero .line-block");

const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

// ================= H1 =================
tl.fromTo(
  blockH1,
  { xPercent: 0 },
  { xPercent: 100, duration: 1, delay: 0.5 }
);

tl.fromTo(
  blockH1,
  { scaleX: 1 },
  { scaleX: 0, duration: 1 }
);


lines.forEach((line, i) => {
  const block = line.querySelector(".block-p");


  tl.fromTo(
    block,
    { xPercent: 0 },
    { xPercent: 100, duration: 1 },
    `-=${1 - i * 0.2}` 
  );


  tl.fromTo(
    block,
    { scaleX: 1 },
    { scaleX: 0, duration: 1 },
    "-=1"
  );
});


const container = document.querySelector('.hover-image');
const hoverImg = container.querySelector('.img2');



let mouse = { x: 0, y: 0 };
let current = { x: 0, y: 0 };

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

gsap.ticker.add((time) => {

  current.x += (mouse.x - current.x) * 0.08;
  current.y += (mouse.y - current.y) * 0.08;

  const baseSize = 110;


  const t = time * 2;

  const offsetX = Math.sin(t) * 8;
  const offsetY = Math.cos(t * 1.2) * 8;

  const x = current.x + offsetX;
  const y = current.y + offsetY;

  hoverImg.style.clipPath = `circle(${baseSize}px at ${x}px ${y}px)`;
});

container.addEventListener('mouseleave', () => {
  hoverImg.style.clipPath = 'circle(0px at 50% 50%)';
});

// ===================== YouTube Player =====================
let player;
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '100%',
    width: '100%',
    videoId: 'w09RpSumTX8',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      loop: 1,
      playlist: 'w09RpSumTX8',
      playsinline: 1
    },
    events: {
      onReady: (event) => {}
    }
  });
}

  gsap.from(".video-wrapper",{
  opacity:0,
  y:-120,
  duration:2,
  filter: "blur(2px)",
  scrollTrigger: {
    trigger: "#trailer",
    start: "top 15%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
  });

gsap.from(".logo1",{
  opacity:0,
  x:120,
  duration:2,
  filter: "blur(2px)",
  scrollTrigger: {
    trigger: "#trailer",
    start: "top 15%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
  });

  gsap.from(".logo2",{
  opacity:0,
  x:-120,
  duration:2,
  filter: "blur(2px)",
  scrollTrigger: {
    trigger: "#trailer",
    start: "top 15%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
  });



const blocks = document.querySelectorAll(".text-section .block");


gsap.set(blocks, { xPercent: 0 });

gsap.to(blocks, {
  xPercent: 101,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".logo2",
    start: "top 30%",
    toggleActions: "play none none none"
  }
});

const footerBlocks = document.querySelectorAll(".escrita-footer .block");

gsap.set(footerBlocks, { xPercent: 0 });

gsap.to(footerBlocks, {
  xPercent: 101,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".escrita-footer",
    start: "top 40%",
    toggleActions: "play none none none"
  }
});

 gsap.from(".lista",{
  opacity:0,
  x:-120,
  duration:2,
  filter: "blur(2px)",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: "#musics",
    start: "top 50%",
    endTrigger: "#projetos",
    end: "+=400",
    scrub: 1,
  }
  });

gsap.fromTo(".capa",
  { opacity: 0, filter: "blur(2px)" }, 
  { 
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    scrollTrigger: {
      trigger: "#musics",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  }
);
gsap.fromTo(".disco",
  { opacity: 0, filter: "blur(2px)" }, 
  { 
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    scrollTrigger: {
      trigger: "#musics",
      start: "top 50%",
      toggleActions: "play none none none"
    }
  }
);