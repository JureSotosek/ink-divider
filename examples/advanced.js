const { h, render } = require('ink');
const Divider = require('..');

const Advanced = () => (
  <Divider title="Section 1" dividerChar="+" dividerColor="magenta" />
);

render(<Advanced />);
