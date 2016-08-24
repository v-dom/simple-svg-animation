import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import createContFromLeftToRight from 'scripts/cont-from-left-to-right';

const patch = snabbdom.init([
  require('snabbdom/modules/props'),
  require('snabbdom/modules/attributes'),
  require('snabbdom/modules/eventlisteners')
]);

const contFromLeftToRight = createContFromLeftToRight(h);

let oldVnode = document.querySelector('#root');

const render = () => {

  let newVnode;

  newVnode = contFromLeftToRight({
    endEventHandler: value => {
      newVnode = contFromLeftToRight({
        endEventHandler: '',
        msg: value
      });
      oldVnode = patch(oldVnode, newVnode);
    },
    msg: 'init'
  });

  oldVnode = patch(oldVnode, newVnode);
};

window.addEventListener('DOMContentLoaded', () => {
  render();
});
