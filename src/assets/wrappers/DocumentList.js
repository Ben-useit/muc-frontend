import styled from 'styled-components';

const Wrapper = styled.div`
  .flex {
    display: flex;
  }
  .justify-between {
    justify-content: space-between;
  }
  .items-center {
    align-items: center;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .border-b {
    border-bottom-width: 1px;
  }
  .border-base-300 {
    --tw-border-opacity: 1;
    border-color: hsl(var(--b3) / var(--tw-border-opacity));
  }
  .pb-5 {
    padding-bottom: 1.25rem;
  }
  .font-medium {
    font-weight: 500;
  }
  .gap-x-2 {
    -moz-column-gap: 0.5rem;
    column-gap: 0.5rem;
  }
  .pt-12 {
    padding-top: 3rem;
  }
  .grid {
    display: grid;
  }
  .gap-4 {
    gap: 1rem;
  }
  .active {
    font-weight: 800;
    color: red;
  }
  .p {
    padding: 8px;
  }
  .ml-8 {
    margin-left: 2rem;
  }

  @media (min-width: 768px) {
    .md-grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg-grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;
export default Wrapper;
