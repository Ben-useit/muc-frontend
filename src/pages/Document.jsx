import Wrapper from '../assets/wrappers/Document';
import { Link } from 'react-router-dom';
import { toProperCase } from '../utils/proper-case';
const Document = ({ _id, label, fileName, pages, thumb, ocr }) => {
  const thumbURL = `${import.meta.env.VITE_IMAGES_URL}/${fileName}-0.png`;
  return (
    <Wrapper>
      <div className='card-box'>
        <Link
          className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
          to={`/${_id}`}
        >
          <figure className='px-4 pt-4'>
            <img
              src={thumbURL}
              alt={fileName}
              className='rounded-xl h-64 md:h-48 w-full object-cover'
            />
          </figure>
          {/* <div className="card-body items-center text-center"> */}
          <div className='card-body'>
            {/* <h4 className="card-title tracking-wider"> */}
            <div className='single-line'>{toProperCase(label)}</div>
            <div className='text-secondary'>
              {pages}
              {pages > 1 ? ' pages' : ' page'}
            </div>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Document;
