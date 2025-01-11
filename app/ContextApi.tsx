import notesData from './NotesData';
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface Note {
  id: number;
  noteName: string;
  noteContent: string;
  categories: string[];
  dateCreation: Date;
}

interface GlobalContextType {
  notesObject: {
    allNotes: Note[];
    setAllNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({
  notesObject: {
    allNotes: notesData,
    setAllNotes: () => {}, // Default empty function
  },
});


interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const [allNotes, setAllNotes] = useState<Note[]>([]);

  useEffect(() => {
    console.log('Imported notes data:', notesData);
    setAllNotes(notesData);
  }, []);
  
  useEffect(() => {
    console.log('Updated allNotes state:', allNotes);
  }, [allNotes]); // This will log every time allNotes changes
  
  

  return (
    <GlobalContext.Provider
      value={{
        notesObject: { allNotes, setAllNotes },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalProvider() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalProvider must be used within a GlobalProvider');
  }
  return context;
}
