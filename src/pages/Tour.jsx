import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
  Button,
} from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import TourAccordion from "../components/TourAccordion";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Immerse into the Falls
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
          alt="Tour's main image"
          height={325}
          width={600}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="hp" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          qui similique vel explicabo. Nihil maxime, corporis cumque nulla alias
          maiores expedita? Eius asperiores explicabo enim iste facere
          repellendus minus vel est reiciendis. Hic, atque cupiditate? Fugit
          totam fuga doloremque voluptatibus.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions
        </Typography>
        <TourAccordion />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation sx={{display: "flex", alignItems: "center"}}>
          <Box>
            <Button variant="contained">Book Now</Button>
          </Box>
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
