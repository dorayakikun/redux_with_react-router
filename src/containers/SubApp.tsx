import { connect } from 'react-redux'

import { Status } from '../components/Status'

const mapStateToProps = (state: number) => ({ value: state })

const connector = connect(mapStateToProps)

export const SubApp = connector(Status)
