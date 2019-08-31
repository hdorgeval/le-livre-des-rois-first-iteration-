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

  test('Should disconnect from root linked H1 headings', (): void => {
    // Given
    const story = `${__dirname}/story-with-h1-headings-and-linked-scenes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const episode2Links = data.links.filter((link): boolean => link.target.name === 'episode 2');
    expect(episode2Links.length).toBe(1);
    expect(episode2Links[0].target.name).toBe('episode 2');
    expect(episode2Links[0].source.name).toBe('followed by episode 2');

    const rootLinks = data.links.filter((link): boolean => link.source.id === 'root');
    expect(rootLinks.length).toBe(2);
    expect(rootLinks[0].target.name).toBe('episode 1');
    expect(rootLinks[1].target.name).toBe('episode 3');
  });

  test.only('Should compute weight of linked nodes', (): void => {
    // Given
    const story = `${__dirname}/story-with-h1-headings-and-linked-scenes.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const scene1111Links = data.links.filter(
      (link): boolean => link.target.name === 'scene 1.1.1.1',
    );
    expect(scene1111Links.length).toBe(1);
    expect(scene1111Links[0].target.weight).toBe(10);
    expect(scene1111Links[0].source.weight).toBe(10);

    const episode1Links = data.links.filter((link): boolean => link.target.name === 'episode 1');
    expect(episode1Links.length).toBe(1);
    expect(episode1Links[0].target.weight).toBe(40);
    expect(episode1Links[0].source.weight).toBe(40);

    const parentEpisode1Links = data.links.filter(
      (link): boolean => link.target.name === 'followed by episode 1',
    );
    expect(parentEpisode1Links.length).toBe(2);
    expect(parentEpisode1Links[0].source.weight).toBe(20);
    expect(parentEpisode1Links[1].source.weight).toBe(20);
    expect(parentEpisode1Links[0].weight).toBe(20);
    expect(parentEpisode1Links[1].weight).toBe(20);
  });
});
