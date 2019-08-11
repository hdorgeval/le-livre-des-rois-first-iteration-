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
}

export type StoryNodeType = 'start of period' | 'end of period' | 'unknown' | 'town' | 'king';

export interface StoryData {
  links: StoryLink[];
  nodes: StoryNode[];
}

const typeMappings = new Map<string, StoryNodeType>();
typeMappings.set('Balk', 'town');
