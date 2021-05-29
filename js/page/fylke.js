/**
 * FYLKESSIDE
 *
 * Resize knappetekst for lokalmønstring når listen vises
 **/
var fylkePositionAtToggleLokalTriggered = 0;

// Når listen vises, resize knappetekst og lagre scroll-position
$(document).on('UKMtoggleShow#UKMtoggleLokal', function () {
    $(window).trigger('resize');
    fylkePositionAtToggleLokalTriggered = $(window).scrollTop();
});

// Når listen lukkes, returner til tidligere scroll-position
$(document).on('pre_UKMtoggleHide#UKMtoggleLokal', function () {
    scrollToPosition(fylkePositionAtToggleLokalTriggered);
});


var UKM = UKM || {};

UKM.kommuneliste = function (filter_container) {
    var emitter = new UKM.emitter('kommuneliste');
    var self = {
        on: function (event, callback) {
            emitter.on(event, callback);
        },
        getSearchSelector: function () {
            return filter_container + ' input[name="search"]';
        },
        getKommuneSelector: function () {
            return filter_container + ' .kommune';
        },
        bind: function () {
            $(document).on('keyup', self.getSearchSelector(), self.filter);
            $(document).on('keypress', function (e) {
                if (e.which == 13 && $(self.getSearchSelector()).is(':focus') && self.getMatchCount() == 1) {
                    self.go();
                }
            });
        },

        go: function () {
            var selected = $(self.getKommuneSelector() + ':visible');
            window.location.href = selected.find('a').attr('href');
        },

        filter: function () {
            var words = $(self.getSearchSelector()).val().toLowerCase().split(' ');
            $(self.getKommuneSelector()).hide();

            $(self.getKommuneSelector()).filter(function (index, element) {
                var searchIn = $(element).attr('data-filter').toLowerCase();
                var found = false;
                words.forEach(function (word) {
                    if (searchIn.indexOf(word) !== -1) {
                        found = true;
                        return; // bryter ut av forEach
                    }
                });
                return found; // faktisk resultat
            }).show();

            self.addCountHelper();
            emitter.emit('change', [self.getMatchCount()]);
        },

        getMatchCount: function () {
            return $(self.getKommuneSelector() + ':visible').length;
        },

        addCountHelper: function () {
            var numShown = self.getMatchCount();
            $(filter_container).removeClass('found-none found-few found-many').attr('data-count', numShown);
            if (numShown == 0) {
                $(filter_container).addClass('found-none');
            } else if (numShown < 5) {
                $(filter_container).addClass('found-few');
            } else {
                $(filter_container).addClass('found-many');
            }
        }
    }
    self.bind();
    return self;
}


var kommuneListe;
jQuery(document).ready(function () {
    kommuneListe = UKM.kommuneliste('#finnKommune');
    kommuneListe.on('change', function () {
        if (kommuneListe.getMatchCount() == 0) {
            jQuery('#found-none').slideDown(220);
        } else {
            jQuery('#found-none').slideUp(180);
        }
    });
});
jQuery(document).on('geolocated', function (e, location) {
    jQuery('#filterKommune').val(location.kommunenavn).keyup();

    // Skal vi auto-gå til riktig sted? Prøver det først
    if (kommuneListe.getMatchCount() == 1) {
        kommuneListe.go();
    }
});
jQuery(document).on('geolocate-fail', function (e, data) {
    jQuery('#couldnotfindlocation').slideDown(200);
    setTimeout(function () {
        jQuery('#couldnotfindlocation').slideUp();
    }, 2200);
});