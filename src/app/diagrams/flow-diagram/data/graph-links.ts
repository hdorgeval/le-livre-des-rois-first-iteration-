export interface GraphLinkProps {
  value: number;
  source: string;
  target: string;
}

export const graphLinks: GraphLinkProps[] = [
  { source: '3c0617e3-843c-48ab-b335-8dedf3b29846', target: '69d39aa0-73c8-470a-8326-0a139ecf748f', value: 600 },
  { source: '3c0617e3-843c-48ab-b335-8dedf3b29846', target: 'a953d81c-a8f2-44c6-af2e-9d74d080157b', value: 20 },
  { source: 'a953d81c-a8f2-44c6-af2e-9d74d080157b', target: '2f28397f-bb05-4334-9757-297da298dd50', value: 20 },
  { source: '2f28397f-bb05-4334-9757-297da298dd50', target: '0800b768-b81e-4d82-a23c-261e12666a25', value: 20 },
  { source: '0800b768-b81e-4d82-a23c-261e12666a25', target: '598751d7-fd3b-4015-bb47-db9618b8b557', value: 20 },
  { source: '598751d7-fd3b-4015-bb47-db9618b8b557', target: '40f37b26-2495-47fe-90ae-dc5f26cfe3c8', value: 20 },
  { source: '40f37b26-2495-47fe-90ae-dc5f26cfe3c8', target: '69d39aa0-73c8-470a-8326-0a139ecf748f', value: 20 },
];
