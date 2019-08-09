
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: 'root', target: 'cee6ebb7-f8b4-4a17-823a-badcd12034d6', value: 60 },
  { source: 'cee6ebb7-f8b4-4a17-823a-badcd12034d6', target: '99fb4dbb-e51a-4069-8e4f-397ae422f8ed', value: 60 },
  { source: '99fb4dbb-e51a-4069-8e4f-397ae422f8ed', target: '204c3621-928b-49af-8af5-93d74e1bb59a', value: 60 },
  { source: '204c3621-928b-49af-8af5-93d74e1bb59a', target: '05a419d9-6b5c-49f2-b619-466b6421e9e7', value: 20 },
  { source: '204c3621-928b-49af-8af5-93d74e1bb59a', target: '037d2bc6-81f6-4966-9ff9-2e7b8f89ac47', value: 20 },
  { source: '204c3621-928b-49af-8af5-93d74e1bb59a', target: '378c8ed0-3a6b-4ceb-b637-658970761d9d', value: 20 },
  { source: 'root', target: '6730e17f-03d8-41fa-8ea0-f265affea0e5', value: 60 },
  { source: '6730e17f-03d8-41fa-8ea0-f265affea0e5', target: '5e690add-aaa4-43c4-b0df-581b87b647b8', value: 20 },
  { source: '6730e17f-03d8-41fa-8ea0-f265affea0e5', target: '1ddf2767-b845-47c7-b98d-9b4343643d77', value: 40 },
  { source: '1ddf2767-b845-47c7-b98d-9b4343643d77', target: '1bb924d7-75c0-4e2b-8475-7b7b09ac906a', value: 20 },
  { source: '1ddf2767-b845-47c7-b98d-9b4343643d77', target: '2ab0cb40-f9bb-46bb-bc12-a9a574e5b00a', value: 20 },
  { source: 'root', target: '88c8391b-0279-45b1-849f-64322e28c97e', value: 20 },
];
