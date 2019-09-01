import { getLeafLinks } from './get-leaf-links';
import { StoryLink } from './story-types';

export const getStoryLengthOf = (links: StoryLink[]): number => {
  const leafLinks = getLeafLinks(links);
  let storyLength = 0;

  leafLinks.forEach((leafLink): void => {
    let currentLink: StoryLink | undefined = leafLink;
    let currentStoryLength = 1;
    while (currentLink && currentLink.source.id !== 'root') {
      currentStoryLength += 1;
      const parentNode = currentLink.source;
      currentLink = links.filter((link): boolean => link.target.id === parentNode.id).pop();
    }
    storyLength = Math.max(storyLength, currentStoryLength);
  });

  return storyLength;
};
