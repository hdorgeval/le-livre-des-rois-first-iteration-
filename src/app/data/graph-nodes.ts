
export interface GraphNodeProps {
  id: string;
  level: number;
  name: string;
  type: 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';
}

export const graphNodes: GraphNodeProps[] = [
  { name: '', type: 'start of period', id: 'root', level: 0 },
  { name: 'episode 1', type: 'unknown', id: '121be512-e0d0-4840-ab78-2dddcd3e27db', level: 1 },
  { name: 'common scene', type: 'unknown', id: '75183272-b42d-41b4-a1ce-792e80771985', level: 2 },
  { name: 'scene 1.2', type: 'unknown', id: '7695f033-3144-4437-a2a7-94db4060e8ca', level: 2 },
  { name: 'episode 2', type: 'unknown', id: 'c1d7594d-b429-436e-97bd-0e602fa21087', level: 1 },
  { name: 'scene 2.1', type: 'unknown', id: '04a23107-11db-46db-bb71-e0ae1f72c4f1', level: 2 },
  { name: 'scene 2.3', type: 'unknown', id: '84eed76f-bb97-4189-b7f8-e59b03bffc47', level: 2 },
  { name: 'episode 3', type: 'unknown', id: '51252ef3-06b5-48b7-85db-bca890d55dac', level: 1 },
  { name: 'scene 3.1', type: 'unknown', id: '0aeb3ca8-1885-4ebd-962c-6c350d7d9808', level: 2 },
  { name: 'scene 3.2', type: 'unknown', id: '156b4c84-a8fc-48fc-a2a4-ddf49ddc0ba8', level: 2 },
  { name: 'scene 3.4', type: 'unknown', id: '6ef23f80-ca4f-4858-bccf-6b731ad453de', level: 2 },
];
