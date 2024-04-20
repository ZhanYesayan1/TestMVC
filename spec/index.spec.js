const PersonController = require('../js/controller');
const PersonView = require('../js/view');

test('Print person name', () => {
    const name = 'John Doe';

    const element = document.createElement('div');
    element.id = 'output';

    const personController = new PersonController(element);
    personController.setPersonName(name);

    expect(element.innerText).toBe(`Person: ${name}`);
});