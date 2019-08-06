import 'jest';
import * as SUT from '../../graph-generator';
import { StoryNodeType, StoryData } from '../../../../story-types';
describe('Markdown Boundaries', (): void => {
  test('Should get boundaries', (): void => {
    // Given
    const story = `${__dirname}/story-with-boundaries.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const expectedTypeOfFirstNode: StoryNodeType = 'start of period';
    const expectedTypeOfLastNode: StoryNodeType = 'end of period';
    expect(data.nodes.length).toBe(2);
    expect(data.nodes[0].type).toBe(expectedTypeOfFirstNode);
    expect(data.nodes[1].type).toBe(expectedTypeOfLastNode);
    expect(data.links.length).toBe(1);
  });

  test('Should throw error when there is no boundaries', (): void => {
    // Given
    const story = `${__dirname}/story-with-no-boundaries.md`;

    // When
    // Then
    const expectedErrorMessage =
      'Error: Markdown is missing heading `# H1` at the beginning of the file.';
    expect((): StoryData => SUT.createGraphDataFrom(story)).toThrowError(expectedErrorMessage);
  });

  test('Should throw error when there is no end boundary', (): void => {
    // Given
    const story = `${__dirname}/story-with-no-end-boundary.md`;

    // When
    // Then
    const expectedErrorMessage =
      'Error: Markdown is missing heading `# H1` at the beginning or at the end of the file.';
    expect((): StoryData => SUT.createGraphDataFrom(story)).toThrowError(expectedErrorMessage);
  });
});
