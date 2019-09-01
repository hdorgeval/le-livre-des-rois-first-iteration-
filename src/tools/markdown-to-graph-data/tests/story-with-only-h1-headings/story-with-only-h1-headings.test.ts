import 'jest';
import * as SUT from '../../../markdown-to-graph-data';
import { StoryNodeType } from '../../../../story-types';
import { getFirstMarkdownInDirectory } from '../../../fs';

describe('Markdown Analysis', (): void => {
  test('Should get H1 headings', (): void => {
    // Given
    const story = getFirstMarkdownInDirectory(`${__dirname}`);

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const expectedTypeOfRootNode: StoryNodeType = 'start of period';
    expect(data.nodes[0].id).toBe('root');
    expect(data.nodes[0].weight).toBe(30);
    expect(data.nodes[0].type).toBe(expectedTypeOfRootNode);
    expect(data.nodes.length).toBe(4);
    expect(data.links.length).toBe(3);
    expect(data.links[0].source.id).toBe('root');
    expect(data.links[0].weight).toBe(10);
    expect(data.links[1].source.id).toBe('root');
    expect(data.links[1].weight).toBe(10);
    expect(data.links[2].source.id).toBe('root');
    expect(data.links[2].weight).toBe(10);
  });
});
