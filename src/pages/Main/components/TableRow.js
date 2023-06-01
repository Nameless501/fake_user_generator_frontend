import { memo } from 'react';

const MemoizedTableRow = memo(function TableRow({
    index,
    id,
    name,
    email,
    address,
    phone,
}) {
    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
        </tr>
    );
});

export default MemoizedTableRow;
