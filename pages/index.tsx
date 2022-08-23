import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";


const Home: NextPage = () => {
  return (
    <Container title="Dashboard">
      <DashboardLayout />
    </Container>
  );
};

export default Home
