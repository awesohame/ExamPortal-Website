const questionArr = [
    {
        question: "What is the SI unit of force?",
        a: "Watt",
        b: "Newton",
        c: "Joule",
        d: "Volt",
        correct: "b"
    },
    {
        question: "Which of the following quantities is a vector?",
        a: "Speed",
        b: "Temperature",
        c: "Velocity",
        d: "Mass",
        correct: "c"
    },
    {
        question: "What is the law that states that every object persists in its state of rest or uniform motion unless acted upon by an external force?",
        a: "Law of Gravitation",
        b: "Law of Inertia",
        c: "Ohm's Law",
        d: "Boyle's Law",
        correct: "b"
    },
    {
        question: "What is the formula for the kinetic energy of an object?",
        a: "E = mc²",
        b: "E = mv²",
        c: "E = 1/2 mv²",
        d: "E = Fd",
        correct: "c"
    },
    {
        question: "Which type of wave does not require a medium for propagation?",
        a: "Transverse wave",
        b: "Longitudinal wave",
        c: "Electromagnetic wave",
        d: "Sound wave",
        correct: "c"
    },
    {
        question: "What is the unit of electrical resistance?",
        a: "Watt",
        b: "Ampere",
        c: "Ohm",
        d: "Volt",
        correct: "c"
    },
    {
        question: "What is the law that describes the relationship between the current, voltage, and resistance in an electrical circuit?",
        a: "Newton's Law",
        b: "Einstein's Theory of Relativity",
        c: "Ohm's Law",
        d: "Hooke's Law",
        correct: "c"
    },
    {
        question: "Which of the following is an example of a first-class lever?",
        a: "Nutcracker",
        b: "Tweezers",
        c: "Wheelbarrow",
        d: "Scissors",
        correct: "b"
    },
    {
        question: "What is the SI unit of power?",
        a: "Joule",
        b: "Watt",
        c: "Hertz",
        d: "Ampere",
        correct: "b"
    },
    {
        question: "Which law of thermodynamics states that energy cannot be created or destroyed, only transferred or converted?",
        a: "Zeroth Law",
        b: "First Law",
        c: "Second Law",
        d: "Third Law",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const choicesEls = document.querySelectorAll('.choices');
const questionEls = document.getElementById('question');
const a_data = document.getElementById('a_data');
const b_data = document.getElementById('b_data');
const c_data = document.getElementById('c_data');
const d_data = document.getElementById('d_data');
const a_radio = document.getElementById('a');
const b_radio = document.getElementById('b');
const c_radio = document.getElementById('c');
const d_radio = document.getElementById('d');
const submitBtn = document.getElementById('myBtn');
const quesbtn = document.querySelectorAll('.ques');
const finishbtn = document.getElementById('finish');
const submitparent = document.querySelector('.btncontainer');
const questionscontainer = document.querySelector('.questions');
const timercontainer = document.querySelector('.countdowncontainer');
const root = document.querySelector('.quiz_sect_wrap');
let choices = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

let currentQuiz = 0;
let score = 0;

let timer = 10 * 60;

function startTimer() {
    let timeInterval = setInterval(function () {
        if (timer > 0) {

            document.getElementById("countdown").innerHTML = "Timer - " + Math.floor(timer / 60) + ":" + timer % 60;
            timer--;
        } else {
            clearInterval(timeInterval);
            alert("Time's up!");
            // endQuiz();
            finishbtn.click();
        }
    }, 1000);
}

startTimer();

loadQuiz();

function loadQuiz() {
    deselectChoices();

    const currentQuizData = questionArr[currentQuiz];

    questionEls.innerText = currentQuizData.question;
    a_data.innerText = currentQuizData.a;
    b_data.innerText = currentQuizData.b;
    c_data.innerText = currentQuizData.c;
    d_data.innerText = currentQuizData.d;
    // console.log(choices[currentQuiz])
    if (choices[currentQuiz] != 'e') {
        if (choices[currentQuiz] == 'a') {
            a_radio.checked = true;
        }
        else if (choices[currentQuiz] == 'b') {
            b_radio.checked = true;
        }
        else if (choices[currentQuiz] == 'c') {
            c_radio.checked = true;
        }
        else if (choices[currentQuiz] == 'd') {
            d_radio.checked = true;
        }
    }
    console.log(currentQuiz);
    if (currentQuiz == 9) {
        submitBtn.remove();
    }
    else {
        submitparent.appendChild(submitBtn);
    }
};

function loadQues() {
    quesbtn.forEach(item => {
        console.dir(item);
        index = (item.innerHTML) - 1;
        if (choices[index] != 'e') {
            item.classList.add("greenques");
            item.classList.remove("redques");
        }
        else {
            item.classList.add("redques");
            item.classList.remove("greenques");
        }
    });
}
//this function deselect the buttons
function deselectChoices() {
    choicesEls.forEach(choicesEl => choicesEl.checked = false);
};
//this function will get the selected buttos when a user clicks one.
function getSelected() {
    let choice;
    choicesEls.forEach(choicesEls => {
        if (choicesEls.checked) {
            choice = choicesEls.id;
        }
    });
    return choice;
};
//this method will add an event listener once the submit button has been clicked
submitBtn.addEventListener('click', () => {
    const chosen = getSelected();
    if (chosen) {
        choices[currentQuiz] = chosen;

        // console.log(choices[currentQuiz]);
    }
    currentQuiz++;

    if (currentQuiz < questionArr.length) {
        loadQuiz();
    }
    loadQues();
    // else {
    //     quiz.innerHTML = `
    //     <h1 style="text-align: center">You scored ${score}/${questionArr.length}</h1>
    //     <button onclick = "location.reload()" class="next_btn">Reload</button>
    //     `
    // }


});

quesbtn.forEach(item => {
    item.addEventListener('click', () => {
        //handle click
        // console.dir(quesbtn[0]);
        const chosen = getSelected();
        if (chosen) {
            choices[currentQuiz] = chosen;

            // console.log(choices[currentQuiz]);
        }
        let index = (item.innerHTML) - 1;
        currentQuiz = index;
        // console.log(choices[currentQuiz]);
        if (currentQuiz <= questionArr.length) {
            loadQuiz();
        }
        loadQues();

    })
});

finishbtn.addEventListener('click', () => {
    // console.dir(finishbtn);
    // console.log(choices.length)
    for (let i = 0; i < choices.length; i++) {
        console.log(questionArr[i])
        if (choices[i] == questionArr[i].correct) {
            score++;
        }
    }
    resquery = `
            <h1 style="text-align: center">You scored ${score}/${questionArr.length}</h1>
            <div class="center">
            </div>
            <div class="resquescontainer">
            <div class="indexques">Ques No.</div>
            <div class="resques">Correct Answer</div>
            <div class="ansques">Your Answer</div>
            </div>
            `
    // `
    // <div className="resultcontainer">
    //     <div className="result">

    //     </div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    //     <div className="result"></div>
    // </div>
    // `
    i = 0;
    questionArr.forEach(ques => {
        let chc = choices[i];
        if (choices[i] === "e")
            chc = 'Not attempted';
        resquery = resquery + `
        <div class="resquescontainer">
            <div class="indexques">${i + 1}</div>
            <div class="resques">${ques.correct}</div>
            <div class="ansques">${chc}</div>
        </div>
        `
        i++;
    });
    resquery = resquery + `
    <div class="center">
        <a href="/solutions/physics" id="answers">View solutions</a>
    </div>
    `
    quiz.innerHTML = resquery;
    questionscontainer.remove();
    timercontainer.remove();
    root.classList.add("main");

})

