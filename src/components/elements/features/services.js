import React from 'react'

import * as Icon from "react-bootstrap-icons";

const Services = () => {


    return (
        <div>
            <div className="container px-4 py-5 " id="featured-3">
                <h2 className="h1 fw-bold pb-2 text-center border-bottom">Services</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col card shadow border-0 p-4 m-1 col-lg-2 col-md-6 d-flex flex-fill m-2 hover-overlay ripple">
                        <div className="feature-iconbg-gradient justify-content-center fs-2 mb-3 d-inline-flex border-bottom p-2">
                            <Icon.FileEarmarkPerson size={50} style={{ color: '#fff' }} className="bg-success  p-2 rounded-3" />
                        </div>
                        <h3 className="card-title">Contract Farming</h3>
                        <p className='card-text'>We help small-scale farmers increase their income by connecting them with companies and buyers who need their crops. With our platform, farmers can access new markets and secure long-term contracts that guarantee a fair price for their products.</p>

                    </div>
                    <div className="col card shadow border-0 p-4 m-1 col-lg-2 col-md-6 d-flex flex-fill m-2 hover-overlay ripple">
                        <div className="feature-icon d-inline-flex justify-content-center border-bottom  bg-gradient fs-2 mb-3 p-2">
                            <Icon.CloudCheck size={50} style={{ color: '#00a859' }} />
                        </div>
                        <h3 className="card-title">Weather Prediction</h3>
                        <p className='card-text '>We provide farmers with accurate and up-to-date weather information, so they can plan their planting, harvesting, and other farming activities accordingly. Our weather prediction feature helps farmers avoid crop damage due to extreme weather events.</p>

                    </div>
                    <div className="col card shadow border-0 p-4 m-1 col-lg-2 col-md-6 d-flex flex-fill m-2 hover-overlay ripple">
                        <div className="feature-icon d-inline-flex justify-content-center border-bottom  bg-gradient fs-2 mb-3 p-2  ">
                            <Icon.MegaphoneFill size={40} style={{ color: '#00a859' }} />
                        </div>
                        <h3 className="card-title">Government Schemes</h3>
                        <p className='card-text '>We help farmers stay informed about the latest government schemes and subsidies that cansupport their agricultural activities. Our platform provides detailed information on eligibility criteria, application procedures, and deadlines.</p>
                    </div>
                </div>
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    <div className="col card shadow border-0 p-4 m-1 col-lg-2 col-md-6 d-flex flex-fill m-2 hover-overlay ripple">
                        <div className="feature-icon d-inline-flex justify-content-center border-bottom  bg-gradient fs-2 mb-3 p-2">
                            <Icon.CloudCheck size={50} style={{ color: '#00a859' }} />
                        </div>
                        <h3 className="card-title">Multi-language Support</h3>
                        <p className='card-text'>We provide farmers with accurate and up-to-date weather information, so they can plan their planting, harvesting, and other farming activities accordingly. Our weather prediction feature helps farmers avoid crop damage due to extreme weather events.</p>

                    </div>
                    <div className="col card shadow border-0 p-4 m-1 col-lg-2 col-md-6 d-flex flex-fill m-2 hover-overlay ripple">
                        <div className="feature-icon d-inline-flex justify-content-center border-bottom  bg-gradient fs-2 mb-3 p-2  ">
                            <Icon.MegaphoneFill size={40} style={{ color: '#00a859' }} />
                        </div>
                        <h3 className="card-title">Efficient Communication</h3>
                        <p className='card-text'>We help farmers stay informed about the latest government schemes and subsidies that cansupport their agricultural activities. Our platform provides detailed information on eligibility criteria, application procedures, and deadlines.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
