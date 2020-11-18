import React from 'react';

function ModalCreateTask(props) {
    const { onSaveData, taskList } = props;

    return (
        <div className="modal-create-task">
            <span className="modal-create-title"> Создание заявки</span>
            <input type="text" placeholder="Название компании клиента" />
            <input type="text" placeholder="Название компании перевозчика" />
            <input type="text" placeholder="Контакты перевозчика" />
            <input type="text" placeholder="Комментарии" />
            <input type="text" placeholder="Номер в сети ATI" />
            <button
                className="create-item-modal"
                onClick={() => {
                    let data = Array.from(document.getElementsByTagName(`input`), e => e.value);
                    onSaveData(data, taskList, 'new');
                }}
            >
                <img src="./build/create.png" className="create-item-modal-img" /> Создать заявку
            </button>
        </div>
    )
}

export default ModalCreateTask;
