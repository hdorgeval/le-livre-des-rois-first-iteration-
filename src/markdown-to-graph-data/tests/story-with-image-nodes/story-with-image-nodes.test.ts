import 'jest';
import * as SUT from '../../graph-generator';
import { StoryLink } from '../../story-types';
describe('Markdown Analysis', (): void => {
  test('Should get the node type from its name', (): void => {
    // Given
    const story = `${__dirname}/story-with-image-nodes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const episode1Links = data.links.filter(
      (link: StoryLink): boolean => link.source.name === 'episode 1',
    );

    const balkhNode = episode1Links[0].target;
    expect(balkhNode.name).toBe('scene 1.1 is located in Balkh');
    expect(balkhNode.type.toString()).toBe('town');
    // expect(balkhNode.image).not.toBe(null);
  });
});
