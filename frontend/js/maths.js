const questionArr = [
    {
        question: "1. What is the sum of all prime numbers between 20 and 30?",
        a: "73",
        b: "80",
        c: "79",
        d: "67",
        correct: "c"
    },

    {
        question: "2. If a quadratic equation 2x² - 5x + k = 0 has equal roots, what is the value of 'k'?",
        a: "5/2",
        b: "25/4",
        c: "11",
        d: "18",
        correct: "b"
    },

    {
        question: "3. If f(x) = x³ - 4x² + 3x + 2, what is f'(x) (the derivative of f(x))?",
        a: "3x² - 8x + 3",
        b: "2x² - 8x + 3",
        c: "3x² - 5x + 3",
        d: "8x² - 8x + 9",
        correct: "a"
    },

    {
        question: "4. If the equation of a circle is (x - 2)² + (y + 3)² = 25, what is the radius of the circle?",
        a: "5",
        b: "4",
        c: "9",
        d: "16",
        correct: "a"
    },

    {
        question: "5. Solve the trigonometric equation: 2sin(x) - √3 = 0 for 0° ≤ x < 360°. What are the solutions?",
        a: "60°, 300°",
        b: "45°, 225°",
        c: "30°, 100°",
        d: "30°, 60°",
        correct: "a"

    },
    {
        question: "6. A triangle has sides of length 6 cm, 8 cm, and 10 cm. Is it a right-angled triangle?",
        a: "Yes",
        b: "No",
        c: "Cannot determine",
        d: "Maybe",
        correct: "a"

    },
    {
        question: "7. If log base 3 of x = 2, what is the value of x?",
        a: "3",
        b: "6",
        c: "9",
        d: "1",
        correct: "c"

    },
    {
        question: "8. What is the value of the expression (1 - i)², where 'i' is the imaginary unit?",
        a: "2 - 2i",
        b: "8 + i",
        c: "8 - i",
        d: "-3",
        correct: "a"

    },
    {
        question: "9. If a fair six-sided die is rolled, what is the probability of rolling a prime number?",
        a: "8",
        b: "1/2",
        c: "1/6",
        d: "7",
        correct: "c"

    },
    {
        question: "10. A right circular cone has a radius of 4 cm and a height of 9 cm. What is the volume of the cone?",
        a: "12π cm³",
        b: "90π cm³",
        c: "108π cm³",
        d: "18π cm³",
        correct: "c"

    },
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