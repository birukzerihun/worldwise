import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <h1>
        Position: {lat} {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 50, lng: 67 })}>
        Change Position
      </button>
    </div>
  );
}

export default Map;