import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ShowroomMap = () => {
    const defaultProps = {
        center: {
            lat: 23.813604669666777,
            lng: 90.41996608610077
        },
        zoom: 11
    };
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={23.813604669666777}
                    lng={90.41996608610077}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default ShowroomMap;