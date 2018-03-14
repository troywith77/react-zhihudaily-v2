import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes, children, onClick } = props;
  return (
    <Button variant="fab" color="primary" aria-label="add" className={classes.button} onClick={onClick}>
      {children}
    </Button>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);