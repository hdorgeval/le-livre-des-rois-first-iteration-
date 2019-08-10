
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: '190c30e9-e859-4396-9c1a-b7cbc6884a00' },
  { name: 'se rend à Balkh', type: 'unknown', id: '783c283f-3311-40f1-80bf-b813067fef37' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: 'b3df914b-e816-464d-b300-d7263df163d0' },
  { name: 'devient prêtre', type: 'unknown', id: '998b9985-d0f9-4c8f-ab4e-1bf27fd8b23e' },
  { name: 'ferme le temple', type: 'unknown', id: 'ba2de91f-9476-4d6b-b6cf-7c790c2fd3a0' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '0c020c3b-6319-410c-bbea-412e1092c1fa' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: 'a6685ca1-9854-4a9a-b47f-799c9cd23703' },
  { name: 'GUSCHTASP', type: 'unknown', id: 'deb1af91-8da9-4b89-805c-249d3df0e0d8' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'dbef33cd-1f1b-41b0-aa45-2f9dd9ea7e16' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: '82f0c260-abf7-48b0-9088-52c04cbd0485' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: '7284350a-a447-40a5-b20a-367ba1559e28' },
  { name: 'rend la justice', type: 'unknown', id: '22f26a98-9f5c-4eb7-b3c1-9f74ce35d5b0' },
  { name: 'soumet le monde', type: 'unknown', id: '312fe0e0-3948-4505-b188-353052900376' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '6dada1ab-b805-4ef3-9347-b2cc00af0659' },
  { name: 'Kitaboun', type: 'unknown', id: '242bb966-3b70-4f82-b230-1007abc8bdf8' },
  { name: '2 fils', type: 'unknown', id: '79300e66-7a52-47fc-91f0-bca0bb728260' },
  { name: 'Isfendiar', type: 'unknown', id: 'eef6917a-c1ce-4d80-9403-992c290f706d' },
  { name: 'Beschouten', type: 'unknown', id: '2b553e2d-867c-4359-b16a-aef6efde3552' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: '102017f6-117f-42e4-95e4-29349c62273c' },
  { name: 'paraît sur la terre', type: 'unknown', id: '30a574bd-8caa-4679-b5cb-12192776c1a5' },
  { name: 'messager du créateur du monde', type: 'unknown', id: '7ec6f712-9876-4fd4-82bf-5de5d6871328' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: '3a908f0a-281c-4a36-bc70-bfa5c7df26b0' },
];
