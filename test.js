import test from 'ava';
import React from 'react';
import {Box, Text} from 'ink';
import {render} from 'ink-testing-library';
import Divider from '.';

const PAD = ' ';
const dividerChar = '─';

test('Basic divider', t => {
	const {lastFrame: actual} = render(<Divider title="Title"/>);
	const {lastFrame: expected} = render(
		<Box flexDirection="row">
			<Text>
				{PAD}
				<Text color="grey">{dividerChar.repeat(21)}</Text>
				<Text color="white">{`${PAD}Title${PAD}`}</Text>
				<Text color="grey">{dividerChar.repeat(21)}</Text>
				{PAD}
			</Text>
		</Box>
	);

	t.is(actual(), expected());
});
