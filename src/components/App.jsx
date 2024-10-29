import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import fetchPhoto from "../api/search-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import ErrorMessage from "./ErrorMessage/errorMessage";
import LoadMoreBtn from "./LoadMore/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [totalPage, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getPhotos = async () => {
      try {
        setError(false);
        setLoading(true);

        const data = await fetchPhoto(query, page);

        setPhotos((prevData) => {
          return [...prevData, ...data.results];
        });
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPhotos();
  }, [query, page]);

  const handleSearch = (searchInput) => {
    setQuery(searchInput);
    setPhotos([]);
    setPage(1);
  };

  const handlePage = () => {
    setPage(page + 1);
  };

  function closeModal() {
    setIsOpen(false);
  }

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo); // Set the selected photo
    setIsOpen(true); // Open modal
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery data={photos} onPhotoClick={handlePhotoClick} />
      )}
      {loading && <Loader />}
      {photos.length > 0 && totalPage > page && (
        <LoadMoreBtn handleClick={handlePage} />
      )}

      <ImageModal
        modalIsOpen={isOpen}
        selectedPhoto={selectedPhoto}
        closeModal={closeModal}
      />

      <Toaster />
    </>
  );
}

export default App;
