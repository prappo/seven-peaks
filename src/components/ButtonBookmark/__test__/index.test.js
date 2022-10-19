import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookmarkBtn from  '..';

const MockBookmarkBtn = (props) => <BrowserRouter><BookmarkBtn {...props} /></BrowserRouter> 

describe("BookmarkBtn - components/BookmarkBtn", () => {
    it("BookmarkBtn should be in the document and visible", () => {
        render(<MockBookmarkBtn />);
        const btn = screen.getByRole('link');
        expect(btn).toBeInTheDocument();
        expect(btn).toBeVisible();
    });
    
    it("BookmarkBtn should have the title if we pass it as props", () => {
        render(<MockBookmarkBtn title="Button text" />);
        const btn = screen.getByRole('link');
        expect(btn.textContent).toContain("Button text");
    });

    it("BookmarkBtn icon should be in the document and visible", () => {
        render(<MockBookmarkBtn />);
        const icon = screen.getByAltText('Bookmark Icon');
        expect(icon).toBeInTheDocument();
        expect(icon).toBeVisible();
    });

    it("BookmarkBtn icon src should not be empty", () => {
        render(<MockBookmarkBtn />);
        const icon = screen.getByAltText('Bookmark Icon');
        expect(icon.src).toMatch('/bookmarkon-icon-2x.svg');
    });

});