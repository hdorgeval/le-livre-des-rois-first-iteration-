import 'jest';
import * as SUT from '../..';
import { getFirstMarkdownInDirectory } from '../../../tools/fs';

describe('Markdown Analysis', (): void => {
  test('Should detect and link identical actions', (): void => {
    // Given
    const story = getFirstMarkdownInDirectory(`${__dirname}`);

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const afterCommonSceneLinks = data.links.filter(
      (link: SUT.StoryLink): boolean => link.source.name === 'common scene',
    );
    expect(afterCommonSceneLinks.length).toBe(3);
    expect(afterCommonSceneLinks[0].target.name).toBe('episode 4');
    expect(afterCommonSceneLinks[0].weight).toBe(10);
    expect(afterCommonSceneLinks[0].source.weight).toBe(30);
    expect(afterCommonSceneLinks[1].target.name).toBe('episode 5');
    expect(afterCommonSceneLinks[1].weight).toBe(10);
    expect(afterCommonSceneLinks[2].target.name).toBe('episode 6');
    expect(afterCommonSceneLinks[2].weight).toBe(10);
    expect(data.nodes.length).toBe(14);
  });
});
