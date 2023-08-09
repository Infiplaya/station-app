import { Quote } from 'lucide-react';
import { Card } from '../ui/card/card';

const baseUrl = 'https://zenquotes.io/api/random';

const ONE_DAY = 86400;

interface Quote {
  q: string;
  a: string;
  h: string;
}

async function getDailyQuote(): Promise<Quote> {
  const res = await fetch(baseUrl, { next: { revalidate: ONE_DAY } });
  const quotes = await res.json();
  return quotes[0];
}
export default async function DailyQuote() {
  const quote = await getDailyQuote();
  return (
    <Card cardId="daily-quote">
      <h3>Daily Quote</h3>
      <blockquote>
        <Quote />
        <p>{quote.q}</p>
        <p>{quote.a}</p>
      </blockquote>
    </Card>
  );
}
