import React from 'react';

const ProductDetails = props => {
    console.log(props);
        return (
            <table id="t">
                <thead>
                    <tr>
                        <th>Shipment Method</th>
                        <th>Price</th>
                        <th>Expected Delievery dates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w">{props.name}</td>
                        <td>{props.price}</td>
                        <td>{props.delDate}</td>
                        
                    </tr>
                </tbody> 
            </table>
        );
}

export default ProductDetails;