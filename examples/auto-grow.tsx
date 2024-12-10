import { render, Box, Text } from 'ink'
import Divider from '../src'

const lorem = (
	<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
)

/**
 * Renders a Box with a divider and lorem ipsum text.
 * Demonstrates Divider's ability to automatically adjust its width to the parent container.
 */
render(
	<Box
		borderStyle="round" // Rounded border style for the Box.
		flexDirection="column" // Arranges elements vertically within the Box.
		alignSelf="flex-start" // Aligns the Box to the start of the cross axis.
		paddingLeft={1} // Left padding of the Box.
		paddingRight={1} // Right padding of the Box.
	>
		{lorem}
		{/* Divider automatically stretches to fill the Box width */}
		<Divider />
		{lorem}
	</Box>
)
