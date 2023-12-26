'use client'
import { RootState } from '@/Store';
import { Grid, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import { useSelector } from 'react-redux';
import * as S from './styles';

const User = () => {
	const user = useSelector((state:RootState) => state.user);

	return (
		<S.Wrapper>
			<Grid container>
				<Grid item xs={2}>
						<Avatar
								alt={user.name}
								src={user.avatar_url}
								style={{width: '100px', height: '100px'}}
						/>
				</Grid>
				<Grid xs={10}>
					<Grid container>
						<Grid item>
							<Typography variant='h6'>{user.name}</Typography>
							<Typography variant='body2'>Bio: {user.bio}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} alignItems='center'>
						<Grid item>
							<PeopleAltOutlined />
						</Grid>
						<Grid item>
							<Typography variant='caption'>Seguidores: {user.followers} Seguindo: {user.following}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</S.Wrapper>
	)
};

export default User;