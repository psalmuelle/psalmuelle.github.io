import styled from "styled-components";

const Heading = styled.div`
  color: white;
  max-width: 85%;
  margin: 0 auto;
  margin-top: 52px;
  h1 {
    font-weight: 600;
    span {
      color: var(--secondary-color);
      padding-right: 4px;
    }
  }
  p {
    margin-top: 8px;
  }
`;

const Wrapper = styled.ul`
  max-width: 85%;
  margin: 0 auto;
  margin-top: 52px;
  color: white;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 42px;
`;

const Container = styled.li`
  max-width: 330px;
  height: fit-content;
  border: 1px solid gray;
  border-radius: 3px;
  img {
    display: block;
    width: 100%;
    height: 201px;
    border-radius: 2px 2px 0 0;
    cursor: pointer;
  }
  .stack {
    color: gray;
    padding: 8px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .info {
    padding: 16px;

    h2 {
      font-weight: 500;
      font-size: 24px;
    }
    p {
      color: gray;
      padding-top: 4px;
      padding-bottom: 16px;
    }
    div {
      button {
        border: 1px solid var(--secondary-color);
        background: none;
        color: white;
        padding: 8px 16px;
        margin-right: 10px;
        font-weight: 500;
        font-size: 16px;
        border-radius: 1px;
        cursor: pointer;
      }
    }
  }
`;

export { Heading, Wrapper, Container };
