import React from 'react'
import HeroImg from '../../../utils/imgs/hero_img.png'
const HeroMain = () => {
    return (
        <div>
            <div className="px-4 pt-5  text-center border-bottom" style={{ backgroundColor: '#d6f0e0' }}>
                <h1 className="display-4 fw-bold">Centered screenshot</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-success btn-lg px-4 me-sm-3 shadow-lg">Explore</button>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: "50vh" }} >
                    <div className="container px-5">
                        <img src={HeroImg} className="img-fluid border rounded-3 shadow-lg mb-4" alt="hero " width="900" height="500" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroMain
