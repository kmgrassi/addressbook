import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export function Filters(props) {
  return (
    <div>
      <Accordion defaultExpanded={false}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
