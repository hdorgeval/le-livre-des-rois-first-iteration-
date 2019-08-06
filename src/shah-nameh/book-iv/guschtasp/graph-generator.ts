import { readAllLinesInFile } from '../../../tools/fs/read-all-lines-in-file';
import { StoryLink, StoryNode } from '../../../story-types';
import uuid from 'uuid/v4';
import { writeFileSync } from 'fs';
import { EOL } from 'os';
const storyFile = `${__dirname}/story.fr.md`;
const story = readAllLinesInFile(storyFile)
  .map((line): string => line.trim())
  .filter((line): boolean => line.length > 0);

// extract boundaries
const boundaries = story
  .map((line: string): string => line.trim())
  .filter((line): boolean => line.startsWith('# '));

const links: StoryLink[] = [];
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

links.push(boundaryLink);

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

const mapNodes = new Map<string, StoryNode>();
links.forEach((link): void => {
  mapNodes.set(link.source.id, link.source);
  mapNodes.set(link.target.id, link.target);
});

const nodes = Array.from(mapNodes.values());

const graphNodeProps = `
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}
`;

const graphNodesTsLines: string[] = [];
graphNodesTsLines.push(`/* eslint-disable prettier/prettier */`);
graphNodesTsLines.push(graphNodeProps);
graphNodesTsLines.push(`export const graphNodes: GraphNodeProps[] = [`);
nodes.forEach((node): void => {
  graphNodesTsLines.push(`  { name: '${node.name}', type: '${node.type}', id: '${node.id}' },`);
});
graphNodesTsLines.push(`];`);
graphNodesTsLines.push(``);

const graphNodeTsContent = graphNodesTsLines.join(EOL);
writeFileSync(`${__dirname}/graph-nodes.ts`, graphNodeTsContent);

const graphLinksTsLines: string[] = [];
graphLinksTsLines.push(`/* eslint-disable prettier/prettier */`);

const graphLinkProps = `
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}
`;
graphLinksTsLines.push(graphLinkProps);
graphLinksTsLines.push(`export const graphLinks: GraphLinkProps[] = [`);

links.forEach((link): void => {
  graphLinksTsLines.push(
    `  { source: '${link.source.id}', target: '${link.target.id}', value: ${link.weight} },`,
  );
});
graphLinksTsLines.push(`];`);
graphLinksTsLines.push(``);

const graphLinksTsContent = graphLinksTsLines.join(EOL);
writeFileSync(`${__dirname}/graph-links.ts`, graphLinksTsContent);
