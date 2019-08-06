import 'jest';
import * as SUT from '../../graph-generator';
import { StoryNodeType } from '../../../../story-types';
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
});
