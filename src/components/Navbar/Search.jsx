import { Icon } from "../../Icons";

function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        className="w-12 h-10 flex items-center justify-center absolute top-0 left-0 text-black"
        htmlFor="search-input"
      >
        <Icon name="search" size={24} />
      </label>
      <input
        className="h-10 pl-12 max-w-full w-[22.75rem] bg-white rounded-3xl text-sm outline-none text-black"
        type="text"
        id="search-input"
        placeholder="Sanatçılar, şarkılar veya podcast'ler"
        autoFocus
      />
    </div>
  );
}

export default Search;
