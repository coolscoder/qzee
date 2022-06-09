import React, { useEffect, useState, useRef } from 'react'
import { Grid, Stack } from '@mui/material'
import TableOverview from './TableOverview'
import Info from './Info'
import StaffShift from './StaffShift'
import Communication from './Communications'

const Overview = () => {
  const infoRef = useRef(null)
  const [overviewHeight, setOverviewHeight] = useState(0)

  useEffect(() => {
    setOverviewHeight(infoRef.current.offsetHeight)
  }, [infoRef])

  return (
    <Stack sx={{ height: '100%', justifyContent: 'space-between' }}>
      <Grid container sx={{ mb: 3 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={8.5}
          sx={{
            border: '1px solid',
            borderColor: 'border.main',
            borderRadius: 4,
            height: { md: overviewHeight },
          }}
        >
          <TableOverview overviewHeight={overviewHeight} />
        </Grid>
        <Grid ref={infoRef} item xs={12} sm={6} md={3.5}>
          <Info />
        </Grid>
      </Grid>
      <Grid container sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={8.5}>
          <StaffShift />
        </Grid>
        <Grid item xs={12} sm={6} md={3.5}>
          <Communication />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Overview