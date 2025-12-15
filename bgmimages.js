function FindProxyForURL(url, host) {

    // Block Google Maps images (Places photos)
    if (
        dnsDomainIs(host, "lh3.googleusercontent.com") ||
        dnsDomainIs(host, "lh4.googleusercontent.com") ||
        dnsDomainIs(host, "lh5.googleusercontent.com") ||
        dnsDomainIs(host, "lh6.googleusercontent.com") ||
        dnsDomainIs(host, "places.googleapis.com") ||
        shExpMatch(url, "*maps.googleapis.com/maps/api/place*")
    ) {
        return "PROXY 0.0.0.0:0"; 
    }

    return "DIRECT";
}
