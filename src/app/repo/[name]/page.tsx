'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import { getRepository } from '@/services/Repositories';
import { RootState } from '@/Store';
import { IRepository } from '@/types/repository';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@mui/icons-material/Star';
import LinkIcon from '@mui/icons-material/Link';
import Stack from '@mui/material/Stack';
import Link from '@material-ui/core/Link';
import * as S from './styles';
 
export default function Page({params}:{params: {name: string}}) {
  const [data, setData] = useState<IRepository>();
  const user = useSelector((state:RootState) => state.user);

  const loadRepository = async (repoName: string) => {
    const result = await getRepository(`${user.login}/${repoName}`);
    setData(result.data);
  }

  useEffect(() => {
    if (params.name) loadRepository(params.name);
  }, [])

  return (
    <main>
      {
        data && (
          <>
            <S.Section>
              <Stack direction="row" spacing={1} alignItems="center">
                <LinkIcon color='primary' style={{width: '20px', height: '20px'}} />
                <Link variant='h5'>{data.name}</Link>
                <StarIcon color='primary' style={{width: '20px', height: '20px'}} />
                <Typography variant='body2'>
                  {data.stargazers_count}
                </Typography>
              </Stack>
            </S.Section>

            <S.Section>
            </S.Section>

            <S.Section>
              <Typography variant='body1'>Descrição:</Typography>
              <Typography variant='caption'>{data.description}</Typography>
            </S.Section>
          </>
        )
      }

    </main>

    )
}