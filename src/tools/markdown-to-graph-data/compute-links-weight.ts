import { getTargetNodesOf, getNodesSetOf } from './create-nodes-from-links';
import { undefinedNode } from './undefined-node';
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
export const computeParentNodesWeightOnFirstLevel = (
  links: StoryLink[],
  allNodes: Map<string, StoryNode>,
): StoryLink[] => {
  const leafLinks = getLeafLinks(links);
  const leafWeight = 10;
  leafLinks.forEach((leafLink): void => {
    const sourceNode = allNodes.get(leafLink.source.id) || undefinedNode;
    sourceNode.weight += leafWeight;

    const targetNode = allNodes.get(leafLink.target.id) || undefinedNode;
    targetNode.weight += leafWeight;
    targetNode.isLeaf = true;
  });
  return leafLinks;
};
export const computeParentNodesWeightOnIntermediateLevel = (
  links: StoryLink[],
  allNodes: Map<string, StoryNode>,
): StoryLink[] => {
  const leafLinks = getLeafLinks(links);
  const leafNodes = getTargetNodesOf(leafLinks);

  leafNodes.forEach((leafNode): void => {
    const linksToLeafNode = links.filter((link): boolean => link.target.id === leafNode.id);
    linksToLeafNode.forEach((linkToLeafNode): void => {
      const sourceNode = allNodes.get(linkToLeafNode.source.id) || undefinedNode;
      const targetNode = allNodes.get(linkToLeafNode.target.id) || undefinedNode;
      sourceNode.weight += targetNode.weight / linksToLeafNode.length;
    });
  });
  return leafLinks;
};
export const computeParentNodesWeightOnLeaves = (
  links: StoryLink[],
  allNodes: Map<string, StoryNode>,
  iterationIndex: number,
): StoryLink[] => {
  return iterationIndex === 1
    ? computeParentNodesWeightOnFirstLevel(links, allNodes)
    : computeParentNodesWeightOnIntermediateLevel(links, allNodes);
};
export const computeLinksWeight = (links: StoryLink[]): void => {
  let linksToProcess = [...links];
  const allNodes = getNodesSetOf(links);

  let iterationIndex = 0;
  while (linksToProcess.length > 0) {
    iterationIndex += 1;
    const processedLinks = computeParentNodesWeightOnLeaves(
      linksToProcess,
      allNodes,
      iterationIndex,
    );
    if (processedLinks.length === 0) {
      break;
    }
    linksToProcess = linksToProcess.filter((link): boolean => {
      const isProcessed = processedLinks.some(
        (processedLink): boolean =>
          processedLink.source.id === link.source.id && processedLink.target.id === link.target.id,
      );

      return !isProcessed;
    });
  }

  links.forEach((link): void => {
    const linksToSameTarget = links.filter((l): boolean => l.target.id === link.target.id);
    const targetNode = allNodes.get(link.target.id) || undefinedNode;

    linksToSameTarget.length > 1
      ? (link.weight = targetNode.weight / linksToSameTarget.length)
      : (link.weight = targetNode.weight);
  });
};
