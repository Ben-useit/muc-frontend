import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DocumentList';
const Pagination = ({ pages, page, totalDocuments }) => {
  const pagesArray = Array.from({ length: pages }, (_, i) => i + 1);
  const startPage = (page - 1) * 12 + 1;
  const endPage = page * 12 > totalDocuments ? totalDocuments : page * 12;
  return (
    <div className='ml-8'>
      <h4 className='pb-5'>
        Page {page} of {pages} | Documents: {startPage} - {endPage} of{' '}
        {totalDocuments} Documents
      </h4>
      {pagesArray.map((p, index) => {
        const isActive = page == index + 1;
        return (
          <Link
            //   style={{ color: ' red ' }}
            className={isActive ? 'active p' : 'p'}
            key={index}
            to={`/?page=${index + 1}`}
          >
            {index + 1}
          </Link>
        );
      })}
    </div>
  );
};
export default Pagination;
