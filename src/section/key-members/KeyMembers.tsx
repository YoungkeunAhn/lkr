import { Box, Container, Grid } from '@material-ui/core'
import TitleContentFrame from 'commons/title-content-frame/TitleContentFrame'
import KeyMemberItemCard from 'components/key-members/item-card/KeyMemberItemCard'
import { keyMemberList } from 'data/key-member'
import { keyMembersMainText } from 'data/main-text'
import React from 'react'
import useStyles from './styles'

function KeyMembers() {
  const classes = useStyles()

  return (
    <section id='keyMembers' className={classes.root}>
      <TitleContentFrame
        title='Key Members'
        mainText={keyMembersMainText}
        smDownMainText={keyMembersMainText[0]}
      />
      <Container maxWidth='lg'>
        <Box>
          <Grid container spacing={3}>
            {keyMemberList.map((member, idx) => (
              <Grid key={idx} item xs={6} sm={6} md={3} lg={3} xl={3}>
                <KeyMemberItemCard member={member} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  )
}

export default KeyMembers
