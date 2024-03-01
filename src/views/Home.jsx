import SongItem from "../components/Sidebar/SongItem";
import songs from "../components/data/songs";

function Home() {
  return (
    <div className="grid gap-y-8">
      <SongItem title="Yakın zamanda çalınanlar" more="/blabla" items={songs} />
      <SongItem title="Denemek için göster" more="/blabla" items={songs} />
      <SongItem title="Zehra Şeren'e özel" more="/blabla" items={songs} />
    </div>
  );
}

export default Home;
