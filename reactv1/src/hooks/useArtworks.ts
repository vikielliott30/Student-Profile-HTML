
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { Artwork } from '../models/artwork.model';

interface ArtworksResponse {
  data: Artwork[];
  pagination: {
    total_pages: number;
    current_page: number;
  };
}

const baseUrl = 'https://api.artic.edu/api/v1/artworks';

export const useArtworks = () => {
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadArtworks = async () => {
      setIsLoading(true);
      try {
        const params = {
          fields: 'id,title,description,place_of_origin',
          limit: 2,
          page: page,
        };
        const response = await axios.get<ArtworksResponse>(baseUrl, { params });
        setArtworks(response.data.data);
        setMaxPages(response.data.pagination.total_pages);
      } catch (error) {
        console.error("Error fetching artworks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadArtworks();
  }, [page]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  return {
    page,
    maxPages,
    artworks,
    isLoading,
    nextPage,
    prevPage,
  };
};
