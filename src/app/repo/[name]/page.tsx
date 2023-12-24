'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';
import { getRepository } from '@/services/Repositories';
import { RootState } from '@/Store';
import { IRepository } from '@/types/repository';
 
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
            <div>
              <h1>{data.name}</h1>
            </div>
            <div>
              estrelas: {data.stargazers_count}
            </div>
            <div>
              <p>Descrição: {data.description}</p>
            </div>
          </>
        )
      }

    </main>

    )
}