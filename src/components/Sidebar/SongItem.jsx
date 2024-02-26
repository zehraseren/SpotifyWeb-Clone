/* eslint-disable react/prop-types */
import Song from "../../Song";
import Title from "../Title";

function SongItem({ title, more = false, items }) {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default SongItem;
