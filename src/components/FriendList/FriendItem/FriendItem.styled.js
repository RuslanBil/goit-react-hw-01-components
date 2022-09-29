import styled from 'styled-components';

export const Box = styled.li`
  width: 300px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  border: ${props => props.theme.borders.normal};
`;

export const Marker = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Img = styled.img`
  border: thick double #32a1ce;
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
`;
