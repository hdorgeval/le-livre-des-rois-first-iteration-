
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: '1bbc8ec4-a888-4fe2-bbdd-825d2247be7c' },
  { name: 'se rend à Balkh', type: 'town', id: 'c94e7761-2be2-4ea2-998c-8f8d86b20db9' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: '1cacf088-5b16-4e24-b333-22f47037ecd0' },
  { name: 'devient prêtre', type: 'unknown', id: '80257bc8-4efc-4131-9522-a2fdd769d435' },
  { name: 'ferme le temple', type: 'unknown', id: '923fc36f-6941-407f-8bab-bc757977d880' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '877cffcc-b1c1-4d29-bfda-75022a80ec1b' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '12c99058-c3fd-4821-81cd-b77a5494f041' },
  { name: 'GUSCHTASP', type: 'unknown', id: '91f417a5-02f8-44c8-ac7b-cdf233a489f7' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'ccf3dcf2-3e15-44ca-9555-364e1d766035' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: 'b07817f5-98dd-4bdd-ae1f-3e2e33918a00' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: 'ce1ce750-c391-4792-a56c-2a0ae4402fea' },
  { name: 'a pour frère ZERIR', type: 'unknown', id: '38768201-221a-40b6-a567-2a9d1c9f2094' },
  { name: 'rend la justice', type: 'unknown', id: 'd7f06660-e56b-40de-b0a1-44560d36a96b' },
  { name: 'soumet le monde', type: 'unknown', id: '375ca84e-e1a6-49bc-ad71-e8be714b7f1a' },
  { name: 'tous les rois payent leur tribut', type: 'unknown', id: '1b6617fa-d2ed-43c0-9451-04d97e340a2e' },
  { name: 'sauf le roi ARDJASP', type: 'unknown', id: '711367b6-d6b9-483c-86ba-8f01b6a33134' },
  { name: 'Kitaboun', type: 'unknown', id: 'cf228e81-1503-41a0-99c9-81b84b4b18bc' },
  { name: '2 fils', type: 'unknown', id: '5a93d6bc-5a9e-4b05-9e5a-5c4035c05b9b' },
  { name: 'Isfendiar', type: 'unknown', id: '1efb1084-8b01-4567-a88c-8490be079565' },
  { name: 'Beschouten', type: 'unknown', id: '473f6893-abcd-440f-82a7-4df5d5a3b5a2' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: 'b94bbc40-6d3b-4d97-af4a-8b4fdf3a822f' },
  { name: 'paraît sur la terre', type: 'unknown', id: 'c1a84755-cb77-4f4e-8756-123485a64365' },
  { name: 'messager du créateur du monde', type: 'unknown', id: '7346cf45-af42-41dd-83dd-e7f8ccb122e0' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: 'a6602fe4-7e4a-4726-92bf-3e8984cea40c' },
  { name: 'ZERIR', type: 'unknown', id: '6957b8ba-c3ec-4dc0-bfd4-f25af5e674f5' },
  { name: 'ARDJASP', type: 'unknown', id: '9ab6656e-c89f-43f0-83e5-1af081d802bf' },
  { name: 'roi de Chine', type: 'unknown', id: 'c22ceb49-6109-4872-a6e1-ea1e973c7324' },
  { name: 'roi du Touran', type: 'unknown', id: '3ae43d02-08c2-40b6-b45f-33599c917622' },
  { name: 'demande à GUSCHTASP son tribut annuel', type: 'unknown', id: '183a5a42-c52d-4ed8-8a9f-7faff2bc4cce' },
  { name: 'chaque médecin', type: 'unknown', id: '55f29577-aa7c-4caf-933f-c6d9f505f0a7' },
  { name: 'se rend auprès de GUSCHTASP', type: 'unknown', id: 'cb3976aa-bd42-4c19-b27c-a467f562ce76' },
  { name: 'se ceint du koschti', type: 'unknown', id: '7b73a7b3-c374-490b-b8a5-1f9c895764e3' },
  { name: 'chaque savant', type: 'unknown', id: 'cabde528-e826-44d8-bc62-35d67d9afa72' },
  { name: 'chaque puissant', type: 'unknown', id: 'b6368c37-2298-4bbe-89e5-dd9f52136479' },
  { name: 'chaque brave', type: 'unknown', id: 'c67b107f-ebb0-4266-99ae-9e52c635ab47' },
  { name: 'chaque chef', type: 'unknown', id: '7afb72f8-95e0-40dd-a632-624fc082e3b6' },
];
