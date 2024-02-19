import styled from "styled-components";

const Wrapper = styled.div`
  main {
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  .doc-name {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
  .category-name {
    font-size: 1rem;
    padding-bottom: 0.5rem;
  }
  .review {
    #width: 90vw;
    #max-width: var(--fixed-width);
    background: var(--white);
    padding: 1.5rem 2rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-4);
    transition: var(--transition);
    text-align: center;
  }
  .review:hover {
    box-shadow: var(--shadow-3);
  }
  .img-container {
    position: relative;
    max-width: 100%;
    height: auto;
    #border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
  .person-img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }
  .space {
    height: 2rem;
  }
`;

export default Wrapper;
