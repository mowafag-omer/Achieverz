import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const EmCreateProfile = () => {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    isCompany: 0,
    companyName: '',
    location: ''
  }

  const validationSchema = Yup.object({
    fname: Yup.string().required('Required'),
    lname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number('phone must be a number').required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    companyName: Yup.string().when('isCompany', {
      is: (isCompany) => isCompany,
      then: Yup.string().required('Field is required')            
    }),
    location: Yup.string().when('isCompany', {
      is: (isCompany) => isCompany,
      then: Yup.string().required('Field is required')            
    })
  })

  const onSubmit = (values, submitProps) => {
    console.log(values)
  }

  return (
    <>
      <div className="bg-light  d-flex flex-column" style={{minHeight: "90vh"}}>
        <h4 className="text-center mt-4">Créez votre profile</h4>
        <hr className="w-50 mb-4"></hr>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({touched, errors }) => { return (
          <Form className="w-50 mr-auto ml-auto mb-4">
            <div className="mb-3">
              <Field type='text' id='fname' name='fname' placeholder="Prénom" 
                className={touched.fname && errors.fname ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='fname'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <div className="mb-3">
              <Field type='text' id='lname' name='lname' placeholder="Nom" 
                className={touched.lname && errors.lname ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='lname'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <div className='mb-3'>
              <Field type='email' id='email' name='email' placeholder="Adresse Email"
                className={touched.email && errors.email ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='email'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>
            <div className='mb-3'>
              <Field type='text' id='phone' name='phone' placeholder="Numéro de téléphone"
                className={touched.phone && errors.phone ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='email'> {error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>
            <div className='mb-3'>
              <Field type='text' id='country' name='country' placeholder="Pays"
                className={touched.country && errors.country ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='country'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>
            <div className='mb-3'>
              <Field type='text' id='city' name='city' placeholder="Vills"
                className={touched.city && errors.city ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='city'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>            
            </div>
            <div className='mb-3'>
              <Field type="checkbox" name="isCompany" value='1'/> Entreprise
            </div>
            <div className="mb-3">
              <Field type='text' name='companyName' placeholder=" Nom de l'entreprise" 
                className={touched.companyName && errors.companyName ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='companyName'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <div className="mb-3">
              <Field type='text' name='location' placeholder="Adresse" 
                className={touched.location && errors.location ? "border-danger form-control" : "form-control"} 
              />
              <ErrorMessage name='location'>{error => <div className="text-danger">{error}</div>}</ErrorMessage>
            </div>
            <button className="btn btn-success mr-auto" type='submit'>Valider</button>
          </Form>
        )}}
        </Formik>
      </div>
    </>
  )
}

export default EmCreateProfile