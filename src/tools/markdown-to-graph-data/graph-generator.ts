import { extractNameFrom } from './extract-node-name-from-line';
import { createDefaultNode } from './create-default-node';
import { rootNode } from './root-node';
import { undefinedNode } from './undefined-node';
import { removeRootLinksOnChildLinks } from './remove-root-link-on-child-link';
import { computeLinksWeight } from './compute-links-weight';
import { getNodesOf } from './create-nodes-from-links';
import { readAllLinesInFile } from '../fs/read-all-lines-in-file';
import { StoryLink, StoryData, StoryNode } from '../../story-types';
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
export const getImplicitLinks = (nodes: StoryNode[]): StoryLink[] => {
  const implicitLinks: StoryLink[] = [];
  nodes.forEach((node): void => {
    nodes
      .filter(
        (referencedNode): boolean =>
          referencedNode.name.endsWith(node.name) &&
          referencedNode.name !== node.name &&
          node.id !== 'root',
      )
      .forEach((referencedNode): void => {
        implicitLinks.push({
          weight: 0,
          source: referencedNode,
          target: node,
        });
      });
  });
  return implicitLinks;
};
export const createGraphDataFrom = (storyFile: PathLike): StoryData => {
  const story = readAllLinesInFile(storyFile)
    .map((line): string => line.trim())
    .filter((line): boolean => line.length > 0);

  const allLinks: StoryLink[] = [];

  allLinks.push(...getStoryLinks(story));

  const nodes = getNodesOf(allLinks);
  allLinks.push(...getImplicitLinks(nodes));
  const links = removeRootLinksOnChildLinks(allLinks);
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
    graphNodesTsLines.push(
      `  { name: '${node.name}', type: '${node.type}', id: '${node.id}', level: ${node.level} },`,
    );
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
};
