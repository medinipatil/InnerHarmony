import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

function Header() {
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#ffffff", boxShadow: 2 }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                },
                px: 1,
                py: 0.5,
                borderRadius: 2,
                cursor: "pointer",
              }}
            >
              <SpaIcon sx={{ color: "#4CAF50", fontSize: 36, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontWeight: "bold",
                  letterSpacing: 2,
                  color: "#4CAF50",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                INNER HARMONY
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
