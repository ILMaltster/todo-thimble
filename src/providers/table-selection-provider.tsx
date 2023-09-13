import React, {createContext, FC, useState} from 'react';

interface ITableSelectionContextValue{
    selectedRowId: number;
    setSelectedRowId: React.Dispatch<React.SetStateAction<number>>;
}

const initValueContext: ITableSelectionContextValue = {
    selectedRowId: -1,
    setSelectedRowId: () => {}
}

export const TableSelectionContext = createContext<ITableSelectionContextValue>(initValueContext);

const TableSelectionProvider: FC<React.PropsWithChildren> = ({children}) => {
    const [selectedRowId, setSelectedRowId] = useState<number>(-1);

    return (
        <TableSelectionContext.Provider value={{selectedRowId, setSelectedRowId}}>
            {children}
        </TableSelectionContext.Provider>
    );
};

export default TableSelectionProvider;