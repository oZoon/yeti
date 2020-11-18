import React from 'react';

function ModalEditTask(props) {
    const { data, onSaveData, index, taskList } = props;
    return (
        <div className="modal-edit-task" key={index}>
            <span className="modal-edit-title">Изменение заявки</span>
            <ul className="modal-edit-items">
                <li className="modal-edit-item">Название компании клиента</li>
                <li>
                <input type="text" placeholder="Название компании клиента" defaultValue={data.customerName} />
                </li>
            </ul>
            <ul className="modal-edit-items">
                <li className="modal-edit-item">Название компании перевозчика</li>
                <li>
                <input type="text" placeholder="Название компании перевозчика" defaultValue={data.supplyerName} />
                </li>
            </ul>
            <ul className="modal-edit-items">
                <li className="modal-edit-item">Контакты перевозчика</li>
                <li>
                <input type="text" placeholder="Контакты перевозчика" defaultValue={data.supplyerPhone} />
                </li>
            </ul>
            <ul className="modal-edit-items">
                <li className="modal-edit-item">Комментарии</li>
                <li>
                <input type="text" placeholder="Комментарии" defaultValue={data.comments} />
                </li>
            </ul>
            <ul className="modal-edit-items">
                <li className="modal-edit-item">Номер в сети ATI</li>
                <li>
                <input type="text" placeholder="Номер в сети ATI" defaultValue={data.atiCode} />
                </li>
            </ul>
            <button
                className="edit-item-modal"
                onClick={() => {
                    let data = Array.from(document.getElementsByTagName(`input`), e => e.value);
                    onSaveData(data, taskList, index);
                }}
            >
                <img src="./build/create.png" className="create-item-modal-img" /> Сохранить заявку
                </button>
        </div>
    )
}

export default ModalEditTask;
