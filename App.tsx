
import React, { useState, useEffect, useCallback } from 'react';
import { StoryBlockData, StoryBlockType, StoryNode, StoryGraph, Choice as ChoiceType } from './types';
import { 
  APP_TITLE,
  INTRO_APP_TITLE,
  INTRO_MESSAGE_TEXT,
  INTRO_BUTTON_TEXT,
  ERROR_NODE_NOT_FOUND_TITLE, 
  getErrorNodeNotFoundMessage, 
  STORY_END_TEXT, 
  RESTART_BUTTON_TEXT,
  NO_STORY_LOADED_TITLE,
  NO_STORY_LOADED_MESSAGE,
  ITEM_ACQUIRED_TEXT,
  KNOWLEDGE_ACQUIRED_TEXT,
  DEAD_END_TEXT
} from './constants';
import { THE_ADVENTURERS_GUILD_STORY, INITIAL_STORY_NODE_ID } from './storyData';
import StoryDisplay from './components/StoryDisplay';
import ChoiceSelector from './components/ChoiceSelector';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
  const [storyBlocks, setStoryBlocks] = useState<StoryBlockData[]>([]);
  const [currentStoryNode, setCurrentStoryNode] = useState<StoryNode | null>(null);
  const [storyData, setStoryData] = useState<StoryGraph | null>(null);
  const [appError, setAppError] = useState<{title: string, message: string} | null>(null);
  const [isStoryEnded, setIsStoryEnded] = useState<boolean>(false);
  const [isStoryPresent, setIsStoryPresent] = useState<boolean>(false);
  const [showIntroScreen, setShowIntroScreen] = useState<boolean>(true);

  const [playerInventory, setPlayerInventory] = useState<Set<string>>(new Set());
  const [playerKnowledge, setPlayerKnowledge] = useState<Set<string>>(new Set());

  const addStoryBlock = useCallback((type: StoryBlockType, text: string) => {
    setStoryBlocks(prev => [...prev, { id: crypto.randomUUID(), type, text, timestamp: new Date() }]);
  }, []);

  const loadStoryNode = useCallback((nodeId: string, graph: StoryGraph, isInitialLoad: boolean = false) => {
    const node = graph[nodeId];
    if (node) {
      setCurrentStoryNode(node);
      setAppError(null); // Clear previous errors on successful node load
      
      let blocksToAdd: StoryBlockData[] = [];
      const narrativeBlockText = node.text;
      
      if (isInitialLoad) {
         // For initial load, set the first narrative block directly.
         // Subsequent item/knowledge/ending blocks will be appended.
         setStoryBlocks([{
          id: crypto.randomUUID(),
          type: StoryBlockType.NARRATIVE,
          text: narrativeBlockText,
          timestamp: new Date(),
        }]);
      } else {
         // For subsequent loads, add narrative to blocksToAdd array.
         blocksToAdd.push({
          id: crypto.randomUUID(),
          type: StoryBlockType.NARRATIVE,
          text: narrativeBlockText,
          timestamp: new Date(),
        });
      }

      if (node.acquireItem) {
        setPlayerInventory(prev => new Set(prev).add(node.acquireItem!));
        blocksToAdd.push({
          id: crypto.randomUUID(),
          type: StoryBlockType.SYSTEM,
          text: `${ITEM_ACQUIRED_TEXT} ${node.acquireItem}`,
          timestamp: new Date(),
        });
      }
      if (node.acquireKnowledge) {
        setPlayerKnowledge(prev => new Set(prev).add(node.acquireKnowledge!));
        blocksToAdd.push({
          id: crypto.randomUUID(),
          type: StoryBlockType.SYSTEM,
          text: `${KNOWLEDGE_ACQUIRED_TEXT} ${node.acquireKnowledge}`,
          timestamp: new Date(),
        });
      }
      
      if (node.isEnding || node.choices.length === 0) {
        setIsStoryEnded(true);
        const endMessageText = node.endingText || STORY_END_TEXT;
        blocksToAdd.push({
            id: crypto.randomUUID(),
            type: StoryBlockType.SYSTEM, 
            text: endMessageText,
            timestamp: new Date(),
        });
      } else {
        setIsStoryEnded(false);
      }

      if (blocksToAdd.length > 0) {
        setStoryBlocks(prevBlocks => [...prevBlocks, ...blocksToAdd]);
      }

    } else {
      const errorMessage = getErrorNodeNotFoundMessage(nodeId);
      setAppError({ title: ERROR_NODE_NOT_FOUND_TITLE, message: errorMessage });
      const errorBlockData: StoryBlockData = {
        id: crypto.randomUUID(),
        type: StoryBlockType.ERROR,
        text: errorMessage,
        timestamp: new Date(),
      };
       setStoryBlocks(prevBlocks => {
          if (isInitialLoad && prevBlocks.length === 0) return [errorBlockData];
          return [...prevBlocks, errorBlockData];
      });
      setCurrentStoryNode(null); 
      setIsStoryEnded(true); 
    }
  }, []); 

  const resetGameState = useCallback(() => {
    setStoryBlocks([]); 
    setCurrentStoryNode(null);
    setIsStoryEnded(false);
    setAppError(null);
    setPlayerInventory(new Set());
    setPlayerKnowledge(new Set());
  }, []);
  
  const startGameCore = useCallback(() => {
    resetGameState();
    if (storyData && INITIAL_STORY_NODE_ID && storyData[INITIAL_STORY_NODE_ID]) {
      loadStoryNode(INITIAL_STORY_NODE_ID, storyData, true);
    } else {
      addStoryBlock(StoryBlockType.ERROR, `${NO_STORY_LOADED_TITLE}\n\n${NO_STORY_LOADED_MESSAGE}`);
      setIsStoryEnded(true);
    }
  }, [storyData, resetGameState, loadStoryNode, addStoryBlock]);


  useEffect(() => {
    const storyGraph = THE_ADVENTURERS_GUILD_STORY;
    const initialNodeId = INITIAL_STORY_NODE_ID;

    if (storyGraph && Object.keys(storyGraph).length > 0 && initialNodeId && storyGraph[initialNodeId]) {
      setStoryData(storyGraph);
      setIsStoryPresent(true);
    } else {
      setIsStoryPresent(false);
      setStoryData(null);
      setShowIntroScreen(false); 
      addStoryBlock(StoryBlockType.SYSTEM, `${NO_STORY_LOADED_TITLE}\n\n${NO_STORY_LOADED_MESSAGE}`);
      setIsStoryEnded(true);
    }
  }, [addStoryBlock]);

  const handleStartStory = useCallback(() => {
    setShowIntroScreen(false);
    startGameCore();
  }, [startGameCore]);

  const handleRestartStory = useCallback(() => {
    setShowIntroScreen(false); 
    startGameCore();
  }, [startGameCore]);

  const handleChoiceSelected = useCallback((nextNodeId: string) => {
    if (storyData && isStoryPresent) {
      loadStoryNode(nextNodeId, storyData, false);
    }
  }, [storyData, loadStoryNode, isStoryPresent]);

  const getFilteredChoices = useCallback((): ChoiceType[] => {
    if (!currentStoryNode || !currentStoryNode.choices) {
      return [];
    }
    return currentStoryNode.choices.filter(choice => {
      const itemRequirementMet = !choice.requiredItem || playerInventory.has(choice.requiredItem);
      const knowledgeRequirementMet = !choice.requiredKnowledge || playerKnowledge.has(choice.requiredKnowledge);
      return itemRequirementMet && knowledgeRequirementMet;
    });
  }, [currentStoryNode, playerInventory, playerKnowledge]);

  useEffect(() => {
    if (currentStoryNode && !isStoryEnded && getFilteredChoices().length === 0) {
      // This handles the case where a node is not an explicit ending, but all choices become unavailable.
      // We check node.choices.length in loadStoryNode for explicit endings with no choices from the start.
      // This effect catches "soft locks" due to requirements.
      const isExplicitEnding = currentStoryNode.isEnding || currentStoryNode.choices.length === 0;
      if (!isExplicitEnding) { // Only add dead end message if not already handled as an explicit end by loadStoryNode
        setIsStoryEnded(true);
        addStoryBlock(StoryBlockType.SYSTEM, DEAD_END_TEXT);
      }
    }
  }, [currentStoryNode, isStoryEnded, getFilteredChoices, addStoryBlock]);


  if (!isStoryPresent) {
    return (
      <div className="flex flex-col h-screen bg-gray-900 text-white font-sans items-center justify-center p-4">
        <header className="bg-slate-800 p-4 shadow-md rounded-lg mb-4 w-full max-w-3xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-400">{APP_TITLE}</h1>
        </header>
        <div className="w-full max-w-3xl flex-grow overflow-hidden flex flex-col">
         <StoryDisplay blocks={storyBlocks} /> 
        </div>
      </div>
    );
  }
  
  if (showIntroScreen) {
    return (
      <div className="flex flex-col h-screen bg-gray-900 text-white font-sans items-center justify-center p-4 text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400">{INTRO_APP_TITLE}</h1>
        </header>
        <div className="bg-slate-800 p-6 md:p-8 rounded-xl shadow-xl max-w-2xl">
          <p className="text-lg md:text-xl mb-8 whitespace-pre-wrap">{INTRO_MESSAGE_TEXT}</p>
          <button
            onClick={handleStartStory}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 text-lg"
            aria-label={INTRO_BUTTON_TEXT}
          >
            {INTRO_BUTTON_TEXT}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white font-sans">
      <header className="bg-slate-800 p-4 shadow-md sticky top-0 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-400">{APP_TITLE}</h1>
      </header>

      <main className="flex flex-col flex-grow p-2 md:p-4 overflow-hidden">
        {appError && (
          <div className="mb-4 p-2 md:p-0">
            <ErrorMessage title={appError.title} message={appError.message} />
          </div>
        )}
        <StoryDisplay blocks={storyBlocks} />
        <div className="mt-auto pt-2">
          {currentStoryNode && !isStoryEnded && getFilteredChoices().length > 0 && (
            <ChoiceSelector
              choices={getFilteredChoices()}
              onChoiceSelected={handleChoiceSelected}
            />
          )}
          {isStoryEnded && (
            <div className="mt-4 p-3 flex flex-col items-center space-y-3">
              <button
                onClick={handleRestartStory}
                className="w-full md:w-3/4 lg:w-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
                aria-label={RESTART_BUTTON_TEXT}
              >
                {RESTART_BUTTON_TEXT}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
