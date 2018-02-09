![Gaffer-Text](https://github.com/martinswiderski/gaffer-tape/raw/master/assets/alligator.png "Gaffer-Tape")
# gaffer-tape
Wrap/unwrap objects with (customised) `encryption`, `zipping` and `base64` packing


## Installation

```bash
npm install gaffer-tape --save
```

## In your code

```javascript
var gafferTape = require('gaffer-tape');
```

## Wrapping objects

For example object:

```javascript
    var person = {
        first_name: 'Johnny',
        last_name: 'Bravo',
        email: 'j.bravo@domain.com',
        mobile: '+447766154451'
    };

    var wrapped = gafferTape.wrap(person);
    console.log(wrapped);
```
this would produce string as follows:

```bash
ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM=
```

## Unwrapping

for the same string:


```javascript
var string = 'ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM=';
var unwrapped = gafferTape.wrap(string);
console.log(unwrapped);
```

would show you:

```bash
{ first_name: 'Johnny',
  last_name: 'Bravo',
  email: 'j.bravo@domain.com',
  mobile: '+447766154451' }
```