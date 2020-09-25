import React from 'react';
import { HeaderContainer, HeaderMode, HeaderText, HeaderSubText } from './HeaderStyle';

function Header({ followers }) {
  return (
    <HeaderContainer>
      <HeaderText>Social Media Dashboard</HeaderText>
      <HeaderSubText>Total Followers: {followers}</HeaderSubText>
      <HeaderMode>Dark Mode</HeaderMode>
    </HeaderContainer>
  );
}

export default Header
