import { Breadcrumbs, Link, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import * as S from './styles';
import { RootState } from "@/Store";

interface BreadCrumbsProps {
  repo?: string
} 

const BreadCrumbs = ({repo}: BreadCrumbsProps) => {
  const user = useSelector((state:RootState) => state.user);

  const mountItem = (isLink: boolean = false, url: string, label: string) => 
    isLink ? 
      <Link color="inherit" href={url}>
        {label}
      </Link>
    : 
    <Typography color="textPrimary">{label}</Typography>

  return (
    <S.Container>
      <Grid container justifyContent="center">
        <Grid item md={8} lg={6}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Pesquisar
            </Link>
            { mountItem(repo ? true : false, `/${user.login}`, user.login) }
            
            { repo && mountItem(false, '', repo ? repo : '') }
          </Breadcrumbs>
        </Grid>
      </Grid>
    </S.Container>
  )
}

export default BreadCrumbs;