import { readAllLinesInFile } from '../fs/read-all-lines-in-file';
import { StoryLink, StoryData, StoryNode } from '../../story-types';
import uuid from 'uuid/v4';
import { PathLike, writeFileSync } from 'fs';
import { dirname } from 'path';
import { EOL } from 'os';
export const getStoryBoundaries = (story: string[]): StoryLink => {
  const boundaries = story
    .map((line: string): string => line.trim())
    .filter((line): boolean => line.startsWith('# '));

  if (boundaries.length === 0) {
    throw new Error('Error: Markdown is missing heading `# H1` at the beginning of the file.');
  }
  if (boundaries.length === 1) {
    throw new Error(
      'Error: Markdown is missing heading `# H1` at the beginning or at the end of the file.',
    );
  }
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

export const getStoryLinks = (story: string[], boundaryLink: StoryLink): StoryLink[] => {
  const links: StoryLink[] = [];

  const parentNodes = new Map<string, StoryNode>();
  parentNodes.set('#', boundaryLink.source);

  story.forEach((line): void => {
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
        source: { ...(parentNodes.get('##') || { id: 'foo', type: 'unknown', name: 'bar' }) },
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

export const getLinksToEndOfPeriod = (
  nodes: StoryNode[],
  links: StoryLink[],
  boundaryLink: StoryLink,
): StoryLink[] => {
  const linksToEndOfPeriod: StoryLink[] = [];

  nodes
    .filter((node): boolean => {
      if (node.id === boundaryLink.source.id) {
        return false;
      }
      if (node.id === boundaryLink.target.id) {
        return false;
      }
      const isSourceNode =
        links
          .map((link): StoryNode => link.source)
          .map((sourceNode): string => sourceNode.id)
          .filter((sourceId): boolean => sourceId === node.id).length > 0;

      return !isSourceNode;
    })
    .forEach((node): void => {
      const linkWeight = links
        .filter((link): boolean => link.source.id === node.id || link.target.id === node.id)
        .map((link): number => link.weight)[0];
      linksToEndOfPeriod.push({
        source: node,
        target: boundaryLink.target,
        weight: linkWeight,
      });
    });

  return linksToEndOfPeriod;
};
export const createGraphDataFrom = (storyFile: PathLike): StoryData => {
  const story = readAllLinesInFile(storyFile)
    .map((line): string => line.trim())
    .filter((line): boolean => line.length > 0);

  const boundaryLink = getStoryBoundaries(story);
  const links: StoryLink[] = [];
  links.push(boundaryLink);
  links.push(...getStoryLinks(story, boundaryLink));

  const nodes = createNodesFrom(links);

  links.push(...getLinksToEndOfPeriod(nodes, links, boundaryLink));

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
