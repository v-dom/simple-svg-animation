import test from 'tape';
import h from 'snabbdom/h';
import createMsg from 'scripts/msg-comp';

const before = test;
const after = test;

const MsgComp = createMsg(h);

before('desc: message component', t => {
  t.end();
});

test('should render correctly', t => {
  const actual = MsgComp({}).sel,
    expect = 'div.msg';
  t.equal(actual, expect);
  t.end();
});

test('text should be "test"', t => {
  const actual = MsgComp({msg: 'test'}).text,
    expect = 'test';
  t.equal(actual, expect);
  t.end();
});

after('end test -------------------------------', t => {
  t.end();
});
