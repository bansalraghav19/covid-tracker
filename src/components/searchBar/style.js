import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .search-input {
    position: relative;
    max-width: 1024px;
    background: #fff;
    width: 100%;
    box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);

    // search bar
    input {
      height: 55px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 5px;
      padding: 0 60px 0 20px;
      font-size: 1rem;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    }

    .icon {
      height: 55px;
      width: 55px;
      line-height: 55px;
      position: absolute;
      top: 0;
      right: 0;
      text-align: center;
      color: #0000ff;
      font-size: 1.25rem;

      .fa-times {
        cursor: pointer;
      }
    }

    // suggestion-box

    .suggestion-box {
      padding: 10px 8px;
      max-height: 300px;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      left: 0;
      top: 55px;
      z-index: 10;
      background: #fff;
      box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);

      a,
      a:visited,
      a:active {
        color: black;
        text-decoration: none;
      }

      li {
        list-style: none;
        padding: 8px 12px;
        width: 100%;
        cursor: pointer;
        border-radius: 3px;

        &:hover {
          background: #efefef;
        }
      }
    }
  }
`;
