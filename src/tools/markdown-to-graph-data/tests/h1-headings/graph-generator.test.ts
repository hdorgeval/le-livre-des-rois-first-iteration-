import 'jest';
import * as SUT from '../../graph-generator';
import { StoryNodeType, StoryData } from '../../../../story-types';
describe('Markdown Boundaries', (): void => {
  test('Should get H1 headings', (): void => {
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

  test('Should set the height of boundaries', (): void => {
    // Given
    const story = `${__dirname}/story-with-boundaries-and-episodes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);
    const boundaryStartLinkNode = data.links[0];

    // Then
    data.links
      .filter((link): boolean => link.source.id === boundaryStartLinkNode.source.id)
      .map((link): number => link.weight)
      .forEach((weight): number => expect(weight).toBe(60));
  });

  test('Should get boundary nodes', (): void => {
    // Given
    const story = `${__dirname}/story-with-boundaries-and-episodes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);
    const boundaryStartNode = data.links[0].source;

    // Then
    const startNodeExists =
      data.nodes.filter((node): boolean => node.id === boundaryStartNode.id).length === 1;
    expect(startNodeExists).toBe(true);
    const endNodeExists =
      data.nodes.filter((node): boolean => node.type === 'end of period').length === 1;
    expect(endNodeExists).toBe(true);
  });
});
