import { Box } from "@mui/material"

export default function Container({searchComponent, bodyComponent}) {
  return (
    <Box sx={{
        p:4,
        width: "100vw",
        height: "100vh",
    }}>
        <Box >
            {searchComponent}
        </Box>
        <Box >
            {bodyComponent}
        </Box>
    </Box>
  )
}
