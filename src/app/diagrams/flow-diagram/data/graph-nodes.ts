export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of period', id: '3c0617e3-843c-48ab-b335-8dedf3b29846' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of period', id: '69d39aa0-73c8-470a-8326-0a139ecf748f' },
  { name: 'LOHRASP', type: 'unknown', id: 'a953d81c-a8f2-44c6-af2e-9d74d080157b' },
  { name: 'Balkh', type: 'unknown', id: '2f28397f-bb05-4334-9757-297da298dd50' },
  { name: 'temple du Noubehar', type: 'unknown', id: '0800b768-b81e-4d82-a23c-261e12666a25' },
  { name: 'prêtre', type: 'unknown', id: '598751d7-fd3b-4015-bb47-db9618b8b557' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '40f37b26-2495-47fe-90ae-dc5f26cfe3c8' },
];
