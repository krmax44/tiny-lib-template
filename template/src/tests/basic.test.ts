import { expect } from 'chai';
import { helloWorld } from '..';
import 'mocha';

describe('basic test', () => {
	it('should say hello world', async () => {
		expect(helloWorld).to.equal('Hello World!');
	});
});
