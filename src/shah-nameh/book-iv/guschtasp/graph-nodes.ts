
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: 'GUSCHTASP', type: 'start of period', id: '1ca49a0b-09eb-4936-a727-afe59710fefe' },
  { name: 'FIN DU REGNE DE GUSCHTASP', type: 'end of period', id: '0a5d6817-1aff-44db-80da-04c429f31cb6' },
  { name: 'LOHRASP', type: 'unknown', id: 'a4b1dccc-3f04-47a8-96aa-b5e6a8cb2f48' },
  { name: 'Balkh', type: 'unknown', id: '83ad240a-8ccb-4153-8a50-7e96b86c297c' },
  { name: 'temple du Noubehar', type: 'unknown', id: '101fa441-bbe7-4ab0-81bb-e37008e5efeb' },
  { name: 'prêtre', type: 'unknown', id: '4e6925df-f722-4aea-9f2b-b5530b877892' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: 'd91a6d51-acce-4457-91ff-3fc98e952a2c' },
];
