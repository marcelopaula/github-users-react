import { useRouter } from 'next/navigation';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { IconButton } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import Visibility from '@mui/icons-material/Visibility';
import Stack from '@mui/material/Stack';
import { IRepository } from '@/types/repository';
import * as S from './styles';

const List = ({ data }:{ data: IRepository[] }) => {
	const router = useRouter();

	const handleClickView = (repoName: string) => {
		router.push(`/repo/${repoName}`)
	}

	return (
		<>
			<Typography variant='h6'>Repositórios</Typography>
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
							data.map((repo:IRepository) => (
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