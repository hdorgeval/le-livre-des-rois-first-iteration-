import { StoryNode, StoryNodeType, storyNodeTypeMapping } from '../../story-types';
import uuid from 'uuid/v4';

export const getNodeTypeFrom = (name: string): StoryNodeType => {
  for (const key in storyNodeTypeMapping) {
    if (name.endsWith(key)) {
      return storyNodeTypeMapping[key];
    }
  }
  return 'unknown';
};
export const createDefaultNode = (name: string): StoryNode => {
  return {
    id: uuid(),
    name,
    type: getNodeTypeFrom(name),
    level: 1,
    image: null,
  };
};
