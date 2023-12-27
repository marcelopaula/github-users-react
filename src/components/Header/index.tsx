'use client'

import Search from "../Search";
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <Search innerPage={true} />
    </S.Header>
  )
}

export default Header;