// Функция проверки задания
function checkTask(checkboxes) {
	let resultelement = document.getElementById("result");
  let counter = 0;
  let result = 0;                                       // Количество правильно отвеченных вопросов
  let allQuestions = questions.length;                   // Общее количество вопросов
  let wronAnswerMessage = `Вы неправильно ответили на вопросы:
`;    //Часть шаблона сообщения СС7
  for (let n = 0; n < allQuestions; ++n) {                              //Проходим циклом по всем вопросам
    let question = questions[n];
    let idx = 1 + n;
    let correctAnswer = question.correctAnswer.split(",");    //Создаем массив правильных ответов на вопрос
    let text = question.text;                                //Берем текст вопроса в переменную
    let allcorrectAnswer = correctAnswer.length;            //Общее количество правильных ответов в вопросе
    let flag = false;
    for (let i = 0; i < answerNumbers.length; i++) {
      if (checkboxes[counter].checked) {             // Если чекбокс включен
        let answer = checkboxes[counter].value;  // Берем его номер из атрибута value
        if (correctAnswer.includes(answer)) {         //Если он входит в массив правильных ответов
          flag = true;
          allcorrectAnswer--;
        }else{
		  allcorrectAnswer++;
		}
      }
      counter++;
      flag = false;
    }
    if (allcorrectAnswer == 0) {                    //Если все ответы в вопросе выбраны правильно
      result++;                                // Защитываем правильный ответ
    } else {
      wronAnswerMessage = wronAnswerMessage + idx + `.` + text + `
`;  //Записываем неправильный вопрос в шаблон  неполного результата
    }
    flag = false;                        //Не защитываем ответ
  }
  let rezultMessage = `Ваш результат ${result} из ${allQuestions}
  `;    //Записываем результат  задания в переменную
  if (result != allQuestions) rezultMessage = wronAnswerMessage + `\n` + rezultMessage;    
 
  resultelement.appendChild(document.createTextNode(rezultMessage));
  //resultelement.innerHTML =rezultMessage;
}
