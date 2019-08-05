export interface GraphNodeProps {
  name: string;
  type: 'start of reign' | 'end of reign' | 'other' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of reign' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of reign' },
  { name: 'Lohrasp', type: 'king' },
  { name: 'Balkh', type: 'town' },
];
