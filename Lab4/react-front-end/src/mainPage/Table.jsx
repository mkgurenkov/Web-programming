import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {filterDataByUsername, loadDataTable} from "../redux/table/tableActionCreators";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {InputSwitch} from "primereact/inputswitch";
import "./Table.css";
export function Table() {
    const [filterIsActive, setFilterIsActive] = useState(false);

    const dispatch = useDispatch();
    const data = useSelector(state => state.tableReducer.data);
    const username = useSelector(state => state.appReducer.username);


    useEffect(() => {
        if (filterIsActive) {
            dispatch(filterDataByUsername(username, data));
        } else {
            dispatch(loadDataTable());
        }
    }, [filterIsActive]);

    return(
        <div>
            <InputSwitch checked={filterIsActive} onChange={(e) => setFilterIsActive(e.value)} />
            <DataTable value={data} tableStyle={{ width: '1000px' }} rowClassName={(e) => (e.username === username) && "green-row"}>
                <Column field={"username"} header="user" />
                <Column field={"point.x"} header="x" />
                <Column sfield={"point.y"} header="y" />
                <Column field={"point.r"} header="r" />
                <Column field={"hit"} header="hit" />
                <Column field={"executionTime"} header="time (µs)" />
                <Column field={"currentTime"} header="current time" />
            </DataTable>
        </div>
    );
}