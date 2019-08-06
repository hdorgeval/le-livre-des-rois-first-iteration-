export interface StoryLink {
  weight: number;
  source: StoryNode;
  target: StoryNode;
}

export interface StoryNode {
  name: string;
  id: string;
  type: StoryNodeType;
}

export type StoryNodeType = 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';

export interface StoryData {
  links: StoryLink[];
  nodes: StoryNode[];
}
