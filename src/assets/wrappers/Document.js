import styled from 'styled-components';

const Wrapper = styled.div`
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .pt-4 {
    padding-top: 1rem;
  }
  .rounded-xl {
    border-radius: 0.75rem;
  }
  .h-64 {
    height: 16rem;
  }
  .w-full {
    width: 100%;
  }
  .object-cover {
    -o-object-fit: cover;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    .md\:h-48 {
      height: 12rem;
    }
  }
  .card-box {
    background-color: green;
    border-radius: 8px;
    margin: 24px;
    box-shadow: 10px 10px lightgray;
  }
  .card-body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    padding: var(--padding-card, 2rem);
    gap: 0.5rem;
  }
  .items-center {
    align-items: center;
  }
  .text-center {
    text-align: center;
  }
  .single-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.9rem;
    color: white;
  }

  .card-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  .capitalize {
    text-transform: capitalize;
  }
  .tracking-wider {
    letter-spacing: 0.05em;
  }
  .text-secondary {
    --tw-text-opacity: 1;
    font-size: 0.8rem;
    /* color: hsl(var(--s) / var(--tw-text-opacity)); */
    color: white;
  }
  /* unvisited link */
  a:link {
    color: #982920;
  }

  /* visited link */
  a:visited {
    color: #6a1d16;
  }

  /* mouse over link */
  a:hover {
    color: #b76963;
  }

  /* selected link */
  a:active {
    color: #982920;
  }
`;

export default Wrapper;
