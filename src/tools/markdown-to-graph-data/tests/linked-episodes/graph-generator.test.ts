import 'jest';
import * as SUT from '../../graph-generator';

describe('Markdown Sequences', (): void => {
  test('Should get linked episode', (): void => {
    // Given
    const story = `${__dirname}/story-with-linked-episode.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const scene1Link = data.links.filter((link): boolean => link.source.name === 'scene 1')[0];
    const scene2Link = data.links.filter((link): boolean => link.source.name === 'scene 2')[0];
    expect(scene1Link.target.name).toBe('episode 1');
    expect(scene2Link.target.name).toBe('episode 1');
  });

  test('Should get linked episode', (): void => {
    // Given
    const story = `${__dirname}/story-with-linked-episode-2.md`;

    // When
    const data = SUT.createGraphDataFrom(story);

    // Then
    const season1Link = data.links.filter((link): boolean => link.source.name === 'season 1')[0];
    expect(season1Link.target.name).toBe('episode 1');
  });
});
