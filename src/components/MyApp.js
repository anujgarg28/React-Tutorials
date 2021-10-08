import React from 'react'
import MyProvider from './MyProvider';
import ProductList from './ProductList';

class MyApp extends React.Component {
    
    render() {
        return(
            <MyProvider>
                <ProductList />
            </MyProvider>
        )
    }
}
export default MyApp;