
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: '69afd177-8352-4cdc-9284-9303aa747038' },
  { name: 'se rend à Balkh', type: 'unknown', id: '1f44e5f4-34ff-4717-a5cf-d74457c79e4f' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: '19190b9a-1e4b-422a-8045-4090c5b789d6' },
  { name: 'devient prêtre', type: 'unknown', id: '5c00d18d-e2a9-4487-9e95-e32bc6ecf035' },
  { name: 'ferme le temple', type: 'unknown', id: '06a6a013-600f-4d0a-9692-53be32e13bb9' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: 'd0ce48a3-5d48-4c22-a599-6b1d0148ad02' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '018bc26b-d600-4d35-80a7-d45c360f2b61' },
  { name: 'GUSCHTASP', type: 'unknown', id: 'c410cf81-d147-4c50-b52f-8142863f5d98' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'c3eb9a40-9501-4db8-b23b-401e48992bd1' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: '0750662e-adbf-4dce-b8ba-3dea048d81a8' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: '3424a76b-10cc-4dd9-97fb-1152dbc45473' },
  { name: 'rend la justice', type: 'unknown', id: '1632bc21-bfd4-4bff-a68d-ca32fca8d885' },
  { name: 'soumet le monde', type: 'unknown', id: 'ab2f42b3-44c5-4571-bf7f-74dbd3799738' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '10e7ae28-15e7-441d-bdf9-9751a60d2672' },
  { name: 'Kitaboun', type: 'unknown', id: 'c644ee4b-abb7-4ea3-a3e1-cfe77f0253dd' },
  { name: '2 fils', type: 'unknown', id: '12d61172-991f-4db1-bbc3-f3cb13116321' },
  { name: 'Isfendiar', type: 'unknown', id: '0aa9fdf7-b604-4b60-af7f-a003c7cb2dfe' },
  { name: 'Beschouten', type: 'unknown', id: '12bf4f15-0aad-4b36-8559-87bcd17e3ce7' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: '1108cfb9-beda-4cd0-8d93-a99b91296c9d' },
  { name: 'paraît sur la terre', type: 'unknown', id: 'cad673ef-0e04-4f73-af28-27fc2009cac9' },
  { name: 'messager du créateur du monde', type: 'unknown', id: 'be46448b-8359-4a49-9a3a-a989d185ad14' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: '02013c79-211b-4f45-8d20-5822837c1697' },
];
