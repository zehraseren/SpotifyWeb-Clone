import SongItem from "../components/Sidebar/SongItem";

function Home() {
  const items = [
    {
      id: 1,
      title: "Deutschland",
      description: "Original Soundtrack",
      artist: "Rammstein",
      img: "https://i0.wp.com/metalperver.com/wp-content/uploads/2019/05/rammstein-rammstein-1024x1024.jpg?resize=800%2C445&ssl=1",
      type: "album",
      src: "http://mysound.ge/uploads/tracks/1876076764_864954662_1371222978.mp3",
    },
    {
      id: 2,
      title: "Du Hast",
      description: "Original Soundtrack",
      artist: "Rammstein",
      img: "https://i.ytimg.com/vi/W3q8Od5qJio/maxresdefault.jpg",
      type: "album",
      src: "https://www.ssppdd.com/download_mp3?token=UzD_9bQVhs11-7UJ14wPue2jjGulRz-Q0zocYDkpSxc&video_id=W3q8Od5qJio",
    },
    {
      id: 3,
      title: "Sehnsucht",
      description: "Original Soundtrack",
      artist: "Rammstein",
      img: "https://preview.redd.it/for-the-longest-time-i-thought-it-was-till-on-the-cover-of-v0-iefrzy7jc5p81.jpg?auto=webp&s=f83872057aa12d3d8df9b7737fc60fd236f8fb23",
      type: "artist",
      src: "https://ia902704.us.archive.org/1/items/SehnsuchtFlack/01.%20Sehnsucht.mp3",
    },
    {
      id: 4,
      title: "Ausländer",
      description: "Original Soundtrack",
      artist: "Rammstein",
      img: "https://preview.redd.it/which-ausl%C3%A4nder-cover-art-do-you-prefer-the-original-one-or-v0-9ymsxcp8jina1.jpg?width=640&crop=smart&auto=webp&s=9f8e226fa537c1398043010b040fa8900d5ac6e4",
      type: "artist",
      src: "https://www.ssppdd.com/download_mp3?token=b4-auA1L5dCo5cmrPkbxeqQlUAPtLAOWcjOU_ciKg_o&video_id=pat2c33sbog",
    },
    {
      id: 5,
      title: "TED Talks",
      description: "Motivation",
      artist: "TED",
      img: "https://i.scdn.co/image/96b8b3d5b7c1a5ae952c7489406602539ce651c8",
      type: "podcast",
      src: "https://dts.podtrac.com/redirect.mp3/download.ted.com/talks/AmirNizarZuabi_2023T.mp3?apikey=172BB350-0207&prx_url=https://chtbl.com/track/48D18/https://dovetail.prxu.org/70/996b8128-d14e-4c34-954f-823bb7977c6a/AmirNizarZuabi_2023T_VO_Intro.mp3",
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
