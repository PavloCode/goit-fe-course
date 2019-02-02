export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('inputValue', this.getUrl.bind(this));
        view.on('target', this.deleteTarget.bind(this));
    }
    getUrl(value) {
        let result = this.model.checkValid(value);
        this.view.renderPage(result);
    }
    deleteTarget(targ) {
        let val = this.model.filterArray(targ);
        this.view.renderPage(val);
    }
}