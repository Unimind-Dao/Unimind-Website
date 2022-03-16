import React from "react";
import BeatLoader from "react-spinners/BeatLoader";


const LoadingScreen = (props) => (
    <div className="loader__screen">
        <BeatLoader color="white" loading={props.loading} size={10} />
    </div>
)


export default LoadingScreen;
