import React from "react";
import { Form } from "react-bootstrap";

export default function FieldGroup(opts) {
  const { id, label } = opts;
  const props = Object.assign({}, opts);
  delete props.id;
  delete props.label;
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} />
    </Form.Group>
  );
}
