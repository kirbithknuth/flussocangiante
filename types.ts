export enum StoryBlockType {
  NARRATIVE = 'narrative',
  ERROR = 'error',
  SYSTEM = 'system', 
}

export interface StoryBlockData {
  id: string;
  type: StoryBlockType;
  text: string;
  timestamp: Date;
}

export interface Choice {
  text: string;
  nextNodeId: string;
  requiredItem?: string;
  requiredKnowledge?: string;
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
  isEnding?: boolean;
  endingText?: string;
  acquireItem?: string;
  acquireKnowledge?: string;
}

export type StoryGraph = Record<string, StoryNode>;