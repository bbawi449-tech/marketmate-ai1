import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function askAI(problem, category) {
  const prompt = `
You are MarketMate AI, a professional marketing agency.

User category: ${category}
User problem: ${problem}

Give:
1. Clear solution
2. Content ideas
3. Ads advice
4. Best posting time
5. Hashtags
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
