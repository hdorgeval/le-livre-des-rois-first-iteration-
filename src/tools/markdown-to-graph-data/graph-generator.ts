import { readAllLinesInFile } from '../fs/read-all-lines-in-file';
import { StoryLink, StoryData, StoryNode } from '../../story-types';
import uuid from 'uuid/v4';
import { PathLike } from 'fs';
export const getStoryBoundaries = (story: string[]): StoryLink => {
  const boundaries = story
    .map((line: string): string => line.trim())
    .filter((line): boolean => line.startsWith('# '));

  const boundaryLink: StoryLink = {
    weight: 600,
    source: {
      id: uuid(),
      name: (boundaries.shift() || '').replace(/#/gi, '').trim(),
      type: 'start of period',
    },
    target: {
      id: uuid(),
      name: (boundaries.pop() || '').replace(/#/gi, '').trim(),
      type: 'end of period',
    },
  };
  return boundaryLink;
};

export const createNodesFrom = (links: StoryLink[]): StoryNode[] => {
  const mapNodes = new Map<string, StoryNode>();
  links.forEach((link): void => {
    mapNodes.set(link.source.id, link.source);
    mapNodes.set(link.target.id, link.target);
  });

  const nodes = Array.from(mapNodes.values());
  return nodes;
};
export const createGraphDataFrom = (storyFile: PathLike): StoryData => {
  const story = readAllLinesInFile(storyFile)
    .map((line): string => line.trim())
    .filter((line): boolean => line.length > 0);

  const boundaryLink = getStoryBoundaries(story);
  const links: StoryLink[] = [];
  links.push(boundaryLink);
  const nodes = createNodesFrom(links);

  return {
    nodes,
    links,
  };
};
