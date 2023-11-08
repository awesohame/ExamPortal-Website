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