import { longestOnes } from './index';

test('should check the maximum number of consecutive 1s', () => {
    expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toBe(6);
});

test('should check the maximum number of consecutive 1s', () => {
    expect(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toBe(10);
});
