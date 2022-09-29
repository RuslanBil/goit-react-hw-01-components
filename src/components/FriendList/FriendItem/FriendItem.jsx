import { Box, Marker, Img, UserName } from './FriendItem.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ item }) => {
  return (
    <Box>
      <Marker isOnline={item.isOnline}></Marker>
      <Img src={item.avatar} alt={item.name} width="48" />
      <UserName>{item.name}</UserName>
    </Box>
  );
};

FriendItem.propTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
