Modals.init();

let modalBody = document.createElement('div');
modalBody.innerHTML = 'Hello world';

let modal = Modals.create({
    name: 'Sample modal',
    width: 500,
    height: 300,
    header: 'This is the header',
    body: modalBody
});

let openModalButton = document.body.querySelector('#openModal');

openModalButton.addEventListener('click', function() {
    modal.open();
});