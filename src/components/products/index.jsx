import DefaultPage from "../commom/DefaultPage";
import { SectionTitle, SectionProducts } from "./style";
import Card from "./components/Card";
import { useEffect, useContext } from "react";
import axios from "axios";
import ProductContext from "../../context/ProductContext.js";

export default function ProductsPage() {

    const { products, setProducts } = useContext(ProductContext);

    useEffect(async () => {
        const response = await axios.get("https://closet-store.herokuapp.com/products");

        setProducts([...response.data.products]);
    }, []);

    function getNovidades() {
        if (products.filter(produto => produto.isNew === true).length > 0) {
            return (
                <>
                    <SectionTitle>Nossas novidades</SectionTitle>
                    <SectionProducts>
                        {products.filter(product => product.isNew).map(productSale => <Card id={productSale._id} image={productSale.image} price={productSale.price} title={productSale.name} sale={productSale.sale} />)}
                    </SectionProducts>
                </>
            );
        }
    }

    function getOfertas() {
        if (products.filter(product => product.sale != null && product.sale != "").length > 0) {
            return (
                <>
                    <SectionTitle>Nossas ofertas</SectionTitle>
                    <SectionProducts>
                        {products.filter(product => product.sale != null && product.sale != "").map(productSale => <Card image={productSale.image} id={productSale._id} price={productSale.price} title={productSale.name} sale={productSale.sale} />)}
                    </SectionProducts>
                </>
            );
        }
    }

    return (
        <DefaultPage>

            {getOfertas()}
            {getNovidades()}

            <SectionTitle>Nossos produtos</SectionTitle>
            <SectionProducts>
                {products.map(productSale => <Card id={productSale._id} image={productSale.image} price={productSale.price} title={productSale.name} sale={productSale.sale} />)}
            </SectionProducts>
        </DefaultPage>
    );
}