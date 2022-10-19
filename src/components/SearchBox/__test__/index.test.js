import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBox from '..';

const MockSearchBox = () => <BrowserRouter><SearchBox /></BrowserRouter>;

describe("SearchBox - components/SearchBox", () => {
    it("Search Button should be render in the document", () => {
        render(<MockSearchBox />);
        const searchBtn = screen.getByRole('button');
        expect(searchBtn).toBeInTheDocument();
    });

    it("Search Button should be visible to the user", () => {
        render(<MockSearchBox />);
        const searchBtn = screen.getByRole('button');
        expect(searchBtn).toBeVisible();
    });

    it("Search Button should have icon", () => {
        render(<MockSearchBox />);
        const searchIcon = screen.getByAltText('Search Icon');
        expect(searchIcon).toBeVisible();
        expect(searchIcon.src).toMatch('/search-icon-2x.svg');
    });

    it("Search Input field should be render in the document", () => {
        render(<MockSearchBox />);
        const searchInput = screen.getByPlaceholderText('Search all news');
        expect(searchInput).toBeInTheDocument();
    });

    it("Search Input field should NOT be visible to the user by default", () => {
        render(<MockSearchBox />);
        const searchLabel = screen.getByTestId("label");
        expect(searchLabel).not.toHaveClass('active');
    });

    it("Search Input field should be visible to the user after click to search button", () => {
        render(<MockSearchBox />);
        const searchBtn = screen.getByRole('button');
        fireEvent.click(searchBtn)
        const searchLabel = screen.getByTestId("label");
        expect(searchLabel).toHaveClass('active');
    });

    it("Search Input field should match the text after type", () => {
        render(<MockSearchBox />);
        const searchBtn = screen.getByRole('button');
        fireEvent.click(searchBtn);
        const searchInput = screen.getByPlaceholderText('Search all news');
        fireEvent.change(searchInput, { target: { value: "This is test" } })
        expect(searchInput.value).toContain('This is test');
    });
});