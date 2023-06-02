import { Col, Form, Row } from 'react-bootstrap';

function MistakesInput({ value, handleChange, error }) {
    return (
        <Form.Group as={Row} controlId="mistakes-range">
            <Form.Label column sm={2}>
                Mistakes:
            </Form.Label>
            <Col sm={2}>
                <Form.Control
                    name="mistakes"
                    onChange={handleChange}
                    value={value}
                    isInvalid={!!error}
                    placeholder={0}
                />
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            </Col>
            <Col sm={5} className="pt-2">
                <Form.Range
                    aria-describedby="mistakes-range"
                    name="mistakes"
                    min={0}
                    max={10}
                    step={0.25}
                    onChange={handleChange}
                    value={value}
                />
            </Col>
        </Form.Group>
    );
}

export default MistakesInput;
