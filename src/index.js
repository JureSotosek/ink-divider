const { h, Color } = require('ink');
const PropTypes = require('prop-types');

const stringWidth = require('string-width');

// Helpers

const getSideDividerWidth = (width, titleWidth) => (width - titleWidth) / 2;
const getNumberOfCharsPerWidth = (char, width) => width / stringWidth(char);

const PAD = ' ';

// Divider

const Divider = ({
  title,
  width,
  padding,
  titlePadding,
  titleColor,
  dividerChar,
  dividerColor
}) => {
  const titleString = title
    ? `${PAD.repeat(titlePadding) + title + PAD.repeat(titlePadding)}`
    : '';
  const titleWidth = stringWidth(titleString);

  const dividerWidth = getSideDividerWidth(width, titleWidth);
  const numberOfCharsPerSide = getNumberOfCharsPerWidth(
    dividerChar,
    dividerWidth
  );
  const dividerSideString = dividerChar.repeat(numberOfCharsPerSide);

  const paddingString = PAD.repeat(padding);

  return (
    <div>
      {paddingString}
      <Color keyword={dividerColor}>{dividerSideString}</Color>
      <Color keyword={titleColor}>{titleString}</Color>
      <Color keyword={dividerColor}>{dividerSideString}</Color>
      {paddingString}
    </div>
  );
};

Divider.propTypes = {
  title: PropTypes.string,
  width: PropTypes.number,
  padding: PropTypes.number,
  titlePadding: PropTypes.number,
  titleColor: PropTypes.string,
  dividerChar: PropTypes.string,
  dividerColor: PropTypes.string
};

Divider.defaultProps = {
  title: null,
  width: 50,
  padding: 1,
  titlePadding: 1,
  titleColor: 'white',
  dividerChar: '─',
  dividerColor: 'grey'
};

module.exports = Divider;
