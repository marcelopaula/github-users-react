import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	Typography,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	IconButton,
	MenuItem,
	Grid
} from '@material-ui/core'
import StarIcon from '@mui/icons-material/Star';
import Visibility from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { IRepository } from '@/types/repository';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '@/Store/slices/sort';
import { RootState } from '@/Store';

const List = ({ data }:{ data: IRepository[] }) => {
	const selectSortItems = [
		{ label: 'mais estrelas', value: {sort: 'start', order: 'desc'} },
		{ label: 'menos estrelas', value: {sort: 'stars', order: 'asc'} },
	]
	const dispatch = useDispatch();
	const router = useRouter();
	const sort = useSelector((state:RootState) => state.sort);

	const handleClickView = (repoName: string) => {
		router.push(`/repo/${repoName}`)
	}

	const handleChangeOrder = (event: SelectChangeEvent) => {
		dispatch(update(JSON.parse(event.target.value)))
	}

	return (
		<>
			<Grid container justifyContent='space-between'>
				<Grid item>
					<Typography variant='h6'>Repositórios</Typography>
				</Grid>
				<Grid item>
					<Select size='small' value={JSON.stringify(sort)} onChange={handleChangeOrder}>
						{
							selectSortItems.map((item, i) => (
								<MenuItem 
									value={JSON.stringify(item.value)} 
									key={i}>{item.label}</MenuItem>
							))
						}
					</Select>
				</Grid>
			</Grid>
			<S.Line />
			<TableContainer component={Paper}>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell>
								<Typography variant='subtitle2'>
									<b>Nome</b>
								</Typography>
							</TableCell>
							<TableCell>
							<Typography variant='subtitle2'>
									<b>Descrição</b>
								</Typography>
							</TableCell>
							<TableCell>
							<Typography variant='subtitle2'>
									<b>Estrelas</b>
								</Typography>
							</TableCell>
							<TableCell>
							<Typography variant='subtitle2'>
									<b>Visualizar</b>
								</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							data &&
							data.map((repo:IRepository, i:number) => (
								<TableRow key={repo.id}>
									<TableCell>
										<Typography variant='caption'>
											{repo.name}
										</Typography>
									</TableCell>
									<TableCell>
										<Typography variant='caption'>
										{repo.description}
										</Typography>
									</TableCell>
									<TableCell>
										<Stack direction="row" spacing={1} alignItems="center">
												<StarIcon color='primary' style={{width: '20px', height: '20px'}} />
												<Typography variant='caption'>
													{repo.stargazers_count}
												</Typography>
										</Stack>
									</TableCell>
									<TableCell>
									<IconButton 
										data-testid={`button-${i}`}
										aria-label="delete" 
										color="primary" 
										onClick={() => handleClickView(repo.name)}>
										<Visibility />
									</IconButton>
									</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</TableContainer>
		</>
    )
}


export default List;