import React from "react";

const AdminProducts = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1>Product List</h1>
        <button>Add product</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="" alt="some image" />
                <div>
                  <p>Name</p>
                  <p>type</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
