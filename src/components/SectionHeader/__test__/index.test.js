import { render, screen } from '@testing-library/react';
import SectionHeader from '..';

describe("SectionHeader - components/SectionHeader", () => {
    it("SectionHeader should be render in the document", () => {
        render(<SectionHeader />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    it("SectionHeader should be visible to the user", () => {
        render(<SectionHeader />);

        const heading = screen.getByRole('heading');
        expect(heading).toBeVisible();
    });

    it("SectionHeader content should be matched with the title prop text", () => {
        render(<SectionHeader title="Hello, How are you?" />);

        const heading = screen.getByRole('heading');
        expect(heading.textContent).toBe("Hello, How are you?");
    });

    it("SectionHeader content should be matched with the attribute passed by prop", () => {
        render(<SectionHeader data-label="This is test label" />);

        const heading = screen.getByRole('heading');
        expect(heading).toHaveAttribute("data-label");
    });
});