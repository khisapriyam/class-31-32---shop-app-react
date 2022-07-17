import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tag = ({tags, makeSlug}) => {


  //edit tag state
  const [tag, setTag] = useState({
    name : '',
    id : ''
  });
  const [tagUpdateForm, setTagUpdateForm] = useState(false);


  //tag delete handler
  const handletagDelete = (id) => {
    axios.delete('http://localhost:5050/tags/' + id);//tag er pore / ta na dile kaaj korbe na
  }

  //hangle tag edit
  const handletagEdit = (id) =>{
    setTagUpdateForm(true);//showing form when edit button is clicked
    axios.get('http://localhost:5050/tags/' + id).then(res => {
      setTag({
        name : res.data.name,
        id : res.data.id
      });
    });
  }

  //form submit handler
  const handleFormSubmit = (e) =>{
    e.preventDefault();

    let slug = makeSlug(tag.name);

    axios.patch('http://localhost:5050/tags/' + tag.id, {
      name : tag.name,
      slug : slug
    }).then( res => {
      setTagUpdateForm(false)

    })
  }


  return (
    <>
     <h1>Tags</h1>
     <hr />
     <Link className='btn btn-primary btn-sm' to='/admin/add-tag'>Add New Tag</Link>
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
          tags.map( (data, index) => 
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.slug}</td>
              <td>
                <Button variant='warning' onClick = { () => handletagEdit(data.id)} className='btn-sm'>Edit</Button>
                <Button variant='danger' onClick = { () => handletagDelete(data.id)} className='btn-sm'>Delete</Button>
              </td>
            </tr>

          )
        }
        
      </tbody>
     </Table>
     {
        tagUpdateForm && //making the form disappear
        <>
          <h3>Edit Tag Data</h3>
          <hr />
            <Form onSubmit={ handleFormSubmit }>
                <Form.Group my ={3}>
                    <Form.Control type='text' value={tag.name} onChange={e => setTag({ ...tag, name : e.target.value })}placeholder='Tag Name'/>
                </Form.Group>
                
                <br />
                <Form.Group my ={3}>
                    <Button type='submit' variant='success'>Update</Button>
                </Form.Group>
            </Form>
        </>
     }
    </>
  )
};

export default Tag;