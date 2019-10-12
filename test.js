import test from 'ava';
import React from 'react';
import {Box, Color} from 'ink';
import {render} from 'ink-testing-library';
import Divider from '.';

const PAD = ' ';
const dividerChar = '─';

test('Basic divider', t => {
	const {lastFrame: actual} = render(<Divider title="Title"/>);
	const {lastFrame: expected} = render(
		<Box flexDirection="row">
			{PAD}
			<Color keyword="grey">{dividerChar.repeat(21)}</Color>
			<Color keyword="white">{`${PAD}Title${PAD}`}</Color>
			<Color keyword="grey">{dividerChar.repeat(21)}</Color>
			{PAD}
		</Box>
	);

	t.is(actual(), expected());
});
