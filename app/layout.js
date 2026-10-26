import MainHeader from "@/components/header/main-header";
import "./globals.css";
import { Box } from "@mui/material";

// export const metadata = {
//   title: "Meals - Create Next App",
//   description: "Delicious meals, shared by a food-loving community",
// };
export const metadata = {
  title: "Büro Automation",
  description: "Smart Office Automation for Faster, Easier Workflows.",
  generator: "Next.js",
  applicationName: "Büro",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "TESSA" }, { name: "TESSA", url: "Tessa24.com" }],
  creator: "Ramin Maghsoudi",
  publisher: "DSC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Box className="Wrapper">
          <MainHeader />
          {children}
        </Box>
      </body>
    </html>
  );
}
