import { Fragment } from "react";

// function Echo({ children }){  //we use fragment in place of this extra component which do same thing
//     return children;
// }

function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column) => {

        // if (column.header) {
        //     return (<Echo key={column.label}>
        //         {column.header()}
        //     </Echo>);
        // }

        
        if (column.header) {
            return (<Fragment key={column.label}>
                {column.header()}
            </Fragment>);
        }

        return (<th key={column.label}>
            {column.label}
        </th>);
    });

    const renderedRows = data.map(rowData => {
        const renderedCells = config.map((column) => {
            return (<td className="p-2" key={column.label}>{column.render(rowData)}</td>);
        });

        return (
            <tr key={keyFn(rowData)} className="border-b" >
                {renderedCells}
            </tr>

            // <tr key={fruit.name} className="border-b" >
            //     <td className="p-3">{config[0].render(fruit)}</td>
            //     <td className="p-3">
            //         {/* <div className={`p-3 m-2 ${fruit.color}`}></div> */}
            //         {config[1].render(fruit)}
            //     </td>
            //     <td className="p-3">{config[2].render(fruit)}</td>
            // </tr>
        );
    });


    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;