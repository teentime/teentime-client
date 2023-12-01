import React from 'react';
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';

const Header = ({name}: {name: string}) => ({
  headerStyle: {
    backgroundColor: 'black',
  },
  headerLeft: ({onPress}: TouchableOpacityProps) => (
    <TouchableOpacity onPress={onPress}>
      <StyledTitleText>{name}</StyledTitleText>
    </TouchableOpacity>
  ),
  headerRight: () => (
    <View>
      <StyledText>텍스트 버튼</StyledText>
    </View>
  ),
});

const StyledText = styled.Text`
  color: white;
`;

const StyledTitleText = styled(StyledText)`
  font-size: 18px;
  font-weight: 800;
`;

export default Header;
