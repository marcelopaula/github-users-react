'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import { getRepository } from '@/services/Repositories';
import { IRepository } from '@/types/repository';
import { Typography, Link, Grid } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import * as S from './styles';

import Header from '@/components/Header';
import BreadCrumbs from '@/components/BreadCrumbs';
 
export default function Page({params}:{params: {name: string}}) {
  const router = useRouter();
  const [data, setData] = useState<IRepository>();
  const user = useSelector((state:RootState) => state.user);

  const loadRepository = async (repoName: string) => {
    const result = await getRepository(`${user.login}/${repoName}`);
    setData(result.data);
  }

  useEffect(() => {
    if (!user.login) {
      router.push('/')
    }
    if (params.name) loadRepository(params.name);
  }, [])

  return (
    <>
      <Header />
      <BreadCrumbs repo={params.name} />
      {
        data && (
          <Grid container justifyContent='center'>
            <Grid item md={8} lg={6}>
              <Grid container justifyContent="center" direction='column' spacing={2}>
                <Grid item xs>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <LinkIcon color='primary' style={{width: '20px', height: '20px'}} />
                    <Link variant='h5' href={data.html_url} target='_blank'>{data.name}</Link>
                    <StarIcon color='primary' style={{width: '20px', height: '20px'}} />
                    <Typography variant='body2'>
                      {data.stargazers_count}
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs>
                  <Typography variant='body1'>Descrição:</Typography>
                  <Typography variant='caption'>{data.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )
      }
    </>

    )
}