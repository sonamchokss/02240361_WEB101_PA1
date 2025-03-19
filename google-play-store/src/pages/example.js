import Image from 'next/image';

export default function ExamplePage() {
  return (
    <div>
      <h1>Example Page</h1>
      {/* Corrected image path */}
      <Image src="/images/game1.jpg" alt="Game 1" width={300} height={300} />
    </div>
  );
}
