'use client';

import { useState, useEffect} from 'react'
import { RootState } from '@/Store';
import { useSelector } from 'react-redux';
import { getRepositories } from '@/services/Repositories';
import { IRepository } from '@/types/repository';
import List from './List';

const RepositoriesList = () => {
    const user = useSelector((state:RootState) => state.user);
    const sort = useSelector((state:RootState) => state.sort);

    const [repositories, setRepositories] = useState<IRepository[]>([])

    const loadRepositories = async () => {
        const repositories = await getRepositories(user.login, sort);
        setRepositories(repositories.data.items);
    }

    useEffect(() => {
        if (user.login) loadRepositories();
    }, [user, sort])

    return (
        <List data={repositories} />
    )
}

export default RepositoriesList;