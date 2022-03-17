let highScore = 0;

let countDown = 75;

let highScoresObject = {};

const quizInitContent = {
  quizStart: [
    "Coding Quiz Challenge!",
    "Press Start Quiz to begin. You'll have 75 seconds to answer all questions.",
  ],
};

const quizQuestion1 = [
  "if 6 > 5: print('6 is greater than 5')",
  "Which programming language does the above syntax belong to?",
  "PHP",
  "Python",
  "JavaScript",
];
const quizQuestion2 = [
  "Which programming language is a compiled language?",
  "C",
  "Python",
  "JavaScript",
];
const quizQuestion3 = [
  "Which programming language is an interpreted language?",
  "Go",
  "JavaScript",
  "Assembly",
];
const quizQuestion4 = [
  "Which programming language relies on indentation?",
  "Bash",
  "JavaScript",
  "Python",
];
const quizQuestion5 = [
  "Deno is a runtime for which programming language?",
  "JavaScript",
  "Ruby",
  "C++",
];

//Define initial elements.
let headerFirst = document.createElement("header");
let headerAnchor = document.createElement("a");
let headerParagraph = document.createElement("p");

let sectionFirst = document.createElement("section");
let sectionFirstH1 = document.createElement("h1");
let sectionFirstOl = document.createElement("ol");
let sectionFirstLi1 = document.createElement("li");
let sectionFirstLi2 = document.createElement("li");
let sectionFirstLi3 = document.createElement("li");
let sectionFirstParagraph = document.createElement("p");

let sectionSecond = document.createElement("section");
let sectionSecondH1 = document.createElement("h1");
let sectionSecondParagraph = document.createElement("p");
let sectionSecondInput = document.createElement("input");

//Append static elements.
document.body.appendChild(headerFirst);
headerFirst.appendChild(headerAnchor);
headerFirst.appendChild(headerParagraph);
document.body.appendChild(sectionFirst);
document.body.appendChild(sectionSecond);
sectionSecond.appendChild(sectionSecondH1);
sectionSecond.appendChild(sectionSecondParagraph);
sectionSecond.appendChild(sectionSecondInput);

//Attributes for static elements.
document.body.setAttribute(
  "style",
  "display: inline-flex; flex-direction: column; align-content: center; justify-content: center; align-items: center; row-gap: 50px; background-color: #9c8a9c"
);
headerFirst.setAttribute("tittle", "Timed Quiz");
headerFirst.setAttribute(
  "style",
  "display: flex; align-content: center; align-items: center; flex-flow: row wrap; flex: 1 100%"
);
headerAnchor.setAttribute("href", "#this");
headerAnchor.setAttribute("id", "anchor");
headerAnchor.setAttribute(
  "style",
  "width: 600px; font-size: 25px; color: #962686"
);
headerParagraph.setAttribute("id", "timer");
headerParagraph.setAttribute(
  "style",
  "width: 600px; display: flex; justify-content: flex-end; font-size: 25px; color: #962686"
);
sectionFirst.setAttribute(
  "style",
  "width: 500px; display: flexbox; flex-flow: row wrap; justify-content: center; align-content: center; align-self: center; "
);
sectionFirstH1.setAttribute(
  "style",
  "display: flexbox; width: 450px; background-color: #b854a9; padding: 40px 40px; border: 2px solid #9c989c; border-radius: 10px; color: white; text-align: center; font-size: 20px; margin-right: 100px; "
);
sectionFirstParagraph.setAttribute(
  "style",
  "display: flexbox; width: 400px; background-color: #b854a9; border: 2px solid #9c989c; border-radius: 15px; color: white; text-align: center; font-size: 25px; margin-bottom: 15px; position relative; margin: 60px"
);
sectionSecond.setAttribute("id", "second-section");
sectionSecond.setAttribute(
  "style",
  "width: 300px; display: flex; flex-flow: row wrap;  justify-content: center; color: #962686;"
);
sectionSecondParagraph.setAttribute(
  "style",
  "color: #962686; font-size: 18px; margin: 25px;"
);
sectionSecondInput.setAttribute("type", "submit");
sectionSecondInput.setAttribute("value", "Start Quiz");
sectionSecondInput.setAttribute("id", "start-quiz");
sectionSecondInput.setAttribute(
  "style",
  "display: flexbox; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin-bottom: 15px;"
);

headerAnchor.textContent = "View Highscores";
sectionSecondInput.textContent = "Start Quiz";

sectionSecondH1.textContent = quizInitContent.quizStart[0];
sectionSecondParagraph.textContent = quizInitContent.quizStart[1];

let quizTimer = document.querySelector("#timer");
quizTimer.textContent = "Time: 75 seconds.";

function constructButtons() {
  sectionFirst.appendChild(sectionFirstH1);
  sectionFirst.appendChild(sectionFirstOl);
  sectionFirstOl.appendChild(sectionFirstLi1);
  sectionFirstOl.appendChild(sectionFirstLi2);
  sectionFirstOl.appendChild(sectionFirstLi3);
  sectionFirst.appendChild(sectionFirstParagraph);

  // sectionFirstOl.setAttribute("style", "display: flexbox;");
  sectionFirstLi1.setAttribute("id", "li li-01");
  sectionFirstLi2.setAttribute("id", "li li-02");
  sectionFirstLi3.setAttribute("id", "li li-03");
  sectionFirstLi1.setAttribute("class", "q1");
  sectionFirstLi2.setAttribute("class", "q1");
  sectionFirstLi2.setAttribute("data-point", "yes");
  sectionFirstLi3.setAttribute("class", "q1");
}

//Selector Functions
const liSelect = (liSelect) => {
  liSelect = document.querySelectorAll("li");
  return liSelect;
};

const olSelect = (olSelect) => {
  olSelect = document.querySelector("ol");
  return olSelect;
};

const submitSelect = (submitSelect) => {
  submitSelect = document.querySelectorAll("#start-quiz");
  return submitSelect;
};

let styleButtons = () => {
  // set initial css style for the buttons
  for (i = 0; i < liSelect().length; i++) {
    liSelect()[i].setAttribute(
      "style",
      "list-style: none; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin-bottom: 15px;"
    );
  }
};

let styleEffects = (selector) => {
  for (i = 0; i < selector.length; i++) {
    selector[i].addEventListener("mouseover", (event) => {
      event.currentTarget.setAttribute(
        "style",
        "list-style: none; background-color: #b854a9; border: 4px solid #9c989c; border-radius: 15px; color: white; padding: 12px 12px; text-align: center; font-size: 25px; margin-bottom: 15px; transition: all 0.1s ease-out"
      );
    });
  }
  for (i = 0; i < selector.length; i++) {
    selector[i].addEventListener("mouseout", (event) => {
      event.currentTarget.setAttribute(
        "style",
        "list-style: none; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin-bottom: 15px;"
      );
    });
  }
};

//Function to loop through the questions
function startQuiz() {
  setCountDown(75);
  constructButtons();
  styleButtons();
  styleEffects(liSelect());

  function answerInterval() {
    let interval;
    let clearAnswer = () => {
      sectionFirstParagraph.textContent = "";
      clearInterval(interval);
      interval = null;
    };

    if (!interval) {
      interval = setInterval(clearAnswer, 700);
    }
  }

  sectionFirstH1.innerHTML = `<pre>${quizQuestion1[0]}</pre> ${quizQuestion1[1]}`;
  sectionFirstLi1.textContent = quizQuestion1[2];
  sectionFirstLi2.textContent = quizQuestion1[3];
  sectionFirstLi3.textContent = quizQuestion1[4];

  //Listen to click events
  olSelect().addEventListener("click", (event) => {
    let selection = event.target;
    let point = selection.getAttribute("data-point");

    if (point === "yes") {
      highScore += 5;
      sectionFirstParagraph.textContent = "Correct answer!";
      answerInterval();
    } else {
      sectionFirstParagraph.textContent = "Incorrect answer! Keep Trying!";
      answerInterval();
      resetCountDown();
    }

    if (selection.matches(".q1")) {
      sectionFirstLi1.setAttribute("data-point", "yes");
      sectionFirstLi2.setAttribute("data-point", "");
      sectionFirstH1.textContent = quizQuestion2[0];
      sectionFirstLi1.textContent = quizQuestion2[1];
      sectionFirstLi2.textContent = quizQuestion2[2];
      sectionFirstLi3.textContent = quizQuestion2[3];
      sectionFirstLi1.setAttribute("class", "q2");
      sectionFirstLi2.setAttribute("class", "q2");
      sectionFirstLi3.setAttribute("class", "q2");
    } else if (selection.matches(".q2")) {
      sectionFirstLi1.setAttribute("data-point", "");
      sectionFirstLi2.setAttribute("data-point", "yes");
      sectionFirstH1.textContent = quizQuestion3[0];
      sectionFirstLi1.textContent = quizQuestion3[1];
      sectionFirstLi2.textContent = quizQuestion3[2];
      sectionFirstLi3.textContent = quizQuestion3[3];
      sectionFirstLi1.setAttribute("class", "q3");
      sectionFirstLi2.setAttribute("class", "q3");
      sectionFirstLi3.setAttribute("class", "q3");
    } else if (selection.matches(".q3")) {
      sectionFirstLi2.setAttribute("data-point", "");
      sectionFirstLi3.setAttribute("data-point", "yes");
      sectionFirstH1.textContent = quizQuestion4[0];
      sectionFirstLi1.textContent = quizQuestion4[1];
      sectionFirstLi2.textContent = quizQuestion4[2];
      sectionFirstLi3.textContent = quizQuestion4[3];
      sectionFirstLi1.setAttribute("class", "q4");
      sectionFirstLi2.setAttribute("class", "q4");
      sectionFirstLi3.setAttribute("class", "q4");
    } else if (selection.matches(".q4")) {
      sectionFirstLi1.setAttribute("data-point", "yes");
      sectionFirstLi2.setAttribute("data-point", "");
      sectionFirstLi3.setAttribute("data-point", "");
      sectionFirstH1.textContent = quizQuestion5[0];
      sectionFirstLi1.textContent = quizQuestion5[1];
      sectionFirstLi2.textContent = quizQuestion5[2];
      sectionFirstLi3.textContent = quizQuestion5[3];
      sectionFirstLi1.setAttribute("class", "q5");
      sectionFirstLi2.setAttribute("class", "q5");
      sectionFirstLi3.setAttribute("class", "q5");
    } else if (selection.matches(".q5")) {
      stopContDown();
      submitScore();
    }
  });
}

function submitScore() {
  selectOlSection = document.body.children[2];
  selectOlSection.remove();

  let sectionFirst = document.createElement("section");
  let sectionFirstH1 = document.createElement("h1");
  let sectionFirstInput = document.createElement("input");
  let sectionFirstSubmit = document.createElement("input");

  document.body.appendChild(sectionFirst);
  sectionFirst.appendChild(sectionFirstH1);
  sectionFirst.appendChild(sectionFirstInput);
  sectionFirst.appendChild(sectionFirstSubmit);
  sectionFirstH1.textContent =
    "To save provide your initials and click submit.";

  sectionFirst.setAttribute(
    "style",
    "display: flexbox; align-content: center; align-items: center; flex-flow: column wrap; flex: 1 100%"
  );
  sectionFirstH1.setAttribute("style", "color: #962686");
  sectionFirstInput.setAttribute("type", "text");
  sectionFirstSubmit.setAttribute("type", "submit");
  sectionFirstInput.setAttribute(
    "style",
    "display: flexbox; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin-bottom: 15px;"
  );

  sectionFirstSubmit.setAttribute(
    "style",
    "display: flexbox; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin-bottom: 15px;"
  );
  saveResults();
}

function saveResults() {
  let submitButton = document.querySelectorAll("input")[1];
  let userInput = document.querySelector("input");

  submitButton.addEventListener("click", (event) => {
    let selection = event.target;
    input = userInput.value.trim();
    highScoresObject[input] = highScore;
    let existingUser = localStorage.getItem(input);

    if (selection) {
      if (!existingUser || highScoresObject[input] > existingUser) {
        localStorage.setItem(Object.keys(highScoresObject), highScore);
      } else {
        highScore = existingUser;
      }
    }
    renderResults();
  });
}

function renderResults() {
  //Remove section elements if present.
  let selectSectionEl = document.getElementsByTagName("section");

  for (i = 0; i < selectSectionEl.length; i++) {
    selectSectionEl[i].remove();
  }

  //Define new section content and add style.
  let sectionFirst = document.createElement("section");
  let sectionFirstH1 = document.createElement("h1");
  let sectionFirstInput = document.createElement("input");

  let sectionSecond = document.createElement("section");
  let sectionSecondH1 = document.createElement("h1");
  let sectionSecondOl = document.createElement("ol");
  let sectionSecondLi = document.createElement("li");

  document.body.appendChild(sectionFirst);
  document.body.appendChild(sectionSecond);
  sectionFirst.appendChild(sectionFirstH1);
  sectionFirst.appendChild(sectionFirstInput);
  sectionSecond.appendChild(sectionSecondH1);
  sectionSecond.appendChild(sectionSecondOl);

  sectionFirstH1.textContent = `${Object.keys(
    highScoresObject
  )} your current highest score is ${highScore}`;

  // for (i = 0; i < Object.keys(localStorage).length; i++) {
  //   console.log(Object.keys(localStorage)[i], Object.values(localStorage)[i]);
  //   sectionSecondOl.append(sectionSecondLi);
  // }

  // for (i = 0; i < Object.keys(localStorage).length; i++) {
  //   if (i) {
  //     sectionSecondOl.children[i].textContent = `${
  //       Object.keys(localStorage)[i]
  //     } highest score is ${Object.values(localStorage)[i]}`;
  //   }
  // }

  sectionFirstH1.setAttribute("style", "color: #962686");

  sectionFirstInput.setAttribute(
    "style",
    "display: flexbox; background-color: #962686; border-radius: 15px; color: white; padding: 10px 10px; text-align: center; font-size: 25px; margin: 45px;"
  );
  sectionFirstInput.setAttribute("type", "submit");
  sectionFirstInput.setAttribute("value", "Reload");

  sectionFirstInput.addEventListener("click", (event) => {
    let selection = event.target;
    if (selection) {
      location.reload();
    }
  });
}

function renderHighScores() {
  anchor = document.querySelector("#anchor");
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    event = event.target;
    renderResults();
  });
}

//Countdown timer function
function setCountDown(numberOfSeconds) {
  countDown = numberOfSeconds;

  interval = setInterval(() => {
    if (countDown <= 0) {
      clearInterval(interval);
      alert(
        "You ran out of time! \n Please click Ok to submit your results or refresh to start over."
      );
    } else {
      countDown--;
      quizTimer.textContent = `Time: ${countDown} seconds left!`;
    }
  }, 1000);
}

function resetCountDown() {
  countDown -= 10;
}

function stopContDown() {
  countDown = 0;
  quizTimer.textContent = `Time: ${countDown} seconds left!`;
}

function initApp() {
  // Removes <section> elements
  let quizButton = document.querySelector("#start-quiz");
  let selectSecondSection = document.querySelector("#second-section");
  styleEffects(submitSelect());

  quizButton.addEventListener("click", function () {
    if (selectSecondSection) {
      selectSecondSection.remove();
      startQuiz();
    } else {
      startQuiz();
    }
  });
  // renderHighScores();
}

//Launch App
initApp();
