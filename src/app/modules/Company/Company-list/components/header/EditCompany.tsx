/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CompanyLoading, CreateCompany, getbrand, getCompaniesById, getindustry, UpdateCompany } from "../../_redux/companyAction";

export default function EditCompany() {
  const location = useLocation();
  const [Company, setCompany] = useState(false);
  const [brands, setBrands] = useState([]);

  const id = location?.state
  console.log(id, "location")
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(
    (state: any) => state?.auth?.authToken
  );
  const user = useSelector(
    (state: any) => state?.auth?.user
  );


  // const company = useSelector(
  //   (state: any) => state?.CompanyData?.Comapnies
  // );
  const brand = useSelector(
    (state: any) => state?.Company?.brand
  );

  const industry = useSelector(
    (state: any) => state?.Company?.industries
  );
  const companyById = useSelector(
    (state: any) => state?.Company?.CompanyById
  );

  useEffect(() => {
    dispatch(getbrand(token))
    dispatch(getindustry(token))

  }, [])
  // useEffect(() => {

  //   dispatch(getcompanies(token))

  //   if (id !== "") {
  //     dispatch(getCompaniesById(id, token))
  //     setCompany(true);
  //   }
  // }, [])
  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getCompaniesById(id, token))
    setCompany(true);
  }, [companyById?.id])

  useEffect(() => {
    setData({
      companyName: companyById?.companyName,
      companyPANNumber: companyById?.companyPANNumber,
      companyIndustry: companyById?.companyIndustry?.id,
      // companyWebsocCRMUniqueID: companyById?.companyWebsocCRMUniqueID,
      companyGSTNumber: companyById?.companyGSTNumber,
      companyTANNumber: companyById?.companyTANNumber,
      brands: companyById?.brands,
    })
    // setBrands(companyById?.brands)
    setCompany(false);
    console.log("hello")
  }, [Company])

  const [data, setData] = useState(
    {
      companyName: " ",
      companyPANNumber: " ",
      companyIndustry: " ",
      // companyWebsocCRMUniqueID: "",
      companyGSTNumber: " ",
      companyTANNumber: " ",
      brands: brands,
    })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value, brands: brands });
  };

  const handleSubmit = () => {
    console.log(data, "EDIT_PROFILE");
    dispatch(CompanyLoading(true))
    dispatch(UpdateCompany(id, data, token));

    setData({
      companyName: " ",
      companyPANNumber: " ",
      companyIndustry: " ",
      // companyWebsocCRMUniqueID: "",
      companyGSTNumber: " ",
      companyTANNumber: " ",
      brands: [],

    })
    navigation("/company/company");
  };
  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            className="form d-flex flex-column flex-lg-row"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            role="tab-panel"
          >
            <div className="d-flex flex-column gap-7 gap-lg-10">
              <div className="card card-flush py-4">
                <div className="card-header">
                  <div className="card-title">
                    <h2>Company Details</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <form className="form">
                    <div className="form-group row mb-2">
                      <div className="col-lg-6">
                        <label> Name:</label>
                        <input
                          type="text"
                          value={data.companyName}
                          onChange={handleChange}
                          name="companyName"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label> GST Number:</label>
                        <input
                          type="text"
                          value={data.companyGSTNumber}
                          onChange={handleChange}
                          name="companyGSTNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="GST Number"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <div className="col-lg-6">
                        <label> PAN Number:</label>
                        <input
                          type="text"
                          value={data.companyPANNumber}
                          onChange={handleChange}
                          name="companyPANNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder=" PAN Number"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label>  TAN Number:</label>
                        <input
                          type="text"
                          value={data.companyTANNumber}
                          onChange={handleChange}
                          name="companyTANNumber"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="TAN number"
                        />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      {/* <div className="col-lg-6">
                              <label> Websoc CRM Unique ID:</label>
                              <input
                                type="text"
                                // value={data.companyWebsocCRMUniqueID}
                                onChange={handleChange}
                                name="companyWebsocCRMUniqueID"
                                className="form-control form-control-lg form-control-solid"
                                // placeholder="WebScoc CRM Unique ID"
                              />
                            </div> */}


                      <div className="col-lg-6 mb-4">
                        <label> Brand:</label>
                        <Autocomplete
                          multiple
                          id="controllable-states-demo"
                          options={brand}
                          getOptionLabel={(option: any) =>
                            option?.brandName
                          }
                          onChange={(_event, newTeam: any) => {
                            setBrands(newTeam);
                          }}
                          // value={brands}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Brands"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>
                      <div className="col-lg-6">
                        <label> Industry:</label>
                        {/* <input
                          type="text"
                          value={data.companyIndustry}
                          onChange={handleChange}
                          name="companyIndustry"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Industry "
                        /> */}
                        <select
                          className="form-control form-control-lg form-control-solid"
                          data-control="select2"
                          data-hide-search="true"
                          data-placeholder="Select an option"
                          value={data.companyIndustry}
                          onChange={handleChange}
                          name="companyIndustry"
                        >
                          <option> -- select Industry --</option>
                          {
                            industry?.map((item: any) => (
                              <option value={item?.id}>{item?.industryName}</option>
                            ))
                          }

                        </select>
                      </div>

                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-dark me-5"
            onClick={() => {
              navigation("/company/company");
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              handleSubmit()
              // navigation("users");
            }}
            className="btn btn-primary"
          >
            <span className="indicator-label">Save Changes</span>
            <span className="indicator-progress">
              Please wait...
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          </button>
        </div>
      </div>

    </>
  );
}
