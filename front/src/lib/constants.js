let url_site = 'http://localhost:8080';
const hostname = window && window.location && window.location.hostname;
if(hostname != 'localhost'){
    url_site = `http://${hostname}`;
}
export const URL_SITE = url_site;

import packageJson from '../../package.json';
export const VERSION = packageJson.version;

export const MODAL_CREATE_TASK = 'MODAL_CREATE_TASK';
export const MODAL_DETAIL_TASK = 'MODAL_DETAIL_TASK';
export const MODAL_EDIT_TASK = 'MODAL_EDIT_TASK';

export const SAVE_DATA_START = 'SAVE_DATA_START';
export const SAVE_DATA_EXECUTE = 'SAVE_DATA_EXECUTE';
export const SAVE_DATA_FINISH = 'SAVE_DATA_FINISH';

export const TASK_DELETE_START = 'TASK_DELETE_START';
export const TASK_DELETE_EXECUTE = 'TASK_DELETE_EXECUTE';
export const TASK_DELETE_FINISH = 'TASK_DELETE_FINISH';
