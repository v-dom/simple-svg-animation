import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import createSvgComp from 'scripts/svg-comp';

const patch = snabbdom.init([
  require('snabbdom/modules/props'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/eventlisteners')
]);

const svgComp = createSvgComp(h);

let oldVnode = document.querySelector('#root');

const render = () => {

  let newVnode;

  newVnode = svgComp({
    endEventHandler: (val) => {
      console.log(val);
    }
  });

  oldVnode = patch(oldVnode, newVnode);
};

window.addEventListener('DOMContentLoaded', () => {
  render();
});
