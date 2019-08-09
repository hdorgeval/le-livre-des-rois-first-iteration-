import 'jest';
import * as SUT from '../../../graph-generator';
describe('Markdown Boundaries', (): void => {
  test('Should get scenes in H1 headings', (): void => {
    // Given
    const story = `${__dirname}/story-with-h1-headings-and-linked-scenes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const episode1Links = data.links.filter((link): boolean => link.source.name === 'episode 1');
    expect(episode1Links.length).toBe(2);
    expect(episode1Links[0].target.name).toBe('scene 1.1');
    expect(episode1Links[1].target.name).toBe('scene 1.2');

    const scene11Links = data.links.filter((link): boolean => link.source.name === 'scene 1.1');
    expect(scene11Links.length).toBe(1);
    expect(scene11Links[0].target.name).toBe('scene 1.1.1');
  });
});
