import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/SearchForm';
import { Link } from 'react-router-dom';
import { GrPowerReset, GrFormSearch } from 'react-icons/gr';
import customFetch from '../axios';
import { useQuery } from '@tanstack/react-query';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['categories'], // free choice
    queryFn: () => customFetch('/categories'),
  });
  if (isLoading) return <></>;
  if (isError) return console.log(error);
  const catList = data.data;

  return (
    <Wrapper>
      <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm-grid-cols-2 md-grid-cols-3 lg-grid-cols-4 items-center'>
        <div className='form-control item-fulltext'>
          <label htmlFor='search' className='label'>
            Search Full Text
          </label>
          <input
            type='search'
            defaultValue={searchTerm}
            className='input input-bordered input-sm'
            name='search'
            id='search'
          />
        </div>
        <div className='form-control item-category'>
          <label htmlFor='search' className='label'>
            Select Category
          </label>
          <select
            name='category'
            id='category'
            className='select select-bordered select-sm'
          >
            {catList.map((c, index) => {
              const {
                _id: { category },
              } = c;
              return <option key={index}>{category}</option>;
            })}
          </select>
        </div>
        <div></div>
        <div></div>
        <button type='submit' className='btn btn-primay btn-sm btn-search'>
          {/* {isSubmitting ? "submitting" : "submit"} */}
          <GrFormSearch />
        </button>
        <Link className='btn btn-accent btn-sm' to='/'>
          <GrPowerReset />
        </Link>
        {/* <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button> */}
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
