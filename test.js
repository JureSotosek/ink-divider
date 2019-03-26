import test from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import Divider from '.';

test('Basic divider', t => {
	const {lastFrame} = render(<Divider title="Title"/>);

	console.log(lastFrame());
	t.snapshot(lastFrame());
});
