import React from "react"

function FormCard(props){

    return (
        <div className="form-card">
            <p>{props.firstName}</p>
            <p>{props.email}</p>
            <p>{props.phoneNum}</p>
            <p>{props.dob}</p>
        </div>
    )
}

export default FormCard