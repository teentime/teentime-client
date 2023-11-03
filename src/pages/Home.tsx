import React from 'react';
import styled from 'styled-components/native';
import {flex} from '../styles';
import {Button, Text} from 'react-native';
import {ROUTER} from '../constants';

const Home = ({navigation}: any) => {
  return (
    <ContainerView>
      <Text>Hello World ~</Text>
      <Button
        onPress={() => navigation.navigate(ROUTER.TEST)}
        title="Go to test page"
      />
    </ContainerView>
  );
};

const ContainerView = styled.View`
  flex: 1;
  ${flex.CENTER};
`;

export default Home;
