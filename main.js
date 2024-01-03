
// put the big picture into a variable
let bigIphone = document.getElementById("img");
// put all small moblles in array
let allIphones = document.querySelectorAll(".images img");
// ]efintion of a variable to change the background
let mainSection = document.querySelector(".main");
// Go over the array elements and change the image and the background
allIphones.forEach((element) =>
    element.onclick = function () {
        bigIphone.src = this.src;
        mainSection.style.backgroundColor = this.getAttribute("data-color");
    }
)



