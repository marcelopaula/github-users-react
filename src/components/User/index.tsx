'use client'
import { RootState } from '@/Store';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector((state:RootState) => state.user);

    return (
        <div>
            <Avatar
                alt={user.name}
                src={user.avatar_url}
            />
            <Typography>{user.name}</Typography>
            <Typography>{user.email}</Typography>
            <Typography>Bio: {user.bio}</Typography>

            <hr />

            <Typography>Seguidores: {user.followers}</Typography>
            <Typography>Seguindo: {user.following}</Typography>

            <hr />
        </div>
    )
};

export default User;