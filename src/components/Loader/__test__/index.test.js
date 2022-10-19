import { render, screen } from '@testing-library/react';
import Loader from '..';

describe("Loader - components/Loader", () => {
    it("Loader should be in the document and visible", () => {
        render(<Loader />);
        const loaderEl = screen.getByTestId("loader");
        expect(loaderEl).toBeInTheDocument();
        expect(loaderEl).toBeVisible();
    });

    it("Loader should be same size class name, if pass by props", () => {
        render(<Loader size="test-size" />);
        const loaderEl = screen.getByTestId("loader");
        expect(loaderEl).toHaveClass("seven-peaks-loader-test-size");
    });
});