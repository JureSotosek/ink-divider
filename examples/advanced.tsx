import { render } from 'ink'
import Divider from '../src'

/**
 * Component that renders a divider with custom settings.
 * Demonstrates the usage of `title`, `dividerChar`, `dividerColor`, and `width` props.
 */
const Advanced = () => (
	<Divider
		title='Title' // Title of the divider.
		dividerChar='=' // Character used for the divider line (instead of '-').
		dividerColor='red' // Color of the divider (red).
		width={40} // Width of the divider line.
	/>
)

render(<Advanced />)
