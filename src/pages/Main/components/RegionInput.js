import { Form, Row, Col } from 'react-bootstrap';
import { localesConfig } from '../../../utils/configs';

function RegionInput({ handleChange }) {
    return (
        <Form.Group as={Row} controlId="region-select">
            <Form.Label column sm={2}>
                Region:
            </Form.Label>
            <Col sm={5}>
                <Form.Select
                    aria-label="region select"
                    name="locale"
                    onChange={handleChange}
                >
                    {localesConfig.map((locale) => (
                        <option key={locale.title} value={locale.value}>
                            {locale.title}
                        </option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>
    );
}

export default RegionInput;
