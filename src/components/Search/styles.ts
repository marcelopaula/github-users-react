import styled from 'styled-components'
import GitHub from '@mui/icons-material/GitHub';
import { Grid } from '@material-ui/core';

export const Form = styled.form`
    display: flex;
    gap: 1rem;
`
export const GithubIcon = styled(GitHub)`
    width: 40px;
    height: 40px;
`

export const ContainerLogo = styled(Grid)`
    cursor: pointer;
`