import 'jest';
import * as SUT from '../../../graph-generator';
describe('Markdown Boundaries', (): void => {
  test('Should get scenes in H1 headings', (): void => {
    // Given
    const story = `${__dirname}/story-with-only-h1-headings-and-scenes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const episode1Links = data.links.filter((link): boolean => link.source.name === 'episode 1');
    expect(episode1Links[0].target.name).toBe('scene 1.1');
    expect(episode1Links[1].target.name).toBe('scene 1.2');
    const rootLinkToEpisode1 = data.links.filter(
      (link): boolean => link.target.name === 'episode 1',
    )[0];
    expect(rootLinkToEpisode1.weight).toBe(40);

    const rootLinkToEpisode2 = data.links.filter(
      (link): boolean => link.target.name === 'episode 2',
    )[0];
    expect(rootLinkToEpisode2.weight).toBe(60);
  });
});
