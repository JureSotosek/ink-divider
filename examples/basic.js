const { h, render } = require('ink');
const Divider = require('..');

const Basic = () => (
  <span>
    <br />
    <Divider title="Title" />
  </span>
);

render(<Basic />);
