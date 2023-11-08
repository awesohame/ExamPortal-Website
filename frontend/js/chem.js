const questionArr = [
    {
        question: "Which of the following elements is a noble gas?",
        a: "Neon",
        b: "Nitrogen",
        c: "Sodium",
        d: "Chlorine",
        correct: "a"
    },
    {
        question: "What is the chemical formula for sulfuric acid?",
        a: "H2SO3",
        b: "H2SO4",
        c: "H2SO2",
        d: "H2S2O4",
        correct: "b"
    },
    {
        question: "Which of the following is a transition metal?",
        a: "Aluminum",
        b: "Copper",
        c: "Sodium",
        d: "Calcium",
        correct: "b"
    },
    {
        question: "What is the molecular formula of glucose?",
        a: "C6H12O6",
        b: "C2H4O2",
        c: "C3H6O3",
        d: "C5H10O5",
        correct: "a"
    },
    {
        question: "What is the main component of natural gas?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Methane",
        d: "Carbon dioxide",
        correct: "c"
    },
    {
        question: "Which of the following is a halogen?",
        a: "Sodium",
        b: "Chlorine",
        c: "Calcium",
        d: "Potassium",
        correct: "b"
    },
    {
        question: "What is the atomic number of oxygen?",
        a: "6",
        b: "8",
        c: "14",
        d: "16",
        correct: "b"
    },
    {
        question: "Which gas is responsible for the greenhouse effect on Earth?",
        a: "Oxygen",
        b: "Carbon dioxide",
        c: "Nitrogen",
        d: "Hydrogen",
        correct: "b"
    },
    {
        question: "In a redox reaction, the substance that gains electrons is said to be:",
        a: "Oxidized",
        b: "Reduced",
        c: "Neutral",
        d: "Unchanged",
        correct: "b"
    },
    {
        question: "What is the chemical formula of sodium chloride?",
        a: "NaCl",
        b: "Na2Cl",
        c: "NaCl2",
        d: "Na2Cl2",
        correct: "a"
    }
];

const root = document.getElementById('root');
const container = document.getElementById('container');

let q = "";
questionArr.forEach(element => {
    let division = `
    <div class="questions">
        <p class="title">${element.question}</p>
        <ul>
            <li>a. ${element.a}</li>
            <li>b. ${element.b}</li>
            <li>c. ${element.c}</li>
            <li>d. ${element.d}</li>
        </ul>
        <p class="ans">Correct Answer : ${element.correct}</p>
    </div>
    `
    q = q + division;

});

container.innerHTML = q;