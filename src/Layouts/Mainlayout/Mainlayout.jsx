import react, { Fragment } from 'react';
import {Outlet} from 'react-router-dom';

const Mainlayout = ()=>{
    return(
        <Fragment>
            <Outlet/>
        </Fragment>
    )
}
export default Mainlayout;