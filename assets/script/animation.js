const bgPink = "#ec6d7b";
const scrollEvent = () => {
  const content = document.querySelector("#content");
  const section1 = document.querySelector("#au-section");
  const section2 = document.querySelector("#rarity-section");
  const section3 = document.querySelector("#roadmap-section");
  const section4 = document.querySelector("#FAQ-section");
  const section5 = document.querySelector("#team-section");

  const nav1 = document.querySelector(".nav-aboutus");
  const nav2 = document.querySelector(".nav-rarity");
  const nav3 = document.querySelector(".nav-roadmap");
  const nav4 = document.querySelector(".nav-partner");
  const nav5 = document.querySelector(".nav-faq");
  const nav6 = document.querySelector(".nav-team");

  const nav = document.querySelector(".nav-items");

  console.log("scroll", content.scrollTop);
  console.log("height", window.innerHeight);

  if (content.scrollTop === 0) {
    nav.style.display = "none";
    console.log("ok");
  } else if (content.scrollTop >= window.innerHeight) {
    nav.style.removeProperty("display");
  }

  if (content.scrollTop >= window.innerHeight) {
    nav1.style.color = bgPink;
  }

  if (
    content.scrollTop < window.innerHeight ||
    content.scrollTop >= window.innerHeight * 2
  ) {
    nav1.style.removeProperty("color");
  }

  if (content.scrollTop >= window.innerHeight * 2) {
    nav2.style.color = bgPink;
  }

  if (
    content.scrollTop <= window.innerHeight ||
    content.scrollTop >= window.innerHeight * 3
  ) {
    nav2.style.removeProperty("color");
  }
  if (content.scrollTop >= window.innerHeight * 3) {
    nav3.style.color = bgPink;
  }
  if (
    content.scrollTop <= window.innerHeight * 2 ||
    content.scrollTop >= window.innerHeight * 4
  ) {
    nav3.style.removeProperty("color");
  }
  if (content.scrollTop >= window.innerHeight * 4) {
    nav4.style.color = bgPink;
  }
  if (
    content.scrollTop <= window.innerHeight * 3 ||
    content.scrollTop >= window.innerHeight * 5
  ) {
    nav4.style.removeProperty("color");
  }
  if (content.scrollTop >= window.innerHeight * 5) {
    nav5.style.color = bgPink;
  }
  if (
    content.scrollTop <= window.innerHeight * 4 ||
    content.scrollTop >= window.innerHeight * 6
  ) {
    nav5.style.removeProperty("color");
  }
  if (content.scrollTop >= window.innerHeight * 6) {
    nav6.style.color = bgPink;
  }
  if (
    content.scrollTop <= window.innerHeight * 5 ||
    content.scrollTop >= window.innerHeight * 7
  ) {
    nav6.style.removeProperty("color");
  }
};

content.addEventListener("scroll", scrollEvent);
