import { useQuery } from 'react-query'
import { CdrEditModalForm } from './CdrEditModalForm'
import { isNotEmpty, QUERIES } from '../../../../../_metronic/helpers'
import { useListView } from '../core/ListViewProvider'
import { getUserById } from '../core/_requests'

const CdrEditModalFormWrapper = () => {
  const { itemIdForUpdate, setItemIdForUpdate } = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: user,
    error,
  } = useQuery(
    `${QUERIES.USERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUserById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  // if (!itemIdForUpdate) {
  //   return <LeadEditModalForm isUserLoading={isLoading} lead={{ id: undefined }} />
  // }

  if (!isLoading && !error && user) {
    return <CdrEditModalForm isUserLoading={isLoading} lead={user} />
  }

  return null
}

export { CdrEditModalFormWrapper }
