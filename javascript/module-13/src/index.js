import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
import EventEmitter from './services/event-emitter';
import './css/styles.css';

const view = new View();
const model = new Model();

new Controller(model, view);
// res.removeNote();



// let res = model.test('Mango');
// let resView = view.test(res);
// console.log(resView);