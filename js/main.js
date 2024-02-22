const nav = document.querySelector(".nav");
const header = document.querySelector("header");
const section = document.querySelector(".section-1");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//tip top
const tabs = document.querySelector(".web-skill");
const tabButton = document.querySelectorAll(".skill-item");
const contents = document.querySelectorAll(".skill-data");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};
