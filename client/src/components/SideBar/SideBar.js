import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './style.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

export default function SideBar({ user }) {
  const classes = useStyles();

  return (
    <div id='sidebar'>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Hello, {user.nickname} <img src={user.picture} className ="profile" style={{ width: "30px" }} alt="profile"></img>
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at in. Suscipit adipiscing bibendum est ultricies integer quis. Amet venenatis urna cursus eget nunc. Molestie at elementum eu facilisis sed odio morbi quis. Fermentum iaculis eu non diam phasellus vestibulum lorem. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Interdum velit laoreet id donec ultrices tincidunt arcu non. Quisque id diam vel quam elementum pulvinar.

              Sed odio morbi quis commodo odio aenean sed adipiscing diam. Purus non enim praesent elementum facilisis leo. Aliquam faucibus purus in massa tempor nec feugiat nisl. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Ipsum a arcu cursus vitae congue mauris. Ac turpis egestas maecenas pharetra convallis posuere. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Pellentesque nec nam aliquam sem et. Quis enim lobortis scelerisque fermentum dui. Felis donec et odio pellentesque diam volutpat commodo sed. Euismod lacinia at quis risus sed.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
          Delete
        </Button>  */}
        </CardActions>
      </Card>
    </div >
  );
}