import React from 'react';
import { timestampToDate } from '../lib/utils';

function taskListTable(props) {
    const {
        taskList,
        onDeleteTask,
        onDetailTask,
        onEditTask,
    } = props;

    return (
        <table className="table">
            <tbody className="table-tbody">
                <tr className="table-tr-header">
                    <td className="task-item-1">Номер заявки</td>
                    <td className="task-item-2">Дата заявки</td>
                    <td className="task-item-3">Клиент</td>
                    <td className="task-item-4">Перевозчик</td>
                    <td className="task-item-5">Контакты перевозчика</td>
                    <td className="task-item-6">Комментарии</td>
                    <td className="task-item-7">ATI</td>
                    <td className="task-item-8">Действия</td>
                </tr>
                {taskList.list.map((item, index) => {
                    const time = timestampToDate(item.taskDate);
                    return (
                        <tr className="table-tr-content" key={item.taskNumber}>
                            <td className="task-item-1">{item.taskNumber}</td>
                            <td className="task-item-2">{time}</td>
                            <td className="task-item-3">{item.customerName}</td>
                            <td className="task-item-4">{item.supplyerName}</td>
                            <td className="task-item-5">{item.supplyerPhone}</td>
                            <td className="task-item-6">{item.comments}</td>
                            <td className="task-item-7">
                                <a target="_blank" href="https://ati.su/firms/{item.atiCode}/info">{item.atiCode}</a></td>
                            <td>
                                <div className="task-item-img">
                                    <img
                                        src="./build/information.png"
                                        className="task-item-info"
                                        onClick={() => onDetailTask(item)}
                                    />
                                    <img
                                        src="./build/edit.png"
                                        className="task-item-edit"
                                        onClick={() => onEditTask(item, index)}
                                    />
                                    <img
                                        src="./build/delete.png"
                                        className="task-item-delete"
                                        onClick={() => onDeleteTask(index)}
                                    />
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default taskListTable;
