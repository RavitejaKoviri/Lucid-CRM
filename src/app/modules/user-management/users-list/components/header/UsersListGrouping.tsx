import React from "react";
import { useQueryClient, useMutation } from "react-query";
import { useSelector } from "react-redux";
import { QUERIES } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { deleteSelectedUsers } from "../../core/_requests";

const UsersListGrouping = () => {
  const { selected, clearSelected } = useListView();
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  const deleteSelectedItems = useMutation(() => deleteSelectedUsers(selected), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`]);
      clearSelected();
    },
  });

  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="fw-bolder me-5">
        <span className="me-2">{selected.length}</span> Selected
      </div>
      {user?.isSuperAdmin === true ? (
        <button
          type="button"
          className="btn btn-danger"
          onClick={async () => await deleteSelectedItems.mutateAsync()}
        >
          Delete Selected
        </button>
      ) : (
        <>
          {rolePermissionsByUser?.filter(
            (item: any) =>
              item?.allmodule.name === "Users" && item?.Delete === true
          )?.length > 0 && (
            <button
              type="button"
              className="btn btn-danger"
              onClick={async () => await deleteSelectedItems.mutateAsync()}
            >
              Delete Selected
            </button>
          )}
        </>
      )}
    </div>
  );
};

export { UsersListGrouping };
