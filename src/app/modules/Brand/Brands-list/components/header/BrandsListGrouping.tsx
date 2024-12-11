import { useQueryClient, useMutation } from "react-query";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { QUERIES } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { useQueryResponse } from "../../core/QueryResponseProvider";
import { deleteSelectedUsers } from "../../core/_requests";
import { BrandsLoading, deleteSelectedBrands } from "../../_redux/brandsAction";

const BrandsListGrouping = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  const token = useSelector((state: any) => state?.auth?.authToken);
  const { selected, clearSelected } = useListView();
  const queryClient = useQueryClient();
  const { query } = useQueryResponse();

  const deleteSelectedItems = () => {
    dispatch(BrandsLoading(true));
    dispatch(deleteSelectedBrands(selected, token));
  }


  return (
    <div className="d-flex justify-content-end align-items-center">
      <div className="fw-bolder me-5">
        <span className="me-2">{selected.length}</span> Selected
      </div>
      {user?.isSuperAdmin === true ? (
        <button
          type="button"
          className="btn btn-danger"
          onClick={deleteSelectedItems}
        >
          Delete Selected
        </button>
      ) : (
        <>
          {rolePermissionsByUser?.filter(
            (item: any) =>
              item?.allmodule.name === "Brands" && item?.Delete === true
          )?.length > 0 && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={deleteSelectedItems}
              >
                Delete Selected
              </button>
            )}
        </>
      )}
    </div>
  );
};

export { BrandsListGrouping };