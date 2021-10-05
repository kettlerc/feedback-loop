import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
      marginTop: 50,
  }
});

function Footer() {
    const history = useHistory();

    const goToAdmin = () => {
        history.push('/adminpage')
    }

    return (
        <Button
            variant="outlined"
            size="small"
            onClick={goToAdmin}
        >Admin Page</Button>
    )
}

export default Footer;