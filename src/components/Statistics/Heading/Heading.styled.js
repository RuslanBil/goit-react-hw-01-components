import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSizes[3]};
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;
