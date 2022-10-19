import { render, screen } from '@testing-library/react';
import NoResultFound from '..';

describe("NoResultFound - components/NoResultFound", () => {
    it("NoResultFound should be in the document and visible", () => {
        render(<NoResultFound />);
        const element = screen.getByTestId("seven-peaks-no-result-found");
        expect(element).toBeInTheDocument();
        expect(element).toBeVisible();
    });

    it("NoResultFound should contain attribute if we pass to as prop", () => {
        render(<NoResultFound  title="title prop" />);
        const element = screen.getByTestId("seven-peaks-no-result-found");
        expect(element.getAttribute('title')).toEqual('title prop');
    });

    it("NoResultFound should contain the error message", () => {
        render(<NoResultFound />);
        const element = screen.getByTestId("seven-peaks-no-result-found");
        expect(element.textContent).toContain('No results found');
    });
});