const PersonModel = require('./model');
const PersonView = require('./view');

class PersonController {
    constructor(element) {
        this.model = new PersonModel();
        this.view = new PersonView(element);
    }

    setPersonName(name) {
        this.model.setName(name);
        this.updateView();
    }

    updateView() {
        const personName = this.model.getName();
        this.view.printPersonDetails(personName);
    }
}

module.exports = PersonController;