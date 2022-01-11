import * as React from "react";

const Arrow = (props) => (
    <svg
        className="footer__newsletter__icon"
        viewBox="0 0 13 14"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M0 7H12M12 7L6 1M12 7L6 13" />
    </svg>
);

export default Arrow;