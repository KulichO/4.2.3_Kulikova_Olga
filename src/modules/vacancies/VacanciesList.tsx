import { VacancyCard } from "./VacancyCard";
import { Box, Text } from "@mantine/core";
import { useAppSelector } from "../../store/hooks";

export function VacanciesList() {
  const { items, isLoading, error } = useAppSelector(
    (state) => state.vacancies
  );

  if (error) {
    return (
      <Box mt={24}>
        <Text>Ошибка загрузки: {error}</Text>
      </Box>
    );
  }

  if (!isLoading && items.length === 0) {
    return (
      <Box mt={24}>
        <Text>Ничего не найдено</Text>
      </Box>
    );
  }

  return (
    <Box mt={24}>
      {items.map((item) => (
        <VacancyCard vacancy={item} key={item.id} />
      ))}
    </Box>
  );
}
