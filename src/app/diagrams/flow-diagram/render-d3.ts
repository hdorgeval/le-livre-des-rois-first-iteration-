import { graphNodes, GraphNodeProps } from './data/graph-nodes';
import { graphLinks, GraphLinkProps } from './data/graph-links';
import { ChartProps } from './Sankey';
import {
  nodeX0,
  nodeY0,
  nodeHeight,
  nodeName,
  gradientGuid,
  nameX,
  nameY,
  nameAnchor,
  nameTransform,
  nodeWidth,
  nodeId,
} from './sankey-utils';
import * as d3 from 'd3';
import {
  sankey,
  SankeyGraph,
  sankeyLinkHorizontal,
  sankeyJustify,
  SankeyNode,
  SankeyNodeMinimal,
} from 'd3-sankey';

export const renderD3 = (
  d3Container: React.MutableRefObject<null>,
  chartProps: ChartProps,
): void => {
  if (d3Container.current === undefined || d3Container.current === null) {
    return;
  }
  const drawingArea = {
    // compute the inner width
    width: chartProps.width - chartProps.margin.left - chartProps.margin.right,
    // compute inner height
    height: chartProps.height - chartProps.margin.top - chartProps.margin.bottom,
  };
  const sankeyGenerator = sankey<GraphNodeProps, GraphLinkProps>()
    .nodeAlign(sankeyJustify)
    .nodeId(nodeId)
    .nodeWidth(15)
    .nodePadding(10)
    .extent([
      [chartProps.margin.left, chartProps.margin.top],
      [drawingArea.width, drawingArea.height],
    ]);

  const sankeyData: SankeyGraph<GraphNodeProps, GraphLinkProps> = {
    nodes: graphNodes,
    links: graphLinks,
  };

  const graph: SankeyGraph<GraphNodeProps, GraphLinkProps> = sankeyGenerator(sankeyData);
  const svg = d3.select(d3Container.current);
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(graphNodes.map((n: GraphNodeProps): string => n.name))
    .range(['gold', 'blue', 'green', 'yellow', 'grey', 'darkgreen', 'pink', 'slateblue']);
  const color = (name: string): string => {
    const sanitizedName = name.replace(/\s/gi, '');
    return colorScale(sanitizedName);
  };

  // generate nodes
  svg
    .append('g')
    .attr('stroke', '#000')
    .selectAll('rect')
    .data(graph.nodes)
    .join('rect')
    .attr('x', (d): number => nodeX0(d))
    .attr('y', (d): number => nodeY0(d))
    .attr('height', (d): number => nodeHeight(d))
    .attr('width', (d): number => nodeWidth(d))
    .attr('fill', (d): string => color(nodeName(d)))
    .append('title')
    .text((d): string => `${nodeName(d)}`);

  // generate links
  const links = svg
    .append('g')
    .attr('fill', 'none')
    .attr('stroke-opacity', 0.5)
    .selectAll('g')
    .data(graph.links)
    .join('g')
    .style('mix-blend-mode', 'multiply');

  const gradients = links
    .append('linearGradient')
    .attr('id', (d): string => gradientGuid(d))
    .attr('gradientUnits', 'userSpaceOnUse')
    .attr(
      'x1',
      (d): number => (d.source as SankeyNodeMinimal<GraphNodeProps, GraphLinkProps>).x1 || 0,
    )
    .attr(
      'x2',
      (d): number => (d.target as SankeyNodeMinimal<GraphNodeProps, GraphLinkProps>).x0 || 50,
    );

  gradients
    .append('stop')
    .attr('offset', '0%')
    .attr('stop-color', (d): string =>
      color(nodeName(d.source as SankeyNode<GraphNodeProps, GraphLinkProps>)),
    );

  gradients
    .append('stop')
    .attr('offset', '100%')
    .attr('stop-color', (d): string =>
      color(nodeName(d.target as SankeyNode<GraphNodeProps, GraphLinkProps>)),
    );

  links
    .append('path')
    .attr('d', sankeyLinkHorizontal())
    .attr('stroke', (d): string => `url(#${gradientGuid(d)})`)
    .attr('stroke-width', (d): number => Math.max(1, Number(d.width)));

  svg
    .append('g')
    .style('font', '10px sans-serif')
    .selectAll('text')
    .data(graph.nodes)
    .join('text')
    .attr('x', (d): number => nameX(d, chartProps.width))
    .attr('y', (d): number => nameY(d))
    .attr('dy', '0.35em')
    .attr('text-anchor', (d): string => nameAnchor(d, chartProps.width))
    .attr('fill', chartProps.textColor)
    .attr('font-weight', 'bold')
    .attr('transform', (d): string => nameTransform(d, chartProps.width))
    .text((d): string => nodeName(d));
};
