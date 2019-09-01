
export interface GraphNodeProps {
  id: string;
  level: number;
  name: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root', level: 0 },
  { name: 'episode 1', type: 'unknown', id: '572d124a-5576-472d-a4f2-ba040057ee3c', level: 1 },
  { name: 'episode 2', type: 'unknown', id: 'f9f9eb8d-3ff1-47cb-a580-e588cecd5518', level: 1 },
  { name: 'episode 3', type: 'unknown', id: '68270d42-f981-40d8-86dd-fb9ea4371556', level: 1 },
];
