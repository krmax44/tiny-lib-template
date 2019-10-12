import test from 'ava';
import { helloWorld } from '..';

test('basic test', t => {
	t.is(helloWorld, 'Hello World!');
});
