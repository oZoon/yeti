import React from 'react';

function CreateTaskButton(props) {
    const { onCreateTask } = props;
    return (
        <button
            className="create-item"
            onClick={() => onCreateTask()}
        >
            <img src="./build/create.png" height="26px" /> Создать заявку
        </button>
    )
}

export default CreateTaskButton;
