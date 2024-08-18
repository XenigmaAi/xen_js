import React from 'react';

interface TableProps {
    headers: string[];
    rows: Array<string[] | React.ReactNode[]>; // Rows can be an array of strings or React nodes
    className?: string;
    headerClassName?: string;
    rowClassName?: string;
    cellClassName?: string;
}

const Table: React.FC<TableProps> = ({
    headers,
    rows,
    className = '',
    headerClassName = '',
    rowClassName = '',
    cellClassName = '',
}) => {
    return (
        <div className={`overflow-x-auto rounded-sm ${className}`}>
            <table className="min-w-full rounded-sm bg-white border border-gray-300">
                <thead>
                    <tr className={headerClassName}>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className={`px-4 py-2 border-b-2 border-gray-300 text-left ${cellClassName}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowClassName}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className={`px-4 py-2 border-b border-gray-300 ${cellClassName}`}
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
