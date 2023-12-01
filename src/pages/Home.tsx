import React from 'react';
import styled from 'styled-components/native';
import {flex} from '../styles';
import {Button} from 'react-native';
import {ROUTER} from '../constants';
import TeentimeButton from '../components/atoms/Button';
import Input from '../components/atoms/Input';

const Home = ({navigation}: any) => {
  return (
    <ContainerView>
      <Button
        onPress={() => navigation.navigate(ROUTER.TEST)}
        title="Go to test page"
      />
      <Input
        title="활동명"
        placeholder="동아리 내에서 불릴 이름을 적어주세요"
      />
      <TeentimeButton>동아리 가입하기</TeentimeButton>
    </ContainerView>
  );
};

const ContainerView = styled.View`
  flex: 1;
  ${flex.CENTER};
`;

export default Home;
