import React, { useEffect, useState } from 'react';
import axios from 'axios';

const S3Image: React.FC<{ imagemUrl: string }> = ({ imagemUrl }) => {
  const [imagem, setImagem] = useState<string>('');

  useEffect(() => {
    const loadImagem = async () => {
      try {
        const response = await axios.get(imagemUrl, { responseType: 'blob' });
        const blob = new Blob([response.data], { type: response.headers['content-type'] });
        const url = URL.createObjectURL(blob);
        setImagem(url);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };
    loadImagem();
  }, [imagemUrl]);

  return imagem ? <img src={imagem} alt="S3 Image" /> : <div>Loading...</div>;
};

export default S3Image;
