import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api'
import { Box, useTheme } from '@mui/material'
import { CSSProperties, useCallback, useState } from 'react'

import Logo from 'components/Logo'
import { theme } from 'styles/theme'
import { THE_GOOD_PIZZA_POSITION } from 'constants/general'

export function Map() {
  const themeMui = useTheme()
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null)
  const [position, setPosition] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | undefined
  >(undefined)

  const containerStyle: CSSProperties = {
    width: '100%',
    height: '50vh',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: `${themeMui.palette.primary.main}`,
    borderRadius: '20px',
  }

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? '',
  })

  const positionCallback = (geoPosition: GeolocationPosition) => {
    setPosition({
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude,
    })
    const bounds = new window.google.maps.LatLngBounds(position)
    map?.fitBounds(bounds)

    setMap(map)
  }

  const onLoad = useCallback((map) => {
    setMap(map)
    navigator.geolocation.getCurrentPosition(positionCallback)
  }, [])

  const callbackDirectionsService = (
    results: google.maps.DirectionsResult | null
  ) => {
    if (directions === null) {
      setDirections(results)
      console.log(results)
    }
  }

  const onUnmount = useCallback((_map) => {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {position && (
        <>
          <InfoWindow position={THE_GOOD_PIZZA_POSITION}>
            <Box width="100%" p={1} color={theme.colors.black.DEFAULT}>
              <Logo width={100} />
            </Box>
          </InfoWindow>
          <DirectionsService
            options={{
              origin: THE_GOOD_PIZZA_POSITION,
              destination: position,
              travelMode: google.maps.TravelMode.DRIVING,
            }}
            callback={callbackDirectionsService}
          />
          {directions && (
            <DirectionsRenderer
              options={{
                directions,
              }}
            />
          )}
        </>
      )}
    </GoogleMap>
  ) : (
    <></>
  )
}
