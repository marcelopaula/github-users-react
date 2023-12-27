"use client"

import React, {useEffect} from 'react';
import {
	TextField,
	InputAdornment,
	Button,
	Typography,
	Grid
} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ISearchForm } from './types';
import * as S from './styles';
import { save } from '@/Store/slices/user';
import SearchUser from '@/services/Users';

const Search = () => {
	const dispatch = useDispatch();
	const { control, handleSubmit } = useForm<ISearchForm>({
		defaultValues: {
			username: ''
		}
	});

    const onSubmit:SubmitHandler<ISearchForm> = async (data) => {
			const { username } = data;
			const result: any = await SearchUser(username);
			if (result) dispatch(save(result.data));
    }

    return(
			<>
			<Grid container justifyContent='center' spacing={1}>
				<Grid item>
					<S.GithubIcon />
				</Grid>
				<Grid item>
					<Typography variant='h4'>Search User</Typography>
				</Grid>
			</Grid>

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
									placeholder='Digite o nome do usuário'
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<SearchIcon color='primary' />
											</InputAdornment>
										),
									}}/>
							)
							}/>
					</div>
					<Button 
						variant='contained' 
						color='primary'>
							Pesquisar
					</Button>
			</S.Form>
			</>
    )
}

export default Search;