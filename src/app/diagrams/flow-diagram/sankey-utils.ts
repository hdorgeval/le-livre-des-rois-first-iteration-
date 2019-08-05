import { GraphNodeProps } from './data/graph-nodes';
import { GraphLinkProps } from './data/graph-links';
import { SankeyNode, SankeyLink } from 'd3-sankey';

/**
 * get the node’s minimum horizontal position, derived from node.depth
 * @param d : graph node
 */
export const nodeX0 = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): number => {
  const result = d.x0 || 0;
  return result;
};

/**
 * get the node’s minimum vertical position
 * @param d : graph node
 */
export const nodeY0 = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): number => {
  const result = d.y0 || 0;
  return result;
};

/**
 * get the node’s height
 * @param d : graph node
 */
export const nodeHeight = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): number => {
  const y1 = d.y1 || 24;
  const y0 = d.y0 || 0;
  return y1 - y0;
};

export const nodeWidth = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): number => {
  const defaultWidth = 24;
  if (d.type === 'end of reign') {
    return defaultWidth * 2;
  }
  if (d.type === 'start of reign') {
    return defaultWidth * 2;
  }

  return defaultWidth;
};

/**
 * get the node’s name
 * @param d : graph node
 */
export const nodeName = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): string => {
  return d.name;
};

/**
 * create a GUID to reference gradient
 * @param d
 */
export const gradientGuid = (d: SankeyLink<GraphNodeProps, GraphLinkProps>): string => {
  const source = (d.source as SankeyNode<GraphNodeProps, GraphLinkProps>).name;
  const target = (d.target as SankeyNode<GraphNodeProps, GraphLinkProps>).name;
  const sanitizedSource = source.replace(/[\s']/gi, '');
  const sanitizedTarget = target.replace(/[\s']/gi, '');
  return `${sanitizedSource}${sanitizedTarget}`;
};

/**
 * get X position on the graph of the node's name
 * @param d
 */
export const nameX = (
  d: SankeyNode<GraphNodeProps, GraphLinkProps>,
  chartWidth: number,
): number => {
  const x0 = d.x0 || 0;
  const x1 = d.x1 || 0;
  const result = x0 < chartWidth / 2 ? x1 + 10 : x0 - 5;
  return result;
};

/**
 * get Y position on the graph of the node's name
 * @param d
 */
export const nameY = (d: SankeyNode<GraphNodeProps, GraphLinkProps>): number => {
  const y0 = d.y0 || 0;
  const y1 = d.y1 || 0;
  const result = (y0 + y1) / 2;
  return result;
};

/**
 * get Anchor on the graph of the node's name
 * @param d
 */
export const nameAnchor = (
  d: SankeyNode<GraphNodeProps, GraphLinkProps>,
  chartWidth: number,
): string => {
  if (d.type === 'end of reign' || d.type === 'start of reign') {
    return 'start';
  }
  const x0 = d.x0 || 0;
  const result = x0 < chartWidth / 2 ? 'start' : 'end';
  return result;
};

export const nameTransform = (
  d: SankeyNode<GraphNodeProps, GraphLinkProps>,
  chartWidth: number,
): string => {
  const nodeType = d.type;
  const x0 = d.x0 || 0;
  const offsetY = x0 < chartWidth / 2 ? 0 : +nodeWidth(d) / 2;
  let transform = ';';
  switch (nodeType) {
    case 'start of reign':
    case 'end of reign':
      transform = `rotate(-90,${nameX(d, chartWidth) + offsetY},${nameY(d)})`;
      break;

    default:
      break;
  }

  return transform;
};
