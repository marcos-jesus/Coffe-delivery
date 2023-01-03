import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  gap: 51.25rem;

  position: absolute;
  height: 6.5rem;
  left: 0;
  right: 0;
  top: 0;

  background: ${(props) => props.theme['background']};
`

export const ContainerBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 0.375rem;

  flex: none;
  flex-grow: 0;
`

export const Location = styled(ContainerBase)`
  width: 8.9375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-light']};
  border: 1px solid ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  
  order: 0;
`

export const Cart = styled(ContainerBase)`
  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['yellow-light']};
  border: 1px solid ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  order: 1;
`