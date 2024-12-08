# ink-divider

👩🏼‍🎨 Divider component for [Ink](https://github.com/vadimdemedes/ink).

## Install

```bash
npm i ink-divider
```

## Usage

```jsx
import { render } from 'ink'
import Divider from 'ink-divider'

render(<Divider title='Title' />)

// ─────────── Title ───────────
```

<!-- markdownlint-disable-next-line-->
<img src="media/example.png" alt="example" width="720">

## Props

### title

Type: `string`

Default: `null`

Title shown in the middle of the divider.

### width

Type: `'auto' | number`

Default: `auto`

Width of the divider.

### padding

Type: `number`

Default: `0`

Padding at the start and the end of the divider.

### titlePadding

Type: `number`

Default: `1`

Padding besides the title in the middle.

### titleColor

Type: `string`

Default: `"white"`

Color of the title.

### dividerChar

Type: `string`

Default: `"─"`

Char used as a divider.

### dividerColor

Type: `string`

Default: `"gray"`

Color of the divider chars.

## License

MIT © [Jure Sotosek](https://github.com/JureSotosek)
