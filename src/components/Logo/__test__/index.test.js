import { render, screen } from '@testing-library/react';
import Logo from '..';
import { BrowserRouter } from 'react-router-dom';

const MockLogo = () => {
    return <BrowserRouter><Logo /></BrowserRouter>
}

describe("Logo - components/Logo", () => {
    it("Logo should be in the document", () => {
        render(<MockLogo />);
        const logoEl = screen.getByAltText("The Peaks Logo");
        expect(logoEl).toBeInTheDocument();
    });

    it("Logo should be visible", () => {
        render(<MockLogo />);
        const logoEl = screen.getByAltText("The Peaks Logo");
        expect(logoEl).toBeVisible();
    });

    it("Logo src attribute should not be empty", () => {
        render(<MockLogo />);
        const logoEl = screen.getByAltText("The Peaks Logo");
        expect(logoEl.src).toMatch("/Logo_White.png");
    });
})