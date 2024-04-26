import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from '../context';
import Navbar from './Navbar'; // Import Navbar component

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Header Section */}
                
                {/* Main Content */}
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center"> upcoming mobile </h2>
                        <div className="embed-responsive embed-responsive-16by9">
                            {/* Replace the src attribute with your video link */}
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZO04E5vJqSA?si=961lMfhfnjcJblC1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
