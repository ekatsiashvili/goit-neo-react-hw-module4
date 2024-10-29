import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ handleClick }) {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
