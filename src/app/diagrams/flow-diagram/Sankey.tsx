import { downloadSvg } from './download-svg';
import { renderD3 } from './render-d3';
import React, { ReactElement, useEffect, useRef } from 'react';

export interface ChartProps {
  width: number;
  height: number;
  textColor: string;
  margin: ChartMargins;
}

export interface ChartMargins {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const Sankey: React.FunctionComponent<ChartProps> = (chartProps): ReactElement | null => {
  const d3Container = useRef(null);

  useEffect((): void => renderD3(d3Container, chartProps), [d3Container, chartProps, chartProps]);

  const onDownloadSvg: () => void = (): void => downloadSvg(d3Container);

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={chartProps.width}
          height={chartProps.height}
          ref={d3Container}
        />
      </div>
      <button onClick={onDownloadSvg}>download svg</button>
    </>
  );
};
