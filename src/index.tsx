import { Text, Box, type BoxProps, type TextProps } from 'ink'

/**
 * Props for the Divider component.
 */
export interface DividerProps extends BoxProps {
	/**
	 * Title shown in the middle of the divider.
	 *
	 * @default null
	 */
	title?: string

	/**
	 * Width of the divider.
	 *
	 * @default 'auto'
	 */
	width?: 'auto' | number

	/**
	 * Padding at the start and the end of the divider.
	 *
	 * @default 0
	 */
	padding?: number

	/**
	 * Padding besides the title in the middle.
	 *
	 * @default 1
	 */
	titlePadding?: number

	/**
	 * Color of the title.
	 *
	 * @default 'white'
	 */
	titleColor?: TextProps['color']

	/**
	 * Char used as a divider.
	 *
	 * @default '─'
	 */
	dividerChar?: string

	/**
	 * Color of the divider's border. Matches the type of `borderColor` in the Ink `Box` component.
	 * Accepts standard Ink color names or hex codes.
	 *
	 * @default 'gray'
	 */
	dividerColor?: BoxProps['borderColor']
}

const BaseDivider: React.FC<DividerProps> = ({
	width = 'auto',
	dividerChar,
	dividerColor = 'gray',
	...props
}) => (
	<Box
		width={width}
		// @ts-expect-error
		borderStyle={{
			bottom: dividerChar,
		}}
		borderColor={dividerColor}
		//
		flexGrow={1}
		//
		borderBottom={true}
		//
		borderTop={false}
		borderLeft={false}
		borderRight={false}
		//
		{...props}
	/>
)

/**
 * A horizontal divider component styled as a single border line.
 *
 * @param props - Properties to customize the divider.
 * @returns A styled Ink `Box` component representing a divider.
 */
const Divider: React.FC<DividerProps> = ({
	title,
	width = 'auto',
	padding = 0,
	titlePadding = 1,
	titleColor = 'white',
	dividerChar = '─',
	dividerColor = 'gray',
	...props
}) => {
	const dividerLine = (
		<BaseDivider
			dividerChar={dividerChar}
			dividerColor={dividerColor}
			{...props}
		/>
	)

	if (!title) {
		return (
			<Box paddingLeft={padding} paddingRight={padding}>
				{dividerLine}
			</Box>
		)
	}

	return (
		<Box
			width={width}
			paddingLeft={padding}
			paddingRight={padding}
			gap={titlePadding}
		>
			{dividerLine}

			<Box>
				<Text color={titleColor}>{title}</Text>
			</Box>

			{dividerLine}
		</Box>
	)
}

export default Divider
