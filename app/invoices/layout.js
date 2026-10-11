import { Box } from "@mui/material";

export default function ArchiveLayout({ activity, header }) {
  return (
    <Box className="Wrapper">
      <section>{header}</section>
      <section>{activity}</section>
    </Box>
  );
}
