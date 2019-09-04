import { StoryNode, StoryLink } from '../markdown-to-graph-data';

const sentence = (sentenceA: string): { nearlyMatches: (sentenceB: string) => boolean } => {
  return {
    nearlyMatches: (sentenceB: string): boolean => {
      return sentenceA.startsWith(sentenceB) || sentenceA.endsWith(sentenceB);
    },
  };
};

export const reorderLinksByMatchingBeforeKeyword = (
  nodes: StoryNode[],
  links: StoryLink[],
): { orderedLinks: StoryLink[]; nodesToRemove: StoryNode[] } => {
  let orderedLinks: StoryLink[] = [...links];
  const nodesToRemove: StoryNode[] = [];
  nodes.forEach((node): void => {
    nodes
      .filter(
        (referencedNode): boolean =>
          referencedNode.name.startsWith('After') &&
          referencedNode.name !== node.name &&
          node.id !== 'root' &&
          sentence(referencedNode.name).nearlyMatches(`After ${node.name}`),
      )
      .forEach((referencedNode): void => {
        // relink the nodes
        orderedLinks
          .filter((link): boolean => link.source.id === referencedNode.id)
          .forEach((link): void => {
            nodesToRemove.push(link.source);
            link.source = node;
          });
        orderedLinks = orderedLinks.filter((link): boolean => link.target.id !== referencedNode.id);
      });
  });

  return { orderedLinks, nodesToRemove };
};
