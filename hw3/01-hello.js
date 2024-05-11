// Add your code here
var image = document.createElement("img");
image.src = "../images/omar.jpg";
image.alt = "Omar Nassar";
image.width = "200";
image.id = "profileImg";
document.body.append(image);

var bio = document.createElement("p");
bio.textContent =
  "My name is Omar and I am an undergrad in the last term of my senior year. I have a website that can be found at omarpdxpics.com. My goal in taking this class is learning more about HTML, CSS, and JS so I can take it to the next level and become more fluent in web development!";
bio.id = "bio";
document.body.append(bio);

var firstSentence = bio.textContent.split(".")[0];
var spanElement = document.createElement("span");
spanElement.textContent = firstSentence;
spanElement.style.fontWeight = "bold";
bio.innerHTML = bio.innerHTML.replace(
  firstSentence,
  spanElement.outerHTML
);
