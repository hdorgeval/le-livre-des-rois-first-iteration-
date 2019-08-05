import { Sankey, ChartProps } from './diagrams/flow-diagram/Sankey';
import * as React from 'react';

export interface AppProps {
  name: string;
}

const chartProps: ChartProps = {
  width: 1000,
  height: 600,
  textColor: 'black',
  margin: {
    bottom: 30,
    left: 30,
    right: 30,
    top: 30,
  },
};
// eslint-disable-next-line react/prop-types
export const App: React.FunctionComponent<AppProps> = ({ name }): React.ReactElement | null => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <Sankey {...chartProps} />
    </div>
  );
};
