export const timestampToDate = (timestamp) => {
    const timeDate = new Date(timestamp);
    const day = leadingZero(timeDate.getDate());
    const month = leadingZero(timeDate.getMonth() + 1);
    const year = timeDate.getFullYear();
    const hours = leadingZero(timeDate.getHours());
    const minutes = leadingZero(timeDate.getMinutes());
    const seconds = leadingZero(timeDate.getSeconds());
    return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}
const leadingZero = (n) => {
    return n < 10 ? '0' + n : n;
}

export const getNewNumber = taskList => {
    let result = 0;
    for(let i = 0; i < taskList.list.length; i++){
        if(taskList.list[i].taskNumber > result){
            result = taskList.list[i].taskNumber;
        }
    }
    return (result + 1);
}

export const getTaskData = (taskList, index, arrKeys) => {
    const obj = taskList.list[index];
    let result = [];
    for (let key in obj){
        for(let i = 0; i < arrKeys.length; i++){
            if(key == arrKeys[i]){
                result.push(obj[key]);
            }
        }
    }
    return result;
}
