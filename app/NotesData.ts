const notesData: { id: number; noteName: string; noteContent: string; categories: string[]; dateCreation: Date }[] = [
    {
      id: 1,
      noteName: 'Meeting Notes',
      noteContent: 'Discussed project timelines and goals. Discussed project timelines and goals.',
      categories: ['meeting', 'project'],
      dateCreation: new Date('2024-03-30'),
    },
    {
      id: 2,
      noteName: 'Ideas for Novel',
      noteContent: 'Main character development, plot twists',
      categories: ['writing', 'ideas'],
      dateCreation: new Date('2024-03-28'),
    },
    {
      id: 3,
      noteName: 'Grocery List',
      noteContent: 'Buy milk, eggs, bread, and vegetables.',
      categories: ['shopping', 'personal'],
      dateCreation: new Date('2024-03-29'),
    },
    {
      id: 4,
      noteName: 'Workout Plan',
      noteContent: 'Monday: Cardio, Wednesday: Strength, Friday: Yoga',
      categories: ['fitness', 'schedule'],
      dateCreation: new Date('2024-03-27'),
    },
    {
      id: 5,
      noteName: 'Book Summary',
      noteContent: 'Summarize key points from "Atomic Habits" by James Clear.',
      categories: ['reading', 'summary'],
      dateCreation: new Date('2024-03-26'),
    },
  ];
  
  export default notesData;
  