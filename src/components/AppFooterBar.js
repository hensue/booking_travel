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


const AppFooterBar= () => {
  const dispatch = useDispatch()
  const styles = useStyles()

  return (
    <div className='footer-div'>
      <div style={{width: '60%'}}>
        <label style={{display: 'inline-flex', marginTop: 30}}>
        <IconBrand/>

          <p style={{marginTop: '10px'}}> Bookai.travel</p>
        </label>
      </div>
      <div style={{width: '40%', display: 'inline-flex', fontSize: '16px'}}>
        <label style={{width: '50%'}}>
          Home<br></br>
          Create an Itinerary<br></br>
          Book Flights<br></br>
          Book Hotels<br></br>
          Book Activities
        </label>

        <label style={{width: '50%'}}>
          Telegram<br></br>
          Twitter<br></br>
        </label>

      </div>
      
    </div>
  )
}

export default AppFooterBar
