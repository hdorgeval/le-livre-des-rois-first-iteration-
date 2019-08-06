export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: 'GUSCHTASP', target: 'FIN DU REGNE DE GUSCHTASP', value: 600 },
  { source: 'GUSCHTASP', target: 'Lohrasp', value: 10 },
  { source: 'Lohrasp', target: 'Balkh', value: 10 },
  { source: 'Balkh', target: 'FIN DU REGNE DE GUSCHTASP', value: 10 },
];
