import {Table} from 'react-bootstrap';
import MemoizedTableRow from './TableRow';
import { usersTableConfig } from '../../../utils/configs';

function DataTable({ data = [] }) {
    return (
        <Table striped bordered responsive className="p-0 text-center">
            <thead>
                <tr>
                    {usersTableConfig.cols.map((col) => {
                        return <th key={col}>{col}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((person, index) => {
                    return (
                        <MemoizedTableRow
                            key={person.id + index}
                            index={index + 1}
                            {...person}
                        />
                    );
                })}
            </tbody>
        </Table>
    );
}

export default DataTable;
