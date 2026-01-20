 function topSection(){
 const text = "Hi, I'm PACKIYARAJ";
  const container = document.getElementById("animated-text");
  const delay = 100; // speed

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * delay}ms`;
    container.appendChild(span);
  });
 }

 topSection();