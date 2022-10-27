import { useEffect, useMemo } from 'react'
import { useTable, ColumnInstance, Row } from 'react-table'
import { CustomHeaderColumn } from './columns/CustomHeaderColumn'
import { CustomRow } from './columns/CustomRow'
import { useQueryResponseData, useQueryResponseLoading } from '../core/QueryResponseProvider'
import { contactsColumns } from './columns/_columns'
import { User } from '../core/_models'
import { ContactsListLoading } from '../components/loading/ContactsListLoading'
import { ContactsListPagination } from '../components/pagination/ContactsListPagination'
import { KTCardBody } from '../../../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContacts } from '../_redux/contactAction'
import { ProfileHeader } from '../../../profile/ProfileHeader'
import { Connections } from '../../../profile/components/Connections'

const ContactsTable = () => {
  const user = useSelector(
    (state: any) => state?.ManageUserData?.Users
  );
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const isLoading = useQueryResponseLoading()
  const dispatch = useDispatch()
  const data = useMemo(() => user, [user])
  const columns = useMemo(() => contactsColumns, [])
  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable({
    columns,
    data,
  })
  const companyId = useSelector(
    (state: any) => state?.auth?.user?.company?.id
  );
  console.log(data);
  useEffect(() => {
    dispatch(getAllContacts(token, companyId))
  }, [])
  console.log(user, "users")
  return (
    <>
      <ProfileHeader />
      <Connections />
    </>

    // <KTCardBody className='py-4'>
    //   <div className='table-responsive'>
    //     <table
    //       id='kt_table_users'
    //       className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
    //       {...getTableProps()}
    //     >
    //       <thead>
    //         <tr className='text-start text-muted fw-bolder fs-7 text-uppercase gs-0'>
    //           {headers.map((column: ColumnInstance<User>) => (
    //             <CustomHeaderColumn key={column.id} column={column} />
    //           ))}
    //         </tr>
    //       </thead>
    //       <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
    //         {rows.length > 0 ? (
    //           rows.map((row: Row<User>, i) => {
    //             prepareRow(row)
    //             return <CustomRow row={row} key={`row-${i}-${row.id}`} />
    //           })
    //         ) : (
    //           <tr>
    //             <td colSpan={7}>
    //               <div className='d-flex text-center w-100 align-content-center justify-content-center'>
    //                 No matching records found
    //               </div>
    //             </td>
    //           </tr>
    //         )}
    //       </tbody>
    //     </table>
    //   </div>
    //   <ContactsListPagination />
    //   {isLoading && <ContactsListLoading />}
    // </KTCardBody>
  )
}

export { ContactsTable }
