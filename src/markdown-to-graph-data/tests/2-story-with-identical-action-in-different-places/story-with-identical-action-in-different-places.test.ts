import 'jest';
import * as SUT from '../../../markdown-to-graph-data';
import { getFirstMarkdownInDirectory } from '../../../tools/fs';

describe('Markdown Analysis', (): void => {
  test('Should detect and link identical actions', (): void => {
    // Given
    const story = getFirstMarkdownInDirectory(`${__dirname}`);

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const commonSceneLinks = data.links.filter(
      (link: SUT.StoryLink): boolean => link.target.name === 'common scene',
    );

    const commonSceneNodes = commonSceneLinks.map((link): SUT.StoryNode => link.target);
    const commonSceneId = commonSceneNodes[0].id;
    expect(commonSceneNodes.length).toBe(3);
    expect(commonSceneNodes[1].id).toBe(commonSceneId);
    expect(commonSceneNodes[2].id).toBe(commonSceneId);

    //
    const rootToEpisode1Links = data.links.filter(
      (link: SUT.StoryLink): boolean => link.target.name === 'episode 1',
    );
    expect(rootToEpisode1Links.length).toBe(1);
    expect(rootToEpisode1Links[0].weight).toBe(20);

    //
    const rootToEpisode2Links = data.links.filter(
      (link: SUT.StoryLink): boolean => link.target.name === 'episode 2',
    );
    expect(rootToEpisode2Links.length).toBe(1);
    expect(rootToEpisode2Links[0].weight).toBe(30);

    //
    const rootToEpisode3Links = data.links.filter(
      (link: SUT.StoryLink): boolean => link.target.name === 'episode 3',
    );
    expect(rootToEpisode3Links.length).toBe(1);
    expect(rootToEpisode3Links[0].weight).toBe(40);
  });
});
