import React from 'react'

export default function BasicTable() {
    return (
        <main className="main" id="top">
            <div className="container" data-layout="container">
                <div className="content">
                    <div className="card mb-3">
                        <div className="bg-holder d-none d-lg-block bg-card" style={{ backgroundImage: "url(../../assets/img/icons/spot-illustrations/corner-4.png)" }}></div>

                        <div className="card-body position-relative">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h3>Tables</h3>
                                    <p className="mb-0">Documentation and examples for opt-in styling of tables with Falcon.</p><a className="btn btn-link btn-sm ps-0 mt-2" href="https://getbootstrap.com/docs/5.2/content/tables/" target="_blank">Tables on Bootstrap<span className="fas fa-chevron-right ms-1 fs--2"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Basic Table</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Using the most basic table markup, here’s how <code> .table </code> based tables look in Bootstrap.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-d41da6e3-8fbe-4938-bc5c-d839f08f1c98" type="button" role="tab" aria-controls="dom-d41da6e3-8fbe-4938-bc5c-d839f08f1c98" aria-selected="true" id="tab-dom-d41da6e3-8fbe-4938-bc5c-d839f08f1c98">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-5670aee5-0f26-4458-97e6-9fb340619412" type="button" role="tab" aria-controls="dom-5670aee5-0f26-4458-97e6-9fb340619412" aria-selected="false" id="tab-dom-5670aee5-0f26-4458-97e6-9fb340619412">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-d41da6e3-8fbe-4938-bc5c-d839f08f1c98" id="dom-d41da6e3-8fbe-4938-bc5c-d839f08f1c98">
                                            <div className="table-responsive scrollbar">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th className="text-end" scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ricky Antony</td>
                                                            <td>ricky@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Emma Watson</td>
                                                            <td>emma@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rowen Atkinson</td>
                                                            <td>rown@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Antony Hopkins</td>
                                                            <td>antony@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jennifer Schramm</td>
                                                            <td>jennifer@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-5670aee5-0f26-4458-97e6-9fb340619412" id="dom-5670aee5-0f26-4458-97e6-9fb340619412"><pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
                                            &lt;table class=&quot;table&quot;&gt;
                                            &lt;thead&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                            &lt;th class=&quot;text-end&quot; scope=&quot;col&quot;&gt;Actions&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Ricky Antony&lt;/td&gt;
                                            &lt;td&gt;ricky@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Emma Watson&lt;/td&gt;
                                            &lt;td&gt;emma@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                            &lt;td&gt;rown@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                            &lt;td&gt;antony@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                            &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;
                                            &lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card z-index-1">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Striped</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Use <code>.table-striped</code> to add zebra-striping to any table row within the <code> tbody</code>.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-5b792eb5-1ce5-44bd-92cb-35eceadbbdc3" type="button" role="tab" aria-controls="dom-5b792eb5-1ce5-44bd-92cb-35eceadbbdc3" aria-selected="true" id="tab-dom-5b792eb5-1ce5-44bd-92cb-35eceadbbdc3">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-b20ad781-4a08-417e-8df3-e901b70c32a0" type="button" role="tab" aria-controls="dom-b20ad781-4a08-417e-8df3-e901b70c32a0" aria-selected="false" id="tab-dom-b20ad781-4a08-417e-8df3-e901b70c32a0">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-5b792eb5-1ce5-44bd-92cb-35eceadbbdc3" id="dom-5b792eb5-1ce5-44bd-92cb-35eceadbbdc3">
                                            <div className="table-responsive scrollbar">
                                                <table className="table table-striped overflow-hidden">
                                                    <thead>
                                                        <tr className="btn-reveal-trigger">
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th className="text-end" scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Ricky Antony</td>
                                                            <td>ricky@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Emma Watson</td>
                                                            <td>emma@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Rowen Atkinson</td>
                                                            <td>rown@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Antony Hopkins</td>
                                                            <td>antony@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Jennifer Schramm</td>
                                                            <td>jennifer@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-b20ad781-4a08-417e-8df3-e901b70c32a0" id="dom-b20ad781-4a08-417e-8df3-e901b70c32a0"><pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
                                            &lt;table class=&quot;table table-striped overflow-hidden&quot;&gt;
                                            &lt;thead&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                            &lt;th class=&quot;text-end&quot; scope=&quot;col&quot;&gt;Actions&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;td&gt;Ricky Antony&lt;/td&gt;
                                            &lt;td&gt;ricky@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                            &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                            &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;td&gt;Emma Watson&lt;/td&gt;
                                            &lt;td&gt;emma@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                            &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                            &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                            &lt;td&gt;rown@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                            &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                            &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                            &lt;td&gt;antony@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                            &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                            &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                            &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                            &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                            &lt;td class=&quot;text-end&quot;&gt;
                                            &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                            &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                            &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;
                                            &lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Dark</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Using the most basic table markup, here’s how <code>.table-dark</code> based tables look in Bootstrap.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-60cbd238-33e5-47bc-bdf7-9decbe62a7f1" type="button" role="tab" aria-controls="dom-60cbd238-33e5-47bc-bdf7-9decbe62a7f1" aria-selected="true" id="tab-dom-60cbd238-33e5-47bc-bdf7-9decbe62a7f1">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-17146696-6b96-4c61-9599-eb5e9493d218" type="button" role="tab" aria-controls="dom-17146696-6b96-4c61-9599-eb5e9493d218" aria-selected="false" id="tab-dom-17146696-6b96-4c61-9599-eb5e9493d218">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-60cbd238-33e5-47bc-bdf7-9decbe62a7f1" id="dom-60cbd238-33e5-47bc-bdf7-9decbe62a7f1">
                                            <table className="table table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ricky Antony</td>
                                                        <td>ricky@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emma Watson</td>
                                                        <td>emma@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rowen Atkinson</td>
                                                        <td>rown@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Antony Hopkins</td>
                                                        <td>antony@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Schramm</td>
                                                        <td>jennifer@example.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-17146696-6b96-4c61-9599-eb5e9493d218" id="dom-17146696-6b96-4c61-9599-eb5e9493d218"><pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;table class=&quot;table table-dark&quot;&gt;
                                            &lt;thead&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Ricky Antony&lt;/td&gt;
                                            &lt;td&gt;ricky@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Emma Watson&lt;/td&gt;
                                            &lt;td&gt;emma@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                            &lt;td&gt;rown@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                            &lt;td&gt;antony@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                            &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Hoverable Rows</h5>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-0a97aa05-d0aa-4cd0-b729-7dc08e0a5f27" type="button" role="tab" aria-controls="dom-0a97aa05-d0aa-4cd0-b729-7dc08e0a5f27" aria-selected="true" id="tab-dom-0a97aa05-d0aa-4cd0-b729-7dc08e0a5f27">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-f179e735-c75f-4e49-bb74-ce06124e8c7b" type="button" role="tab" aria-controls="dom-f179e735-c75f-4e49-bb74-ce06124e8c7b" aria-selected="false" id="tab-dom-f179e735-c75f-4e49-bb74-ce06124e8c7b">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-0a97aa05-d0aa-4cd0-b729-7dc08e0a5f27" id="dom-0a97aa05-d0aa-4cd0-b729-7dc08e0a5f27">
                                            <div className="table-responsive scrollbar">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th scope="col"> </th>
                                                            <th scope="col">joined</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="hover-actions-trigger">
                                                            <td className="align-middle text-nowrap">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xl">
                                                                        <img className="rounded-circle" src="../../assets/img/team/4.jpg" alt="" />
                                                                    </div>
                                                                    <div className="ms-2">Ricky Antony</div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">ricky@example.com</td>
                                                            <td className="w-auto">
                                                                <div className="btn-group btn-group hover-actions end-0 me-4"><button className="btn btn-light pe-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></button><button className="btn btn-light ps-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">30/03/2018</td>
                                                        </tr>
                                                        <tr className="hover-actions-trigger">
                                                            <td className="align-middle text-nowrap">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xl">
                                                                        <img className="rounded-circle" src="../../assets/img/team/13.jpg" alt="" />
                                                                    </div>
                                                                    <div className="ms-2">Emma Watson</div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">emma@example.com</td>
                                                            <td className="w-auto">
                                                                <div className="btn-group btn-group hover-actions end-0 me-4"><button className="btn btn-light pe-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></button><button className="btn btn-light ps-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">11/07/2017</td>
                                                        </tr>
                                                        <tr className="hover-actions-trigger">
                                                            <td className="align-middle text-nowrap">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xl">
                                                                        <div className="avatar-name rounded-circle"><span>RA</span></div>
                                                                    </div>
                                                                    <div className="ms-2">Rowen Atkinson</div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">rown@example.com</td>
                                                            <td className="w-auto">
                                                                <div className="btn-group btn-group hover-actions end-0 me-4"><button className="btn btn-light pe-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></button><button className="btn btn-light ps-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">05/04/2016</td>
                                                        </tr>
                                                        <tr className="hover-actions-trigger">
                                                            <td className="align-middle text-nowrap">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xl">
                                                                        <img className="rounded-circle" src="../../assets/img/team/2.jpg" alt="" />
                                                                    </div>
                                                                    <div className="ms-2">Antony Hopkins</div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">antony@example.com</td>
                                                            <td className="w-auto">
                                                                <div className="btn-group btn-group hover-actions end-0 me-4"><button className="btn btn-light pe-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></button><button className="btn btn-light ps-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">05/04/2018</td>
                                                        </tr>
                                                        <tr className="hover-actions-trigger">
                                                            <td className="align-middle text-nowrap">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xl">
                                                                        <img className="rounded-circle" src="../../assets/img/team/3.jpg" alt="" />
                                                                    </div>
                                                                    <div className="ms-2">Jennifer Schramm</div>
                                                                </div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">jennifer@example.com</td>
                                                            <td className="w-auto">
                                                                <div className="btn-group btn-group hover-actions end-0 me-4"><button className="btn btn-light pe-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="fas fa-edit"></span></button><button className="btn btn-light ps-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                            <td className="align-middle text-nowrap">17/03/2016</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-f179e735-c75f-4e49-bb74-ce06124e8c7b" id="dom-f179e735-c75f-4e49-bb74-ce06124e8c7b"><pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
                                            &lt;table class=&quot;table table-hover&quot;&gt;
                                            &lt;thead&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt; &lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;joined&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr class=&quot;hover-actions-trigger&quot;&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;
                                            &lt;div class=&quot;d-flex align-items-center&quot;&gt;
                                            &lt;div class=&quot;avatar avatar-xl&quot;&gt;
                                            &lt;img class=&quot;rounded-circle&quot; src=&quot;../../assets/img/team/4.jpg&quot; alt=&quot;&quot; /&gt;
                                            &lt;/div&gt;
                                            &lt;div class=&quot;ms-2&quot;&gt;Ricky Antony&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;ricky@example.com&lt;/td&gt;
                                            &lt;td class=&quot;w-auto&quot;&gt;
                                            &lt;div class=&quot;btn-group btn-group hover-actions end-0 me-4&quot;&gt;&lt;button class=&quot;btn btn-light pe-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-light ps-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;30/03/2018&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;hover-actions-trigger&quot;&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;
                                            &lt;div class=&quot;d-flex align-items-center&quot;&gt;
                                            &lt;div class=&quot;avatar avatar-xl&quot;&gt;
                                            &lt;img class=&quot;rounded-circle&quot; src=&quot;../../assets/img/team/13.jpg&quot; alt=&quot;&quot; /&gt;
                                            &lt;/div&gt;
                                            &lt;div class=&quot;ms-2&quot;&gt;Emma Watson&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;emma@example.com&lt;/td&gt;
                                            &lt;td class=&quot;w-auto&quot;&gt;
                                            &lt;div class=&quot;btn-group btn-group hover-actions end-0 me-4&quot;&gt;&lt;button class=&quot;btn btn-light pe-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-light ps-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;11/07/2017&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;hover-actions-trigger&quot;&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;
                                            &lt;div class=&quot;d-flex align-items-center&quot;&gt;
                                            &lt;div class=&quot;avatar avatar-xl&quot;&gt;
                                            &lt;div class=&quot;avatar-name rounded-circle&quot;&gt;&lt;span&gt;RA&lt;/span&gt;&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;div class=&quot;ms-2&quot;&gt;Rowen Atkinson&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;rown@example.com&lt;/td&gt;
                                            &lt;td class=&quot;w-auto&quot;&gt;
                                            &lt;div class=&quot;btn-group btn-group hover-actions end-0 me-4&quot;&gt;&lt;button class=&quot;btn btn-light pe-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-light ps-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;05/04/2016&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;hover-actions-trigger&quot;&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;
                                            &lt;div class=&quot;d-flex align-items-center&quot;&gt;
                                            &lt;div class=&quot;avatar avatar-xl&quot;&gt;
                                            &lt;img class=&quot;rounded-circle&quot; src=&quot;../../assets/img/team/2.jpg&quot; alt=&quot;&quot; /&gt;
                                            &lt;/div&gt;
                                            &lt;div class=&quot;ms-2&quot;&gt;Antony Hopkins&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;antony@example.com&lt;/td&gt;
                                            &lt;td class=&quot;w-auto&quot;&gt;
                                            &lt;div class=&quot;btn-group btn-group hover-actions end-0 me-4&quot;&gt;&lt;button class=&quot;btn btn-light pe-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-light ps-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;05/04/2018&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr class=&quot;hover-actions-trigger&quot;&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;
                                            &lt;div class=&quot;d-flex align-items-center&quot;&gt;
                                            &lt;div class=&quot;avatar avatar-xl&quot;&gt;
                                            &lt;img class=&quot;rounded-circle&quot; src=&quot;../../assets/img/team/3.jpg&quot; alt=&quot;&quot; /&gt;
                                            &lt;/div&gt;
                                            &lt;div class=&quot;ms-2&quot;&gt;Jennifer Schramm&lt;/div&gt;
                                            &lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;jennifer@example.com&lt;/td&gt;
                                            &lt;td class=&quot;w-auto&quot;&gt;
                                            &lt;div class=&quot;btn-group btn-group hover-actions end-0 me-4&quot;&gt;&lt;button class=&quot;btn btn-light pe-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-light ps-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                            &lt;/td&gt;
                                            &lt;td class=&quot;align-middle text-nowrap&quot;&gt;17/03/2016&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;
                                            &lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Bordered tables </h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-2c577684-ff97-4f7e-8b10-ac0b01ccc44d" type="button" role="tab" aria-controls="dom-2c577684-ff97-4f7e-8b10-ac0b01ccc44d" aria-selected="true" id="tab-dom-2c577684-ff97-4f7e-8b10-ac0b01ccc44d">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-3e972625-c06d-479a-8b96-0d32036e3b7a" type="button" role="tab" aria-controls="dom-3e972625-c06d-479a-8b96-0d32036e3b7a" aria-selected="false" id="tab-dom-3e972625-c06d-479a-8b96-0d32036e3b7a">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-2c577684-ff97-4f7e-8b10-ac0b01ccc44d" id="dom-2c577684-ff97-4f7e-8b10-ac0b01ccc44d">
                                            <table className="table table-bordered">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ricky Antony</td>
                                                        <td>ricky@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emma Watson</td>
                                                        <td>emma@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rowen Atkinson</td>
                                                        <td>rown@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Antony Hopkins</td>
                                                        <td>antony@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Schramm</td>
                                                        <td>jennifer@example.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-3e972625-c06d-479a-8b96-0d32036e3b7a" id="dom-3e972625-c06d-479a-8b96-0d32036e3b7a"><pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;table class=&quot;table table-bordered&quot;&gt;
                                            &lt;thead class=&quot;table-dark&quot;&gt;
                                            &lt;tr&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                            &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                            &lt;/tr&gt;
                                            &lt;/thead&gt;
                                            &lt;tbody&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Ricky Antony&lt;/td&gt;
                                            &lt;td&gt;ricky@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Emma Watson&lt;/td&gt;
                                            &lt;td&gt;emma@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                            &lt;td&gt;rown@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                            &lt;td&gt;antony@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;tr&gt;
                                            &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                            &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                            &lt;/tr&gt;
                                            &lt;/tbody&gt;
                                            &lt;/table&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Captions</h5>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-750d5ea1-f74d-4453-818a-54a8276fea38" type="button" role="tab" aria-controls="dom-750d5ea1-f74d-4453-818a-54a8276fea38" aria-selected="true" id="tab-dom-750d5ea1-f74d-4453-818a-54a8276fea38">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-b7623a5d-a789-418b-a193-eca0a447b562" type="button" role="tab" aria-controls="dom-b7623a5d-a789-418b-a193-eca0a447b562" aria-selected="false" id="tab-dom-b7623a5d-a789-418b-a193-eca0a447b562">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-750d5ea1-f74d-4453-818a-54a8276fea38" id="dom-750d5ea1-f74d-4453-818a-54a8276fea38">
                                            <table className="table">
                                                <caption>List of Users</caption>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ricky Antony</td>
                                                        <td>ricky@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emma Watson</td>
                                                        <td>emma@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rowen Atkinson</td>
                                                        <td>rown@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Antony Hopkins</td>
                                                        <td>antony@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Schramm</td>
                                                        <td>jennifer@example.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-b7623a5d-a789-418b-a193-eca0a447b562" id="dom-b7623a5d-a789-418b-a193-eca0a447b562">
                                            <pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;table class=&quot;table&quot;&gt;
                                                &lt;caption&gt;List of Users&lt;/caption&gt;
                                                &lt;thead&gt;
                                                &lt;tr&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                                &lt;/tr&gt;
                                                &lt;/thead&gt;
                                                &lt;tbody&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Ricky Antony&lt;/td&gt;
                                                &lt;td&gt;ricky@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Emma Watson&lt;/td&gt;
                                                &lt;td&gt;emma@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                                &lt;td&gt;rown@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                                &lt;td&gt;antony@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                                &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;/tbody&gt;
                                                &lt;/table&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Small Tables</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Add <code>.table-sm</code> to make any <code>.table</code> more compact by cutting all cell padding in half.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-ecc31b44-0e98-44d8-a83e-3b1ad34c137e" type="button" role="tab" aria-controls="dom-ecc31b44-0e98-44d8-a83e-3b1ad34c137e" aria-selected="true" id="tab-dom-ecc31b44-0e98-44d8-a83e-3b1ad34c137e">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-75df1229-2887-4344-90d9-06cef89f4cd2" type="button" role="tab" aria-controls="dom-75df1229-2887-4344-90d9-06cef89f4cd2" aria-selected="false" id="tab-dom-75df1229-2887-4344-90d9-06cef89f4cd2">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-ecc31b44-0e98-44d8-a83e-3b1ad34c137e" id="dom-ecc31b44-0e98-44d8-a83e-3b1ad34c137e">
                                            <table className="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Ricky Antony</td>
                                                        <td>ricky@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Emma Watson</td>
                                                        <td>emma@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Rowen Atkinson</td>
                                                        <td>rown@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Antony Hopkins</td>
                                                        <td>antony@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jennifer Schramm</td>
                                                        <td>jennifer@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Mizan Rifat</td>
                                                        <td>mizan@example.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Tony Robbins</td>
                                                        <td>tony@example.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-75df1229-2887-4344-90d9-06cef89f4cd2" id="dom-75df1229-2887-4344-90d9-06cef89f4cd2">
                                            <pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;table class=&quot;table table-sm&quot;&gt;
                                                &lt;thead&gt;
                                                &lt;tr&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                                &lt;/tr&gt;
                                                &lt;/thead&gt;
                                                &lt;tbody&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Ricky Antony&lt;/td&gt;
                                                &lt;td&gt;ricky@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Emma Watson&lt;/td&gt;
                                                &lt;td&gt;emma@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                                &lt;td&gt;rown@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                                &lt;td&gt;antony@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                                &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Mizan Rifat&lt;/td&gt;
                                                &lt;td&gt;mizan@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr&gt;
                                                &lt;td&gt;Tony Robbins&lt;/td&gt;
                                                &lt;td&gt;tony@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;/tbody&gt;
                                                &lt;/table&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Highlight Column</h5>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-ea3baff0-155f-4a9e-9f12-114debe9c65e" type="button" role="tab" aria-controls="dom-ea3baff0-155f-4a9e-9f12-114debe9c65e" aria-selected="true" id="tab-dom-ea3baff0-155f-4a9e-9f12-114debe9c65e">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-7190e23d-2f4a-4ebc-878e-0ee923a84d40" type="button" role="tab" aria-controls="dom-7190e23d-2f4a-4ebc-878e-0ee923a84d40" aria-selected="false" id="tab-dom-7190e23d-2f4a-4ebc-878e-0ee923a84d40">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-ea3baff0-155f-4a9e-9f12-114debe9c65e" id="dom-ea3baff0-155f-4a9e-9f12-114debe9c65e">
                                            <div className="table-responsive scrollbar">
                                                <table className="table table-bordered overflow-hidden">
                                                    <colgroup>
                                                        <col className="bg-soft-primary" />
                                                        <col />
                                                        <col />
                                                    </colgroup>
                                                    <thead>
                                                        <tr className="btn-reveal-trigger">
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th className="text-end" scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Ricky Antony</td>
                                                            <td>ricky@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Emma Watson</td>
                                                            <td>emma@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Rowen Atkinson</td>
                                                            <td>rown@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Antony Hopkins</td>
                                                            <td>antony@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr className="btn-reveal-trigger">
                                                            <td>Jennifer Schramm</td>
                                                            <td>jennifer@example.com</td>
                                                            <td className="text-end">
                                                                <div className="dropdown font-sans-serif position-static"><button className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false"><span className="fas fa-ellipsis-h fs--1"></span></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-0">
                                                                        <div className="py-2"><a className="dropdown-item" href="#!">Edit</a><a className="dropdown-item text-danger" href="#!">Delete</a></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-7190e23d-2f4a-4ebc-878e-0ee923a84d40" id="dom-7190e23d-2f4a-4ebc-878e-0ee923a84d40">
                                            <pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}>
                                                <code className="language-html">&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
                                                    &lt;table class=&quot;table table-bordered overflow-hidden&quot;&gt;
                                                    &lt;colgroup&gt;
                                                    &lt;col class=&quot;bg-soft-primary&quot; /&gt;
                                                    &lt;col /&gt;
                                                    &lt;col /&gt;
                                                    &lt;/colgroup&gt;
                                                    &lt;thead&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                    &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                                    &lt;th class=&quot;text-end&quot; scope=&quot;col&quot;&gt;Actions&lt;/th&gt;
                                                    &lt;/tr&gt;
                                                    &lt;/thead&gt;
                                                    &lt;tbody&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;td&gt;Ricky Antony&lt;/td&gt;
                                                    &lt;td&gt;ricky@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                                    &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                                    &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;td&gt;Emma Watson&lt;/td&gt;
                                                    &lt;td&gt;emma@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                                    &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                                    &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                                    &lt;td&gt;rown@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                                    &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                                    &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                                    &lt;td&gt;antony@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                                    &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                                    &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr class=&quot;btn-reveal-trigger&quot;&gt;
                                                    &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                                    &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div class=&quot;dropdown font-sans-serif position-static&quot;&gt;&lt;button class=&quot;btn btn-link text-600 btn-sm dropdown-toggle btn-reveal&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; data-boundary=&quot;window&quot; aria-haspopup=&quot;true&quot; aria-expanded=&quot;false&quot;&gt;&lt;span class=&quot;fas fa-ellipsis-h fs--1&quot;&gt;&lt;/span&gt;&lt;/button&gt;
                                                    &lt;div class=&quot;dropdown-menu dropdown-menu-end border py-0&quot;&gt;
                                                    &lt;div class=&quot;py-2&quot;&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#!&quot;&gt;Edit&lt;/a&gt;&lt;a class=&quot;dropdown-item text-danger&quot; href=&quot;#!&quot;&gt;Delete&lt;/a&gt;&lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                    &lt;/table&gt;
                                                    &lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Active Table</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Highlight a table row or cell by adding a <code>.table-active</code> class.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-d809bfa9-2741-4553-985f-f2a22c546717" type="button" role="tab" aria-controls="dom-d809bfa9-2741-4553-985f-f2a22c546717" aria-selected="true" id="tab-dom-d809bfa9-2741-4553-985f-f2a22c546717">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-1e481d55-3f48-4875-80fd-e4939eba5790" type="button" role="tab" aria-controls="dom-1e481d55-3f48-4875-80fd-e4939eba5790" aria-selected="false" id="tab-dom-1e481d55-3f48-4875-80fd-e4939eba5790">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-d809bfa9-2741-4553-985f-f2a22c546717" id="dom-d809bfa9-2741-4553-985f-f2a22c546717">
                                            <div className="table-responsive scrollbar">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Email</th>
                                                            <th className="text-end" scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ricky Antony</td>
                                                            <td>ricky@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr className="table-active">
                                                            <td>Emma Watson</td>
                                                            <td>emma@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rowen Atkinson</td>
                                                            <td>rown@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Antony Hopkins</td>
                                                            <td className="table-active">antony@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Jennifer Schramm</td>
                                                            <td>jennifer@example.com</td>
                                                            <td className="text-end">
                                                                <div><button className="btn btn-link p-0" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><span className="text-500 fas fa-edit"></span></button><button className="btn btn-link p-0 ms-2" type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span className="text-500 fas fa-trash-alt"></span></button></div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-1e481d55-3f48-4875-80fd-e4939eba5790" id="dom-1e481d55-3f48-4875-80fd-e4939eba5790">
                                            <pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}>
                                                <code className="language-html">&lt;div class=&quot;table-responsive scrollbar&quot;&gt;
                                                    &lt;table class=&quot;table table-bordered&quot;&gt;
                                                    &lt;thead&gt;
                                                    &lt;tr&gt;
                                                    &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                    &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                                    &lt;th class=&quot;text-end&quot; scope=&quot;col&quot;&gt;Actions&lt;/th&gt;
                                                    &lt;/tr&gt;
                                                    &lt;/thead&gt;
                                                    &lt;tbody&gt;
                                                    &lt;tr&gt;
                                                    &lt;td&gt;Ricky Antony&lt;/td&gt;
                                                    &lt;td&gt;ricky@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr class=&quot;table-active&quot;&gt;
                                                    &lt;td&gt;Emma Watson&lt;/td&gt;
                                                    &lt;td&gt;emma@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr&gt;
                                                    &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                                    &lt;td&gt;rown@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr&gt;
                                                    &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                                    &lt;td class=&quot;table-active&quot;&gt;antony@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;tr&gt;
                                                    &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                                    &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                                    &lt;td class=&quot;text-end&quot;&gt;
                                                    &lt;div&gt;&lt;button class=&quot;btn btn-link p-0&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Edit&quot;&gt;&lt;span class=&quot;text-500 fas fa-edit&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;button class=&quot;btn btn-link p-0 ms-2&quot; type=&quot;button&quot; data-bs-toggle=&quot;tooltip&quot; data-bs-placement=&quot;top&quot; title=&quot;Delete&quot;&gt;&lt;span class=&quot;text-500 fas fa-trash-alt&quot;&gt;&lt;/span&gt;&lt;/button&gt;&lt;/div&gt;
                                                    &lt;/td&gt;
                                                    &lt;/tr&gt;
                                                    &lt;/tbody&gt;
                                                    &lt;/table&gt;
                                                    &lt;/div&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header border-bottom">
                                    <div className="row flex-between-end">
                                        <div className="col-auto align-self-center">
                                            <h5 className="mb-0" data-anchor="data-anchor">Variants</h5>
                                            <p className="mb-0 pt-1 mt-2 mb-0">Use contextual classes to color tables, table rows or individual cells.</p>
                                        </div>
                                        <div className="col-auto ms-auto">
                                            <div className="nav nav-pills nav-pills-falcon flex-grow-1 mt-2" role="tablist"><button className="btn btn-sm active" data-bs-toggle="pill" data-bs-target="#dom-7030f50d-e2c4-40de-be07-fdb9c97fec55" type="button" role="tab" aria-controls="dom-7030f50d-e2c4-40de-be07-fdb9c97fec55" aria-selected="true" id="tab-dom-7030f50d-e2c4-40de-be07-fdb9c97fec55">Preview</button><button className="btn btn-sm" data-bs-toggle="pill" data-bs-target="#dom-f9b32003-4c25-40b2-85d9-affc0c11c944" type="button" role="tab" aria-controls="dom-f9b32003-4c25-40b2-85d9-affc0c11c944" aria-selected="false" id="tab-dom-f9b32003-4c25-40b2-85d9-affc0c11c944">Code</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div className="tab-content">
                                        <div className="tab-pane preview-tab-pane active" role="tabpanel" aria-labelledby="tab-dom-7030f50d-e2c4-40de-be07-fdb9c97fec55" id="dom-7030f50d-e2c4-40de-be07-fdb9c97fec55">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="table-primary">
                                                        <td>Ricky Antony</td>
                                                        <td>ricky@example.com</td>
                                                    </tr>
                                                    <tr className="table-secondary">
                                                        <td>Emma Watson</td>
                                                        <td>emma@example.com</td>
                                                    </tr>
                                                    <tr className="table-success">
                                                        <td>Rowen Atkinson</td>
                                                        <td>rown@example.com</td>
                                                    </tr>
                                                    <tr className="table-danger">
                                                        <td>Antony Hopkins</td>
                                                        <td>antony@example.com</td>
                                                    </tr>
                                                    <tr className="table-warning">
                                                        <td>Jennifer Schramm</td>
                                                        <td>jennifer@example.com</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-pane code-tab-pane" role="tabpanel" aria-labelledby="tab-dom-f9b32003-4c25-40b2-85d9-affc0c11c944" id="dom-f9b32003-4c25-40b2-85d9-affc0c11c944">
                                            <pre className="scrollbar rounded-1" style={{ maxHeight: "420px" }}><code className="language-html">&lt;table class=&quot;table&quot;&gt;
                                                &lt;thead&gt;
                                                &lt;tr&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Name&lt;/th&gt;
                                                &lt;th scope=&quot;col&quot;&gt;Email&lt;/th&gt;
                                                &lt;/tr&gt;
                                                &lt;/thead&gt;
                                                &lt;tbody&gt;
                                                &lt;tr class=&quot;table-primary&quot;&gt;
                                                &lt;td&gt;Ricky Antony&lt;/td&gt;
                                                &lt;td&gt;ricky@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr class=&quot;table-secondary&quot;&gt;
                                                &lt;td&gt;Emma Watson&lt;/td&gt;
                                                &lt;td&gt;emma@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr class=&quot;table-success&quot;&gt;
                                                &lt;td&gt;Rowen Atkinson&lt;/td&gt;
                                                &lt;td&gt;rown@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr class=&quot;table-danger&quot;&gt;
                                                &lt;td&gt;Antony Hopkins&lt;/td&gt;
                                                &lt;td&gt;antony@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;tr class=&quot;table-warning&quot;&gt;
                                                &lt;td&gt;Jennifer Schramm&lt;/td&gt;
                                                &lt;td&gt;jennifer@example.com&lt;/td&gt;
                                                &lt;/tr&gt;
                                                &lt;/tbody&gt;
                                                &lt;/table&gt;</code></pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer">
                        <div class="row g-0 justify-content-between fs--1 mt-4 mb-3">
                            <div class="col-12 col-sm-auto text-center">
                                <p class="mb-0 text-600">Thank you for creating with The Park <span class="d-none d-sm-inline-block">| </span><br class="d-sm-none" /> 2023 &copy; <a href="https://innovatpark.com/">iNNOVAT PARK LTD.</a></p>
                            </div>
                            <div class="col-12 col-sm-auto text-center">
                                <p class="mb-0 text-600">v3.14.0</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    )
}


