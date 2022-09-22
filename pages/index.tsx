import type { NextPage } from "next";
import { LayerProvider } from "../context";
import Container from "../components/Container/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

const Home: NextPage = () => {
  return (
    <LayerProvider>
      <Container title="Dashboard">
        <DashboardLayout />
      </Container>
    </LayerProvider>
  );
};

export default Home;
