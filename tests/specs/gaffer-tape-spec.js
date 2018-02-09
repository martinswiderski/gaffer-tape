require('./../../src/sign-test')(__filename);

var gafferTapeWrap = require('./../../src/gaffer-tape-wrap'),
    gafferTapeUnwrap = require('./../../src/gaffer-tape-unwrap'),
    person = {
        first_name: 'Johnny',
        last_name: 'Bravo',
        email: 'j.bravo@domain.com',
        mobile: '+447766154451'
    };

describe('wraps objects', function () {
    it('producing strings', function () {
        expect(gafferTapeWrap(person)).toBe('ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM=');
        expect(gafferTapeWrap(person).length).toBe(300);
    });
});

var wrapped = 'ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM=',
    unwrapped = gafferTapeUnwrap(wrapped),
    errorObj = gafferTapeUnwrap('shdfhfhf');

describe('unwraps objects', function () {
    it('producing objects', function () {
        expect(typeof unwrapped).toBe('object');
        expect(person.first_name).toBe(unwrapped.first_name);
        expect(person.last_name).toBe(unwrapped.last_name);
        expect(person.email).toBe(unwrapped.email);
        expect(person.mobile).toBe(unwrapped.mobile);
    });
    it('handles errors', function () {
        expect(errorObj.error).toBe(true);
        expect(errorObj.message).toBe('error:0606506D:digital envelope routines:EVP_DecryptFinal_ex:wrong final block length');
    });
});


var gafferTape = require('./../../index'),
    unwrapped2 = gafferTape.unwrap('ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM='),
    wrapped2 = gafferTape.wrap(person),
    errorObj2  = gafferTape.unwrap(('shdfhfhf'));

describe('wraps objects via main interface', function () {
    it('producing strings', function () {
        expect(gafferTape.wrap(person)).toBe('ZDliODAzNDVkODEyOTNkNGM1YjE1N2ZmMWU0ZDlmOWRjYmMyYWFhZGZhZTJjY2ZmZWUwY2M5NTM0MzU5YjVjNDIxZjAxZWQ0NmJlN2VmZjQzMjkzZjFlMjNmMjQ4YjFjOGIzOTE2MzlkMDliMzVmNDUxYjcyMjM2MDQzODE3MGI5OWQ5NGQ4OGE1N2JmYTg1OTE5YjRjZTA2MDRmMzAwMzhjMTljZGEwYmIzODY0MDY4NWQ4NGZmYmU2YjY5MmM4NDY3YmJkZjFmY2Y3YzNmZjA5NWU2MDUxZjEzN2Q0ODM=');
        expect(gafferTape.wrap(person).length).toBe(300);
    });
});
describe('unwraps objects via main interface', function () {
    it('producing objects', function () {
        expect(typeof unwrapped2).toBe('object');
        expect(person.first_name).toBe(unwrapped2.first_name);
        expect(person.last_name).toBe(unwrapped2.last_name);
        expect(person.email).toBe(unwrapped2.email);
        expect(person.mobile).toBe(unwrapped2.mobile);
    });
    it('handles errors', function () {
        expect(errorObj2.error).toBe(true);
        expect(errorObj2.message).toBe('error:0606506D:digital envelope routines:EVP_DecryptFinal_ex:wrong final block length');
    });
});

