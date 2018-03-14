import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { format } from 'date-fns';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  meta: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottom: '1px solid #eee'
  },
  avatar: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  time: {
    color: '#999',
    fontSize: 12,
    marginLeft: 10
  },
  likes: {
    color: '#999',
    fontSize: 12,
    marginLeft: 6
  }
});

function Comment(props) {
  const { classes, content, author, avatar, time, likes, children } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <div className={classes.meta}>
          { avatar ? <Avatar alt="Remy Sharp" src={avatar}  className={classes.avatar} /> : null }
          <Typography component="p">
            {author}
          </Typography>
          { time ? <time className={classes.time}>{format(time * 1000, 'MM-DD HH:mm')}</time> : null }
          { likes ? <span className={classes.likes}>· {likes} likes</span> : null}
        </div>
        <Typography component="p">
          {content}
        </Typography>
        {children}
      </Paper>
    </div>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Comment);