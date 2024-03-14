import {Link, Navigate} from "react-router-dom";

export function NotFoundPage() {
    return(
        <div>
            <p>page is not found</p>
            <Link to="/start-page">на старт</Link>
        </div>
);
}