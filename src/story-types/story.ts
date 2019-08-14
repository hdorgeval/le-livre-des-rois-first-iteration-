export interface StoryLink {
  weight: number;
  source: StoryNode;
  target: StoryNode;
}

export interface StoryNode {
  name: string;
  id: string;
  type: StoryNodeType;
  level: number;
  image: DataImage | null;
}

export interface DataImage {
  data: string;
  type: 'map' | 'photo' | 'unknown';
  url?: string;
}

export type StoryNodeType = 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';

export interface StoryData {
  links: StoryLink[];
  nodes: StoryNode[];
}

export interface StoryNodeTypeMapping {
  [key: string]: StoryNodeType;
}
export const storyNodeTypeMapping: StoryNodeTypeMapping = { Balkh: 'town' };
