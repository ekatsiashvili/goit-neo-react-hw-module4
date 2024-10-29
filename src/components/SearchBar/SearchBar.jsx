import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInput = form.elements.text.value;

    if (searchInput.trim() === "") {
      toast.error(`You must type in search query!`);
      console.log("Fill in the search!");
      return;
    }
    onSearch(searchInput);
    form.reset();
  };
  return (
    <header className={css.headerSearch}>
      <form onSubmit={handleSubmit} className={css.headerForm}>
        <input
          className={css.headerInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="text"
        />
        <div className={css.headerBtnContainer}>
          <button type="submit" className={css.headerBtn}>
            <IoSearch size="18px" />
          </button>
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
