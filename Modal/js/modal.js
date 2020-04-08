let Modals = {};

Modals.modalsDictionary = {};

Modals.init = function() {
    let container = document.createElement('div');
    container.classList.add('modals');
    document.body.appendChild(container);
    Modals.container = container;
};

Modals.showContainer = function() {
    Modals.container.classList.add('modals_shown');
};

Modals.hideContainer = function() {
    Modals.container.classList.remove('modals_shown');
};

Modals.create = function(options) {
    let DOMElement = document.createElement('div');
    DOMElement.classList.add('modal');
    DOMElement.style.width = options.width + 'px';
    DOMElement.style.height = options.height + 'px';
    DOMElement.innerHTML = `
        <div class="top">
            <div class="header">${options.header}</div>
            <div class="body"></div>
        </div>

        <div class="bottom">
            <div class="actions">
                <button class="submit">OK</button>
                <button class="cancel">Cancel</button>
            </div>
        </div>
    `;

    let body = DOMElement.querySelector('.body');
    let submitButton = DOMElement.querySelector('.submit');
    let cancelButton = DOMElement.querySelector('.cancel');

    body.appendChild(options.body);

    cancelButton.addEventListener('click', function() {
        if (Boolean(options.onCancel)) {
            options.onCancel();
        }

        DOMElement.classList.remove('modal_shown');
        Modals.hideContainer();
    });

    submitButton.addEventListener('click', function() {
        if (Boolean(options.onSubmit)) {
            options.onSubmit();
        }

        DOMElement.classList.remove('modal_shown');
        Modals.hideContainer();
    });

    Modals.container.appendChild(DOMElement);

    Modals.modalsDictionary[options.name] = DOMElement;

    return {
        open: function() {
            Modals.showContainer();
            DOMElement.classList.add('modal_shown');
        }
    };
};
