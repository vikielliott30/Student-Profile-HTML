
import React from 'react';
import { useArtworks } from '../hooks/useArtworks';
import ArtItem from '../components/ArtItem';

const ServiceHttpComponent: React.FC = () => {
  const { page, maxPages, artworks, isLoading, nextPage, prevPage } = useArtworks();

  return (
    <div className="container">
      <div className="title">Items from http call</div>
      <div className="items-container">
        {artworks.map((item) => (
          <ArtItem key={item.id} inputValue={item} />
        ))}
      </div>
      <div className="buttons-container">
        <button
          className="simple-button"
          onClick={prevPage}
          disabled={isLoading || page === 1}
        >
          Previous Page
        </button>
        <div className="page-number">{page}</div>
        <button
          className="simple-button"
          onClick={nextPage}
          disabled={isLoading || page === maxPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ServiceHttpComponent;
