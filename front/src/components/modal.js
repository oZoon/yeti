import React from 'react';
// import OutSide from '../lib/outSide';
import {
    MODAL_CREATE_TASK,
    MODAL_DETAIL_TASK,
    MODAL_EDIT_TASK
} from '../lib/constants';
import CreateTask from './modalCreateTask';
import EditTask from './modalEditTask';
import DetailTask from './modalDetailTask';

function Modal(props) {
    const {
        modalType,
        style,
        setHide,
        data,
        onSaveData,
        taskList,
        index,
    } = props;

    const handleClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setHide({ display: 'none' });
    };

    let content = null;
    switch (modalType) {
        case MODAL_CREATE_TASK:
            content = <CreateTask {...{ onSaveData, taskList }} />
            break;
        case MODAL_DETAIL_TASK:
            content = <DetailTask {...{ data }} />
            break;
        case MODAL_EDIT_TASK:
            content = <EditTask {...{ data, onSaveData, index, taskList }} />
            break;
    }
    return (
        // <OutSide onClick={(e) => handleClose(e)}>
            <div className="modal-wrap" style={style}>
                <img src="./build/close.png" className="modal-close" onClick={(e) => handleClose(e)} />
                {content}
            </div>
        // </OutSide>
    )
}

export default Modal;
