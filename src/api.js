async function request(path, options = {}) {
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const response = await fetch(url, options);
  return response.json();
}

export async function getEvents(arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/events?${params.toString()}`);
}

export async function getEvent(eventId) {
  return request(`/events/${eventId}`);
}

export async function getEventComments(eventId, arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/events/${eventId}/comments?${params.toString()}`);
}

export async function getPlaces(arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/places?${params.toString()}`);
}

export async function getPlace(placeId) {
  return request(`/places/${placeId}`);
}

export async function getTours(arg = {}) {
  const params = new URLSearchParams(arg);
  return request(`/tours?${params.toString()}`);
}

export async function getTour(tourId) {
  return request(`/tours/${tourId}`);
}
