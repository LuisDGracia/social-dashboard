import React from 'react';
import Theme from '../Theme Button/ThemeComponent';
import { HeaderContainer, HeaderText, HeaderSubText, HeaderInfo } from './HeaderStyle';

function Header({ followers }) {
  return (
    <HeaderContainer>
      <HeaderInfo>
        <HeaderText>Social Media Dashboard</HeaderText>
        <HeaderSubText>Total Followers: {followers}</HeaderSubText>
      </HeaderInfo>
      <Theme />
    </HeaderContainer>
  );
}

export default Header
