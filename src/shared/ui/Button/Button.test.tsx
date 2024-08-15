import { render, screen } from "@testing-library/react";
import { Button } from 'shared/ui/Button/Button';

describe("Button", () => {
    test("renders correctly", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
