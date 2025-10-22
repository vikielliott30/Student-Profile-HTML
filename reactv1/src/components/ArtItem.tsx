//import './ArtItem.scss';
import React from 'react';
import type { Artwork } from '../models/artwork.model';


interface ArtItemProps {
  inputValue: Artwork;
}

const ArtItem: React.FC<ArtItemProps> = ({ inputValue }) => {
  const getDescription = (): string => {
    return inputValue?.description || 'No description available.' + ' Origin: ' + (inputValue?.place_of_origin || 'Unknown');
  };

  return (
    <div className="card-container">
      <div className="title">{inputValue?.id + ' - ' + inputValue?.title}</div>
      <div className="description" dangerouslySetInnerHTML={{ __html: getDescription() }}></div>
    </div>
  );
};

export default ArtItem;
