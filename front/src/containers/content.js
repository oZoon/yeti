import React, { useState } from "react";
import CreateTaskButton from '../components/createTaskButton';
import TaskListTable from '../components/taskListTable';
import Modal from '../components/modal';
import {
    MODAL_CREATE_TASK,
    MODAL_DETAIL_TASK,
    MODAL_EDIT_TASK
} from '../lib/constants';

const Content = (props) => {
    const {
        taskList,
        onDeleteTask,
        onSaveData,
    } = props;

    const [modalType, setModalType] = useState(null);
    const [modalStyle, setModalStyle] = useState({ "display": "none" });
    const [modalData, setModalData] = useState(null);
    const [modalDataIndex, setModalDataIndex] = useState(null);

    // createTask
    const onCreateTask = () => {
        setModalType(MODAL_CREATE_TASK);
        setModalStyle({ "display": "flex" });
    }
    const propsCreateTaskButton = {
        onCreateTask,
    }

    // detailTask
    const onDetailTask = (item) => {
        setModalType(MODAL_DETAIL_TASK);
        setModalStyle({ "display": "flex" });
        setModalData(item);
    }

    // editTask
    const onEditTask = (item, index) => {
        setModalType(MODAL_EDIT_TASK);
        setModalStyle({ "display": "flex" });
        setModalData(item);
        setModalDataIndex(index);
    }

    const propsModal = {
        modalType,
        style: modalStyle,
        setHide: setModalStyle,
        data: modalData,
        onSaveData,
        taskList,
        index: modalDataIndex,
    }

    const propsTaskListTable = {
        taskList,
        onDeleteTask,
        onDetailTask,
        onEditTask,
    }

    return (
        <>
            <TaskListTable {...propsTaskListTable} />
            <CreateTaskButton {...propsCreateTaskButton} />
            <Modal {...propsModal} />
        </>
    );

};

export default Content;
