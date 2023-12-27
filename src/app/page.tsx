'use client'

import { Grid } from '@material-ui/core';
import Search from '@/components/Search';
import * as S from './styles';

import User from '@/components/User';

export default function Home() {
  return (
    <S.Home>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item md={6} lg={4}>
          <Search />
        </Grid>
      </Grid>
    </S.Home>
  )
}
