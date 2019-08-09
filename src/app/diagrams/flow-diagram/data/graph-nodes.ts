
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: 'cee6ebb7-f8b4-4a17-823a-badcd12034d6' },
  { name: 'se rend à Balkh', type: 'unknown', id: '99fb4dbb-e51a-4069-8e4f-397ae422f8ed' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: '204c3621-928b-49af-8af5-93d74e1bb59a' },
  { name: 'ferme le temple', type: 'unknown', id: '05a419d9-6b5c-49f2-b619-466b6421e9e7' },
  { name: 'devient prêtre', type: 'unknown', id: '037d2bc6-81f6-4966-9ff9-2e7b8f89ac47' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '378c8ed0-3a6b-4ceb-b637-658970761d9d' },
  { name: 'GUSCHTASP', type: 'unknown', id: '6730e17f-03d8-41fa-8ea0-f265affea0e5' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: '5e690add-aaa4-43c4-b0df-581b87b647b8' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: '1ddf2767-b845-47c7-b98d-9b4343643d77' },
  { name: 'rend la justice', type: 'unknown', id: '1bb924d7-75c0-4e2b-8475-7b7b09ac906a' },
  { name: 'soumet le monde', type: 'unknown', id: '2ab0cb40-f9bb-46bb-bc12-a9a574e5b00a' },
  { name: 'Kitaboun', type: 'unknown', id: '88c8391b-0279-45b1-849f-64322e28c97e' },
];
