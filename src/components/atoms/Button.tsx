import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {flex, theme} from '../../styles';

interface ButtonProps extends TouchableOpacityProps {
  varient?: string;
}

const TeentimeButton = ({children, ...props}: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.TouchableOpacity<{varient?: string}>`
  padding: 15px 80px;
  border-radius: 12px;
  font-size: 500px;
  ${flex.CENTER};
  background-color: ${theme.primary};
`;

const StyledText = styled.Text`
  color: ${theme.gray[8]};
`;

export default TeentimeButton;
