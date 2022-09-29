import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px;
`;

export const ProfileBox = styled.div`
  width: 300px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  border-radius: 4px;
`;

export const InfoContainer = styled.div`
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  height: auto;
  margin: 0 auto;
`;

export const InfoBlock = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[2]};
  background-color: ${p => p.theme.colors.background};
`;

export const UserName = styled.p`
  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.heading};
  margin-bottom: ${props => props.theme.space[2]};
  margin-top: ${p => p.theme.space[3]};
`;

export const UserNickName = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const UserLocation = styled.p`
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const InfoBlockItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${p => p.theme.space[2]};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.textSecondary};
  width: 100%;
`;

export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]};
  color: ${p => p.theme.colors.textSecondary}; ;
`;

export const Numbers = styled.span`
  color: ${p => p.theme.colors.textMain};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
