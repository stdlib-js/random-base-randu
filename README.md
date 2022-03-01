<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# randu

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Uniformly distributed pseudorandom numbers between 0 and 1.



<section class="usage">

## Usage

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
```

#### randu()

Returns a uniformly distributed pseudorandom number on the interval `[0,1)`.

```javascript
var r = randu();
// returns <number>
```

#### randu.factory( \[options] )

Returns a pseudorandom number generator (PRNG) for generating uniformly distributed random numbers on the interval `[0,1)`.

```javascript
var rand = randu.factory();
```

The function accepts the following `options`:

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following generators are supported:

    -   [`mt19937`][@stdlib/random/base/mt19937]: 32-bit Mersenne Twister.
    -   [`minstd`][@stdlib/random/base/minstd]: linear congruential pseudorandom number generator (LCG) based on Park and Miller.
    -   [`minstd-shuffle`][@stdlib/random/base/minstd-shuffle]: linear congruential pseudorandom number generator (LCG) whose output is shuffled.

    Default: [`'mt19937'`][@stdlib/random/base/mt19937].

-   **seed**: pseudorandom number generator seed. Valid seed values vary according to the underlying PRNG.

-   **state**: pseudorandom number generator state. Valid state values vary according to the underlying PRNG. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, the underlying pseudorandom number generator is [`mt19937`][@stdlib/random/base/mt19937]. To use a different PRNG, set the `name` option.

```javascript
var rand = randu.factory({
    'name': 'minstd-shuffle'
});

var r = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randu.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randu.factory({
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = randu();
}

// Create a new PRNG initialized to the current state of `randu`:
rand = randu.factory({
    'state': randu.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randu() );
// returns true
```

#### randu.NAME

The generator name.

```javascript
var str = randu.NAME;
// returns 'randu'
```

#### randu.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = randu.PRNG;
// returns <Function>
```

#### randu.MIN

Minimum value lower bound.

```javascript
var min = randu.MIN;
// returns 0.0
```

#### randu.MAX

Maximum value upper bound (not greater than `1` exclusive).

```javascript
var max = randu.MAX;
// returns <number>
```

#### randu.seed

The value used to seed `randu()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = randu();
}

// Generate the same pseudorandom values...
rand = randu.factory({
    'seed': randu.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

#### randu.seedLength

Length of generator seed.

```javascript
var len = randu.seedLength;
// returns <number>
```

#### randu.state

Writable property for getting and setting the generator state.

```javascript
var r = randu();
// returns <number>

r = randu();
// returns <number>

// ...

// Get a copy of the current state:
var state = randu.state;

r = randu();
// returns <number>

r = randu();
// returns <number>

// Reset the state:
randu.state = state;

// Replay the last two pseudorandom numbers:
r = randu();
// returns <number>

r = randu();
// returns <number>

// ...
```

#### randu.stateLength

Length of generator state.

```javascript
var len = randu.stateLength;
// returns <number>
```

#### randu.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randu.byteLength;
// returns <number>
```

#### randu.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randu.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randu() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randu.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randu.factory({
    'seed': randu.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/discrete-uniform`][@stdlib/random/base/discrete-uniform]</span><span class="delimiter">: </span><span class="description">discrete uniform distributed pseudorandom numbers.</span>
-   <span class="package-name">[`@stdlib/random/base/randn`][@stdlib/random/base/randn]</span><span class="delimiter">: </span><span class="description">standard normal pseudorandom numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-randu.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-randu

[test-image]: https://github.com/stdlib-js/random-base-randu/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-randu/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-randu/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-randu?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-randu.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-randu/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-randu/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-randu/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-randu/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-randu/main/LICENSE

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937/tree/esm

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd/tree/esm

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle/tree/esm

<!-- <related-links> -->

[@stdlib/random/base/discrete-uniform]: https://github.com/stdlib-js/random-base-discrete-uniform/tree/esm

[@stdlib/random/base/randn]: https://github.com/stdlib-js/random-base-randn/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
