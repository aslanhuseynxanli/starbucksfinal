import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MobileFooter = () => {
  return (
    <div className="md:hidden pt-5 ">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography > <p  className="text-[20px]">About us</p></Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>Our Company</Typography>
          <Typography>Our Coffee</Typography>
          <Typography>Stories and News</Typography>
          <Typography>Starbucks Arvhive</Typography>
          <Typography>Investor Relations</Typography>
          <Typography>Costumer Service</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography > <p  className="text-[20px]">Careers</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Culture and Values</Typography>
          <Typography>Inclusion, Diversity, and Equity</Typography>
          <Typography>College Achievement Plan</Typography>
          <Typography>Alumni Community</Typography>
          <Typography>U.S. Careers</Typography>
          <Typography>International Careers</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography ><p  className="text-[20px]">Social Impact</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>CuSocial Impact</Typography>
          <Typography>Planet</Typography>
          <Typography>Environmental and Social Impact Reporting</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography > <p  className="text-[20px]">For Business Partners</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Landlord Support Center</Typography>
          <Typography>SuppLinkers</Typography>
          <Typography>Corporate Gift Card Sales</Typography>
          <Typography>Office and Foodservice Coffee</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><p  className="text-[20px]">Order and Pickup</p></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Order on the App</Typography>
          <Typography>Order on the Web</Typography>
          <Typography>DeLinkvery</Typography>
          <Typography>Order and Pickup Options</Typography>
          <Typography>Explore and Find Coffee for Home</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MobileFooter;