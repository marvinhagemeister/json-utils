# JSON utils

Useful helper functions that are highly optimized for V8. For example `deepMerge`
is about 5-7% faster than [lodash.merge](https://www.npmjs.com/package/lodash.merge).

## Usage

```bash
# npm
npm install json-utils

# or yarn
yarn install json-utils
```

## API

### `deepMerge(...objs)`

Deeply merge an arbitrary number of plain objects. For shallow merging use `Object.assign` instead.

## License

MIT, see `LICENSE.md`.
