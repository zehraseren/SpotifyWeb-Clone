import SongItem from "../components/Sidebar/SongItem";

function Home() {
  const items = [
    {
      id: 1,
      title: "Rammstein - Deutschland",
      description: "Original Soundtrack",
      img: "https://i0.wp.com/metalperver.com/wp-content/uploads/2019/05/rammstein-rammstein-1024x1024.jpg?resize=800%2C445&ssl=1",
      type: "album",
    },
    {
      id: 2,
      title: "Rammstein - Du Hast",
      description: "Original Soundtrack",
      img: "https://i.ytimg.com/vi/W3q8Od5qJio/maxresdefault.jpg",
      type: "album",
    },
    {
      id: 3,
      title: "Rammstein - Shensut",
      description: "Original Soundtrack",
      img: "https://preview.redd.it/for-the-longest-time-i-thought-it-was-till-on-the-cover-of-v0-iefrzy7jc5p81.jpg?auto=webp&s=f83872057aa12d3d8df9b7737fc60fd236f8fb23",
      type: "artist",
    },
    {
      id: 4,
      title: "Rammstein - Ausländer",
      description: "Original Soundtrack",
      img: "https://preview.redd.it/which-ausl%C3%A4nder-cover-art-do-you-prefer-the-original-one-or-v0-9ymsxcp8jina1.jpg?width=640&crop=smart&auto=webp&s=9f8e226fa537c1398043010b040fa8900d5ac6e4",
      type: "artist",
    },
    {
      id: 5,
      title: "TED Talks",
      description: "Motivation",
      img: "https://i.scdn.co/image/96b8b3d5b7c1a5ae952c7489406602539ce651c8",
      type: "podcast",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <SongItem title="Yakın zamanda çalınanlar" more="/blabla" items={items} />
      <SongItem title="Denemek için göster" more="/blabla" items={items} />
      <SongItem title="Zehra Şeren'e özel" more="/blabla" items={items} />
    </div>
  );
}

export default Home;
