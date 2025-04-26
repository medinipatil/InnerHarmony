import { Box, Button, Typography } from "@mui/material";


const Banner = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "600px",
          background: "#C8E6C9",
          padding: 4,
          gap: 4, // space between images and text
          flexWrap: { xs: "wrap", md: "nowrap" }, // Responsive: stack on small screen
        }}
      >
        {/* Left side: Images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, 1fr)",
            gap: 2,
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Box
            component="img"
            src="/StressHelp.jpg"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              gridRow: "1 / 2",
              gridColumn: "1 / 2",
            }}
            alt="happy woman"
          />
          <Box
            component="img"
            src="/mental-health-day.jpg"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              gridRow: "2 / 3",
              gridColumn: "1 / 2",
            }}
            alt="woman meditating"
          />
          <Box
            component="img"
            src="/Help.jpg"
            sx={{
              width: "100%",
              height: "96%",
              objectFit: "cover",
              borderRadius: 2,
              gridRow: "1 / 3",
              gridColumn: "2 / 3",
            }}
            alt="mental health support"
          />
        </Box>

        {/* Right side: Text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
            textAlign: { xs: "center", md: "left" },
            padding: 2,
          }}
        >
          <Typography variant="h6" color="primary" gutterBottom>
            Welcome To
          </Typography>
          <Typography
            variant="h3"
            lineHeight={1.5}
            fontSize={{ xs: "32px", md: "47px" }}
            marginBottom={"20px"}
          >
            INNER HARMONY
          </Typography>
          <Typography
            lineHeight={1.25}
            letterSpacing={1.25}
            marginBottom={"1.5em"}
          >
            "What mental health needs is more sunlight, more candor, and more
            unashamed conversation."
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #74C365, #009E60)",
              color: "white",
              fontWeight: "bold",
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: "12px",
              boxShadow: 3,
              textTransform: "none",
              transition: "0.3s",
              width: "30%",
              "&:hover": {
                background: "linear-gradient(to right, #3CB371, #6B8E23)",
                boxShadow: 6,
                transform: "scale(1.05)",
              },
            }}
          >
            Start Your Journey
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
