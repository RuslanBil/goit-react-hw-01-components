import {
  Box,
  ProfileBox,
  InfoContainer,
  Image,
  InfoBlock,
  UserName,
  UserNickName,
  UserLocation,
  InfoBlockItem,
  Label,
  Numbers,
} from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Box>
      <ProfileBox>
        <InfoContainer>
          <Image src={avatar} alt={username} />
          <UserName>{username}</UserName>
          <UserNickName>{tag}</UserNickName>
          <UserLocation>{location}</UserLocation>
        </InfoContainer>
        <InfoBlock>
          <InfoBlockItem>
            <Label>Followers</Label>
            <Numbers>{followers}</Numbers>
          </InfoBlockItem>
          <InfoBlockItem>
            <Label>Views</Label>
            <Numbers>{views}</Numbers>
          </InfoBlockItem>
          <InfoBlockItem>
            <Label>Likes</Label>
            <Numbers>{likes}</Numbers>
          </InfoBlockItem>
        </InfoBlock>
      </ProfileBox>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
