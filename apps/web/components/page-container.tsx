import { Box } from "@mantine/core";
import type { PropsWithChildren } from "react";

export const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box style={{ maxWidth: 900, width: "100%", margin: "0 auto" }}>
      {children}
    </Box>
  );
};
