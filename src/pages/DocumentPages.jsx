import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Wrapper from '../assets/wrappers/DocumentPages';
import { toProperCase } from '../utils/proper-case';
import customFetch from '../axios';

const imagesURL = import.meta.env.VITE_IMAGES_URL;
const getDocumentQuery = (id) => {
  return {
    queryKey: ['document', id],
    queryFn: async () => {
      const response = await customFetch(`/documents/${id}`);
      return response.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(getDocumentQuery(id));
    return id;
  };
const DocumentPages = () => {
  const id = useLoaderData();
  const { data: document } = useQuery(getDocumentQuery(id));
  const { images, label, pages, category } = document;
  return (
    <Wrapper>
      <div className='box'>
        <div className='doc-name'>{toProperCase(label)}</div>
        <div className='category-name'>Category: {toProperCase(category)}</div>
        <main style={{}}>
          {images.map((img, index) => {
            const imgPath = `${imagesURL}/${img}`;
            return (
              <>
                <article className='review'>
                  <img src={imgPath} alt={label} className='img-container' />
                  <div>
                    Page {index + 1} of {pages}
                  </div>
                </article>
                <div className='space'> </div>
              </>
            );
          })}
        </main>
      </div>
    </Wrapper>
  );
};

export default DocumentPages;
