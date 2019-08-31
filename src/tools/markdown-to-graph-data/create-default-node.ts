import { StoryNode, StoryNodeType, storyNodeTypeMapping, StoryLink } from '../../story-types';
import uuid from 'uuid/v4';

export const getNodeTypeFrom = (name: string): StoryNodeType => {
  for (const key in storyNodeTypeMapping) {
    if (name.endsWith(key)) {
      return storyNodeTypeMapping[key];
    }
  }
  return 'unknown';
};

export const getNodeWithSameName = (name: string, links: StoryLink[]): StoryNode | null => {
  const nodeWithSameName = links
    .map((link): StoryNode => link.target)
    .filter((node): boolean => node.name === name)
    .shift();
  return nodeWithSameName ? nodeWithSameName : null;
};
export const createDefaultNode = (name: string, links: StoryLink[]): StoryNode => {
  const nodeWithSameName = getNodeWithSameName(name, links);
  return {
    id: nodeWithSameName ? nodeWithSameName.id : uuid(),
    name,
    type: getNodeTypeFrom(name),
    level: 1,
    image: null,
    weight: 0,
    isLeaf: false,
  };
};
