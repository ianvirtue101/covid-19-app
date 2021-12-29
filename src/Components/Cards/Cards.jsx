import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import Moment from "react-moment";
import "./Cards.scss";

function Cards({ data: { confirmed, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "loading...";
  }

  let avg = (deaths.value / confirmed.value) * 100;

  return (
    <>
      <div className="container">
        <Grid container spacing={0} justifyContent="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="container__card--infected"
          >
            <CardContent className="container__card--infected-card">
              <Typography className="container__card--text" gutterBottom>
                Cases
              </Typography>
              <Typography className="container__card--text" variant="h4">
                <Countup
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                <Moment fromNow>{new Date(lastUpdate).toDateString()}</Moment>
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="container__card--deaths"
          >
            <CardContent className="container__card--deaths-card">
              <Typography className="container__card--text" gutterBottom>
                Deaths
              </Typography>
              <Typography className="container__card--text" variant="h4">
                <Countup
                  start={0}
                  end={deaths.value}
                  duration={1.8}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                <Moment fromNow>{new Date(lastUpdate).toDateString()}</Moment>
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className="container__card--rate"
          >
            <CardContent className="container__card--rate-card">
              <Typography className="container__card--text" gutterBottom>
                Death Rate
              </Typography>
              <Typography className="container__card--text" variant="h4">
                <Countup start={0} end={avg} duration={2.5} separator="," />
                {"%"}
              </Typography>
              <Typography color="textSecondary">
                <Moment fromNow>{new Date(lastUpdate).toDateString()}</Moment>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cards;
