import 'jest';
import * as SUT from '../../graph-generator';
import { StoryLink, StoryNode } from '../../../../story-types';
describe('Markdown Analysis', (): void => {
  test('Should get the node type from its name', (): void => {
    // Given
    const story = `${__dirname}/story-with-duplicated-nodes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const commonSceneLinks = data.links.filter(
      (link: StoryLink): boolean => link.target.name === 'common scene',
    );

    const commonSceneNodes = commonSceneLinks.map((link): StoryNode => link.target);
    const commonSceneId = commonSceneNodes[0].id;
    expect(commonSceneNodes.length).toBe(3);
    expect(commonSceneNodes[1].id).toBe(commonSceneId);
    expect(commonSceneNodes[2].id).toBe(commonSceneId);
  });
});
