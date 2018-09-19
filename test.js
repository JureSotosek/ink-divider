const { h, Color, renderToString } = require('ink');
const test = require('ava');

const Divider = require('.');

test('Basic divider', t => {
  const myDivider = renderToString(<Divider title="Title" />);

  const expected = renderToString(
    <div>
      {' '}
      <Color keyword={'grey'}>{'─────────────────────'}</Color>
      <Color keyword={'white'}>{' Title '}</Color>
      <Color keyword={'grey'}>{'─────────────────────'}</Color>{' '}
    </div>
  );

  t.is(myDivider, expected);
});
