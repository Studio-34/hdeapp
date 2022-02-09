import React from 'react'

export default function Card(props) {
    return (
            <div className="card mb-4 border-solid rounded-3">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{props.cardTitle}</h4>
                </div>
                <div className="card-body">
                <h1 className="card-title pricing-card-title">{props.price}<small className="text-muted fw-light">/mo</small></h1>
                    <div className="card-text mt-3 mb-4">
                        {props.cardText}
                    </div>

                    <a href="https://apps.apple.com/us/app/highdefevents/id1570404215"><button type="button" className="w-100 btn btn-lg btn-outline-primary brand">{props.signUp}</button></a>
                </div>
            </div>
    )
}
