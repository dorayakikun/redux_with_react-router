import { connect } from 'react-redux'

import { Hello } from '../components/Hello'

const connector = connect()

export const SubApp = connector(Hello)
