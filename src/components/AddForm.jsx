import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./AddForm.scss"

export const AddForm = () => {
    const [table, setTable] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    async function handleSubmit(values) {
       await fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
       await getAll()

    }

    function handleDelete(id) {
        fetch('http://localhost:8000/'+id, { method: 'Delete', })
            .then((res) => res.json())
            .then((data) => { getAll() })
    }

    function getAll() {
        fetch('http://localhost:8000/')
            .then((res) => res.json())
            .then((data) => setTable(data))
    }
    return (
        <>
            <Formik
                initialValues={{ icon: '', name: '', description: '' }}
                validationSchema={Yup.object({
                    icon: Yup.string()
                        .required('Required'),
                    name: Yup.string()
                        .required('Required'),
                    description: Yup.string().required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values)
                    setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="icon">Icon</label>
                    <Field name="icon" type="text" />
                    <ErrorMessage name="icon" />

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <div className='table'>
                {table.map((x) =>

                    <table>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td className={x.icon} ></td>
                            <td>{x.name}</td>
                            <td>{x.description}</td>
                            <button onClick={()=>handleDelete(x._id)}>Delete</button>
                        </tr>

                    </table>)}

            </div>
        </>
    );
};