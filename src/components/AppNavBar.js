import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Typography} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { makeStyles } from '@mui/styles';
import RadiusButton from './RadiusButton'
import RadiusToolbar from './RadiusToolbar'
import { Label } from 'reactstrap'
import BlueAppbar from './BlueAppbar'
import IconBrand from '../pages/usage/components/IconBrand';

const useStyles = makeStyles({
  navBarBtn: {
    backgroundColor: '#fff !important',
    borderRadius: 20,
    color: '#000 !important',
    fontSize: 20
  },
});


const AppNavBar = () => {
  const dispatch = useDispatch()
  const styles = useStyles()

  return (
      <BlueAppbar>
        <RadiusToolbar>
          <IconBrand/>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <label> bookai.travel</label>
           
          </Typography>
          <RadiusButton children="Sign-up" className={styles.navBarBtn}>
          </RadiusButton>
          <RadiusButton 
            color="inherit" children="Log-in">
          </RadiusButton>
        </RadiusToolbar>
      </BlueAppbar>
  )
}

export default AppNavBar
