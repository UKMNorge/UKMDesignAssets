var UKM = UKM || {};

UKM.geoLocation = function ($) {

    function debug(...params) {
        //console.log('geoLocation:', ...params);
    }

    function error(...params) {
        //console.error(...params);
        trigger('error', ...params);
    }

    function trigger(event, ...params) {
        debug('TRIGGER:', 'geoLocation:' + event, ...params);
        $(document).trigger('geoLocation:' + event, ...params)
    }

    var position = false;
    var location = false;
    var loading = false;

    var self = {
        /**
         * Enable others to follow progress
         * 
         * @param String event 
         * @param  {...any} params 
         */
        on: function (event, ...params) {
            jQuery(document).on('geoLocation:' + event, ...params);
        },

        /**
         * Initiate locationing
         */
        locate: function (e) {
            if (self.isLoading()) {
                return false;
            }

            return self.loading();
        },

        /**
         * Notify listeners we've started loading location
         */
        loading: function () {
            loading = true;
            trigger('loading');
            return true;
        },

        /**
         * Currently finding position/location?
         */
        isLoading: function () {
            return loading;
        },

        /**
         * Store user position 
         * (raw data from navigator.geolocation.getCurrentPosition())
         * 
         */
        setPosition: function (_position) {
            debug('store position', _position);
            trigger('positioned', _position);
            position = _position;
        },

        /**
         * User position is translated to location (kommune)
         */
        setLocation: function (_location) {
            trigger('location', _location);
            location = _location;
            loading = false;

            self.getLocationInfos(
                _location.kommunenummer,
                _location.fylkesnummer,
                _location.kommunenavn
            );

            self.setDeltaCookie(kommunenummer);
        },

        setDeltaCookie: function(kommunenummer) {
            $.ajax({
                url: 'https://delta.' + window.location.hostname + '/lastlocation/' + kommunenummer + '/',
                xhrFields: {
                    withCredentials: true
                }
            });
        },

        /**
         * Fetch more info about the location
         * 
         * @param {*} kommunenummer 
         * @param {*} fylkesnummer 
         * @param {*} kommunenavn 
         */
        getLocationInfos: function(kommunenummer, fylkenummer, kommunenavn){
            $.get(
                ajaxurl,
                {
                    action: 'UKMDesignWordpress',
                    ajaxaction: 'home',
                    fylke: fylkenummer,
                    kommune: kommunenummer
                }
            ).done(function(response) {
                trigger('locationdata', response)
            })
            .fail(function(response){
                error(response);
            });
        },

        /**
         * Find user location from navigator.geolocation.getCurrentPosition() data
         */
        positioned: function (_location) {
            self.setPosition(_location);
            $.get(
                'https://ws.geonorge.no/kommuneinfo/v1/punkt?' +
                'nord=' + _location.coords.latitude +
                '&ost=' + _location.coords.longitude +
                '&koordsys=4258',
                function (response) {
                    self.setLocation(response);
                }
            ).fail(
                function (response) {
                    self.failed(response);
                }
            );
        },

        /**
         * Something went wrong :(
         * 
         * @param {*} exception 
         */
        failed: function (exception) {
            loading = false;
            error(exception);
            trigger('error', exception);
        }

    };

    return self;

}(jQuery);