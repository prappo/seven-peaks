import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '..';

const MockCard = (props) => <BrowserRouter><Card {...props} /></BrowserRouter>

describe("Card - componets/Card", () => {
    it("Card should be in the document and visible", () => {
        render(<MockCard />);
        const card = screen.getByTestId('card');

        expect(card).toBeInTheDocument();
        expect(card).toBeVisible();
    });

    it("Card should be empty, if no content pass to props", () => {
        render(<MockCard />);
        const card = screen.getByTestId('card');
        expect(card.textContent).toBe("");
    });

    it("Card title should not be empty, if we pass title to props", () => {
        render(<MockCard content={{webTitle: "Hello world"}} />);
        const card = screen.getByTestId('card');
        expect(card.textContent).not.toBe("");
    });

    it("Card title should be empty, if we do not pass to props", () => {
        render(<MockCard />);
        const card = screen.getByTestId('card');
        expect(card.textContent).toBe("");
    });

    it("Card image should show passing to prop", () => {
        render(<MockCard content={{fields: {
            thumbnail: '/hello.png'
        }}} />);

        const cardThumb = screen.getByAltText('Card Thumbnail');
        expect(cardThumb.src).toContain("/hello.png");
    });

    it("Card image is not found, then should show placeholder", () => {
        render(<MockCard content={{fields: {
            thumbnail: ''
        }}} />);

        const cardPlaceholderThumb = screen.getByAltText('Card Placeholder');
        expect(cardPlaceholderThumb).toBeVisible();
        expect(cardPlaceholderThumb.src).toContain('/placeholder-logo.png');
    });
});