import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 6rem;
  .input-bordered {
    --tw-border-opacity: 0.2;
  }
  .input {
    flex-shrink: 1;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    line-height: 2;
    line-height: 1.5rem;
    border-width: 1px;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 0;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    border-radius: var(--rounded-btn, 0.5rem);
  }

  .input-sm {
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 2rem;
  }
  .select-bordered {
    --tw-border-opacity: 0.2;
  }
  .select {
    display: inline-flex;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 3rem;
    padding-left: 1rem;
    padding-right: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
    min-height: 3rem;
    border-width: 1px;
    border-color: hsl(var(--bc) / var(--tw-border-opacity));
    --tw-border-opacity: 0;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity));
    font-weight: 600;
    border-radius: var(--rounded-btn, 0.5rem);
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
      linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position: calc(100% - 20px) calc(1px + 50%),
      calc(100% - 16px) calc(1px + 50%);
    background-size: 4px 4px, 4px 4px;
    background-repeat: no-repeat;
  }
  .select-sm {
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 2rem;
    font-size: 0.875rem;
    line-height: 2rem;
    min-height: 2rem;
  }
  .bg-base-200 {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2) / var(--tw-bg-opacity));
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .grid {
    display: grid;
  }
  .gap-x-4 {
    -moz-column-gap: 1rem;
    column-gap: 1rem;
  }
  .gap-y-8 {
    row-gap: 2rem;
  }
  .form-control {
    display: flex;
    flex-direction: column;
  }
  .form-delete {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn {
    #display: inline-flex;
    flex-shrink: 0;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-color: hsl(var(--b2) / var(--tw-border-opacity));
    text-align: center;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 0.2s;
    border-radius: var(--rounded-btn, 0.5rem);
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 1em;
    min-height: 3rem;
    gap: 0.5rem;
    font-weight: 600;
    text-decoration-line: none;
    border-width: var(--border-btn, 1px);
    animation: button-pop var(--animation-btn, 0.25s) ease-out;
    text-transform: var(--btn-text-case, uppercase);
    --tw-border-opacity: 1;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--bc) / var(--tw-text-opacity));
    outline-color: hsl(var(--bc) / 1);
  }
  .btn-accent {
    --tw-border-opacity: 1;
    border-color: hsl(var(--a) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--a) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--ac) / var(--tw-text-opacity));
    outline-color: hsl(var(--a) / 1);
  }
  @media (min-width: 640px) {
    .sm-grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (min-width: 768px) {
    .md-grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg-grid-cols-4 {
      grid-template-columns: 1fr 1fr 40px 40px;
    }
  }
  .item-fulltext {
    grid-row: 1 / span 2;
  }
  .item-category {
    grid-row: 1 / span 2;
  }
  .items-center {
    align-items: center;
  }
  .label {
    display: flex;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.25rem;
  }
  .btn-primary {
    --tw-border-opacity: 1;
    border-color: hsl(var(--p) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: hsl(var(--p) / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--pc) / var(--tw-text-opacity));
    outline-color: hsl(var(--p) / 1);
  }
  .btn-sm {
    height: 2rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    min-height: 2rem;
    font-size: 0.875rem;
  }
  .btn-search {
    font-size: 1.2rem;
  }
  :root {
    --b2: 100 50% 97%;
  }
`;

export default Wrapper;
