import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={
          process.env.REACT_APP_SERVER_URL + "/assets/Honey&Hive.jpg" ||
          "http://localhost:3001/assets/Honey&Hive.jpg"
        }
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Honey & Hive</Typography>
        <Typography color={medium}>https://www.honeyandhive.org/</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Honey & Hive is a Zambian based company that provides high-quality,
        organic, and sustainably sourced honey and bee products. Get your Honey
        now!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
