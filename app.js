// let form = document.querySelector("form");
// let url = document.querySelector('#url')
// let upper = document.querySelector('#upper')
// let lower = document.querySelector('#lower')
let formInput = [];

// form capture
form.addEventListener("submit", function (e) {
  e.preventDefault();
  formInput = [];
  for (let i of e.target) {
    formInput.push(i.value);
    if (i.value !== document.querySelector("#submit").value) i.value = "";
  }
  addMeme();
});

//create div with new Meme
function createDiv() {
  //div shell
  let newMeme = document.createElement("div");
  newMeme.className = "meme";
  newMeme.append(...compile());

  //compile meme
  function compile() {
    //upper Text
    let upperTxt = document.createElement("div");
    upperTxt.className = "upper";
    upperTxt.innerText = formInput[1];

    //image
    let memeImg = document.createElement("img");
    memeImg.className = "image";
    memeImg.setAttribute("src", formInput[0]);

    //delete
    let memeDelete = document.createElement("img");

    memeDelete.className = "delete";
    memeDelete.setAttribute(
      "src",
      "http://www.clker.com/cliparts/U/X/m/w/r/q/denied-md.png"
    );
    memeDelete.addEventListener("click", function (e) {
      console.dir(e.target.parentNode.remove());
    });

    // lower Txt
    let lowerTxt = document.createElement("div");
    lowerTxt.className = "lower";
    lowerTxt.innerText = formInput[2];

    //return compiled
    return [upperTxt, memeImg, lowerTxt, memeDelete];
  }

  //return meme
  return newMeme;
}

//attach meme to page
function addMeme() {
  newMeme = createDiv();
  let display = document.querySelector("#display");
  display.prepend(newMeme);
}
