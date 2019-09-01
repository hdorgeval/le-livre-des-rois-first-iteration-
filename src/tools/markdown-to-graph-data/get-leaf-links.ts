import { StoryLink, StoryNode } from '../../story-types';

export const getLeafLinks = (links: StoryLink[]): StoryLink[] => {
  const allTargetNodes = links.map((link): StoryNode => link.target);
  const allLeafNodes = allTargetNodes.filter((targetNode): boolean => {
    const isSourceNode =
      links.filter((link): boolean => link.source.id === targetNode.id).length > 0;
    return !isSourceNode;
  });
  const leafLinks = links.filter((link): boolean =>
    allLeafNodes.some((leafNode): boolean => leafNode.id === link.target.id),
  );
  return leafLinks;
};
