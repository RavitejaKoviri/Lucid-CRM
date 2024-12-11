import {FC} from 'react'
import React from 'react'

type Props = {
  two_steps?: boolean
}

const BookingTwoStepsCell: FC<Props> = ({two_steps}) => (
  <> {two_steps && <div className='badge badge-light-success fw-bolder'>Enabled</div>}</>
)

export {BookingTwoStepsCell}