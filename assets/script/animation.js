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
    // nav.style.display = "none";
    console.log("ok");
  } else if (content.scrollTop >= window.innerHeight) {
    nav.style.removeProperty("display");
  }

  if (content.scrollTop >= window.innerHeight) {
    nav1.classList.add("select");
  }

  if (
    content.scrollTop < window.innerHeight ||
    content.scrollTop >= window.innerHeight * 2
  ) {
    nav1.classList.remove("select");
  }

  if (content.scrollTop >= window.innerHeight * 2) {
    nav2.classList.add("select");
  }

  if (
    content.scrollTop <= window.innerHeight ||
    content.scrollTop >= window.innerHeight * 3
  ) {
    nav2.classList.remove("select");
  }
  if (content.scrollTop >= window.innerHeight * 3) {
    nav3.classList.add("select");
  }
  if (
    content.scrollTop <= window.innerHeight * 2 ||
    content.scrollTop >= window.innerHeight * 4
  ) {
    nav3.classList.remove("select");
  }
  if (content.scrollTop >= window.innerHeight * 4) {
    nav4.classList.add("select");
  }
  if (
    content.scrollTop <= window.innerHeight * 3 ||
    content.scrollTop >= window.innerHeight * 5
  ) {
    nav4.classList.remove("select");
  }
  if (content.scrollTop >= window.innerHeight * 5) {
    nav5.classList.add("select");
  }
  if (
    content.scrollTop <= window.innerHeight * 4 ||
    content.scrollTop >= window.innerHeight * 6
  ) {
    nav5.classList.remove("select");
  }
  if (content.scrollTop >= window.innerHeight * 6) {
    nav6.classList.add("select");
  }
  if (
    content.scrollTop <= window.innerHeight * 5 ||
    content.scrollTop >= window.innerHeight * 7
  ) {
    nav6.classList.remove("select");
  }
};

content.addEventListener("scroll", scrollEvent);
