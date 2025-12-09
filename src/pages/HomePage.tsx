import { SearchBar } from "../modules/vacancies";
import { FiltersBlock } from "../modules/vacancies";
import { VacanciesList } from "../modules/vacancies";
import { PaginationBlock } from "../modules/vacancies";
import { Header } from "../modules/header";
import { Box, Container, Divider, Grid } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchVacancies } from "../store/vacanciesSlice";
import { useEffect } from "react";

export function HomePage() {
  const dispatch = useAppDispatch();
  const { search, city, skills, page, perPage } = useAppSelector(
    (state) => state.vacancies
  );

  useEffect(() => {
    dispatch(fetchVacancies());
  }, [dispatch, search, city, skills, page, perPage]);

  return (
    <>
      <Header />
      <Box
        bg={"#F6F6F7"}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Container size="xl" p={0}>
          <SearchBar />
        </Container>

        <Divider color="#E6E6E6" size="xs" />

        <Container
          size="xl"
          p={0}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Grid gutter={24}>
            <Grid.Col span="content">
              <Box w={320}>
                <FiltersBlock />
              </Box>
            </Grid.Col>

            <Grid.Col span="auto">
              <VacanciesList />
            </Grid.Col>
          </Grid>
        </Container>
        <Box mt="auto" py={24}>
          <PaginationBlock />
        </Box>
      </Box>
    </>
  );
}
