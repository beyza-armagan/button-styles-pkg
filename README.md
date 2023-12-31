# Patika Publishing Assignment
# diffstylebutton
> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/diffstylebutton.svg)](https://www.npmjs.com/package/diffstylebutton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- A custom button component that provides nine different button types: primary, default, dashed, text, link, download, loading, ghost, and click.

![Example Image](./example/public/buttons.PNG)

## Install

```bash
npm install --save diffstylebutton
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'diffstylebutton'
import 'diffstylebutton/dist/index.css'

class Example extends Component {
  render() {
    return <Button text= "button text..." buttonType="dashed" />
  }
}
```

## License

MIT © [beyza-armagan](https://github.com/beyza-armagan)
