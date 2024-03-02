import VideoCard from "@/components/VideoCard";
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
      <div className="flex items-center hide-scroll w-full justify-center gap-x-10 bg-stone-900 py-10 overflow-x-auto">
        <VideoCard
          name="Anuj Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Vineeth Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Vineeth Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Vineeth Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Vineeth Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Anuj Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Anuj Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Anuj Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
        <VideoCard
          name="Anuj Myageri"
          imageSrc="/images/global/zoomin_logo.png"
        />
      </div>
    </main>
  );
}
