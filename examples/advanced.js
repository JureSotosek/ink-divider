import React from 'react';
import {render} from 'ink';
import Divider from '..';

const Advanced = () => (
	<span>
		<br/>
		<Divider title="Title" dividerChar="!" dividerColor="red"/>
	</span>
);

render(<Advanced/>);
