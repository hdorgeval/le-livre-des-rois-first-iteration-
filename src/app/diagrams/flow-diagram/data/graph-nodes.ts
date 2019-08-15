
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: 'a48cb953-1978-49e2-b389-e5740d41fe5f' },
  { name: 'se rend à Balkh', type: 'town', id: '7302cfde-18a2-4348-bfdf-de3568e82353' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: 'fc23f36e-9670-41e5-9910-296d58abc3f3' },
  { name: 'devient prêtre', type: 'unknown', id: 'a505d4b4-e06e-4080-bbe5-2e2246d12066' },
  { name: 'ferme le temple', type: 'unknown', id: 'f44ef344-4692-4e25-8df1-49c393c2a31b' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: 'a9d7ab7b-6110-429e-9260-ebb7c6e43f14' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: 'dc6d1409-cc21-46a3-846f-487ce8b40f48' },
  { name: 'GUSCHTASP', type: 'unknown', id: 'b04e1fb8-fc9b-4db5-ac28-0b93fac6740d' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: '0d9e362f-d55d-42bb-9788-d6d6d5b71070' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: 'e765c361-af20-4219-ac19-42421bd9ecba' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: 'a730c994-fb81-416d-9fe2-1451e0eec884' },
  { name: 'a pour frère ZERIR', type: 'unknown', id: '8829b44e-0b57-4cc0-88e7-8fff350c5a42' },
  { name: 'rend la justice', type: 'unknown', id: '9eec3754-4fa2-4a5a-b054-0d9e48cfce87' },
  { name: 'soumet le monde', type: 'unknown', id: 'a00de96e-601f-48d9-a408-86753eb2b1ca' },
  { name: 'tous les rois payent leur tribut', type: 'unknown', id: 'e505a61b-4705-4fed-a7f1-d2e250ded15f' },
  { name: 'sauf le roi ARDJASP', type: 'unknown', id: 'a3118506-f2b4-468f-8bf7-ab5b922c386a' },
  { name: 'Kitaboun', type: 'unknown', id: '1c7d1fc1-c83a-467f-b218-afeb8b8cdd13' },
  { name: '2 fils', type: 'unknown', id: '55354e4a-a347-4dea-bc08-865c3e61942b' },
  { name: 'Isfendiar', type: 'unknown', id: 'af1a8a0e-9cbc-4ab9-bd05-07ec289ac2ed' },
  { name: 'Beschouten', type: 'unknown', id: '9e93cab5-b20b-491c-b75b-f7bf82336843' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: '6a74c4de-4430-49c4-bdd2-4756f0d346b1' },
  { name: 'paraît sur la terre', type: 'unknown', id: 'e7f62262-3c61-4993-b696-deba33815a0a' },
  { name: 'messager du créateur du monde', type: 'unknown', id: '42498c24-1a74-45c0-943c-a68380c56007' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: '3cc3e5b3-c483-48fb-b9a3-8c2e5b025cf7' },
  { name: 'ZERIR', type: 'unknown', id: '104b3d1f-8b29-4d3f-a399-588eec4cee6f' },
  { name: 'ARDJASP', type: 'unknown', id: '1c7b09d9-b34f-451c-914e-6e827db6733f' },
  { name: 'roi de Chine', type: 'unknown', id: 'b0933e61-981b-424b-8606-2e32f45a3f6d' },
  { name: 'roi du Touran', type: 'unknown', id: 'c3fdd945-e9a1-4a89-a782-c7bb69055207' },
  { name: 'demande à GUSCHTASP son tribut annuel', type: 'unknown', id: '78c982bb-01ff-4fbe-89af-73a1a961129f' },
];
