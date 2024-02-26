// Add your code here
document.addEventListener("DOMContentLoaded", function () {
  let main = document.querySelector("main");
  let section = document.createElement("section");
  let h1 = document.querySelector("h1");
  section.className = "container";
  main.appendChild(section);
  section.appendChild(h1);
  let img = document.createElement("img");
  img.className = "img";
  img.src = "../images/Srihari.png";
  img.width = "200";
  img.alt =
    "The picture shows me wearing a yellow sweatshirt at Swaminarayan Mandir New Jersey.";
  section.appendChild(img);
  let p = document.createElement("p");
  p.className = "bio";
  p.textContent =
    "My name is Srihari Tanmay Karthik Tadala (he/him). I am pursuing my master's degree in computer science with an interest in web development. I worked as a software development intern at Hindustan Petroleum Corporation Limited during my bachelors. I look forward to this course valuable lessons and becoming a full-stack engineer.";
  section.appendChild(p);
  let sentences = p.textContent.split(". ");
  let firstSentenceSpan = document.createElement("span");
  firstSentenceSpan.className = "first-sentence";
  firstSentenceSpan.textContent = sentences[0] + ". ";
  p.textContent = "";
  p.appendChild(firstSentenceSpan);
  p.appendChild(document.createTextNode(sentences.slice(1).join(". ")));
});
