import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function FocusableInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form className="p-4 rounded-4 bg-dark text-white">
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Focusable Input</Form.Label>

        <Form.Control
          ref={inputRef}
          size="lg"
          type="text"
          placeholder="This input is focused automatically"
        />

        <Form.Text className="text-secondary">
          Styled with React Bootstrap.
        </Form.Text>
      </Form.Group>

      <Button variant="primary">Submit</Button>
    </Form>
  );
}
