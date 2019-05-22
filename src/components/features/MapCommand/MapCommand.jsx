import React from 'react';
import pt from 'prop-types';

import GoogleMapReact from 'google-map-react';

import s from './MapCommand.module.css'

const MAP_STYLES = {
    height: '200px',
    width: '100%',
};

const Marker = () => <div className={s.marker} />;

const MapCommand = ({ data, defaultZoom }) => {
    return <div style={MAP_STYLES}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY || '' }}
            defaultCenter={data}
            defaultZoom={defaultZoom}
        >
            <Marker
                lat={data.lat}
                lng={data.lng}
            />
        </GoogleMapReact>
    </div>;
}

MapCommand.propTypes = {
    data: pt.object.isRequired,
    defaultZoom: pt.number,
}

MapCommand.defaultProps = {
    defaultZoom: 11,
}

export default MapCommand;