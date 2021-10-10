import React from 'react'

const Vision = () => {

    const mission = ["To take learning beyond the four walls of the classrooms; to the streets and everywhere, thereby making everyone fall in love with learning, understanding what’s being taught, and retaining what’s learnt, by leveraging the power of entertainment education."]

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        {" "}
                        <img src="img/about2.jpg" className="img-responsive" alt="" />{" "}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>VISION</h2>
                            <p>The vision of “Actors and Learners” is: “Making learning real fun; making you yearn for more”</p>
                            <h2>MISSION</h2>
                            <p>The Mission of “Actors and Learners” involves the following;</p>
                            <div className="list-style">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <ul>
                                        {mission.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
