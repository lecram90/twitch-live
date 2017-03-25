import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { grey900 } from 'material-ui/styles/colors'

import StreamList from 'Containers/StreamList'
import ChannelAdd from 'Containers/ChannelAdd'
import ChannelList from 'Containers/ChannelList'

import classNames from 'classnames/bind'
import styles from './app.scss'
const cx = classNames.bind(styles)

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }

  getChildContext () {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: grey900,
      },
    })

    return { muiTheme }
  }

  render () {
    return (
      <div className={cx(`app`)}>
        <StreamList />
        <ChannelAdd />
        <ChannelList />
      </div>
    )
  }
}
