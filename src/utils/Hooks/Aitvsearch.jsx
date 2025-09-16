import {GoogleGenAI} from '@google/genai';





const Aitvsearch = async (input) => {
    

    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


      const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

const promt = `You are a TV show recommendation engine powered by TMDb data. Given the user's query, return exactly 5 TV show titles (only TV shows, no movies or films) that are listed on TMDb.

Rules:
- Return exactly 5 TV show titles, comma-separated, with no extra text before or after.
- If the user mentions a specific TV show title, include that exact title as the first item.
- If that show belongs to a franchise, has spin-offs, or numbered seasons/parts, include those among the 5 when relevant. Fill remaining slots with closely related recommendations from the same franchise or genre.
- If the user asks by genre(s) (e.g., "crime drama"), return 5 shows that match those genres according to TMDb classifications.
- Use official English release titles exactly as listed on TMDb. No years, no networks, no extra punctuation. Avoid duplicates.
- IMPORTANT: Return only TV shows. Do NOT include movies, films, or specials.

Output format example (no quotes, no spaces around commas):
title1,title2,title3,title4,title5
User query: ${input}
`;


  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: promt,
  });

  const movieNames = response.text.split(',').map(s => s.trim());
  
 
 

 

 
return movieNames;
  
}

export default Aitvsearch
