
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: 'b7362ee3-f3cb-4310-945f-ba0365512ce7' },
  { name: 'se rend à Balkh', type: 'unknown', id: 'ed07f0a6-99d7-4942-9c07-f1c38f57a03e' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: 'da7a463c-639b-4fa0-93e7-9dc7aa44277f' },
  { name: 'devient prêtre', type: 'unknown', id: 'fde1c14b-7f76-449c-a87c-199d1a29996e' },
  { name: 'ferme le temple', type: 'unknown', id: 'a408a840-8110-4b20-b60b-b95ecfa22b2a' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: 'af61e31f-a38b-443a-b5ca-0806e67314d3' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: '8feb0b2b-c26e-41b2-bc3b-8e1688ae2077' },
  { name: 'GUSCHTASP', type: 'unknown', id: 'be1012ca-533e-4c02-9586-ac8e46582430' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'e05d2c59-d736-4770-858c-1c96ecd835c3' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: '70bfb9c7-09a3-4856-8f88-511a7b83de83' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: '5593a20e-08c1-411e-ab75-324afc1ff013' },
  { name: 'rend la justice', type: 'unknown', id: 'a2d85787-ce35-42f3-80fc-51102b5eee3b' },
  { name: 'soumet le monde', type: 'unknown', id: 'bcae3b95-cb16-4a8b-b8b8-d0ca9d9907ac' },
  { name: 'tous les rois payent leur tribut', type: 'unknown', id: '1628058f-99f7-464b-8979-a4030680a78f' },
  { name: 'sauf le roi ARDJASP', type: 'unknown', id: '710126a7-3c5f-417c-b7cf-f494fe725a9c' },
  { name: 'se converti à la foi de Zerdouscht', type: 'unknown', id: '27f7c236-1f31-4e68-ba5f-6c078dca0b2b' },
  { name: 'Kitaboun', type: 'unknown', id: '97ced2a4-d492-43d0-8afc-a5d4d3f0937a' },
  { name: '2 fils', type: 'unknown', id: 'b310cfba-b909-4513-8815-5384a0378360' },
  { name: 'Isfendiar', type: 'unknown', id: 'aa84cc6d-ab67-4233-bd5c-96379943ae42' },
  { name: 'Beschouten', type: 'unknown', id: '12dfcc7a-a324-4753-bd59-b9331ab8f1c3' },
  { name: 'ZERDOUSCHT', type: 'unknown', id: 'a213d08d-557e-4aae-86db-3e904577feb9' },
  { name: 'paraît sur la terre', type: 'unknown', id: '744bae7e-6afd-4d5b-be1d-e565079e48fb' },
  { name: 'messager du créateur du monde', type: 'unknown', id: '52426071-5dfa-4085-a35c-338d6d5e6720' },
  { name: 'grandi dans le palais de GUSCHTASP', type: 'unknown', id: 'bbdc27f0-91d1-4549-92e7-ce04ceb8d0e9' },
  { name: 'ARDJASP', type: 'unknown', id: 'a7d9a940-4623-434b-b9f3-7bf859715211' },
  { name: 'roi de Chine', type: 'unknown', id: '54aeba3c-502d-42e3-9cd4-d802d31e210d' },
  { name: 'roi du Touran', type: 'unknown', id: '5de292da-d5a7-4fc1-8d4d-d3af74c693ba' },
  { name: 'demande à GUSCHTASP son tribut annuel', type: 'unknown', id: 'e17b7c6f-f9db-4e03-954b-6120120ccd79' },
];
