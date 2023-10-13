import React from 'react'
import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
const Profile = () => {
  const info=useSelector((state)=>state.login);
    return (
        <Box>
          {/* <img src={info.thumbnail} alt={info.title}/>
          <p>{info.title}</p> */}
          <p>{info.username}</p>
        </Box>
    )
}

export default Profile
