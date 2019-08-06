export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of reign' | 'end of reign' | 'other' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of reign', id: 'GUSCHTASP' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of reign', id: 'FIN DU REGNE DE GUSCHTASP' },
  { name: 'Lohrasp', type: 'king', id: 'Lohrasp' },
  { name: 'Balkh', type: 'town', id: 'Balkh' },
];
