import { Breadcrumbs, Link, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import * as S from './styles';
import { RootState } from "@/Store";

interface BreadCrumbsProps {
  repo: string
} 

const BreadCrumbs = ({repo}: BreadCrumbsProps) => {
  const user = useSelector((state:RootState) => state.user);

  return (
    <S.Container>
      <Grid container justifyContent="center">
        <Grid item md={8} lg={6}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Pesquisar
            </Link>
            <Link color="inherit" href={`/${user.login}`}>
              {user.login}
            </Link>
            <Typography color="textPrimary">{repo}</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </S.Container>
  )
}

export default BreadCrumbs;