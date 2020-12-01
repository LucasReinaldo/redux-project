import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

export const Item = styled.div`
  display: flex;

  span + span {
    margin: 0 8px;
  }

  button {
    width: 56px;
  }
`;
