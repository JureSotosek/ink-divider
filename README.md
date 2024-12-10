<!-- markdownlint-disable-next-line blanks-around-headings  -->
# ${\color{gray}\tiny──────}$  ink-divider  ${\color{gray}\tiny──────}$
👩🏼‍🎨 Divider component for [Ink](https://github.com/vadimdemedes/ink).

## 📥 Install

```bash
npm i ink-divider
```

## 🚀 Usage

Here is the basic usage:

```jsx
import { render } from 'ink'
import Divider from 'ink-divider'

render(<Divider title='Title' />)

// ─────────── Title ───────────
```

The `<Divider>` component can also automatically adjust to the width of the container!
We advise you to view this example - [`examples/auto-grow.tsx`](https://raw.githubusercontent.com/JureSotosek/ink-divider/refs/heads/master/examples/auto-grow.tsx), more examples in the [`examples`](https://github.com/JureSotosek/ink-divider/tree/master/exampes) folder

<!-- markdownlint-disable-next-line-->
<img src="media/example.png" alt="example" width="550">

---

## ⚙️ Props

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
