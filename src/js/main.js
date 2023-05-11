
import { quizData } from './data.js';
import { dataImage } from './data.js';
let quizDataDyn = await import('./data.js');

const $questionItem = document.querySelector('#quiz'),
    $forward = document.createElement('button'),
    $back = document.createElement('button'),
    $stepsDesc = document.createElement('p');

let currentQuiz = 0,
    answer,
    answerCurrent,
    checkCurrent,
    check;


function createButtons() {

    $forward.classList.add('quiz-box__button', 'next');
    $forward.setAttribute('id', 'forward');
    $forward.setAttribute('disabled', '');

    $back.classList.add('quiz-box__button', 'prev');
    $back.setAttribute('id', 'back');

    $forward.textContent = 'Далее';
    $back.textContent = 'Назад';

    $questionItem.append($forward);
    $questionItem.append($back);

    return $forward,
        $back;
}

function createSteps(currentQuiz) {
    const $descSteps = document.querySelector('.quiz-box__desc-steps');

    $descSteps.textContent = `${quizData.length}`;

    $stepsDesc.textContent = `Шаг ${currentQuiz + 1}/${quizData.length}`;
    $stepsDesc.classList.add('quiz-box__steps');

    return $stepsDesc;
}


loadQuiz();

function createAnswerList(quizData) {
    const $titleQuestion = document.createElement('h2'),
        $answerList = document.createElement('ul'),
        $stepsDesc = createSteps(currentQuiz);

    $answerList.classList.add('quiz-box__list');

    $titleQuestion.setAttribute('id', 'question');
    $titleQuestion.classList.add('quiz-box__question');
    $titleQuestion.textContent = quizData.question;

    if (currentQuiz === (quizDataDyn.quizData.length - 1)) {
        const $lastImageLink = document.createElement('a'),
            $lastImage = document.createElement('img');

        $lastImageLink.setAttribute('href', 'https://dzen.ru/voinv');
        $lastImageLink.setAttribute('target', '_blank');
        $lastImageLink.setAttribute('title', 'Перейти на канал Дзена');

        $lastImageLink.classList.add('quiz-box__question-author');
        $lastImage.setAttribute('src', './images/author.png');
        $lastImageLink.append($lastImage);
        $titleQuestion.append($lastImageLink);
    }

    let numberId = 0;
    for (const item of quizData.answers) {
        $answerList.append(createAnswerDOM(Object.keys(item), numberId, Object.values(item)));
        numberId++;
    }

    $questionItem.append($titleQuestion);
    $questionItem.append($stepsDesc);
    $questionItem.append($answerList);

    createButtons();
    return $questionItem;
}


function createAnswerDOM(answer, numberId, check) {
    const $answerItem = document.createElement('li'),
        $answerInput = document.createElement('input'),
        $answerLabel = document.createElement('label');

    $answerItem.classList.add('quiz-box__item');

    $answerInput.classList.add('quiz-box__input');
    console.log(currentQuiz);

    if (currentQuiz === 3) {
        $answerInput.setAttribute('type', 'checkbox');
    } else {
        $answerInput.setAttribute('type', 'radio');
    }

    $answerInput.setAttribute('name', 'answer');
    $answerInput.setAttribute('id', `${numberId}`);

    $answerLabel.classList.add('quiz-box__label');
    $answerLabel.setAttribute('for', `${numberId}`);
    $answerLabel.setAttribute('id', `answer_${numberId}`);
    $answerLabel.textContent = answer;

    check = String(check);

    if (check != 'true') {
        $answerItem.append($answerInput);
    } else {
        $answerInput.setAttribute('checked', '');
        $answerItem.append($answerInput);
    }

    $answerItem.append($answerLabel);

    return $answerItem;
}

function removeBack() {
    if (currentQuiz === 0) {
        document.getElementById('back').style.display = 'none';
    }
}

removeBack();

function loadQuiz() {
    // deselectAnswers();
    $questionItem.innerHTML = '';
    createAnswerList(quizData[currentQuiz]);
    getSelected();
}

// function deselectAnswers() {
//     // answerElements.forEach(answerEl => answerEl.checked = false)
// }

const $buttonNext = document.querySelector('.next');
// $buttonNext.setAttribute('disabled', '');



function getSelected() {
    const $answerElements = document.querySelectorAll('.quiz-box__input');

    $answerElements.forEach(answerEl => {

        answerEl.addEventListener('click', (el) => {

            $buttonNext.removeAttribute('disabled');

            answerCurrent = el.currentTarget.id;

            if (answer === undefined) {
                answer = answerCurrent;
            }

            checkCurrent = quizData[currentQuiz].answers[answerCurrent];
            checkCurrent[Object.keys(checkCurrent)] = true;

            console.log(answer);
            console.log(answerCurrent);

            if (answerCurrent != answer) {
                check = quizData[currentQuiz].answers[answer];
                if (currentQuiz === 3) {
                    check[Object.keys(check)] = true;
                } else {
                    check[Object.keys(check)] = false;
                }
            } else {
                check = quizData[currentQuiz].answers[answer];
                if (currentQuiz === 3) {
                    check[Object.keys(check)] = false;
                }
            }
            answer = answerCurrent;
            console.log(quizData[currentQuiz].answers)
        })
    })
    return answer;
}

function rezultQuizImage(dataImage) {
    const $resultItem = document.createElement('li'),
        $resultLink = document.createElement('a'),
        $resultFigure = document.createElement('figure'),
        $resultImage = document.createElement('img'),
        $resultCapture = document.createElement('figcature'),
        $resultQuiz = document.querySelector('.quiz-box__list');



    $resultItem.classList.add('quiz-box__item');
    $resultLink.classList.add('quiz-box__link');
    $resultLink.setAttribute('href', `${dataImage.link}`);
    $resultLink.setAttribute('title', `${dataImage.name}`);
    $resultLink.setAttribute('target', '_blank');

    $resultFigure.classList.add('quiz-box__figure');
    $resultCapture.classList.add('quiz-box__figcapture');
    $resultCapture.textContent = `${dataImage.name}`;
    $resultImage.classList.add('quiz-box__image');
    $resultImage.setAttribute('src', `${dataImage.image}`);

    $resultFigure.append($resultImage);
    $resultFigure.append($resultCapture);
    $resultLink.append($resultFigure);
    $resultItem.append($resultLink);
    $resultQuiz.append($resultItem);

    return $resultQuiz;
}

function resultQuiz(quizData) {
    const results = quizData[3].answers;
    let id = 0;
    results.forEach(result => {
        result = result[Object.keys(result)];
        if (result) {
            switch (id) {
                case 0:
                    rezultQuizImage(dataImage[0]);
                    break;
                case 1:
                    rezultQuizImage(dataImage[1]);
                    break;
                case 2:
                    rezultQuizImage(dataImage[2]);
                    break;
                case (3 || 4 || 5):
                    rezultQuizImage(dataImage[3]);
                    break;
            }
        }
        id++;
    })
}


$forward.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        currentQuiz++;
        document.getElementById('back').removeAttribute('style');
        if (currentQuiz < quizData.length) {
            loadQuiz();

            const checkDisableds = quizData[currentQuiz].answers;
            console.log(checkDisableds)

            for (const checkDisabled of checkDisableds) {
                console.log(checkDisabled);
                if (checkDisabled[Object.keys(checkDisabled)]) {
                    $buttonNext.removeAttribute('disabled');
                }
            }
        }
        else {
            // const $resultQuizBox = document.querySelector('.quiz-box__quiz');
            // $resultQuizBox.classList.add('quiz-box__result');

            $questionItem.innerHTML = `<h2 class="quiz-box__question">Рекомендуем Вам записаться на следующие курсы:</h2>
            <button class="quiz-box__button button-result" onclick="location.reload()">По-новой</button>
            <ul class="quiz-box__list"></ul>`;
            resultQuiz(quizData);
        }
    }
})

$back.addEventListener('click', () => {
    currentQuiz--;
    removeBack();
    loadQuiz();
    $buttonNext.removeAttribute('disabled');
});



