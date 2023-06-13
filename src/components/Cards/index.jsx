import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LuShoppingCart } from 'react-icons/lu';

const Cards = () => {
    return (
        <>
            <Card className='cardtalog'>
                <Card.Img variant="top" src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/21/2a227439-97c7-48f7-bf53-265223ed3809.jpg" />
                <Card.Body className='cardtalogDesc'>
                    <Card.Title>Productname</Card.Title>
                    <Card.Text>IDR 1.000.000</Card.Text>
                    <Button variant="primary">Add to Carts <LuShoppingCart /></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cards