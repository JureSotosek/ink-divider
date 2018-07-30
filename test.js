const { h, Color, renderToString } = require('ink');
const PropTypes = require('prop-types');
const test = require('ava');

const Divider = require('.');

test('Basic divider', t => {
  const myDivider = renderToString(<Divider title="Title" />);

  const expected = renderToString(<Divider title="Title" />);

  t.is(myDivider, expected);
});
