import { useEffect, useMemo, useRef, useState } from "react";
import Map from 'ol/Map';
import View from 'ol/View';
import { XYZ } from 'ol/source';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';

// import 'ol/ol.css';
import styles from '@/pages/overview/overview.module.css'

const mapInfo = [
    { id: 'id', center: [112.678303857182, 24.38823323344173], zoom: 12.5, extent: [12405068.682639811, 2653037.9382806667, 12706225.178468876, 2872899.1673065587] }
]

export default function OvMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const [item,] = useState(mapInfo[0]);
    const url = `http://zh01.stgz.org.cn/mapzonegis/yangshan-temp/${item.id}/{z}/{x}/{y}/tile.png?tk=d26ca22d-a029-419e-9bdf-c2e7d3b52aa2`;
    const center = useMemo(() => fromLonLat(item.center), []);

    useEffect(() => {

        const source = new XYZ({
            url: url,
            projection: 'EPSG:4326',
            crossOrigin: 'anonymous',
        });

        const map = new Map({
            controls: [],
            target: mapRef.current!,
            layers: [
                new TileLayer({
                    source: source,
                    extent: item.extent,
                })
            ],
            view: new View({
                center: center,
                extent: item.extent,
                zoom: item.zoom,
            })
        });

        return () => map.setTarget(undefined);
    }, []);

    return (
        <div ref={mapRef} className={styles.MapContainer} />
    );
}