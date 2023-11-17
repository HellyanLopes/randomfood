declare namespace google.maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }
  
    interface MapOptions {
      center?: google.maps.LatLng | google.maps.LatLngLiteral;
      zoom?: number;
    }
  
    class Marker {
      constructor(opts?: MarkerOptions);
    }
  
    interface MarkerOptions {
      position?: google.maps.LatLng | google.maps.LatLngLiteral;
      map?: google.maps.Map;
    }
  
    interface LatLng {
      lat(): number;
      lng(): number;
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  }
  