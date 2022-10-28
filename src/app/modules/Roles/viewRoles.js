import React from 'react'

function ViewRoles() {
  return (
    <div>
					 {/*begin::Header */}
					 {/*end::Header */}
					 {/*begin::Toolbar */}
					<div class="toolbar py-2" id="kt_toolbar">
						 {/*begin::Container */}
						<div id="kt_toolbar_container" class="container-fluid d-flex align-items-center">
							 {/*begin::Page title */}
							<div class="flex-grow-1 flex-shrink-0 me-5">
								 {/*begin::Page title */}
								<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
									 {/*begin::Title */}
									<h1 class="d-flex align-items-center text-dark fw-bold my-1 fs-3">View Role Details</h1>
									 {/*end::Title */}
									 {/*begin::Separator */}
									<span class="h-20px border-gray-200 border-start mx-3"></span>
									 {/*end::Separator */}
									 {/*begin::Breadcrumb */}
									<ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-1">
										 {/*begin::Item */}
										<li class="breadcrumb-item text-muted">
											<a href="../../demo6/dist/index.html" class="text-muted text-hover-primary">Home</a>
										</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item text-muted">Apps</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item text-muted">User Management</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item text-muted">Roles</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item">
											<span class="bullet bg-gray-200 w-5px h-2px"></span>
										</li>
										 {/*end::Item */}
										 {/*begin::Item */}
										<li class="breadcrumb-item text-dark">View Role</li>
										 {/*end::Item */}
									</ul>
									 {/*end::Breadcrumb */}
								</div>
								 {/*end::Page title */}
							</div>
							 {/*end::Page title */}
							 {/*begin::Action group */}
							<div class="d-flex align-items-center flex-wrap">
								 {/*begin::Wrapper */}
								<div class="flex-shrink-0 me-2">
									<ul class="nav">
										<li class="nav-item">
											<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-semibold fs-7 px-4 me-1" data-bs-toggle="tab" href="#">Day</a>
										</li>
										<li class="nav-item">
											<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4 me-1" data-bs-toggle="tab" href="">Week</a>
										</li>
										<li class="nav-item">
											<a class="nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-semibold fs-7 px-4" data-bs-toggle="tab" href="#">Year</a>
										</li>
									</ul>
								</div>
								 {/*end::Wrapper */}
								 {/*begin::Wrapper */}
								<div class="d-flex align-items-center">
									 {/*begin::Daterangepicker */}
									<a href="#" class="btn btn-sm btn-bg-light btn-color-gray-500 btn-active-color-primary me-2" id="kt_dashboard_daterangepicker" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-trigger="hover" title="Select dashboard daterange">
										<span class="fw-semibold me-1" id="kt_dashboard_daterangepicker_title">Range:</span>
										<span class="fw-bold" id="kt_dashboard_daterangepicker_date">September 12</span>
									</a>
									 {/*end::Daterangepicker */}
									 {/*begin::Actions */}
									<div class="d-flex align-items-center">
										<button type="button" class="btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
											 {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg */}
											<span class="svg-icon svg-icon-2x">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z" fill="currentColor" />
													<rect x="11" y="19" width="10" height="2" rx="1" transform="rotate(-90 11 19)" fill="currentColor" />
													<rect x="7" y="13" width="10" height="2" rx="1" fill="currentColor" />
													<path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
												</svg>
											</span>
											 {/*end::Svg Icon */}
										</button>
									</div>
									 {/*end::Actions */}
								</div>
								 {/*end::Wrapper */}
							</div>
							 {/*end::Action group */}
						</div>
						 {/*end::Container */}
					</div>
					 {/*end::Toolbar */}
					 {/*begin::Content */}
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						 {/*begin::Container */}
						<div id="kt_content_container" class="container-xxl">
							 {/*begin::Layout */}
							<div class="d-flex flex-column flex-lg-row">
								 {/*begin::Sidebar */}
								<div class="flex-column flex-lg-row-auto w-100 w-lg-200px w-xl-300px mb-10">
									 {/*begin::Card */}
									<div class="card card-flush">
										 {/*begin::Card header */}
										<div class="card-header">
											 {/*begin::Card title */}
											<div class="card-title">
												<h2 class="mb-0">Developer</h2>
											</div>
											 {/*end::Card title */}
										</div>
										 {/*end::Card header */}
										 {/*begin::Card body */}
										<div class="card-body pt-0">
											 {/*begin::Permissions */}
											<div class="d-flex flex-column text-gray-600">
												<div class="d-flex align-items-center py-2">
												<span class="bullet bg-primary me-3"></span>Some Admin Controls</div>
												<div class="d-flex align-items-center py-2">
												<span class="bullet bg-primary me-3"></span>View Financial Summaries only</div>
												<div class="d-flex align-items-center py-2">
												<span class="bullet bg-primary me-3"></span>View and Edit API Controls</div>
												<div class="d-flex align-items-center py-2">
												<span class="bullet bg-primary me-3"></span>View Payouts only</div>
												<div class="d-flex align-items-center py-2">
												<span class="bullet bg-primary me-3"></span>View and Edit Disputes</div>
												<div class="d-flex align-items-center py-2 d-none">
													<span class='bullet bg-primary me-3'></span>
													<em>and 3 more...</em>
												</div>
											</div>
											 {/*end::Permissions */}
										</div>
										 {/*end::Card body */}
										 {/*begin::Card footer */}
										<div class="card-footer pt-0">
											<button type="button" class="btn btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role">Edit Role</button>
										</div>
										 {/*end::Card footer */}
									</div>
									 {/*end::Card */}
									 {/*begin::Modal */}
									 {/*begin::Modal - Update role */}
									<div class="modal fade" id="kt_modal_update_role" tabindex="-1" aria-hidden="true">
										 {/*begin::Modal dialog */}
										<div class="modal-dialog modal-dialog-centered mw-750px">
											 {/*begin::Modal content */}
											<div class="modal-content">
												 {/*begin::Modal header */}
												<div class="modal-header">
													 {/*begin::Modal title */}
													<h2 class="fw-bold">Update Role</h2>
													 {/*end::Modal title */}
													 {/*begin::Close */}
													<div class="btn btn-icon btn-sm btn-active-icon-primary" data-kt-roles-modal-action="close">
														 {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
														<span class="svg-icon svg-icon-1">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
																<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
															</svg>
														</span>
														 {/*end::Svg Icon */}
													</div>
													 {/*end::Close */}
												</div>
												 {/*end::Modal header */}
												 {/*begin::Modal body */}
												<div class="modal-body scroll-y mx-5 my-7">
													 {/*begin::Form */}
													<form id="kt_modal_update_role_form" class="form" action="#">
														 {/*begin::Scroll */}
														<div class="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_update_role_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_update_role_header" data-kt-scroll-wrappers="#kt_modal_update_role_scroll" data-kt-scroll-offset="300px">
															 {/*begin::Input group */}
															<div class="fv-row mb-10">
																 {/*begin::Label */}
																<label class="fs-5 fw-bold form-label mb-2">
																	<span class="required">Role name</span>
																</label>
																 {/*end::Label */}
																 {/*begin::Input */}
																<input class="form-control form-control-solid" placeholder="Enter a role name" name="role_name" value="Developer" />
																 {/*end::Input */}
															</div>
															 {/*end::Input group */}
															 {/*begin::Permissions */}
															<div class="fv-row">
																 {/*begin::Label */}
																<label class="fs-5 fw-bold form-label mb-2">Role Permissions</label>
																 {/*end::Label */}
																 {/*begin::Table wrapper */}
																<div class="table-responsive">
																	 {/*begin::Table */}
																	<table class="table align-middle table-row-dashed fs-6 gy-5">
																		 {/*begin::Table body */}
																		<tbody class="text-gray-600 fw-semibold">
																			 {/*begin::Table row */}
																			<tr>
																				<td class="text-gray-800">Administrator Access
																				<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Allows a full access to the system"></i></td>
																				<td>
																					 {/*begin::Checkbox */}
																					<label class="form-check form-check-sm form-check-custom form-check-solid me-9">
																						<input class="form-check-input" type="checkbox" value="" id="kt_roles_select_all" />
																						<span class="form-check-label" for="kt_roles_select_all">Select all</span>
																					</label>
																					 {/*end::Checkbox */}
																				</td>
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">User Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="user_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="user_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="user_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Content Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="content_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="content_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="content_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Financial Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="financial_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="financial_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="financial_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Reporting</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="reporting_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="reporting_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="reporting_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Payroll</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="payroll_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="payroll_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="payroll_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Disputes Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="disputes_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="disputes_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="disputes_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">API Controls</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="api_controls_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="api_controls_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="api_controls_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Database Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="database_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="database_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="database_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																			 {/*begin::Table row */}
																			<tr>
																				 {/*begin::Label */}
																				<td class="text-gray-800">Repository Management</td>
																				 {/*end::Label */}
																				 {/*begin::Input group */}
																				<td>
																					 {/*begin::Wrapper */}
																					<div class="d-flex">
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-sm form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="repository_management_read" />
																							<span class="form-check-label">Read</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid me-5 me-lg-20">
																							<input class="form-check-input" type="checkbox" value="" name="repository_management_write" />
																							<span class="form-check-label">Write</span>
																						</label>
																						 {/*end::Checkbox */}
																						 {/*begin::Checkbox */}
																						<label class="form-check form-check-custom form-check-solid">
																							<input class="form-check-input" type="checkbox" value="" name="repository_management_create" />
																							<span class="form-check-label">Create</span>
																						</label>
																						 {/*end::Checkbox */}
																					</div>
																					 {/*end::Wrapper */}
																				</td>
																				 {/*end::Input group */}
																			</tr>
																			 {/*end::Table row */}
																		</tbody>
																		 {/*end::Table body */}
																	</table>
																	 {/*end::Table */}
																</div>
																 {/*end::Table wrapper */}
															</div>
															 {/*end::Permissions */}
														</div>
														 {/*end::Scroll */}
														 {/*begin::Actions */}
														<div class="text-center pt-15">
															<button type="reset" class="btn btn-light me-3" data-kt-roles-modal-action="cancel">Discard</button>
															<button type="submit" class="btn btn-primary" data-kt-roles-modal-action="submit">
																<span class="indicator-label">Submit</span>
																<span class="indicator-progress">Please wait...
																<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
															</button>
														</div>
														 {/*end::Actions */}
													</form>
													 {/*end::Form */}
												</div>
												 {/*end::Modal body */}
											</div>
											 {/*end::Modal content */}
										</div>
										 {/*end::Modal dialog */}
									</div>
									 {/*end::Modal - Update role */}
									 {/*end::Modal */}
								</div>
								 {/*end::Sidebar */}
								 {/*begin::Content */}
								<div class="flex-lg-row-fluid ms-lg-10">
									 {/*begin::Card */}
									<div class="card card-flush mb-6 mb-xl-9">
										 {/*begin::Card header */}
										<div class="card-header pt-5">
											 {/*begin::Card title */}
											<div class="card-title">
												<h2 class="d-flex align-items-center">Users Assigned
												<span class="text-gray-600 fs-6 ms-1">(14)</span></h2>
											</div>
											 {/*end::Card title */}
											 {/*begin::Card toolbar */}
											<div class="card-toolbar">
												 {/*begin::Search */}
												<div class="d-flex align-items-center position-relative my-1" data-kt-view-roles-table-toolbar="base">
													 {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
													<span class="svg-icon svg-icon-1 position-absolute ms-6">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
															<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
														</svg>
													</span>
													 {/*end::Svg Icon */}
													<input type="text" data-kt-roles-table-filter="search" class="form-control form-control-solid w-250px ps-15" placeholder="Search Users" />
												</div>
												 {/*end::Search */}
												 {/*begin::Group actions */}
												<div class="d-flex justify-content-end align-items-center d-none" data-kt-view-roles-table-toolbar="selected">
													<div class="fw-bold me-5">
													<span class="me-2" data-kt-view-roles-table-select="selected_count"></span>Selected</div>
													<button type="button" class="btn btn-danger" data-kt-view-roles-table-select="delete_selected">Delete Selected</button>
												</div>
												 {/*end::Group actions */}
											</div>
											 {/*end::Card toolbar */}
										</div>
										 {/*end::Card header */}
										 {/*begin::Card body */}
										<div class="card-body pt-0">
											 {/*begin::Table */}
											<table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_roles_view_table">
												 {/*begin::Table head */}
												<thead>
													 {/*begin::Table row */}
													<tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
														<th class="w-10px pe-2">
															<div class="form-check form-check-sm form-check-custom form-check-solid me-3">
																<input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_roles_view_table .form-check-input" value="1" />
															</div>
														</th>
														<th class="min-w-50px">ID</th>
														<th class="min-w-150px">User</th>
														<th class="min-w-125px">Joined Date</th>
														<th class="text-end min-w-100px">Actions</th>
													</tr>
													 {/*end::Table row */}
												</thead>
												 {/*end::Table head */}
												 {/*begin::Table body */}
												<tbody class="fw-semibold text-gray-600">
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID2833</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-6.jpg" alt="Emma Smith" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
																<span>smith@kpmg.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>22 Sep 2022, 10:30 am</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID3795</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-danger text-danger">M</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
																<span>melody@altbox.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>24 Jun 2022, 11:05 am</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID6640</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-1.jpg" alt="Max Smith" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Max Smith</a>
																<span>max@kt.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>10 Mar 2022, 6:05 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID9235</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-5.jpg" alt="Sean Bean" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
																<span>sean@dellito.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>22 Sep 2022, 9:23 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID4831</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-25.jpg" alt="Brian Cox" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
																<span>brian@exchange.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>15 Apr 2022, 10:30 am</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID3212</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-warning text-warning">C</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
																<span>mik@pex.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>20 Dec 2022, 5:20 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID5402</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-9.jpg" alt="Francis Mitcham" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
																<span>f.mit@kpmg.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>20 Jun 2022, 10:10 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID4937</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
																<span>olivia@corpmail.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>10 Nov 2022, 6:43 am</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID4882</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
																<span>owen.neil@gmail.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>15 Apr 2022, 10:10 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID8875</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-23.jpg" alt="Dan Wilson" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
																<span>dam@consilting.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>10 Nov 2022, 10:30 am</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID6225</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-danger text-danger">E</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Bold</a>
																<span>emma@intenso.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>10 Nov 2022, 5:20 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID8021</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-12.jpg" alt="Ana Crown" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Ana Crown</a>
																<span>ana.cf@limtel.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>05 May 2022, 10:10 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID4641</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label fs-3 bg-light-info text-info">A</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Robert Doe</a>
																<span>robert@benko.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>20 Dec 2022, 8:43 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
													<tr>
														 {/*begin::Checkbox */}
														<td>
															<div class="form-check form-check-sm form-check-custom form-check-solid">
																<input class="form-check-input" type="checkbox" value="1" />
															</div>
														</td>
														 {/*end::Checkbox */}
														 {/*begin::ID */}
														<td>ID5583</td>
														 {/*begin::ID */}
														 {/*begin::User= */}
														<td class="d-flex align-items-center">
															 {/*begin:: Avatar  */}
															<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
																<a href="../../demo6/dist/apps/user-management/users/view.html">
																	<div class="symbol-label">
																		<img src="assets/media/avatars/300-13.jpg" alt="John Miller" class="w-100" />
																	</div>
																</a>
															</div>
															 {/*end::Avatar */}
															 {/*begin::User details */}
															<div class="d-flex flex-column">
																<a href="../../demo6/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">John Miller</a>
																<span>miller@mapple.com</span>
															</div>
															 {/*begin::User details */}
														</td>
														 {/*end::user= */}
														 {/*begin::Joined date= */}
														<td>10 Mar 2022, 5:30 pm</td>
														 {/*end::Joined date= */}
														 {/*begin::Action= */}
														<td class="text-end">
															<a href="#" class="btn btn-sm btn-light btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
															 {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg */}
															<span class="svg-icon svg-icon-5 m-0">
																<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
																</svg>
															</span>
															 {/*end::Svg Icon */}</a>
															 {/*begin::Menu */}
															<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="../../demo6/dist/apps/user-management/users/view.html" class="menu-link px-3">View</a>
																</div>
																 {/*end::Menu item */}
																 {/*begin::Menu item */}
																<div class="menu-item px-3">
																	<a href="#" class="menu-link px-3" data-kt-roles-table-filter="delete_row">Delete</a>
																</div>
																 {/*end::Menu item */}
															</div>
															 {/*end::Menu */}
														</td>
														 {/*end::Action= */}
													</tr>
												</tbody>
												 {/*end::Table body */}
											</table>
											 {/*end::Table */}
										</div>
										 {/*end::Card body */}
									</div>
									 {/*end::Card */}
								</div>
								 {/*end::Content */}
							</div>
							 {/*end::Layout */}
						</div>
						 {/*end::Container */}
					</div>
					 {/*end::Content */}
					 {/*begin::Footer */}
					 {/*end::Footer */}
				</div>
  )
}

export default ViewRoles