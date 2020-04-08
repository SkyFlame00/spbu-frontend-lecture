let Tooltips = {};

Tooltips.active = null;

Tooltips.initialize = function() {
    let container = document.createElement('div');
    container.classList.add('tooltips');
    Tooltips.container = container;
    document.body.appendChild(container);

    document.addEventListener('click', function(event) {
        let tooltip = event.target.closest('.tooltip');
        let tooltipTarget = event.target.closest('.tooltip-target');

        if (Boolean(tooltip) || !Boolean(Tooltips.active) || Boolean(tooltipTarget)) {
            return;
        }

        Tooltips.active.hide();
    });
};

Tooltips.create = function(options) {
    let DOMElement = document.createElement('div');
    DOMElement.classList.add('tooltip');
    DOMElement.innerHTML = options.content;
    let target = options.target;

    Tooltips.container.appendChild(DOMElement);

    let tooltip = {};

    function show() {
        let top = target.offsetTop + target.offsetHeight + 10;
        let left = target.offsetLeft;
        DOMElement.style.top = top + 'px';
        DOMElement.style.left = left + 'px';
        DOMElement.classList.add('tooltip_shown');
        Tooltips.active = tooltip;
    }

    function hide() {
        DOMElement.classList.remove('tooltip_shown');
        Tooltips.active = null;
    }

    target.addEventListener('click', function(event) {
        if (Tooltips.active == null) {
            show();
            return;
        }

        if (tooltip == Tooltips.active) {
            hide();
        } else {
            Tooltips.active.hide();
            show();
        }
    });

    tooltip.show = show;
    tooltip.hide = hide;
};
