import { Title } from './Heading.styled';

export const Heading = ({ title }) => {
  return <Title>{title.toUpperCase()}</Title>;
};
