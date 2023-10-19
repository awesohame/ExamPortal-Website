const questionArr = [
    {
        question: "What is the sum of all prime numbers between 20 and 30?",
        a: "73",
        b: "80",
        c: "79",
        d: "67",
        correct: "c"
    },

    {
        question: "If a quadratic equation 2x² - 5x + k = 0 has equal roots, what is the value of 'k'?",
        a: "5/2",
        b: "25/4",
        c: "11",
        d: "18",
        correct: "b"
    },

    {
        question: "If f(x) = x³ - 4x² + 3x + 2, what is f'(x) (the derivative of f(x))?",
        a: "3x² - 8x + 3",
        b: "2x² - 8x + 3",
        c: "3x² - 5x + 3",
        d: "8x² - 8x + 9",
        correct: "a"
    },

    {
        question: "If the equation of a circle is (x - 2)² + (y + 3)² = 25, what is the radius of the circle?",
        a: "5",
        b: "4",
        c: "9",
        d: "16",
        correct: "a"
    },

    {
        question: "Solve the trigonometric equation: 2sin(x) - √3 = 0 for 0° ≤ x < 360°. What are the solutions?",
        a: "60°, 300°",
        b: "45°, 225°",
        c: "30°, 100°",
        d: "30°, 60°",
        correct: "a"

    },
    {
        question: "A triangle has sides of length 6 cm, 8 cm, and 10 cm. Is it a right-angled triangle?",
        a: "Yes",
        b: "No",
        c: "Cannot determine",
        d: "Maybe",
        correct: "a"

    },
    {
        question: "If log base 3 of x = 2, what is the value of x?",
        a: "3",
        b: "6",
        c: "9",
        d: "1",
        correct: "c"

    },
    {
        question: "What is the value of the expression (1 - i)², where 'i' is the imaginary unit?",
        a: "2 - 2i",
        b: "8 + i",
        c: "8 - i",
        d: "-3",
        correct: "a"

    },
    {
        question: "If a fair six-sided die is rolled, what is the probability of rolling a prime number?",
        a: "8",
        b: "1/2",
        c: "1/6",
        d: "7",
        correct: "c"

    },
    {
        question: "A right circular cone has a radius of 4 cm and a height of 9 cm. What is the volume of the cone?",
        a: "12π cm³",
        b: "90π cm³",
        c: "108π cm³",
        d: "18π cm³",
        correct: "c"

    },
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
let choices = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'];

let currentQuiz = 0;
let score = 0;

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
    quiz.innerHTML = `
            <h1 style="text-align: center">You scored ${score}/${questionArr.length}</h1>
            <div class="center">
            <a href="/login">Back to Login</a>
            </div>
            `
    questionscontainer.remove();

})
