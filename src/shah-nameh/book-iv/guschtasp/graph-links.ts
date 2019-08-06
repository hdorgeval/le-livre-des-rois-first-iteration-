
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: '1ca49a0b-09eb-4936-a727-afe59710fefe', target: '0a5d6817-1aff-44db-80da-04c429f31cb6', value: 600 },
  { source: '1ca49a0b-09eb-4936-a727-afe59710fefe', target: 'a4b1dccc-3f04-47a8-96aa-b5e6a8cb2f48', value: 20 },
  { source: 'a4b1dccc-3f04-47a8-96aa-b5e6a8cb2f48', target: '83ad240a-8ccb-4153-8a50-7e96b86c297c', value: 20 },
  { source: '83ad240a-8ccb-4153-8a50-7e96b86c297c', target: '101fa441-bbe7-4ab0-81bb-e37008e5efeb', value: 20 },
  { source: '101fa441-bbe7-4ab0-81bb-e37008e5efeb', target: '4e6925df-f722-4aea-9f2b-b5530b877892', value: 20 },
  { source: '4e6925df-f722-4aea-9f2b-b5530b877892', target: 'd91a6d51-acce-4457-91ff-3fc98e952a2c', value: 20 },
  { source: 'd91a6d51-acce-4457-91ff-3fc98e952a2c', target: '0a5d6817-1aff-44db-80da-04c429f31cb6', value: 20 },
];
