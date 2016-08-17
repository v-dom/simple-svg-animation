import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import createSvgComp from 'scripts/svg-comp';

const patch = snabbdom.init([
    require('snabbdom/modules/props'),
    require('snabbdom/modules/attributes')
]);

const svgComp = createSvgComp(h);

let oldVnode = document.querySelector('#root');

const render = () => {

    let newVnode;

    newVnode = svgComp();

    oldVnode = patch(oldVnode, newVnode);
};

window.addEventListener('DOMContentLoaded', () => {
    render();
});
