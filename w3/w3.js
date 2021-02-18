var input = document.querySelector(".block_form_input");
var btn = document.querySelector(".block_form_btn");
var blocklist = document.querySelector(".block_list");
var chbox;

function createElements(text) {
    function fun1() {
        chbox=document.getElementById('one');
        if (chbox.checked) {
            alert('Выбран');
        }
        else {
            alert ('Не выбран');
        }
    }
    function func()
    {
        var chb = document.getElementsByClassName('chb');

        if(chb[0].checked)
        {
            document.getElementById('pgh').style.color = '#F00';
        }
        if(!chb[0].checked)
        {
            document.getElementById('pgh').style.color = '#000';
        }

        if(chb[1].checked)
        {
            document.getElementById('pgh').style.fontSize = '30px';
        }
        if(!chb[1].checked)
        {
            document.getElementById('pgh').style.fontSize = '1em';
        }

        if(chb[2].checked)
        {
            document.getElementById('pgh').style.fontWeight = 'bold';
        }
        if(!chb[2].checked)
        {
            document.getElementById('pgh').style.fontWeight = 'normal';
        }

    }
    var newElem = document.createElement("p");
    var deleteElem = document.createElement("del");

    deleteElem.className = "block_list_delete";
    deleteElem.textContent = "delete";

    newElem.className = "block_list_elem";
    newElem.textContent = text;
    newElem.appendChild(deleteElem);

    deleteElem.addEventListener("click", function (){
        blocklist.removeChild(newElem);    <!-- Удаление элемента. Удаление ребенка -->
    });

    blocklist.appendChild(newElem);   <!-- Все новые элементы вставляем в блоклист -->

}


btn.addEventListener("click", function (e){
    e.preventDefault();  <!-- Кнопка по умолчанию отправляет все в нашу форму  -->
    if(!(input.value === "New Task " || input.value === "")){ <!-- Если там не пусто в строке, то должны добавить наш текст -->
        createElements(input.value);
        input.value = "New Task ";   <!-- После того как отправили текст в ту ду лист, нужно вернуть снова значение ENTER -->
    }
});
input.addEventListener("focus", function (){  <!-- Когда нажимаю пропадает надпись ENTER: -->
    input.value = "";
});
input.addEventListener("blur", function (){
    if(input.value === "")
   input.value = "New Task ";
});