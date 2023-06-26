import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
   
    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        sortedData,
        setSortColumn
    } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => 
            <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)} >
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th>
        };
    });

    
    return (
            <Table {...props} config={updatedConfig} data={sortedData} />
        // <div>
        //     {sortOrder} - {sortBy}
        // </div>
    );  // overwritten config of props but if this updated config is put before this prop it will not overwrite 
    //so position matters!.
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>;
    } else if (sortOrder === "asc") {
        return <div>
            <GoArrowSmallUp />
        </div>;
    } else {
        return <div>
            <GoArrowSmallDown />
        </div>;
    }
}

export default SortableTable;