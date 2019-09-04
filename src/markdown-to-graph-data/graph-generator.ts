import { extractNameFrom } from './extract-node-name-from-line';
import { createDefaultNode } from './create-default-node';
import { rootNode } from './root-node';
import { undefinedNode } from './undefined-node';
import { removeRootLinksOnChildLinks } from './remove-root-link-on-child-link';
import { computeLinksWeight } from './compute-links-weight';
import { getNodesOf } from './create-nodes-from-links';
import { getStoryLengthOf } from './get-story-length';
import { StoryNode, StoryLink, StoryData } from './story-types';
import { getImplicitLinksByMatchingEndOfName } from './get-implicit-links-between-nodes';
import { reorderLinksByMatchingBeforeKeyword } from './reorder-links';
import { readAllLinesInFile } from '../tools/fs/read-all-lines-in-file';
import { PathLike, writeFileSync } from 'fs';
import { dirname } from 'path';
import { EOL } from 'os';

export const getAllLeavesOf = (node: StoryNode | undefined, links: StoryLink[]): StoryNode[] => {
  if (node === undefined) {
    return [];
  }
  const allLeafNodes: StoryNode[] = [];
  const allRootNodes: StoryNode[] = [node];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (allRootNodes.length === 0) {
      return allLeafNodes;
    }

    const rootNode = allRootNodes.shift();
    if (rootNode === undefined) {
      continue;
    }

    const targetNodes = links
      .filter((link): boolean => link.source.id === rootNode.id)
      .map((link): StoryNode => link.target);
    const leafNodes = targetNodes.filter((targetNode): boolean =>
      links.every((link): boolean => link.source.id !== targetNode.id),
    );

    if (leafNodes.length === 0) {
      allLeafNodes.push(rootNode);
      continue;
    }

    leafNodes.forEach((leafNode): number => allLeafNodes.push(leafNode));

    const rootNodes = targetNodes.filter((targetNode): boolean =>
      links.some((link): boolean => link.source.id === targetNode.id),
    );

    allRootNodes.push(...rootNodes);
  }
};

export const getStoryLinks = (story: string[]): StoryLink[] => {
  const links: StoryLink[] = [];

  const parentNodes = new Map<string, StoryNode>();
  let previousLevel = '.';
  story.forEach((line): void => {
    if (line.startsWith('# ')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = 1;
      links.push({
        weight: 0,
        source: rootNode,
        target: targetNode,
      });
      parentNodes.set('#', targetNode);
      previousLevel = '#';
      return;
    }

    if (line.startsWith('## ')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = 2;

      parentNodes.set('##', targetNode);
      links.push({
        weight: 0,
        source: {
          ...(parentNodes.get('#') || undefinedNode),
        },
        target: targetNode,
      });
      previousLevel = '##';
      return;
    }

    if (
      line.startsWith('> ') &&
      !line.startsWith('> >') &&
      !line.startsWith('> > >') &&
      !line.startsWith('> > > >')
    ) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = previousLevel.length + 1;
      parentNodes.set('>', targetNode);
      links.push({
        weight: 0,
        source: {
          ...(parentNodes.get(previousLevel) || undefinedNode),
        },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > ') && !line.startsWith('> > >') && !line.startsWith('> > > >')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = previousLevel.length + 2;
      parentNodes.set('>>', targetNode);
      links.push({
        weight: 0,
        source: { ...(parentNodes.get('>') || undefinedNode) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > > ') && !line.startsWith('> > > >')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = previousLevel.length + 3;
      parentNodes.set('>>>', targetNode);
      links.push({
        weight: 0,
        source: { ...(parentNodes.get('>>') || undefinedNode) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > > > ') && !line.startsWith('> > > > >')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = previousLevel.length + 4;
      parentNodes.set('>>>>', targetNode);
      links.push({
        weight: 0,
        source: { ...(parentNodes.get('>>>') || undefinedNode) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('### ')) {
      const nodeName = extractNameFrom(line);
      const targetNode: StoryNode = createDefaultNode(nodeName, links);
      targetNode.level = 3;
      parentNodes.set('###', targetNode);

      const leafNodes = getAllLeavesOf(parentNodes.get('##'), links);
      leafNodes.forEach((leafNode): number =>
        links.push({
          weight: 0,
          source: {
            ...leafNode,
          },
          target: targetNode,
        }),
      );
      previousLevel = '###';
      return;
    }
  });

  return links;
};

export const remove = (
  nodesToRemove: StoryNode[],
): { from: (nodes: StoryNode[]) => StoryNode[] } => {
  return {
    from: (nodes: StoryNode[]): StoryNode[] => {
      return nodes.filter(
        (node): boolean =>
          !nodesToRemove.some((nodeToRemove): boolean => nodeToRemove.id === node.id),
      );
    },
  };
};

export const createGraphDataFrom = (storyFile: PathLike | undefined): StoryData => {
  if (storyFile === undefined) {
    throw new Error('Story file is undefined');
  }

  const story = readAllLinesInFile(storyFile)
    .map((line): string => line.trim())
    .filter((line): boolean => line.length > 0);

  const allLinks: StoryLink[] = [];

  allLinks.push(...getStoryLinks(story));

  const allNodes = getNodesOf(allLinks);
  allLinks.push(...getImplicitLinksByMatchingEndOfName(allNodes));
  const { orderedLinks, nodesToRemove } = reorderLinksByMatchingBeforeKeyword(allNodes, allLinks);
  const links = removeRootLinksOnChildLinks(orderedLinks);
  const nodes = remove(nodesToRemove).from(allNodes);
  computeLinksWeight(links);

  return {
    nodes,
    links,
  };
};

export const convertMarkdownToGraphData = (
  storyFile: PathLike,
  targetDirectory = `${dirname(storyFile.toString())}`,
): void => {
  const graphData = createGraphDataFrom(storyFile);
  const graphNodeProps = `
export interface GraphNodeProps {
  id: string;
  level: number;
  name: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}
`;
  const graphNodesTsLines: string[] = [];
  graphNodesTsLines.push(graphNodeProps);
  graphNodesTsLines.push(`export const graphNodes: GraphNodeProps[] = [`);
  graphData.nodes.forEach((node): void => {
    const line = node.name.includes("'")
      ? `  { name: "${node.name}", type: '${node.type}', id: '${node.id}', level: ${node.level} },`
      : `  { name: '${node.name}', type: '${node.type}', id: '${node.id}', level: ${node.level} },`;

    graphNodesTsLines.push(line);
  });
  graphNodesTsLines.push(`];`);
  graphNodesTsLines.push(``);

  const graphNodeTsContent = graphNodesTsLines.join(EOL);
  writeFileSync(`${targetDirectory}/graph-nodes.ts`, graphNodeTsContent);

  const graphLinksTsLines: string[] = [];

  const graphLinkProps = `
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}
`;
  graphLinksTsLines.push(graphLinkProps);
  graphLinksTsLines.push(`export const graphLinks: GraphLinkProps[] = [`);

  graphData.links.forEach((link): void => {
    graphLinksTsLines.push(
      `  { source: '${link.source.id}', target: '${link.target.id}', value: ${link.weight} },`,
    );
  });
  graphLinksTsLines.push(`];`);
  graphLinksTsLines.push(``);

  const graphLinksTsContent = graphLinksTsLines.join(EOL);
  writeFileSync(`${targetDirectory}/graph-links.ts`, graphLinksTsContent);

  const storyLength = getStoryLengthOf(graphData.links);

  const graphMetadataProps = `
export interface GraphMetadataProps {
  storyLength: number;
}
`;

  const graphMetadataTsLines: string[] = [];
  graphMetadataTsLines.push(graphMetadataProps);
  graphMetadataTsLines.push(`export const graphMetadata: GraphMetadataProps = {`);
  graphMetadataTsLines.push(`  storyLength: ${storyLength},`);
  graphMetadataTsLines.push(`};`);
  graphMetadataTsLines.push(``);
  const graphMetadataTsContent = graphMetadataTsLines.join(EOL);
  writeFileSync(`${targetDirectory}/graph-metadata.ts`, graphMetadataTsContent);
};
