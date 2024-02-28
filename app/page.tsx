export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <iframe
        className="w-full h-[50rem]"
        src="https://www.youtube.com/embed/MlnNZV7Jujs?si=ObU7QopUgz8w3ISi"
        title="YouTube Video Player"
        aria-label="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </main>
  );
}
