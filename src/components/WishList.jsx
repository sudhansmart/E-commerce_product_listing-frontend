import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/wishlist.css'
function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // Assuming you have an API endpoint to fetch user's wishlist
    // Replace 'http://localhost:5000/api/wishlist' with your actual API endpoint
    fetch('http://localhost:5000/api/wishlist')
      .then((response) => response.json())
      .then((data) => setWishlist(data))
      .catch((error) => console.error('Error fetching wishlist:', error));
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    // Assuming you have an API endpoint to remove a product from the wishlist
    // Replace 'http://localhost:5000/api/removeFromWishlist' with your actual API endpoint
    fetch(`http://localhost:5000/api/removeFromWishlist/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
        } else {
          console.error('Failed to remove product from wishlist');
        }
      })
      .catch((error) => console.error('Error removing product from wishlist:', error));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
         <div className='wishlist-content'> <p>Your wishlist is empty.</p> </div> 
      ) : (
        <div className="row">
          {wishlist.map((product) => (
            <div key={product.id} className="col-md-4" style={{ marginBottom: '20px' }}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromWishlist(product.id)}
                  >
                    Remove from Wishlist
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
