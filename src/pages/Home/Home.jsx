import { Grid2 } from "@mui/material";
import CardComponent from "@components/Cards/CardComponent";
import { homeNavigation } from "./content/homeNavigation";

const Home = () => {
  return (
    <Grid2
      container
      spacing={1}
      columns={{ xs: 2, sm: 8, md: 10 }}
      height={"100vh"}
      py={{ xs: 1, md: 2 }}
      px={2}
    >
      <Grid2 size={{ md: 6, sm: 9, xs: 4 }}>
        <CardComponent
          variant="home-card"
          principal
          item={homeNavigation.Home}
          clikable
        />
      </Grid2>
      <Grid2 size={{ md: 4, sm: 3, xs: 2 }}>
        <CardComponent variant="home-card" item={homeNavigation.newEvent} />
      </Grid2>
      <Grid2 size={{ md: 5, sm: 3, xs: 2 }}>
        <CardComponent variant="home-card" item={homeNavigation.editEvent} />
      </Grid2>
      <Grid2 size={{ md: 5, sm: 2, xs: 2 }}>
        <CardComponent variant="home-card" item={homeNavigation.editUser} />
      </Grid2>
    </Grid2>
  );
};

export default Home;
