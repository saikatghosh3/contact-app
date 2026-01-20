import { useContacts } from "../context/ContactContext";

const FilterBar = () => {
  const { search, setSearch, sortType, setSortType } = useContacts();

  return (
    <div className="d-flex gap-3 mb-3">
      <input
        className="form-control"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-select w-25"
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>
    </div>
  );
};

export default FilterBar;
