import Model from '../js/model.js';

describe('Model class', () => {
    const model = new Model();
    const testUrl = 'http://test-website.com';
    const array = model.arrayItems;

    it('Should create Model istance', () => {
        expect(model instanceof Model).toBe(true);
    });
    it('Should pass validation url', () => {
        expect(model.validateUrl(testUrl)).toBe(true);
    });
    it('Should has dublicate', () => {
        array[0] = 'http://newTest-website.com';
        expect(model.checkDublicate(array, testUrl)).toBe(false);
    });
    it('Should has empty value', () => {
        expect(model.emptyValue(testUrl)).toBe(true);
    });

});