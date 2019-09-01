
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'episode 1', type: 'unknown', id: '95fb18c9-608a-469c-a473-7728fbe941ce' },
  { name: 'episode 2', type: 'unknown', id: '5b89f468-cff5-4cc7-a892-02b5c03c6bf5' },
  { name: 'episode 3', type: 'unknown', id: '575b6321-4f1d-4951-a6bd-1e057007e362' },
];
