import {GoogleGenAI} from '@google/genai';





const Aisearch = async (input) => {
    

    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


      const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

      const promt = `You are a movie recommendation engine. give 5 movie titles based on the user's query.

Rules:
- Return exactly 5 movie titles, comma-separated, with no extra text before or after.
- If the user mentions a specific movie title, include that exact title as the first item.
- If that movie belongs to a series or has numbered parts/entries, include those parts among the 5 when relevant. Fill remaining slots with closely related recommendations in the same franchise or genre.
- If the user asks by genre(s) (e.g., "horror romance"), return 5 movies that match those genres.
- Use official English release titles only. No years, no directors, no extra punctuation. Avoid duplicates.


Output format example (no quotes, no spaces around commas):
title1,title2,title3,title4,title5
User query: ${input}
`;


  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: promt,
  });

  const movieNames = response.text.split(',').map(s => s.trim());
  
 
  console.log(movieNames);

 

 
return movieNames;
  
}

export default Aisearch
