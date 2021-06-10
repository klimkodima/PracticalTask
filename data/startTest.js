 // Функция для создания элемента <form>
function createForm() {
  var form = document.createElement("form");
  return form;
}
// Функция для создания элемента <input> тип "checkbox"
function createCheckbox(text) {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.textContent = text;
  return checkbox;
}
// Функция для создания нумерованного списка <ol> 
function createOl() {
  var ol = document.createElement("ol");
  return ol;
}
// Функция для создания элемента списка <li>
function createLi(text) {
  var li = document.createElement("li");
  li.textContent = text;
  return li;
}
// Функция для создания тега <label>
function createLabel(text) {
  var label = document.createElement("label");
  label.textContent = text;
  return label;
}
// Функция для создания тега перевода строки <br>
function createBreak() {
  var br = document.createElement("br");
  return br;
}
/*  Функция для создания окна прохождения теста на главном экране.
	Значения атрибута "name" элементов выбраны для дальнейшего развития задания с помощью ООП,
	создания объектов тест, вопросы, вопрос, ответы, правильные ответы. 
*/
function startTest() {
  let createTaskButton = document.getElementById("createTask");  // Инициируем созданную переменную ссылкой на элемент по его идентификатору
  let checkTaskButton = document.getElementById("checkTask");
  createTaskButton.setAttribute("disabled", "disabled");   //Устанавливаем  атрибут disabled кнопки , делая её отключённой
  checkTaskButton.setAttribute("disabled", "disabled");
  let taskForm = createForm();                             // Создаем переменную при помощи функции
  taskForm.setAttribute("onsubmit", "checkForm();return false");       //Устанавливаем  атрибут для вызова функции проверки формы при отправке формы.После выполнения функции задание остается на экране
  taskForm.setAttribute("name", "Task");
  taskForm.setAttribute("class", "bg-light text-dark");
  let ol = createOl();
  ol.setAttribute("name", "questions");
  taskForm.append(ol);
  let Questions = document.getElementById("Questions");
  Questions.append(taskForm);                             //Добавляем элемент в контейнер
  for (let q = 0; q < questions.length; ++q) {            // Проходим циклом for по вопросам
    let question = questions[q];
    let text = question.text;
    let questionLi = createLi(text);
	questionLi.setAttribute("name", "question");
    questionLi.style.fontWeight = "bold";
    ol.append(questionLi);
    for (let i in question.answers) {                    	// Проходим циклом for по вариантам ответов 
	  let idx = 1 + i/1;
      let answerCheckbox = createCheckbox();
	  answerCheckbox.setAttribute("name", "answer");
      answerCheckbox.setAttribute("value",idx);
      answerCheckbox.setAttribute("class", "checkbox");
      let answersLabel = createLabel();
      answersLabel.style.fontWeight = "normal";
      answersLabel.append(answerCheckbox);
      answersLabel.appendChild(document.createTextNode(question.answers[i]));
      questionLi.append(createBreak(), answersLabel);
    }
  }
  let submit = createCheckbox();    // Создаем кнопку для отправки формы функцией с изменением типа элемента <input сheckbox>  на <input submit>
  submit.type = "submit";
  submit.setAttribute("class", "btn  btn-outline-dark btn-lg");
  taskForm.append(submit);
  Questions.style.visibility = "visible";
  
}