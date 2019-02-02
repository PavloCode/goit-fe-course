import v4 from 'uuid/v4';


export default class Model {
    constructor() {
        this.arrayItems = [];
    }
    checkValid(inputUrl) {
        if (localStorage.getItem('items')) {
            this.arrayItems = JSON.parse(localStorage.getItem('items'));
        }
        const result = this.validateUrl(inputUrl);
        if (result) {
            const hasDublicate = this.arrayItems.some(function(item) {
                return item.url === inputUrl;
            });
            if (hasDublicate !== true) {
                if (inputUrl !== '') {
                    this.arrayItems.unshift({
                        url: inputUrl
                    });
                    localStorage.setItem('items', JSON.stringify(this.arrayItems));
                    return this.arrayItems;
                }
            } else {
                alert('This value has been registered and can not be written againe!');
            }
        } else {
            alert('Invalid url error');
        }
        return this.arrayItems;
    }
    validateUrl(url) {
        return /^[a-z]+:\/\//i.test(url);
    }
    filterArray(target) {
        if (localStorage.getItem('items')) {
            this.arrayItems = JSON.parse(localStorage.getItem('items'));
            this.arrayItems = this.arrayItems.filter(function(item) {
                return item.url !== target.previousElementSibling.innerHTML;
            });
            localStorage.setItem('items', JSON.stringify(this.arrayItems));
            return this.arrayItems;
        }
    }
}