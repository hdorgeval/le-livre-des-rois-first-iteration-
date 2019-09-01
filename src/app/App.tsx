import { Sankey, ChartProps } from './diagrams/flow-diagram/Sankey';
import { graphNodes, GraphNodeProps } from './data/graph-nodes';
import { graphLinks, GraphLinkProps } from './data/graph-links';

import { graphMetadata } from './data/graph-metadata';
import * as React from 'react';
import { SankeyGraph } from 'd3-sankey';

export interface AppProps {
  name: string;
}

const data: SankeyGraph<GraphNodeProps, GraphLinkProps> = {
  links: graphLinks,
  nodes: graphNodes,
};

const storyLength = graphMetadata.storyLength;

const chartProps: ChartProps = {
  data,
  height: 600,
  margin: {
    bottom: 30,
    left: 30,
    right: 30,
    top: 30,
  },
  textColor: 'black',
  width: 250 * storyLength,
};
// eslint-disable-next-line react/prop-types
export const App: React.FunctionComponent<AppProps> = ({ name }): React.ReactElement | null => {
  return (
    <div>
      <h1>{name}</h1>
      <Sankey {...chartProps} />
    </div>
  );
};
