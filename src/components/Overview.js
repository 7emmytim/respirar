import React from 'react'

const Overview = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>BRIEF OVERVIEW</h2>
              <div style={{ textAlign: 'justify' }}>
                <p>Inspirar Actors and Learners is a subsidiary of INSPIRAR EDUCATIONAL CONCEPTS LIMITED, an educational service organisation registered
                  under the Laws of the Federal Republic of Nigeria with the Corporate Affairs Commission (CAC) on October 23, 2020.
                  The company exists to provide qualitative, cutting-edge educational resources.
                </p>
                <p>
                  One of the educational products of INSPIRAR EDUCATIONAL CONCEPTS LIMITED is “Inspirar Actors and Learners”, an initiative that crisscrosses education and entertainment.
                  “Inspirar Actors and Learners” provides educational movies that simplifies the learning process thereby making learning fun for students across levels and disciplines.
                  Judy Willis, a Neurologist, in her book ‘Research-based strategies to ignite student learning: Insights from a Neurologist and Classroom Teacher’,
                  explained how such fun experiences can enhance learning via increasing the levels of dopamine, endorphins and oxygen.
                </p>
                <p>
                  Different researches have also shown how entertainment can aid learning. In simple parlance,
                  Inspirar Actors and Learners makes use of entertainment-education in passing messages across to learners.
                  We wrap teachings around interesting movies, games and music to make the learning process both enjoyable and long-lasting in people’s minds.
                  And what is more, we take teaching and learning to the streets, deploying day-to-day experiences in our educational movies.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-xs-12 col-md-6">
                {" "}
                <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
              </div> */}
        </div>
      </div>
    </div>
  )
}

export default Overview