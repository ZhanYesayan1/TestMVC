class PersonModel {
    constructor() {
        this.name = '';
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

module.exports = PersonModel;