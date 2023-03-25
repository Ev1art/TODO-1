(function () {
    // Создаём скелет документа 
    function createApp(title) {
        // Создаём контейнер где будет хранится весь контент
        let appItem = document.createElement('div'); 
        appItem.classList.add('appItem');
        // Создаём заголовок списка и добовляем в контейнер
        let appTitle = document.createElement('h2');
        appTitle.textContent = title;
        appTitle.classList.add('appTitle');
        appItem.append(appTitle);
        // Создаём форму для создания самого списка
        let appCreateForm = document.createElement('form');
        appCreateForm.classList.add('create-form');
        appItem.append(appCreateForm);

        let createFormInput = document.createElement('input');
        createFormInput.placeholder = 'Что вы хотите добавить?';
        createFormInput.classList.add('create-form__input');
        appCreateForm.append(createFormInput);

        let createFormBtn = document.createElement('button');
        createFormBtn.textContent = 'Добавить';
        createFormBtn.classList.add('create-form__btn');
        appCreateForm.append(createFormBtn);
        // Создаём пустой список
        let appList = document.createElement('ul');
        appList.classList.add('appList')
        appItem.append(appList);
        // Возвращаем наш контейнер
        return {
            appItem,
            appCreateForm,
            createFormInput,
            appList
        };
    }
    // Создаём элемент списка
    function createListItem(createFormInput) {
        // Создаём сам элемент
        let listItem = document.createElement('li');
        listItem.classList.add('list-item');
        // Создаём блок с текстом 
        let listItemText = document.createElement('p');
        listItemText.textContent = createFormInput.value
        listItemText.classList.add('list-item__text')
        listItem.append(listItemText);
        // Создаём кнопку завершения дела
        let acceptBtn = document.createElement('button');
        acceptBtn.classList.add('list-item__accept-btn');
        acceptBtn.textContent = 'Завершить дело';
        listItem.append(acceptBtn);
        // Создаём кнопку удаления элемента
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('list-item__delete-btn');
        deleteBtn.textContent = 'Удалить дело';
        listItem.append(deleteBtn);

        return {
            listItem,
            acceptBtn,
            deleteBtn
        };
    }
    // При загрузке страницы мы создаём приложение
    document.addEventListener('DOMContentLoaded', () => {
        let app = document.getElementById('todo-app');
        let appItem = createApp('Мои дела');
        // При нажатии на кнопку создаём элемент списка 
        appItem.appCreateForm.addEventListener('submit', (e) => {
            // Убираем перезагрузку страницы при нажатии
            e.preventDefault();
            // Создаём список и добовляем оброботчики событий кнопкам
            let listItem = createListItem(appItem.createFormInput);
            listItem.acceptBtn.addEventListener('click', () => {
                listItem.listItem.classList.toggle('accepted')
            })
            listItem.deleteBtn.addEventListener('click', () => {
                listItem.listItem.remove();
            })
            // Чистим инпут
            appItem.createFormInput.value = '';

            appItem.appList.append(listItem.listItem);
        })

        app.append(appItem.appItem);
    })
})()