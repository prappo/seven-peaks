import { render, screen } from '@testing-library/react';
import Spacer from '..';

describe("Spacer - components/Spacer", () => {
    it("Spacer should be in the document and visible", () => {
        render(<Spacer />);
        const el = screen.getByTestId('spacer');

        expect(el).toBeInTheDocument();
        expect(el).toBeVisible();
    });

    it("Spacer should incrase the height if we pass props: size", () => {
        render(<Spacer size={105} />);
        const el = screen.getByTestId('spacer');

        expect(el.style.height).toBe('105px');
    });
});