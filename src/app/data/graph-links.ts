
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: 'root', target: '121be512-e0d0-4840-ab78-2dddcd3e27db', value: 20 },
  { source: '121be512-e0d0-4840-ab78-2dddcd3e27db', target: '75183272-b42d-41b4-a1ce-792e80771985', value: 10 },
  { source: '121be512-e0d0-4840-ab78-2dddcd3e27db', target: '7695f033-3144-4437-a2a7-94db4060e8ca', value: 10 },
  { source: 'root', target: 'c1d7594d-b429-436e-97bd-0e602fa21087', value: 30 },
  { source: 'c1d7594d-b429-436e-97bd-0e602fa21087', target: '04a23107-11db-46db-bb71-e0ae1f72c4f1', value: 10 },
  { source: 'c1d7594d-b429-436e-97bd-0e602fa21087', target: '75183272-b42d-41b4-a1ce-792e80771985', value: 10 },
  { source: 'c1d7594d-b429-436e-97bd-0e602fa21087', target: '84eed76f-bb97-4189-b7f8-e59b03bffc47', value: 10 },
  { source: 'root', target: '51252ef3-06b5-48b7-85db-bca890d55dac', value: 40 },
  { source: '51252ef3-06b5-48b7-85db-bca890d55dac', target: '0aeb3ca8-1885-4ebd-962c-6c350d7d9808', value: 10 },
  { source: '51252ef3-06b5-48b7-85db-bca890d55dac', target: '156b4c84-a8fc-48fc-a2a4-ddf49ddc0ba8', value: 10 },
  { source: '51252ef3-06b5-48b7-85db-bca890d55dac', target: '75183272-b42d-41b4-a1ce-792e80771985', value: 10 },
  { source: '51252ef3-06b5-48b7-85db-bca890d55dac', target: '6ef23f80-ca4f-4858-bccf-6b731ad453de', value: 10 },
];
