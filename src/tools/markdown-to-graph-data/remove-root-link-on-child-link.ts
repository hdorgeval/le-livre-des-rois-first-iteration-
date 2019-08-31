import { StoryNode, StoryLink } from '../../story-types';

export const removeRootLinksOnChildLinks = (links: StoryLink[]): StoryLink[] => {
  const rootLinks = links.filter((link): boolean => link.source.id === 'root');
  const rootNodes = rootLinks.map((link): StoryNode => link.target);

  const linkedToRootLinks = links.filter((link): boolean => {
    const childNode = link.target;
    if (link.source.id === 'root') {
      return false;
    }
    const isChildNodeLinkedToRoot =
      rootNodes.filter((rootNode): boolean => childNode.id === rootNode.id).length > 0;
    return isChildNodeLinkedToRoot;
  });

  return links.filter((link): boolean => {
    if (link.source.id !== 'root') {
      return true;
    }
    const isAlsoLinkedToChildNode =
      linkedToRootLinks.filter((rootLinked): boolean => rootLinked.target.id === link.target.id)
        .length > 0;
    if (isAlsoLinkedToChildNode) {
      return false;
    }
    return true;
  });
};
