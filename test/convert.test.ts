import {convert} from '../src/convert';

describe('convert', () => {
	it("doesn't convert when not necessary", () => {
		expect(
			// prettier-ignore
			convert(1).from('second').to('second')
		).toBe(1);
	});

	it('supports `BigInt`s', () =>
		expect(
			convert(BigInt(2))
				.from('hour')
				.to('minute')
		).toBe(BigInt(120)));

	it('throws when appropriate', () => {
		expect(() =>
			// prettier-ignore
			// @ts-expect-error
			convert(60).from('second').to('not a real value')
		).toThrow();

		expect(() =>
			// prettier-ignore
			// @ts-expect-error
			convert(60).from('not a real value').to('minute')
		).toThrow();
	});
});
