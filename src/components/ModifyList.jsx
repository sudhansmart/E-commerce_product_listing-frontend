import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import '../styles/modifyList.css';
import axios from 'axios';

function ModifyList() {
  const [formData, setFormData] = useState({
    productname: '',
    price: '',
    weight: '',
    quantity: '',
    description: '',
    category: '',
    subcategory:'',
    size: '',
    releasedate: '',
    imagelink: '',
    productspec: '',
  });

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleEditSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${selectedProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedProduct),
      });

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === selectedProduct.id ? selectedProduct : product
          )
        );
        setShowEditModal(false);
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${selectedProduct.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== selectedProduct.id)
        );
        setShowDeleteModal(false);
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div className="modifylist-container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id} style={{ marginBottom: '10px' }}>
            <Card className="h-100">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: '100px', height: '130px', padding: '5px' }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: '700' }}>
                  {product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button variant="info" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="formTitle">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productname"
                value={formData.productname}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleEditInputChange}
                placeholder='in grams'
              />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formGridState">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name="category"
                      value={formData.category}
                      onChange={handleEditInputChange}
                    >
                      <option value="-">-Select Here- </option>
                      <option value="Gold">Gold</option>
                      <option value="Diamond">Diamond</option>
                      <option value="Silver">Silver</option>
                      <option value="Platinum">Platinum</option>
                    </Form.Select>
          </Form.Group>
          <Form.Group controlId="formGridState">
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Select
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleEditInputChange}
                    >
                      <option value="-">-Select Here- </option>
                      <option value="EarRings">Ear-Rings</option>
                      <option value="BraceletsBangles">Bracelets & Bangles</option>
                      <option value="Necklace">Necklace</option>
                      <option value="Chain">Chain</option>
                    </Form.Select>
                  </Form.Group>
          <Form.Group controlId="formGridState">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                      name="size"
                      value={formData.size}
                      onChange={handleEditInputChange}
                    >
                      <option value="-">-Select Here- </option>
                      <option value="Kids">Kids</option>
                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group controlId="formFromDate">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control
                      name="releasedate"
                      value={formData.releasedate}
                      onChange={handleEditInputChange}
                      type="Date"
                    />
                  </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>image link</Form.Label>
              <Form.Control
                type="text"
                name="imagelink"
                value={formData.imagelink}
                onChange={handleEditInputChange}
              />
               <Form.Group controlId="formTitle">
              <Form.Label>Description</Form.Label>
              <Form.Control
                 as="textarea"
                name="description"
                value={formData.description}
                onChange={handleEditInputChange}
              />
            </Form.Group>
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label> Product Specification</Form.Label>
              <Form.Control
                as="textarea"
                name="productspec"
                value={formData.productspec}
                onChange={handleEditInputChange}
              />
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the product: {selectedProduct?.title}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModifyList;
