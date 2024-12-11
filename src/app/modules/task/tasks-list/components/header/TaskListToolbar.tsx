import { useSelector } from 'react-redux'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { KTSVG } from '../../../../../../_metronic/helpers'
import { useListView } from '../../core/ListViewProvider'
import { TasksListFilter } from './TasksListFilter'
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const TasksListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser=useSelector((state:any)=>state?.Dashboard?.RolePermissionsById)
  const { setItemIdForUpdate } = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }
  const TASKDATA = useSelector(
    (state: any) => state?.ManageTaskData?.Tasks
  );
  const navigation = useNavigate()
  const exportToCSV = (csvData: any, fileName: any) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, {
      bookType: 'xlsx', type: 'array'
    });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  }
  //editor
  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <TasksListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3' onClick={() => {
        exportToCSV(TASKDATA, "TASK DATA")
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {user?.isSuperAdmin===true?     <button type='button' className='btn btn-primary' onClick={() => {
        navigation('taskAdduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Task
      </button>:<>
      {rolePermissionsByUser?.filter((item:any)=>item?.allmodule?.name==="Tasks"&&item?.Create===true)?.length>0&& 
       <button type='button' className='btn btn-primary' onClick={() => {
        navigation('taskAdduser')
      }}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        Add Task
      </button>}</>}
 
      {/* end::Add user */}
    </div>
  )
}

export { TasksListToolbar }
