import 'jest';
import * as SUT from '../../graph-generator';

describe('Markdown Sequences', (): void => {
  test('Should get linked sequences', (): void => {
    // Given
    const story = `${__dirname}/story-with-linked-sequences.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    expect(data.nodes.length).toBe(7);
    expect(data.links.length).toBe(6);
  });
});
