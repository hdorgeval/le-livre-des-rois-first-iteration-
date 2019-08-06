/* eslint-disable prettier/prettier */

export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of period', id: '21083737-7d5b-426e-8268-051d077b1025' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of period', id: '2f3f6f9a-a224-4542-90d5-8e4dccb4b82d' },
  { name: 'LOHRASP', type: 'unknown', id: '4e30dfab-82d5-431a-b79b-7c220d3bc66e' },
  { name: 'Balkh', type: 'unknown', id: '4311f4d2-1ad5-4048-85c9-4a03585e9cf6' },
  { name: 'temple du Noubehar', type: 'unknown', id: '84019b69-a139-444d-9131-583bf4fca449' },
  { name: 'prêtre', type: 'unknown', id: '2d27e4c7-d3f0-41c1-ab72-9501aceb14e0' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '51e1e860-b0bf-4c74-a6eb-43cc8b184845' },
];
