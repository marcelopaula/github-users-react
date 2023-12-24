import { useRouter } from 'next/navigation';
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
import { IRepository } from '@/types/repository';

const List = ({data}:IRepository[]) => {
	const router = useRouter();

	const handleClickView = (repoName: string) => {
		router.push(`/repo/${repoName}`)
	}

	return (
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Nome</TableCell>
							<TableCell>Descrição</TableCell>
							<TableCell>Estrelas</TableCell>
							<TableCell>Visualizar</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							data &&
							data.map((repo:IRepository) => (
								<TableRow key={repo.id}>
									<TableCell>{repo.name}</TableCell>
									<TableCell>{repo.description}</TableCell>
									<TableCell>
										<StarIcon />{repo.stargazers_count}
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
    )
}


export default List;