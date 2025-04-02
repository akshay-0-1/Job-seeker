import React from 'react'
import Profile from '../Profile/Profile'
import { profile } from '../Data/TalentData'
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'

const ProfilePage = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-["poppins"] p-4'>
      {/* <Link className="my-4 inline-block" to="/find-talent">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="bright-sun.4"
          variant="light"
        >
          Back
        </Button>
      </Link> */}
      <div>
        <Profile {...profile}/>
      </div>
    </div>
  )
}

export default ProfilePage
