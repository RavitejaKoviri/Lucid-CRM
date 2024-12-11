import { FC } from 'react'
import React from 'react'

type Props = {
  campaignSource?: string
}

const LeadLastLoginCell: FC<Props> = ({ campaignSource }) => (
  <div className='badge badge-light fw-bolder'>{campaignSource}</div>
)

export { LeadLastLoginCell }