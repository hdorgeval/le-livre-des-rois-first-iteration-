import { StoryNode, StoryLink } from './story-types';

export const getNodesSetOf = (links: StoryLink[]): Map<string, StoryNode> => {
  const mapNodes = new Map<string, StoryNode>();
  links.forEach((link): void => {
    mapNodes.set(link.source.id, link.source);
    mapNodes.set(link.target.id, link.target);
  });

  return mapNodes;
};
export const getNodesOf = (links: StoryLink[]): StoryNode[] => {
  const mapNodes = getNodesSetOf(links);
  const nodes = Array.from(mapNodes.values());
  return nodes;
};

export const getTargetNodesOf = (links: StoryLink[]): Map<string, StoryNode> => {
  const mapNodes = new Map<string, StoryNode>();
  links.forEach((link): void => {
    mapNodes.set(link.target.id, link.target);
  });

  return mapNodes;
};
