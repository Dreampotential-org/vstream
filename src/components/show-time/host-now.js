import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFormStep } from "../../actions/toggling";

function HostNow({ toggling: { toggleNavbarBurger, formStepState }, changeFormStep }) {
    return (
        // <div
        //     className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
        // >
        //     <Fragment>
        //         <div className='container-fluid'>
        <div className="row flex-row">
            <div className="col-xl-12">
                <div className="widget has-shadow">
                    <div className="widget-header bordered no-actions d-flex align-items-center">
                        <h4>Host Now!</h4>
                    </div>
                    <div className="widget-body">
                        <div className="row flex-row justify-content-center">
                            <div className="col-xl-10">
                                <div id="rootwizard">
                                    <div className="step-container">
                                        <div className="step-wizard">
                                            <div className="progress">
                                                {
                                                    formStepState["step1"] ?
                                                        <div className="progressbar" style={{ width: "33.3333%" }}></div>
                                                        : formStepState["step2"] ?
                                                            <div className="progressbar" style={{ width: "66.6667%" }}></div>
                                                            : formStepState["step3"] ?
                                                                <div className="progressbar" style={{ width: "100%" }}></div>
                                                                : <div className="progressbar"></div>

                                                }

                                            </div>
                                            <ul>
                                                <li id="step1"
                                                    onClick={(e) => changeFormStep(e.target.id)}
                                                >
                                                    <a data-toggle="tab" id="step1"
                                                        className={formStepState["step1"] ? "active show" : ""}
                                                    >
                                                        <span id="step1" className="step">1</span>
                                                        <span id="step1" className="title">Step 1</span>
                                                    </a>
                                                </li>
                                                <li id="step2"
                                                    onClick={(e) => changeFormStep(e.target.id)}>
                                                    <a data-toggle="tab" id="step2"
                                                        className={formStepState["step2"] ? "active show" : ""}>
                                                        <span id="step2" className="step">2</span>
                                                        <span id="step2" className="title">Step 2</span>
                                                    </a>
                                                </li>
                                                <li id="step3"
                                                    onClick={(e) => changeFormStep(e.target.id)}>
                                                    <a data-toggle="tab" id="step3"
                                                        className={formStepState["step3"] ? "active show" : ""}>
                                                        <span id="step3" className="step">3</span>
                                                        <span id="step3" className="title">Step 3</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-content">

                                        <div style={{ display: formStepState["step1"] ? "block" : "none" }}
                                            className="tab-pane" id="tab1">
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Client Informations</h4>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Name<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="David Green" className="form-control" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Email<span className="text-danger ml-2">*</span></label>
                                                    <input type="email" value="dgreen@elisyam.com" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-5">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Phone</label>
                                                    <div className="input-group">
                                                        <span className="input-group-addon addon-secondary">
                                                            <i className="la la-phone"></i>
                                                        </span>
                                                        <input type="text" className="form-control" value="+00 987 654 32" />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Occupation</label>
                                                    <input type="text" value="UX Designer" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Address</h4>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Address<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="123 Century Blvd" className="form-control" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Country<span className="text-danger ml-2">*</span></label>
                                                    <select name="country" className="custom-select form-control">
                                                        <option value="">Select</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AX">Åland Islands</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua and Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia, Plurinational State of</option>
                                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                        <option value="BA">Bosnia and Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BV">Bouvet Island</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="BN">Brunei Darussalam</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CG">Congo</option>
                                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="CI">Côte d'Ivoire</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CW">Curaçao</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="TF">French Southern Territories</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">Heard Island and McDonald Islands</option>
                                                        <option value="VA">Holy See (Vatican City State)</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN">India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran, Islamic Republic of</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                                        <option value="KR">Korea, Republic of</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Lao People's Democratic Republic</option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macao</option>
                                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia, Federated States of</option>
                                                        <option value="MD">Moldova, Republic of</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PW">Palau</option>
                                                        <option value="PS">Palestinian Territory, Occupied</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RE">Réunion</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russian Federation</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="BL">Saint Barthélemy</option>
                                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                        <option value="KN">Saint Kitts and Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="MF">Saint Martin (French part)</option>
                                                        <option value="PM">Saint Pierre and Miquelon</option>
                                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="ST">Sao Tome and Principe</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syrian Arab Republic</option>
                                                        <option value="TW">Taiwan, Province of China</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania, United Republic of</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TL">Timor-Leste</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad and Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks and Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom</option>
                                                        <option value="US" selected>United States</option>
                                                        <option value="UM">United States Minor Outlying Islands</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                        <option value="VN">Viet Nam</option>
                                                        <option value="VG">Virgin Islands, British</option>
                                                        <option value="VI">Virgin Islands, U.S.</option>
                                                        <option value="WF">Wallis and Futuna</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-4 mb-3">
                                                    <label className="form-control-label">City<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="Los Angeles" className="form-control" />
                                                </div>
                                                <div className="col-xl-4 mb-5">
                                                    <label className="form-control-label">State<span className="text-danger ml-2">*</span></label>
                                                    <input type="email" value="CA" className="form-control" />
                                                </div>
                                                <div className="col-xl-4">
                                                    <label className="form-control-label">Zip<span className="text-danger ml-2">*</span></label>
                                                    <input type="email" value="90045" className="form-control" />
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                <li className="previous d-inline-block">
                                                    <a href="javascript:;" className="btn btn-secondary ripple">Previous</a>
                                                </li>
                                                <li className="next d-inline-block">
                                                    <a href="javascript:;" className="btn btn-gradient-01">Next</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="tab-pane" id="tab2"
                                        style={{ display: formStepState["step2"] ? "block" : "none" }}>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Account Details</h4>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-6 mb-3">
                                                    <label className="form-control-label">Username<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="DGreen" className="form-control" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="form-control-label">Password<span className="text-danger ml-2">*</span></label>
                                                    <input type="text" value="**********" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-12">
                                                    <label className="form-control-label">Url</label>
                                                    <input type="url" value="http://mywebsite.com" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Billing Information</h4>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-12 mb-3">
                                                    <label className="form-control-label">Card Number</label>
                                                    <input type="text" value="98765432145698547" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-4 mb-3">
                                                    <label className="form-control-label">Exp Month<span className="text-danger ml-2">*</span></label>
                                                    <select name="exp-month" className="custom-select form-control">
                                                        <option value="">Select</option>
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06" selected>06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className="form-control-label">Exp Year<span className="text-danger ml-2">*</span></label>
                                                    <select name="exp-month" className="custom-select form-control">
                                                        <option value="2018">2018</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023" selected>2023</option>
                                                        <option value="2024">2024</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-4">
                                                    <label className="form-control-label">CVV<span className="text-danger ml-2">*</span></label>
                                                    <input type="email" value="651" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group row mb-3">
                                                <div className="col-xl-12">
                                                    <div className="styled-checkbox">
                                                        <input type="checkbox" name="savecard" id="check-card" />
                                                        <label for="check-card">Save this card</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                <li className="previous d-inline-block">
                                                    <a href="javascript:;" className="btn btn-secondary ripple">Previous</a>
                                                </li>
                                                <li className="next d-inline-block">
                                                    <a href="javascript:;" className="btn btn-gradient-01">Next</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-pane" id="tab3"
                                        style={{ display: formStepState["step3"] ? "block" : "none" }}>
                                            <div className="section-title mt-5 mb-5">
                                                <h4>Confirmation</h4>
                                            </div>
                                            <div id="accordion-icon-right" className="accordion">
                                                <div className="widget has-shadow">
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseOne" aria-expanded="true">
                                                        <div className="card-title w-100">1. Client Informations</div>
                                                    </a>
                                                    <div id="IconRightCollapseOne" className="card-body collapse show" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Name</div>
                                                            <div className="col-sm-8 form-control-plaintext">David Green</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Email</div>
                                                            <div className="col-sm-8 form-control-plaintext">dgreen@elisyam.com</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Phone</div>
                                                            <div className="col-sm-8 form-control-plaintext">+00 987 654 32</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Occupation</div>
                                                            <div className="col-sm-8 form-control-plaintext">UX Designer</div>
                                                        </div>
                                                    </div>
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseTwo">
                                                        <div className="card-title w-100">2. Address</div>
                                                    </a>
                                                    <div id="IconRightCollapseTwo" className="card-body collapse" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Address</div>
                                                            <div className="col-sm-8 form-control-plaintext">123 Century Blvd</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Country</div>
                                                            <div className="col-sm-8 form-control-plaintext">Country</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">City</div>
                                                            <div className="col-sm-8 form-control-plaintext">Los Angeles</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">State</div>
                                                            <div className="col-sm-8 form-control-plaintext">CA</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Zip</div>
                                                            <div className="col-sm-8 form-control-plaintext">90045</div>
                                                        </div>
                                                    </div>
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseThree">
                                                        <div className="card-title w-100">3. Account Details</div>
                                                    </a>
                                                    <div id="IconRightCollapseThree" className="card-body collapse" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Username</div>
                                                            <div className="col-sm-8 form-control-plaintext">Saerox</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Password</div>
                                                            <div className="col-sm-8 form-control-plaintext"><span className="la-2x">*********</span></div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Url</div>
                                                            <div className="col-sm-8 form-control-plaintext">http://mywebsite.com</div>
                                                        </div>
                                                    </div>
                                                    <a className="card-header collapsed d-flex align-items-center" data-toggle="collapse" href="#IconRightCollapseFour">
                                                        <div className="card-title w-100">4. Billing Information</div>
                                                    </a>
                                                    <div id="IconRightCollapseFour" className="card-body collapse" data-parent="#accordion-icon-right">
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Card Number</div>
                                                            <div className="col-sm-8 form-control-plaintext">98765432145698547</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Exp Month</div>
                                                            <div className="col-sm-8 form-control-plaintext">06</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">Exp Year</div>
                                                            <div className="col-sm-8 form-control-plaintext">2023</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-sm-3 form-control-label d-flex align-items-center">CVV</div>
                                                            <div className="col-sm-8 form-control-plaintext">651</div>
                                                        </div>
                                                        <div className="form-group row mb-5">
                                                            <div className="col-xl-12">
                                                                <div className="styled-checkbox">
                                                                    <input type="checkbox" name="checkbox" id="agree" />
                                                                    <label for="agree">I Accept <a href="#">Terms and Conditions</a></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="pager wizard text-right">
                                                <li className="previous d-inline-block">
                                                    <a href="javascript:void(0)" className="btn btn-secondary ripple">Previous</a>
                                                </li>
                                                <li className="next d-inline-block">
                                                    <a href="javascript:void(0)" className="finish btn btn-gradient-01" data-toggle="modal">Finish</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //         </div>
        //     </Fragment>
        // </div>
    )
}

HostNow.propTypes = {
    toggling: PropTypes.object.isRequired,
    changeFormStep: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, { changeFormStep })(HostNow);
