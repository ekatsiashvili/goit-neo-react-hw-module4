import css from "./ImageCard.module.css";

function ImageCard({ pic, alt, onPhotoClick }) {
  return (
    <div className={css.thumb}>
      <img
        src={pic.small}
        alt={alt}
        onClick={onPhotoClick}
        className={css.img}
      />
    </div>
  );
}

export default ImageCard;
