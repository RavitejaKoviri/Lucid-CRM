/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MenuComponent } from '../../../../../../_metronic/assets/ts/components'
import { ID, KTSVG, } from '../../../../../../_metronic/helpers'

import { DeleteLead } from '../../_redux/cdrAction'

type Props = {
  id: ID
}

const CdrActionsCell: FC<Props> = ({ id }) => {
  const navigation = useNavigate()
  const dispatch = useDispatch();

  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    navigation('leadadduser', { state: { id } })
  }

  const deleteItem = () =>
    dispatch(DeleteLead(id, token))

  return (
    <>
      <a
        href='#'
        className='btn btn-light btn-active-light-primary btn-sm'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      >
        Actions
        <KTSVG path='/media/icons/duotune/arrows/arr072.svg' className='svg-icon-5 m-0' />
      </a>
      {/* begin::Menu */}
      <div
        className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
        data-kt-menu='true'
      >
        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a className='menu-link px-3' onClick={openEditModal}>
            Edit
          </a>
        </div>
        {/* end::Menu item */}

        {/* begin::Menu item */}
        <div className='menu-item px-3'>
          <a
            className='menu-link px-3'
            data-kt-users-table-filter='delete_row'
            onClick={deleteItem}
          >
            Delete
          </a>
        </div>
        {/* end::Menu item */}
      </div>
      {/* end::Menu */}
    </>
  )
}

export { CdrActionsCell }
