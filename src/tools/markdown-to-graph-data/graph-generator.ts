import { readAllLinesInFile } from '../fs/read-all-lines-in-file';
import { StoryLink, StoryData, StoryNode } from '../../story-types';
import uuid from 'uuid/v4';
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
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/#/gi, '').trim(),
        type: 'unknown',
      };
      links.push({
        weight: 20,
        source: { id: 'root', type: 'start of period', name: '' },
        target: targetNode,
      });
      parentNodes.set('#', targetNode);
      previousLevel = '#';
      return;
    }

    if (line.startsWith('## ')) {
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/##/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('##', targetNode);
      links.push({
        weight: 20,
        source: { ...(parentNodes.get('#') || { id: 'foo', type: 'unknown', name: 'bar' }) },
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
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/>/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('>', targetNode);
      links.push({
        weight: 20,
        source: {
          ...(parentNodes.get(previousLevel) || { id: 'foo', type: 'unknown', name: 'bar' }),
        },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > ') && !line.startsWith('> > >') && !line.startsWith('> > > >')) {
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/>/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('>>', targetNode);
      links.push({
        weight: 20,
        source: { ...(parentNodes.get('>') || { id: 'foo', type: 'unknown', name: 'bar' }) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > > ') && !line.startsWith('> > > >')) {
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/>/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('>>>', targetNode);
      links.push({
        weight: 20,
        source: { ...(parentNodes.get('>>') || { id: 'foo', type: 'unknown', name: 'bar' }) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('> > > > ') && !line.startsWith('> > > > >')) {
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/>/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('>>>>', targetNode);
      links.push({
        weight: 20,
        source: { ...(parentNodes.get('>>>') || { id: 'foo', type: 'unknown', name: 'bar' }) },
        target: targetNode,
      });
      return;
    }

    if (line.startsWith('### ')) {
      const targetNode: StoryNode = {
        id: uuid(),
        name: line.replace(/###/gi, '').trim(),
        type: 'unknown',
      };
      parentNodes.set('###', targetNode);

      const leafNodes = getAllLeavesOf(parentNodes.get('##'), links);
      leafNodes.forEach((leafNode): number =>
        links.push({
          weight: 20,
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
export const createNodesFrom = (links: StoryLink[]): StoryNode[] => {
  const mapNodes = new Map<string, StoryNode>();
  links.forEach((link): void => {
    mapNodes.set(link.source.id, link.source);
    mapNodes.set(link.target.id, link.target);
  });

  const nodes = Array.from(mapNodes.values());
  return nodes;
};
export const setLinksWeight = (links: StoryLink[], nodes: StoryNode[]): void => {
  const clonedNodes = [...nodes];
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const node = clonedNodes.pop();
    if (node === undefined) {
      return;
    }

    const nodeLinks = links.filter((link): boolean => link.source.id === node.id);
    if (nodeLinks.length === 0) {
      continue;
    }

    const cumulatedWeightOfNodeChildren = nodeLinks
      .map((link): number => link.weight)
      .reduce((previousValue, currentValue): number => previousValue + currentValue, 0);

    const parentLinks = links.filter((link): boolean => link.target.id === node.id);
    if (parentLinks.length == 0) {
      continue;
    }
    const parentLink = parentLinks.shift();
    const cumulatedWeightOfImplicitLinks = parentLinks
      .map((link): number => link.weight)
      .reduce((previousValue, currentValue): number => previousValue + currentValue, 0);

    if (parentLink === undefined) {
      continue;
    }
    parentLink.weight = cumulatedWeightOfNodeChildren - cumulatedWeightOfImplicitLinks;
  }
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
          weight: 20,
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

  const links: StoryLink[] = [];

  links.push(...getStoryLinks(story));

  const nodes = createNodesFrom(links);
  links.push(...getImplicitLinks(nodes));
  setLinksWeight(links, nodes);
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
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}
`;
  const graphNodesTsLines: string[] = [];
  graphNodesTsLines.push(graphNodeProps);
  graphNodesTsLines.push(`export const graphNodes: GraphNodeProps[] = [`);
  graphData.nodes.forEach((node): void => {
    graphNodesTsLines.push(`  { name: '${node.name}', type: '${node.type}', id: '${node.id}' },`);
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
