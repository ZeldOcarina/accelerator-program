import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(35),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: "Poppins, sans-serif",
    color: "#092853",
  },
  text: {
    fontSize: theme.typography.pxToRem(28),
    fontFamily: "Montserrat, sans-serif",
    color: "#676b8c",
  },
  icon: {
    fontSize: "30px",
  },
}));

const Accordion = withStyles({
  root: {
    border: "1px solid #d5d5d5",
    padding: "2rem",

    "&:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
})(MuiAccordion);

export default function Questions({ questions }) {
  console.log(questions);
  const classes = useStyles();

  return (
    <div className="questions__container">
      <section className="questions">
        {questions.map(({ title, text }, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.icon} fontSize="inherit" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className={classes.text}
                dangerouslySetInnerHTML={{ __html: text }}
              ></Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
    </div>
  );
}
