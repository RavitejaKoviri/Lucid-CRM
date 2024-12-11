import {FC} from 'react'
import React from 'react'

type Props = {
  two_steps?: boolean
}

const CampaignTwoStepsCell: FC<Props> = ({two_steps}) => (
  <> {two_steps && <div className='badge badge-light-success fw-bolder'>Enabled</div>}</>
)

export {CampaignTwoStepsCell}
