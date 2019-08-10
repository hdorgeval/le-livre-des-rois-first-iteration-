import 'jest';
import * as SUT from '../../../graph-generator';
describe('Markdown Boundaries', (): void => {
  test('Should get links to H1 headings', (): void => {
    // Given
    const story = `${__dirname}/story-with-h1-headings-and-scenes-linked-to-headings.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const toEpisode1Links = data.links.filter((link): boolean => link.target.name === 'episode 1');
    expect(toEpisode1Links[0].source.id).toBe('root');
    expect(toEpisode1Links[1].source.name).toBe('link to episode 1');
    expect(toEpisode1Links[1].target.name).toBe('episode 1');
  });
});
