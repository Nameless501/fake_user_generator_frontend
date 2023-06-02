import { memo } from 'react';

const MemoizedTableRow = memo(function TableRow({
    index,
    id,
    name,
    email,
    address,
    phone,
}) {
    const styles = {
        wordWrap: 'break-word',
        maxWidth: '150px',
    };

    return (
        <tr>
            <td>{index}</td>
            <td style={styles}>{id}</td>
            <td style={styles}>{name}</td>
            <td style={styles}>{email}</td>
            <td style={styles}>{address}</td>
            <td style={styles}>{phone}</td>
        </tr>
    );
});

export default MemoizedTableRow;
