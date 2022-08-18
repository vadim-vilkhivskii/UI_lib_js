import $ from '../core'
//* Вставка контента в элемент или получуние 
$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
};
//*Получение элемента по номеру
$.prototype.eq = function (i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;//* 
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
};
//*Получение номера элемента которые имеют общего родителя
$.prototype.index = function () {
    const parent = this[0].parentNode; //*Получаем родителя элдемента 
    const childs = [...parent.children]; //*Получаем всех потомков родителя в виде масива 

    const findMyIndex = (item) => {  //*Фильтрационная Функция поиска в масиве
        return item == this[0]
    }
    return childs.findIndex(findMyIndex);
};
//*Поиск эллемента по селектору внутри уже найденных 
$.prototype.find = function (selector) {
    let numberOfItems = 0; //*Количество жлементов которые подошла по селектору
    let counter = 0;//*Счетчик новых записаных элементов
    const copyObj = Object.assign({}, this);//* Создаем копию главного объекта 

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);//*Поиск элементов по селектору в скопированом объекте
        if (arr.length == 0) {//*Проверка если элеменов не найдено то пропускаем итерацию цикла
            continue;
        }
        for (let j = 0; j < arr.length; j++) {//*запись в главный объект найденных элементов
            this[counter] = arr[j]
            counter++

        }
        numberOfItems += arr.length;

    }
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }
        return this;
};
//*возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному селектору
$.prototype.closest = function(selector) {
    let counter = 0;//*Счетчик найденных элементов
    
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        
        counter++
    }
//*Очистка объекта от свойств которые не пренадлежат closest
    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++){
        delete this[counter];
    }
        return this;
}

//*Получение всех элементов не включая сам элемент, внутри родительского элемента определенного блока 
$.prototype.siblings = function () {
    let numberOfItems = 0; //*Количество жлементов которые подошла по селектору
    let counter = 0;//*Счетчик новых записаных элементов
    const copyObj = Object.assign({}, this);//* Создаем копию главного объекта 

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children//*Поиск элементов по селектору в скопированом объекте
        
        for (let j = 0; j < arr.length; j++) {//*запись в главный объект найденных элементов

            if(copyObj[i] === arr[j]){
                continue
            }

            this[counter] = arr[j]
            counter++

        }
        numberOfItems += arr.length - 1;

    }
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++){
        delete this[numberOfItems];
    }
        return this;
};

