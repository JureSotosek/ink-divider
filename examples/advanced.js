const { h, render } = require('ink');
const Divider = require('..');

const Advanced = () => (
  <span>
    <br />
    <Divider title="Title" dividerChar="!" dividerColor="red" />
  </span>
);

render(<Advanced />);
