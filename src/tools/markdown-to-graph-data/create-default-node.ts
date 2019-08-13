import { StoryNode } from '../../story-types';
import uuid from 'uuid/v4';
export const createDefaultNode = (name: string): StoryNode => {
  return {
    id: uuid(),
    name,
    type: 'unknown',
    level: 1,
    image: null,
  };
};
