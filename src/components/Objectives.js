import React from 'react'
import disp_image from '../assets/img/about3.jpg'

const Objectives = () => {

    const objectives = [
        "To offer learners a double advantage of learning and entertainment",
        "To deploy stories, music, and other relevant means that will make what is being learnt stick to the mind of students",
        "To break down seemingly abstract concepts to forms much easily understood by students",
        "To make even passive learners (those not in a particular field of study) garner some life-applicable lessons from our educational movies."
    ]

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>AIMS & OBJECTIVES</h2>
                            <p>The following are the aims and objectives of Inspirar Actors and Learners:</p>
                            <div className="list-style">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <ul>
                                        {objectives.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src={disp_image} className="img-responsive" alt="" />{" "}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Objectives
