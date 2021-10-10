import React from 'react'

const Faqs = () => {

    const faqsList = [
        {
            question: "What makes Inspirar Actors and Learners unique from other regular YouTube and teaching sites and modules?",
            answer: "Our initiative crisscrosses education and entertainment, hence you have the double advantage of both learning and getting entertained. With us, you can be rest assured that there’s no boring moment. Each concept/topic is presented in a movie, hence rather than the term ‘videos’, ours are ‘movies’."
        },
        {
            question: "Who are your target audience?",
            answer: "Our audience is everyone who cares about education, learning and entertainment."
        },
        {
            question: "What are the regular length of your movies?",
            answer: "We try to keep our movies as short as possible to the extent that we are able to pass across our message. However, we remain flexible to accommodate preferences and suggestions of our valued audience as regards the duration of our movies."
        },
        {
            question: "Being acted, how can you guarantee the academic accuracy of your products?",
            answer: "Our products go through a really long value chain. At different stages, rigorous peer reviews are conducted by professionals in the relevant discipline. We employ the services of different reviewers at each stage, and meticulously ensure that actors are on point not only artistically, but also academically."
        },
        {
            question: "Which courses do you cover?",
            answer: "We cover as many courses as possible. However, we determine what movie to release not arbitrarily, but based on (ranked) demands by the audience."
        }
    ]

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="about-text">
                            <h2>FREQUENTLY ASKED QUESTIONS:</h2>
                            <div className="list-style">
                                <div className="col-lg-12 col-sm-12 col-xs-12">
                                    <>
                                        {faqsList.map((d, i) => <li key={`${d.question}-${i}`}>
                                            {d.question} <br />
                                            <strong>Answer:</strong> {d.answer}
                                        </li>)}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faqs
