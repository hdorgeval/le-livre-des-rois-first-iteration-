
export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: 'e930a205-a45c-43ed-aa48-42c36b5a3140', target: '21a25eb8-75d0-4420-b990-82f0f267a7a3', value: 600 },
  { source: 'e930a205-a45c-43ed-aa48-42c36b5a3140', target: 'cf78f47f-24ff-483c-b904-f7a0bf74b9b7', value: 20 },
  { source: 'cf78f47f-24ff-483c-b904-f7a0bf74b9b7', target: '051e1d05-2021-4a4a-a1cf-d92cb3f3c802', value: 20 },
  { source: '051e1d05-2021-4a4a-a1cf-d92cb3f3c802', target: '10a5597b-b002-49b9-9bce-3a3eaa3358d2', value: 20 },
  { source: '10a5597b-b002-49b9-9bce-3a3eaa3358d2', target: '3d610306-08b7-4a5e-8bc0-6f1ad8da46d0', value: 20 },
  { source: '3d610306-08b7-4a5e-8bc0-6f1ad8da46d0', target: '8b270442-1542-4c9a-9673-9a7978425173', value: 20 },
  { source: '8b270442-1542-4c9a-9673-9a7978425173', target: '21a25eb8-75d0-4420-b990-82f0f267a7a3', value: 20 },
];
