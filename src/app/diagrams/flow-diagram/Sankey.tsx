import { downloadSvg } from './download-svg';
import { renderD3 } from './render-d3';
import { GraphNodeProps } from '../../data/graph-nodes';
import { GraphLinkProps } from '../../data/graph-links';
import React, { ReactElement, useEffect, useRef } from 'react';
import { SankeyGraph } from 'd3-sankey';

export interface ChartProps {
  width: number;
  height: number;
  textColor: string;
  margin: ChartMargins;
  data: SankeyGraph<GraphNodeProps, GraphLinkProps>;
}

export interface ChartMargins {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const Sankey: React.FunctionComponent<ChartProps> = (chartProps): ReactElement | null => {
  const d3Container = useRef(null);

  useEffect((): void => renderD3(d3Container, chartProps), [d3Container, chartProps]);

  const onDownloadSvg: () => void = (): void => downloadSvg(d3Container);

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${chartProps.width} ${chartProps.height}`}
          height="400"
          preserveAspectRatio="slice"
          ref={d3Container}
        />
      </div>
      <button onClick={onDownloadSvg}>download svg</button>
    </>
  );
};
