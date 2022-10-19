import { render, screen } from '@testing-library/react';
import SortableSelect from '..';

describe("SortableSelect - component/SortableSelect", () => {
    it("SortableSelect should be in the document and visible", () => {
        render(<SortableSelect />);
        const selectEl = screen.getByTestId("sortable-select");

        expect(selectEl).toBeInTheDocument();
        expect(selectEl).toBeVisible();
    });

    it("SortableSelect should show the orderby text, passed by props", () => {
        render(<SortableSelect orderBy="oldest" />);
        const selectHeader = screen.getByTestId("sortable-header");

        expect(selectHeader.textContent).toContain("Oldest First");
    });

    it("SortableSelect should should have arrow icon", () => {
        render(<SortableSelect />);
        const icon = screen.getByAltText("select arrow icon");

        expect(icon.src).not.toBe("");
    });

    it("SortableSelect option item key should be: {value, label}", () => {
        render(<SortableSelect option={[{
            value: 'newest',
            label: "Newest First"
        },
        {
            value: 'oldest',
            label: "Oldest First"
        }]} />);
    });
});