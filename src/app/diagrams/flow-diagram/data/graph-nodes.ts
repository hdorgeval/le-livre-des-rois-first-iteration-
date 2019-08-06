
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of period', id: 'e930a205-a45c-43ed-aa48-42c36b5a3140' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of period', id: '21a25eb8-75d0-4420-b990-82f0f267a7a3' },
  { name: 'LOHRASP', type: 'unknown', id: 'cf78f47f-24ff-483c-b904-f7a0bf74b9b7' },
  { name: 'Balkh', type: 'unknown', id: '051e1d05-2021-4a4a-a1cf-d92cb3f3c802' },
  { name: 'temple du Noubehar', type: 'unknown', id: '10a5597b-b002-49b9-9bce-3a3eaa3358d2' },
  { name: 'prêtre', type: 'unknown', id: '3d610306-08b7-4a5e-8bc0-6f1ad8da46d0' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '8b270442-1542-4c9a-9673-9a7978425173' },
];
