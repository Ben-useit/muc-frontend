import { useLoaderData } from 'react-router-dom';
import customFetch from '../axios';
import { useQuery } from '@tanstack/react-query';
import SearchForm from './SearchForm';
import Document from './Document';
import Wrapper from '../assets/wrappers/DocumentList';
import Pagination from './Pagination';

const documentsQuery = (query) => {
  const { search, page } = query;
  return {
    queryKey: ['query', query || ''],
    queryFn: async () => {
      const response = await customFetch.get(
        `/documents?search=${search}&page=${page}`
      );
      return response.data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const page = url.searchParams.get('page') || 1;
    const category = url.searchParams.get('category') || '';
    const query = { search, page, category };
    await queryClient.ensureQueryData(documentsQuery(query));
    return query;
  };
const DocumentList = () => {
  const query = useLoaderData();
  const { data } = useQuery(documentsQuery(query));
  if (!data) return <h1>Loading ...</h1>;
  const { documents, totalDocuments, numOfPages, searchTerm } = data;
  const { page } = query;
  return (
    <Wrapper>
      <SearchForm searchTerm={searchTerm} />
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <Pagination
          pages={numOfPages}
          page={page}
          totalDocuments={totalDocuments}
        />
        <div className='flex gap-x-2'></div>
      </div>
      <div>
        <div className='pt-12 grid gap-4 md-grid-cols-2 lg-grid-cols-3'>
          {documents.map((doc) => {
            return <Document {...doc} key={doc._id} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default DocumentList;
