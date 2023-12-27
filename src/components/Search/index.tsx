"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
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
import GitHub from '@mui/icons-material/GitHub';

interface SearchProps {
	innerPage?: boolean
}

const Search = ({innerPage = false}: SearchProps) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const { control, handleSubmit } = useForm<ISearchForm>({
		defaultValues: {
			username: ''
		}
	});

    const onSubmit:SubmitHandler<ISearchForm> = async (data) => {
			const { username } = data;
			const result: any = await SearchUser(username);
			if (result) {
				dispatch(save(result.data));
				router.push(`/${result.data.login}`);
			};
    }

		const handleClickLogo = () => {
			router.push('/');
		}

    return(
			<>
			<Grid container direction={innerPage ? 'row' : 'column'} spacing={4}>
				<S.ContainerLogo item onClick={handleClickLogo}>
					<Grid container justifyContent='center' direction='row' spacing={1}>
						<Grid item>
							<GitHub fontSize='large' />
						</Grid>
						<Grid item>
							<Typography variant='h4'>Search User</Typography>
						</Grid>
					</Grid>
				</S.ContainerLogo>
				<Grid item >
					<S.Form onSubmit={handleSubmit(onSubmit)} suppressHydrationWarning={true}>
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
											size='small'
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
				</Grid>
			</Grid>
			</>
    )
}

export default Search;