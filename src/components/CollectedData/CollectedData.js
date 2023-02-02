import React, { useEffect, useState } from "react"
import './/CollectedData.css'
import axios from "axios"
import { useLocation } from "react-router-dom"
import FormCard from "../formCard/formCard"
import Grid from '@mui/material/Grid'

function CollectedData(){

    const [forms, setForms] = useState([])
    const location = useLocation()

    useEffect( () => {
        axios.get('https://stackfusion1.onrender.com/read-forms')
        .then((response) => {
            // console.log(response.data)
            setForms(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [location.state])
    
    return (
        <>
          <h1 className="title"><b>Collected Data...</b></h1>
          <Grid className="grid" container spacing={2}>
            <Grid container item xs={12} spacing={3}>
                {forms.map((form, index) => (
                    <Grid key={form._id} item xs={3}>
                        <FormCard
                            key={form._id}
                            firstName={form.firstName}
                            email={form.email}
                            phoneNum={form.phoneNum}
                            dob={form.dob}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        </>
      );
}

export default CollectedData