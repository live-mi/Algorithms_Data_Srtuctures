import { checkInclusion } from './index';

test('should check if str2 contains a permutation of str1', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);

    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);

    expect(checkInclusion('hello', 'ooolleoooleh')).toBe(false);
});
