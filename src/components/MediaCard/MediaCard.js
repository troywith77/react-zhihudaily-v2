import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes, header, subheader, image, actions } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {header}
        </Typography>
        <Typography component="p">
          {subheader}
        </Typography>
      </CardContent>
      <CardActions>
        {
          actions ? actions : (
            <div>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </div>
          )
        }
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);