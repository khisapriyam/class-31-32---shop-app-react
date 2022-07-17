import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
     <h1>Products</h1>
     <hr />
     <Link to='/admin/add-product' className='btn btn-primary btn-sm'>Add New Products</Link>
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
        <tr>
          <td>1</td>
          <td>Men</td>
          <td>men</td>
          <td>
            <Button variant='info' className='btn-sm'>View</Button>
            <Button variant='warning' className='btn-sm'>Edit</Button>
            <Button variant='danger' className='btn-sm'>Delete</Button>
          </td>
        </tr>
      </tbody>
     </Table>
    </>
  )
};

export default Products;