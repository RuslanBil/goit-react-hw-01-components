import styled from 'styled-components';
import { getRandomHexColor } from 'components/Statistics/StatisticsList/StatisticsItem/StatisticsItem.styled';

export const Th = styled.th`
  font-size: ${props => props.theme.fontSizes[3]};
  width: 150px;
  padding: ${props => props.theme.space[3]};
`;

export const Tr = styled.tr`
  background-color: ${getRandomHexColor};
`;
