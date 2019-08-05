export interface GraphLinkProps {
  value: number;
  source: number;
  target: number;
}

export const graphLinks: GraphLinkProps[] = [
  { source: 0, target: 1, value: 600 },
  { source: 0, target: 2, value: 10 },
  { source: 2, target: 3, value: 10 },
  { source: 3, target: 1, value: 10 },
];
