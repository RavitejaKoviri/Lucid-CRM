/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Createbooking,
  fetchBranchAddressesByCityId,
  fetchBranchwisetestByBranch,
  fetchCity,
  fetchDoctors,
  fetchHealthPackagesByBranch,
  fetchHealthScansByBranch,
  fetchPatients,
  getbookingsById,
  Updatebooking,
} from "../../_redux/bookingAction";
import axios from "axios";
import { masterToken } from "../../_redux/bookingCrud";
// import { any } from "prop-types";

export default function BookingAdduser() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [branchwisetests, setBranchwisetests] = useState([]);
  console.log(branchwisetests, "branchwisetests");
  const [booking, setBooking] = useState(false);
  const location = useLocation();
  const id = location?.state;
  console.log(id, "id");

  const [healthPackages, setHealthPackages] = useState([]);
  const [healthScans, setHealthScans] = useState([]);
  const [userID, setUserID] = useState([]);
  const [mobilenumber, setMobilenumber] = useState("");
  const [patient, setPatient] = useState("");
  console.log(healthScans, "healthScans");

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate.toLocaleString(), "startDate");
  const isSelectedDateToday = new Date().getDate() === startDate.getDate();
  const isSelectedDateInFuture = +startDate > +new Date();

  let minTimeHour = new Date().getHours();
  if (!isSelectedDateToday) minTimeHour = 0;

  const date = new Date();
  let currentMins = date.getMinutes();
  let currentHour = date.getHours();
  if (isSelectedDateInFuture) {
    currentHour = 0;
    currentMins = 0;
  }
  const newdate = new Date();
  // newdate?.setDate(newdate?.getDate() + 9);
  // const user = useSelector((state) => state?.auth?.user);
  // const token = useSelector((state: any) => state?.auth?.authToken);
  const doctor = useSelector((state) => state?.booking?.doctors);
  const city = useSelector((state) => state?.booking?.city);
  const branch = useSelector(
    (state) => state?.booking?.BranchAddressesByCityId
  );
  const PatientData = useSelector((state) => state?.booking?.patient);
  const branchwisetest = useSelector(
    (state) => state?.booking?.branchwisetestsByBranch
  );
  const healthPackage = useSelector(
    (state) => state?.booking?.packagesByBranch
  );
  const healthScan = useSelector(
    (state) => state?.booking?.healthscanBybranch
  );
  const bookingById = useSelector((state) => state?.booking?.BookingById);
  useEffect(() => {
    console.log("i was called");

    dispatch(fetchDoctors());
    dispatch(fetchCity());
    dispatch(fetchPatients());
  }, []);

  // console.log(PatientData, "healthScan");
  const totalAmount = [
    ...healthPackages?.map((item) => Number(item?.price)),
    ...healthScans?.map((item) => Number(item?.price)),
    ...branchwisetests?.map((item) => Number(item?.price)),
  ]
    .reduce((a, b) => a + b, 0)
    .toString();
  console.log(bookingById, "bookingById");

  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    dateOfAppointment: new Date(),
    branch: "",
    message: "",
    doctor: "",
    type: "",
    healthPackages: [],
    healthScans: [],
    paymentId: "",
    paymentStatus: "",
    paymentMode: "",
    city: "",
    gender: "",
    patient: "",
    branchwisetests: [],
    totalAmount: "",
    address: "",
    // appointmentStatus: "",
    age: "",
    user: userID,
  });
  console.log(data, "userID");
  const FindPatient =
    PatientData?.length > 0 &&
    PatientData?.filter(
      (item) => item?.mobileNumber === data.mobileNumber
    );
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      branchwisetests: branchwisetests?.length > 0 ? branchwisetests : null,
      healthPackages: healthPackages?.length > 0 ? healthPackages : null,
      healthScans: healthScans?.length > 0 ? healthScans : null,
      totalAmount: totalAmount,
      dateOfAppointment: startDate.toLocaleString(),
      user: userID[0],
      patient: patient,
    });
  };
  const FindPatientDetails = () => {
    // type Patientdetails = {
    //   gender?: string;
    //   patientName?: string;
    //   user?: string;
    //   mobileNumber?: string;
    //   city?: string;
    //   branch?: string;
    // };
    const obj = {};
    obj.gender = data.gender;
    obj.patientName = data.fullName;
    obj.user = userID[0];
    obj.mobileNumber = mobilenumber;
    obj.city = data.city;
    obj.branch = data.branch;

    if (FindPatient.length === 0 && data.mobileNumber.length === 10) {
      axios.post("http://43.205.49.41:5377/patients", obj, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${masterToken}`,
        },
      })
        .then(({ data }) => {
          console.log(data, "data");
          handleSubmit(data);
        })
        .catch(() => { });
    } else {
      if (data.mobileNumber.length === 10) {
        handleSubmit(FindPatient[0]);
      }
    }
  };

  useEffect(() => {
    console.log(id, "TestId");
    dispatch(getbookingsById(id, masterToken));
    setBooking(true);
  }, [bookingById?.id]);
  useEffect(() => {
    dispatch(fetchBranchwisetestByBranch(data?.branch));
    dispatch(fetchHealthScansByBranch(data?.branch));
    dispatch(fetchHealthPackagesByBranch(data?.branch));
  }, [data?.branch]);
  useEffect(() => {
    dispatch(fetchBranchAddressesByCityId(data?.city));
  }, [data?.city]);

  useEffect(() => {
    console.log("i was called too");
    setData({
      fullName: bookingById?.fullName,
      email: bookingById?.email,
      mobileNumber: bookingById?.mobileNumber,
      dateOfAppointment: bookingById?.dateOfAppointment,
      branch: bookingById?.branch,
      message: bookingById?.message,
      doctor: bookingById?.doctor,
      type: bookingById?.type,
      healthPackages: bookingById?.healthPackages,
      healthScans: bookingById?.healthScans,
      paymentId: bookingById?.paymentId,
      paymentStatus: bookingById?.paymentStatus,
      paymentMode: bookingById?.paymentMode,
      city: bookingById?.city,
      gender: bookingById?.gender,
      patient: bookingById?.patient,
      branchwisetests: bookingById?.branchwisetests,
      totalAmount: bookingById?.totalAmount,
      address: bookingById?.address,
      age: bookingById?.age,
      user: userID,
    });
    setBooking(false);
  }, [booking]);
  const handleSubmit = (i) => {
    if (id !== null) {
      dispatch(Updatebooking(id, data, masterToken));
    } else {
      const AppointData = { ...data, patient: i };
      axios.post("http://43.205.49.41:5377/appointments", AppointData, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${masterToken}`,
        },
      })
        .then(({ data }) => {
          console.log(data, "data");
        })
        .catch(() => { });
      console.log(AppointData, "AppointData");
    }

    setData({
      fullName: "",
      email: "",
      mobileNumber: "",
      dateOfAppointment: new Date(),
      branch: "",
      message: "",
      doctor: "",
      type: "",
      // appointmentStatus: "",
      healthPackages: [],
      healthScans: [],
      paymentId: "",
      paymentStatus: "",
      paymentMode: "",
      city: "",
      gender: "",
      patient: "",
      branchwisetests: [],
      totalAmount: "",
      address: "",
      age: "",
      user: [],
    });
    navigation("/bookings/bookings");
  };
  console.log(data.branchwisetests, "branchwisetests");
  useEffect(() => {
    verifyuser();
  }, [data.mobileNumber]);
  const verifyuser = () => {
    data?.mobileNumber?.length === 10 &&
      axios
        .get("http://43.205.49.41:5377/users-permissions/users", {
          params: {
            mobile: data.mobileNumber,
          },
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${masterToken}`,
          },
        })
        .then((response) => {
          console.log(response, "response");
          if (response.data === true) {
            // dispatch(fetchUsersByMobile(mobilenumber));
            data.mobileNumber.length === 10 &&
              axios
                .get(
                  `http://43.205.49.41:5377/users?mobile=${data.mobileNumber}`,
                  {
                    headers: {
                      "content-type": "application/json",
                      Authorization: `Bearer ${masterToken}`,
                    },
                  }
                )
                .then((response) => {
                  console.log(response);
                  if (response.status !== 200) {
                    throw Error(response.statusText);
                  }
                  return response.data;
                })
                .then((data) => {
                  console.log("llkkk--------------------", data);
                  setUserID(data);
                })
                .catch(() => { });
          } else {
            data.mobileNumber.length === 10 &&
              axios
                .post(
                  "http://43.205.49.41:5377/auth/local/register",
                  {
                    mobile: data.mobileNumber,
                    username: data.mobileNumber,
                    password: "123456",
                    email: `${data.mobileNumber}@gmail.com`,
                  },
                  {
                    headers: {
                      "content-type": "application/json",
                      Authorization: `Bearer ${masterToken}`,
                    },
                  }
                )
                .then((response) => {
                  console.log(response);
                  if (response.status !== 200) {
                    throw Error(response.statusText);
                  }
                  return response.data;
                })
                .then((data) => {
                  console.log("llkkk--------------------", data);
                  setUserID(data?.user);
                })
                .catch(() => { });
          }
        })
        .catch(() => { });
  };

  useEffect(() => {
    setData({
      fullName: "",
      email: "",
      mobileNumber: "",
      dateOfAppointment: new Date(),
      branch: "",
      message: "",
      doctor: "",
      type: "",
      // appointmentStatus: "",
      healthPackages: [],
      healthScans: [],
      paymentId: "",
      paymentStatus: "",
      paymentMode: "",
      city: "",
      gender: "",
      patient: "",
      branchwisetests: [],
      totalAmount: "",
      address: "",
      age: "",
      user: [],
    });
  }, []);
  return (
    <>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div id="kt_content_container" className="container-xxl">
          <div
            id="kt_ecommerce_add_product_form"
            className="form d-flex flex-column flex-lg-row"
            data-kt-redirect="../../demo6/dist/apps/ecommerce/catalog/products.html"
          >
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                >
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Patient Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="form">
                          <div className="form-group row my-8">
                            <div className="col-lg-5">
                              <input
                                type="text"
                                name="fullName"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Full Name"
                                value={data?.fullName}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label>Email:</label> */}
                              <input
                                type="email"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Email"
                                name="email"
                                value={data?.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-5">
                              {/* <label>PhoneNumber:</label> */}
                              <input
                                type="text"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Phone Number"
                                name="mobileNumber"
                                value={data?.mobileNumber}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label> Age:</label> */}
                              <input
                                type="text"
                                name="age"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Age"
                                value={data?.age}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            <div className="col-lg-5">
                              {/* <label>Gender</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="gender"
                                value={data?.gender}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  Select Gender
                                </option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">others</option>
                              </select>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-7 gap-lg-10 my-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Booking Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="form">

                          <div className="form-group row my-8">

                            <div className="col-lg-5">
                              {/* <label>Type</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="type"
                                value={data?.type}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  Select Type
                                </option>
                                <option value="clinic">Clinic</option>
                                <option value="enquiry">Enquiry</option>
                                <option value="homeSampleCollection">
                                  Home Sample Collection
                                </option>
                                <option value="doctorAppointment">
                                  Doctor Appointment
                                </option>
                              </select>
                            </div>
                            {data?.type === "doctorAppointment" ? (
                              <div className="col-lg-5">
                                {/* <label>Doctor:</label> */}
                                <select
                                  className="form-control form-control-lg form-control-solid"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Select an option"
                                  value={data.doctor}
                                  onChange={handleChange}
                                  name="doctor"
                                >
                                  <option value="" disabled selected>
                                    Select Doctor
                                  </option>
                                  <option></option>
                                  {doctor?.map((item) => (
                                    <option value={item?.id}>
                                      {item?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            ) : (
                              <div className="col-lg-5">
                                {/* <label>Doctor:</label> */}
                                <input
                                  className="form-control form-control-lg form-control-solid"
                                  // data-control="select2"
                                  // data-hide-search="true"
                                  placeholder="Select Doctor"
                                  // value={data.doctor}
                                  // onChange={handleChange}
                                  name="doctor"
                                  disabled
                                />
                              </div>
                            )}
                          </div>
                          <div className="form-group row my-8">

                            <div className="col-lg-5">
                              {/* <label>Address:</label> */}
                              <input
                                type="text"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Address"
                                value={data.address}
                                name="address"
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-lg-5">
                              {/* <label>City:</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="city"
                                value={data.city}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  Select City
                                </option>
                                {city?.map((item) => (
                                  <option value={item?.id}>{item?.name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          {/* <div className="form-group row my-8"> */}

                          {/* <div className="col-lg-5">
                              <select
                              className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="appointmentStatus"
                                value={data.appointmentStatus}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  --Select Appointment Status --
                                </option>
                                <option value="visited">visited</option>
                                <option value="rescheduled">rescheduled</option>
                                <option value="cancelled"> cancelled</option>
                              </select>
                            </div> */}
                          {/* </div> */}
                          <div className="form-group row my-8">

                            <div className="col-lg-5">
                              {/* <label>Branch:</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                placeholder="Select an option"
                                value={data.branch}
                                onChange={handleChange}
                                name="branch"
                              >
                                <option disabled selected>
                                  Select Branch
                                </option>
                                {branch?.map((item) => (
                                  <option value={item?.id}>{item?.name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-5">
                              {/* <label>message:</label> */}
                              <input
                                type="text"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter message"
                                value={data.message}
                                name="message"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {data?.branch !== "" && (
                            <>
                              <div className="form-group row my-8">
                                {branchwisetest.length > 0 && (
                                  <div className="col-lg-5">
                                    <Autocomplete
                                      multiple
                                      id="controllable-states-demo"
                                      options={branchwisetest}
                                      getOptionLabel={(option) =>
                                        option?.test?.testName
                                      }
                                      onChange={(_event, newTeam) => {
                                        setBranchwisetests(newTeam);
                                      }}
                                      value={branchwisetests}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          label="Test"
                                          variant="outlined"
                                        />
                                      )}
                                    />
                                  </div>
                                )}
                                {healthPackage.length > 0 && (
                                  <div className="col-lg-5">
                                    <Autocomplete
                                      multiple
                                      id="controllable-states-demo"
                                      options={healthPackage}
                                      getOptionLabel={(option) =>
                                        option?.title
                                      }
                                      onChange={(_event, newTeam) => {
                                        setHealthPackages(newTeam);
                                      }}
                                      value={healthPackages}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          label="HealthPackage"
                                          variant="outlined"
                                        />
                                      )}
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="form-group row my-8">
                                {healthScan.length > 0 && (
                                  <div className="col-lg-5">
                                    <Autocomplete
                                      multiple
                                      id="controllable-states-demo"
                                      options={healthScan}
                                      getOptionLabel={(option) =>
                                        option?.title
                                      }
                                      onChange={(_event, newTeam) => {
                                        setHealthScans(newTeam);
                                      }}
                                      value={healthScans}
                                      renderInput={(params) => (
                                        <TextField
                                          {...params}
                                          label="HealthScan"
                                          variant="outlined"
                                        />
                                      )}
                                    />
                                  </div>
                                )}
                              </div>
                            </>
                          )}

                          <div className="form-group row my-8">

                            <div className="col-lg-5">
                              {/* <label>Select the date of Appointment</label> */}
                              <div style={{ width: "100%", height: "100%" }}>
                                <DatePicker
                                  showTimeSelect
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  minDate={new Date()}
                                  maxDate={newdate}
                                  minTime={
                                    new Date(
                                      new Date().setHours(
                                        currentHour,
                                        currentMins,
                                        0,
                                        0
                                      )
                                    )
                                  }
                                  maxTime={
                                    new Date(new Date().setHours(23, 59, 0, 0))
                                  }
                                  placeholderText="Select date and time"
                                  dateFormat="dd/MM/yyyy  h:mm aa"
                                  customInput={
                                    <input
                                      // type="date"
                                      placeholder="Select Date and Time"
                                      className="form-control form-control-lg form-control-solid col-lg-6"
                                      style={{ width: "464px" }}
                                    />
                                  }
                                />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-7 gap-lg-10 my-10">
                    <div className="card card-flush py-4">
                      <div className="card-header">
                        <div className="card-title">
                          <h2>Payment Details</h2>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="form">

                          <div className="form-group row my-8">
                            <div className="col-lg-5">
                              {/* <label>paymentMode</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="paymentMode"
                                value={data.paymentMode}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  Select PaymentMode
                                </option>
                                <option value="cash">cash</option>
                                <option value="Google">Google Pay </option>
                                <option value="phonepay">phonepay</option>
                                <option value="paytm">paytm</option>
                              </select>
                            </div>
                            <div className="col-lg-5">
                              {/* <label>paymentStatus</label> */}
                              <select
                                className="form-control form-control-lg form-control-solid"
                                data-control="select2"
                                data-hide-search="true"
                                data-placeholder="Select an option"
                                name="paymentStatus"
                                value={data.paymentStatus}
                                onChange={handleChange}
                              >
                                <option value="" disabled selected>
                                  Select Payment Status
                                </option>
                                <option value="Received">Received</option>
                                <option value="NotReceived">
                                  Not Received{" "}
                                </option>
                                <option value="pending">pending</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row my-8">
                            {data.paymentMode !== "cash" && (
                              <div className="col-lg-5">
                                {/* <label>paymentId:</label> */}
                                <input
                                  type="email"
                                  className="form-control form-control-lg form-control-solid"
                                  placeholder="Enter PaymentId"
                                  name="paymentId"
                                  value={data.paymentId}
                                  onChange={handleChange}
                                />
                              </div>
                            )}
                            <div className="col-lg-5">
                              {/* <label>TotalAmount:</label> */}
                              <input
                                type="email"
                                className="form-control form-control-lg form-control-solid"
                                placeholder="Enter Total Amount"
                                value={totalAmount}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-dark me-5"
                  onClick={() => {
                    navigation("/bookings/bookings");
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  id="kt_ecommerce_add_product_submit"
                  onClick={() => {
                    // navigation("users");
                    FindPatientDetails();
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
          </div>
          {/*end::Form*/}
        </div>
      </div>
    </>
  );
}
