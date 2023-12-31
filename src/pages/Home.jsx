import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import cities from "../data.json";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              key={city.id}
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
}
