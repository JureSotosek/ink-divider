import { render } from 'ink'
import Divider from '../src'

/**
 * Basic Divider component example.
 * Demonstrates rendering a divider with a title and specified width.
 */
const Basic = () => <Divider title="Title" width={40} /> // Divider with title and width

render(<Basic />)
