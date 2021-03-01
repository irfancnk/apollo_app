import '@testing-library/jest-dom/extend-expect';
import ProductList from './index';
import renderWithRouter from '../../../setupTests';

const products = [
    {
        "id": "537f3aaac769230000be7e60",
        "title": "Diablo III - PC",
        "label": "Blizzard Entertainment",
        "price": 3999,
        "currency": "TRY",
        "shipment": "1",
        "images": {
            "large": {
                "url": "http://ecx.images-amazon.com/images/I/41kXCp%2BUyeL.jpg"
            }
        }
    },
    {
        "id": "537f3aaac769230000be7e61",
        "title": "Fallout 3: Game of The Year Edition (PC)",
        "label": "Bethesda",
        "price": 1999,
        "currency": "TRY",
        "shipment": "0",
        "images": {
            "large": {
                "url": "http://ecx.images-amazon.com/images/I/51Ba653B6ZL.jpg"
            }
        }
    },
    {
        "id": "537f3aaac769230000be7e62",
        "title": "Elder Scrolls V: Skyrim - PC",
        "label": "Bethesda Softworks",
        "price": 1999,
        "currency": "TRY",
        "shipment": "0",
        "images": {
            "large": {
                "url": "http://ecx.images-amazon.com/images/I/51DeQeU7MiL.jpg"
            }
        }
    }
]

test('product list renders subcomponents for every product', () => {
    const { history, getAllByTestId } = renderWithRouter(<ProductList products={products} />)
    const allLinkContainers = getAllByTestId('linkcontainer');
    expect(allLinkContainers).toHaveLength(3); // 3 PRODUCT CARDS FOR 3 COMPONENTS
});