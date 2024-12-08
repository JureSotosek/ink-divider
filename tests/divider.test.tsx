import { expect, test } from 'bun:test'

import { Box, Text } from 'ink'
import { render } from 'ink-testing-library'
import Divider from '../src'

test('divider in box with sample text', () => {
	const expectation = render(
		<Box
			borderStyle='round'
			flexDirection='column'
			alignSelf='flex-start'
			paddingLeft={1}
			paddingRight={1}
		>
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
			<Divider title='Title' />
			<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit</Text>
		</Box>
	)

	expect(expectation.lastFrame()).toMatchSnapshot()
})

test('divider without title', () => {
	const { lastFrame } = render(<Divider />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with title', () => {
	const { lastFrame } = render(<Divider title='Title' />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with custom width', () => {
	const { lastFrame } = render(<Divider width={20} />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with custom padding', () => {
	const { lastFrame } = render(<Divider padding={2} />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with title and custom titlePadding', () => {
	const { lastFrame } = render(<Divider title='Title' titlePadding={3} />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with title and custom titleColor', () => {
	const { lastFrame } = render(<Divider title='Title' titleColor='blue' />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with custom dividerChar', () => {
	const { lastFrame } = render(<Divider dividerChar='=' />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with custom dividerColor', () => {
	const { lastFrame } = render(<Divider dividerColor='red' />)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with all custom props', () => {
	const { lastFrame } = render(
		<Divider
			title='Custom Title'
			width={30}
			padding={1}
			titlePadding={2}
			titleColor='green'
			dividerChar='*'
			dividerColor='yellow'
		/>
	)
	expect(lastFrame()).toMatchSnapshot()
})

test('divider with title and other box props (flexGrow, etc.)', () => {
	const { lastFrame } = render(
		<Box width={50}>
			<Divider title='Title' flexGrow={1} />
		</Box>
	)
	expect(lastFrame()).toMatchSnapshot()
})
