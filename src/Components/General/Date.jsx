import react, { Fragment } from 'react';
import moment from 'moment';
const Date = (eventDate)=>{
    return(
        <Fragment>
            {moment(eventDate).format('DD MMMM YYYY')}
        </Fragment>
    )
}
export default Date;