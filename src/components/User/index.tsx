'use client'
import { RootState } from '@/Store';
import { Grid, Avatar, Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined';
import { useSelector } from 'react-redux';
import * as S from './styles';

const User = () => {
	const user = useSelector((state:RootState) => state.user);

	return (
		<>
			<Grid container>
				<Grid item xs={2}>
					<Avatar
							alt={user.name}
							src={user.avatar_url}
							style={{width: '100px', height: '100px'}}
					/>
				</Grid>
				<Grid item xs={10}>
					<Grid container spacing={2}>
						<Grid item xs>
							<Typography variant='h6'>{user.name}</Typography>
							<Typography variant='body2'>Bio: {user.bio}</Typography>
						</Grid>
					</Grid>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs>
							<PeopleAltOutlined color='primary' />
						</Grid>
						<Grid item xs>
							<Stack spacing={1} direction='row'>
								<Typography variant='caption'>
									Seguidores: {user.followers}
								</Typography>
								<Typography variant='caption'>
									Seguindo: {user.following}
								</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
};

export default User;