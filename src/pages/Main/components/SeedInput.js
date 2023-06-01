import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

function SeedInput({ value, handleChange, getRandomSeed, error }) {
    return (
        <Form.Group as={Row} controlId="seed-input">
            <Form.Label column sm={2}>
                Seed:
            </Form.Label>
            <Col sm={6}>
                <InputGroup hasValidation>
                    <Form.Control
                        placeholder="Seed"
                        aria-label="Seed"
                        aria-describedby="seed-input"
                        name="seed"
                        value={value}
                        onChange={handleChange}
                        isInvalid={!!error}
                    />
                    <Button size="sm" onClick={getRandomSeed}>
                        Random
                    </Button>
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                </InputGroup>
            </Col>
        </Form.Group>
    );
}

export default SeedInput;
