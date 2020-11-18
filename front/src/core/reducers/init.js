import Records from "../../lib/records";
import { VERSION } from '../../lib/constants';

let init = {};

init['taskList'] = {
    state: false,
    list: [
        {
            taskNumber: 2368,
            taskDate: 1605678382064,
            customerName: 'ООО "РогаДлинноеНазваниеКомпании"',
            supplyerName: 'ИП Иванов И.И.',
            supplyerPhone: '+7 900 111 22 33',
            comments: 'звонить после 19.00 МСК',
            atiCode: 12345,
        },
        {
            taskNumber: 2378,
            taskDate: 1605668382064,
            customerName: 'ООО "Рога им. А. С. Пушкина"',
            supplyerName: 'ИП Иванов И.И.',
            supplyerPhone: '+7 900 111 22 33',
            comments: 'звонить после 19.00 МСК в будние дни',
            atiCode: 12346,
        },
        {
            taskNumber: 2381,
            taskDate: 1605658382064,
            customerName: 'ООО "Рога"',
            supplyerName: 'ИП Иванов И.И.',
            supplyerPhone: '+7 900 111 22 33',
            comments: 'звонить после 19.00 МСК, в любой день кроме праздничных дней',
            atiCode: 12347,
        },
    ],
};

let records = new Records();
let initLocalStorage = records.getRecord(`yeti${VERSION}`);
if (initLocalStorage !== null) {
    init = initLocalStorage;
}
records.setRecord(`yeti${VERSION}`, init);

export default init;
