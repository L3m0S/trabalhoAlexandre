import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuLink: {
    color: 'black',
    fontSize: '30px',
    textDecoration: 'none',
    padding: '50px',
  },
  root: {
    flexGrow: 1,
  }
}));

export default function MainMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Link to='/internacao' className={classes.menuLink}>Internação</Link>

      <Link to="/guiaexame" className={classes.menuLink}>Guia Exame</Link>

      <Link to="/new-internacao" className={classes.menuLink}>Cadastrar nova internação</Link>

      <Link to="/new-guia" className={classes.menuLink}>Cadastrar novo exame</Link>

      <Link to="/about" className={classes.menuLink}>Sobre</Link>
    </div>
  );
}