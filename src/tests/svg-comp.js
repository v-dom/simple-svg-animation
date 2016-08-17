import test from 'tape';
import h from 'snabbdom/h';
import createSvgCircle from 'scripts/svg-comp';

const before = test;
const after = test;

const SvgCircle = createSvgCircle(h);

const props = {};

before('desc: svg circle component', t => {
    t.end();
});

test('should render correctly', t => {
    const actual = SvgCircle({}).sel,
        expect = 'svg';
    t.equal(actual, expect);
    t.end();
});

test('should have one <circke> node', t => {
    const actual = SvgCircle({}).children[0].sel,
        expect = 'circle';

    t.equal(actual, expect);
    t.end();
});

after('end test -------------------------------', t => {
    t.end();
});
