import React,{ FC } from 'react'

type Props = {
  campaignSource?: string
}

const SourceLastLoginCell: FC<Props> = ({ campaignSource }) => (
  <div className='badge badge-light fw-bolder'>{campaignSource}</div>
)

export { SourceLastLoginCell }
