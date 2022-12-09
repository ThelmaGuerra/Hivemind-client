import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color={theme.palette.bee.orange}
        >
          Hivemind
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          <EmojiNatureIcon fontSize="medium" />
          &nbsp; Welcome to Hivemind, we are open for "bee"siness! &nbsp;
          <EmojiNatureIcon fontSize="medium" />
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
