import createSvgComp from 'scripts/svg-comp';
import createMsg from 'scripts/msg-comp';

export default h =>
  ({
    endEventHandler,
    msg
  }) => (
    h('div.cont', [
      createSvgComp(h)({
        endEventHandler
      }),
      createMsg(h)({
        msg
      })
    ])
  );
