import { render, screen } from '@testing-library/react';
import BookmarkToast from '..';

describe("BookmarkToast - components/BookmarkToast", () => {
    it("BookmarkToast should render in the document aand visible", () => {
        render(<BookmarkToast title="Saved as bookmark"/>);
        const containerEl = screen.getByTestId("bookmark-toast");
        expect(containerEl).toBeInTheDocument();
        expect(containerEl).toBeVisible();
    });

    it("BookmarkToast should have title if we pass as props", () => {
        render(<BookmarkToast title="Saved as bookmark"/>);
        const containerEl = screen.getByTestId("bookmark-toast");
        expect(containerEl.textContent).toContain("Saved as bookmark")
    });

    it("BookmarkToast should show the danger or success toast by props passing", () => {
        render(<BookmarkToast type={true} />);
        const containerEl = screen.getByTestId("bookmark-toast");
        expect(containerEl).toHaveClass("seven-peaks-bookmark-toast-type-success")
    });

    it("BookmarkToast should show when render the component first", () => {
        render(<BookmarkToast />);
        const containerEl = screen.getByTestId("bookmark-toast");
        expect(containerEl).toHaveClass("seven-peaks-bookmark-toast-show")
    });

    it("BookmarkToast should be in the document and visible", () => {
        render(<BookmarkToast />);
        const img = screen.getByAltText("Toast Icon");
        expect(img).toBeInTheDocument()
        expect(img).toBeVisible()
    });
    it("BookmarkToast should have the actual icon", () => {
        render(<BookmarkToast />);
        const img = screen.getByAltText("Toast Icon");
        expect(img.src).toMatch('/bookmarkoff-icon-2x.svg');
    });
});