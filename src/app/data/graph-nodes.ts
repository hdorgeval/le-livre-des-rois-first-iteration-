
export interface GraphNodeProps {
  id: string;
  level: number;
  name: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root', level: 0 },
  { name: 'episode 1', type: 'unknown', id: 'aaccc2e6-0f0f-4efb-8980-20e671ebb34c', level: 1 },
  { name: 'episode 2', type: 'unknown', id: '82836361-d0af-4541-af4e-78b5508c316d', level: 1 },
  { name: 'episode 3', type: 'unknown', id: 'd839ec41-611f-4f6d-94e3-e8fdfd2dc825', level: 1 },
];
