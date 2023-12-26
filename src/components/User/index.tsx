'use client'
import { RootState } from '@/Store';
import { Grid, Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector((state:RootState) => state.user);

    return (
        <Grid container>
            <Grid xs={4}>
                <Avatar
                    alt={user.name}
                    src={user.avatar_url}
                />
            </Grid>
            <Grid xs={8}>
                <Typography>{user.name}</Typography>
                <Typography>{user.email}</Typography>
                <Typography>Bio: {user.bio}</Typography>
            </Grid>


            <Typography>Seguidores: {user.followers}</Typography>
            <Typography>Seguindo: {user.following}</Typography>

            <hr />
        </Grid>
    )
};

export default User;