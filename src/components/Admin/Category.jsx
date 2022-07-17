import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';


const Category = ({cats, makeSlug}) => {

  
  //add cart form
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);

  //input cat data
  const [ cat, setCat ] = useState({
    name: '',
    id : ''
  })

  
  //handle add form
  const handleAddForm = () => {
    setAddForm(true);
    setEditForm(false);
    setCat({
      name : '',
      id : ''
    })
  }

  //handle Form Submit
  const handleCatFormSubmit = (e) => {
    e.preventDefault();

    let slug = makeSlug(cat.name);
    axios.post('http://localhost:5050/categories', {
      id : '',
      name : cat.name,
      slug: slug
    }).then(res => {
      setAddForm(false);
      setCat({
        name : '',
        id : ''
      });
    });
  }

//cat data edit form
const handleEditForm = (id) =>{
  setEditForm(true);
  setAddForm(false);

  axios.get('http://localhost:5050/categories/' + id ).then(res => {
    setCat({
      name : res.data.name,
      id : res.data.id
    })
  })
}
// update cat
const handleCatUpdate = (e) => {
  e.preventDefault();

  let slug = makeSlug(cat.name);
  axios.patch('http://localhost:5050/categories/' + cat.id,{
    name : cat.name,
    slug : slug
  }).then( res => {
    setCat({
      name : '',
      id: ''
    });
    setEditForm(false);
  });
}


  return (
    <>
     <h1>Caregory</h1>
     
     <hr />
     <Button variant='primary' onClick={ handleAddForm }className='btn-sm'>Add New Category</Button>
     <hr />

     <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>slug</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          cats.map((data, index) => 
          <tr>
            <td>{index + 1}</td>
            <td>{data.name}</td>
            <td>{data.slug}</td>
            <td>
              <Button variant='warning' onClick={ () => handleEditForm(data.id)}className='btn-sm'>Edit</Button>
              <Button variant='danger' className='btn-sm'>Delete</Button>
            </td>
          </tr>

          )
        }
        
      </tbody>
     </Table>
     {
      addForm && 
      <>
      <h2>Add new category</h2>
        <Form onSubmit={ handleCatFormSubmit }>
            <Form.Group my ={3}>
                <Form.Control type='text' value={cat.name} onChange={ e => setCat( { ...cat, name : e.target.value})} placeholder='Category Name'/>
            </Form.Group>
            <br />
            <Form.Group my ={3}>
                <Button type='submit' variant='success'>Add</Button>
            </Form.Group>
        </Form>
      </>
     }

    {
      editForm && 
      <>
      <h2>Edit category</h2>
        <Form onSubmit={ handleCatUpdate }>
            <Form.Group my ={3}>
                <Form.Control type='text' value={cat.name} onChange={ e => setCat( { ...cat, name : e.target.value})} placeholder='Category Name'/>
            </Form.Group>
            <br />
            <Form.Group my ={3}>
                <Button type='submit' variant='success'>Add</Button>
            </Form.Group>
        </Form>
      </>
     }
    </>
  )
};

export default Category;