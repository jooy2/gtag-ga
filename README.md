# 📊 gtag-ga

Google Analytics 4 (gtag.js) for NodeJS ES Module. Simple installation to send page views or event tracking.

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jooy2/gtag-ga/blob/master/LICENSE) ![Programming Language Usage](https://img.shields.io/github/languages/top/jooy2/gtag-ga) ![Commit Count](https://img.shields.io/github/commit-activity/y/jooy2/gtag-ga) [![npm downloads](https://img.shields.io/npm/dm/gtag-ga.svg)](https://www.npmjs.com/package/gtag-ga) [![npm latest package](https://img.shields.io/npm/v/gtag-ga/latest.svg)](https://www.npmjs.com/package/gtag-ga) ![minified size](https://img.shields.io/bundlephobia/min/gtag-ga) ![github repo size](https://img.shields.io/github/repo-size/jooy2/gtag-ga) [![Followers](https://img.shields.io/github/followers/jooy2?style=social)](https://github.com/jooy2) ![Stars](https://img.shields.io/github/stars/jooy2/gtag-ga?style=social)

- ⚡️ Lightweight modules & quick setup & fast performance
- ⚡️ Zero dependency packages. ESM packages available everywhere
- ⚡️ Support for the latest NodeJS, Google Analytics 4
- ⚡️ Support for TypeScript

# Installation

`gtag-ga` requires `Node.js 12.x` or higher, and the repository is serviced through **[NPM](https://npmjs.com)**.

After configuring the node environment, you can simply run the following command.

```bash
# via npm
$ npm install gtag-ga

# via yarn
$ yarn add gtag-ga

# via pnpm
$ pnpm install gtag-ga
```

# How to use

### Recommend: Using named import (Multiple utilities in a single require)

```javascript
import { initializeGtag } from 'gtag-ga';

initializeGtag('G-XXXXXXXXXX'); // Your tracking code
```

### Using whole class (multiple utilities simultaneously with one object)

```javascript
import GtagGA from 'gtag-ga';

GtagGA.initializeGtag('G-XXXXXXXXXX'); // Your tracking code
```

# Methods

### `initializeGtag (void)`

Enable `gtag.js` in your webpage environment. Ideally, it should only be called once at the start (but multiple calls won't hurt). The first argument value should include your Google Analytics tracking ID, which starts with `G-`.

- `(Required) trackingId::string`
- `config::object`

```javascript
initializeGtag('G-XXXXXXXXXX'); // Your tracking code
```

### `gtag (void)`

The usage of this function is the same as the gtag functions used in regular `gtag.js`.

Learn more in the official `gtag.js` documentation at: https://developers.google.com/tag-platform/gtagjs/configure#step_2_send_data_with_event

```javascript
gtag('event', 'eventName', { 'key': 'value' });
```

# Contribute

You can report issues on [GitHub Issue Tracker](https://github.com/jooy2/gtag-ga/issues). You can also request a pull to fix bugs and add frequently used features.

# License

Copyright © 2023 [Jooy2](https://jooy2.com) <[jooy2.contact@gmail.com](mailto:jooy2.contact@gmail.com)> Released under the MIT license.
