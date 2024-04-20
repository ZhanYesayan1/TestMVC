class PersonView {
    constructor(element) {
        this.outputElement = element;
    }

    printPersonDetails(personName) {
        this.outputElement.innerText = `Person: ${personName}`;
    }
}

module.exports = PersonView;