"use client"

import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { ISearchForm } from './types';

import * as S from './styles';

import SearchUser from '@/services/Users';

const Search = () => {
    const { control, handleSubmit } = useForm<ISearchForm>({
        defaultValues: {
            username: ''
        }
    });

    const onSubmit:SubmitHandler<ISearchForm> = async (data) => {
        const { username } = data;
        const result = await SearchUser(username);
    }

    return(
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <div style={{flex: 1}}>
                <Controller 
                    name='username'
                    control={control}
                    render={
                        ({
                            field: {value, onChange}
                        }) => (
                        <TextField 
                            value={value}
                            onChange={onChange}
                            fullWidth 
                            id='search-input' 
                            variant='outlined'
                            placeholder='Digite o nome do usuário'/>
                        )
                    }/>
            </div>
            <Button 
                variant='contained' 
                color='primary'>
                    Pesquisar
            </Button>
        </S.Form>
    )
}

export default Search;