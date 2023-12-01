import React from 'react';
import {TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../styles';

interface InputProps extends TextInputProps {
  title: string;
}

const Input = ({title, ...props}: InputProps) => {
  return (
    <StyledView>
      <StyledTitle>{title}</StyledTitle>
      <StyledInput {...props} />
    </StyledView>
  );
};

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 8px;
`;
const StyledTitle = styled.Text`
  margin-right: auto;
  color: ${theme.gray[6]};
`;

const StyledInput = styled.TextInput`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${theme.gray[2]};
  display: flex;
  align-items: center;
  color: ${theme.gray[6]};
`;

export default Input;
