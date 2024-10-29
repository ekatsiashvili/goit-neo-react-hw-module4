import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ data, onPhotoClick }) {
  return (
    <ul className={css.ulGallery}>
      {data.map((pic) => (
        <li key={pic.id} className={css.liCard}>
          <ImageCard
            pic={pic.urls}
            alt={pic.alt_description}
            onPhotoClick={() => onPhotoClick(pic)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
