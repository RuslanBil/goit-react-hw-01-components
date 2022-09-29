import styled from 'styled-components';

export const Item = styled.li`
  text-align: center;
  padding: ${p => p.theme.space[2]};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textSecondary};
  background-color: ${getRandomHexColor};
  width: 100%;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[2]};
  color: ${p => p.theme.colors.textMain}; ;
`;

export const Numbers = styled.span`
  color: ${p => p.theme.colors.textMain};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
