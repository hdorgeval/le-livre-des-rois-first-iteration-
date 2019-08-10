
export interface GraphNodeProps {
  name: string;
  id: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root' },
  { name: 'LOHRASP', type: 'unknown', id: 'c760a03e-dcd6-4e32-b22c-da255bdcd865' },
  { name: 'se rend à Balkh', type: 'unknown', id: 'a201e25f-dc21-4c18-a3d8-96a6930998c2' },
  { name: 'se rend au temple du Noubehar', type: 'unknown', id: '5595fe7b-c142-4cb4-a0ac-c30e222bbdbb' },
  { name: 'ferme le temple', type: 'unknown', id: '370e04f0-bd97-48e2-9982-9e08fdbd87d6' },
  { name: 'devient prêtre', type: 'unknown', id: 'ebbf304f-1625-4a6b-8061-55ba73402d69' },
  { name: '30 ans debout devant Dieu', type: 'unknown', id: 'cb2eaf4a-f81d-42c7-952f-541582cd6c90' },
  { name: 'GUSCHTASP', type: 'unknown', id: 'c5810298-5de7-4eef-847b-de1e417b359f' },
  { name: 'fils ainé de LOHRASP', type: 'unknown', id: 'e71aaf9a-3a18-4833-808c-43c39432e55f' },
  { name: 'hérite du trone de LOHRASP', type: 'unknown', id: 'dd6339ea-e0a3-48cc-a6ec-6de3ac86fbc3' },
  { name: 'a pour fille Kitaboun', type: 'unknown', id: '9050966c-0a8a-4d2c-909b-af601b753f36' },
  { name: 'rend la justice', type: 'unknown', id: 'b8064fbd-5018-41d2-b895-06d6ed4aeed1' },
  { name: 'soumet le monde', type: 'unknown', id: 'cdfc6e9c-9a69-4240-b8c6-8140111fa170' },
  { name: 'Kitaboun', type: 'unknown', id: '586dc587-ad61-49ed-9537-0203ce8454a5' },
  { name: '2 fils', type: 'unknown', id: '41811276-a510-4c99-8d36-1b99c823500d' },
  { name: 'Isfendiar', type: 'unknown', id: 'cfe649cd-1e72-45c7-82e2-7877c96605b0' },
  { name: 'Beschouten', type: 'unknown', id: '8fa2cfac-b88e-4198-9799-3ef05c945dad' },
];
