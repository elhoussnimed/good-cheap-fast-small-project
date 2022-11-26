const options = [...document.querySelectorAll(".option")];
const good = options[0];
const cheap = options[1];
const fast = options[2];

let goodIsSelect;
let cheapIsSelect;
let fastIsSelect;

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    option.classList.toggle("selected");
    checkSelectedOption();
    chooseOption(e);
  });
});

function checkSelectedOption() {
  if (good.classList.contains("selected")) {
    goodIsSelect = true;
  } else {
    goodIsSelect = false;
  }

  if (cheap.classList.contains("selected")) {
    cheapIsSelect = true;
  } else {
    cheapIsSelect = false;
  }

  if (fast.classList.contains("selected")) {
    fastIsSelect = true;
  } else {
    fastIsSelect = false;
  }
}

function chooseOption(e) {
  if (goodIsSelect && fastIsSelect && e.target.dataset.name === "cheap") {
    good.classList.remove("selected");
  } else if ( cheapIsSelect && fastIsSelect && e.target.dataset.name === "good") { 
    fast.classList.remove("selected");
  } else if ( goodIsSelect && cheapIsSelect && e.target.dataset.name === "fast") {
    cheap.classList.remove("selected");
  }
}
