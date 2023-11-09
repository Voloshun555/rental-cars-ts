import { Container } from "../Component/Container/Container";
import { FilterSection } from "../Component/FilterSection/FilterSection";
import { IData } from "../redux/carsSlice/carsSlice";

interface Idata {
  data: IData[];
}

export default function Catalogue({ data }: Idata) {
  return (
    <Container>
      <FilterSection data={data} />
    </Container>
  );
}
