import {FC} from 'react'
import React from 'react'

type Props = {
  last_login?: string
}

const CampaignLastLoginCell: FC<Props> = ({last_login}) => (
  <div className='badge badge-light fw-bolder'>{last_login}</div>
)

export {CampaignLastLoginCell}
