import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
      <div className='main-head'>
        <h1>Tux Trivia</h1>
      </div>
      <div className='start-quiz-section'>
        <Link href='/quiz'>
          <button className='start-quiz-btn'>Start Quiz</button>
        </Link>
      </div>
      </div>
    </main>
  );
}
