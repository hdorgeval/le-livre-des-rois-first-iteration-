
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: '11a81e3b-266d-4a1b-b780-a670ec934735' },
  { name: 'se rend à Balkh', type: 'town', id: '0029fd04-6b3b-4817-aa4d-f5f089240734' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: '755b1eca-8c43-4e54-9cc5-e6cb34fc54c8' },
  { name: 'devient prêtre', type: 'unknown', id: '48c08a2d-c583-4452-af8b-ba5e25fc93d6' },
  { name: 'ferme le temple', type: 'unknown', id: 'bb8782b7-99b4-40e4-82b1-3e57b31bfbcf' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: 'a471434c-66c9-4844-a65d-e229feca4314' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '51dd17fd-8b12-4201-9a0f-aab97170d617' },
  { name: 'GUSCHTASP', type: 'unknown', id: '2a23ac3d-a2cd-4e5a-bd88-3fce3e3465e9' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'f5be3a52-1a24-4a42-8b23-9bdec3ceb149' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: '42648187-1a29-4e1b-b0c4-528caac1e826' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: '7904e425-6842-40e2-8d41-912e603c72b5' },
  { name: 'rend la justice', type: 'unknown', id: '8e0a38b9-208a-4561-86b9-6254bee32dbc' },
  { name: 'soumet le monde', type: 'unknown', id: '01a8ded4-0ef0-4296-ae37-0722e95136d3' },
  { name: 'tous les rois payent leur tribut', type: 'unknown', id: '08f2dd04-3731-447b-9dab-fa6e1f58fb43' },
  { name: 'sauf le roi ARDJASP', type: 'unknown', id: '3bc1d96b-f099-4914-af4d-b068cf8c807e' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '7b3f7437-a811-4e0a-abe3-b87202541bbb' },
  { name: 'Kitaboun', type: 'unknown', id: '7fe24b9d-b86c-401f-863b-acee823e91b3' },
  { name: '2 fils', type: 'unknown', id: '19461b8d-5a02-4de8-9272-885f9991acfa' },
  { name: 'Isfendiar', type: 'unknown', id: '0f600b2a-9a53-4e73-abcf-50c7516d2ab0' },
  { name: 'Beschouten', type: 'unknown', id: 'ec80ac7b-2498-4d1f-927e-8deb1fab3c02' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: 'f42750d4-deff-4264-a657-0afb1f93dbb6' },
  { name: 'paraît sur la terre', type: 'unknown', id: '004f8951-0860-409b-b167-b25b376bc082' },
  { name: 'messager du créateur du monde', type: 'unknown', id: '5b94246d-ec8b-456a-bfe0-0b03b9805f46' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: 'dfd1a560-7381-498a-afb9-51be11251fb0' },
  { name: 'ARDJASP', type: 'unknown', id: '631cc564-532d-4003-ae81-d7224a9491c4' },
  { name: 'roi de Chine', type: 'unknown', id: '783ae081-1e53-4a46-b259-c8a1b085ca2b' },
  { name: 'roi du Touran', type: 'unknown', id: 'a4765495-0ea7-41d7-95bf-ed45fab1ff82' },
  { name: 'demande à GUSCHTASP son tribut annuel', type: 'unknown', id: 'd595e8a0-87c2-4dc4-b881-9af20189dc3e' },
];
