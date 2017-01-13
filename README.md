# JSON utils

Useful helper functions that are highly optimized for V8. For example `deepMerge`
is about 5-7% faster than [lodash.merge](https://www.npmjs.com/package/lodash.merge).

## Usage

```bash
# npm
npm install json-utils-optimized

# or yarn
yarn install json-utils-optimized
```

## API

### `deepMerge(...objs)`

Deeply merge an arbitrary number of plain objects.

### `protoMerge(a, b)`

Shallow merge `a` into `b` by swapping prototype references. This is a lot faster than
the native `Object.assign`. Note that this should only be used when you
have full control over both objects.

## License

MIT, see `LICENSE.md`.
