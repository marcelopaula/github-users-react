'use client';

import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Header from "@/components/Header";
import { RootState } from "@/Store";
import User from "@/components/User";
import RepositoriesList from "@/components/RepositoriesList";
import SearchUser from "@/services/Users";
import { save } from '@/Store/slices/user';
import BreadCrumbs from '@/components/BreadCrumbs';

const Page = ({params}:{params: {login: string}}) => {
  const dispatch = useDispatch();
  const user = useSelector((state:RootState) => state.user);

  const search = async () => {
    const result:any = await SearchUser(params.login);
    dispatch(save(result.data));
  }

  useEffect(() => {
    if(user.login === '') search();
  }, [])

  return (
    <>
      <Header />
      <BreadCrumbs />
      <Grid container justifyContent="center">
        <Grid item md={8} lg={6}>
          <User />
          <RepositoriesList />
        </Grid>
      </Grid>
    </>
  )
}
export default Page;