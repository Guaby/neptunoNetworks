(function ($) {
    // === Packages Interaction === //
    let planets = $('.planet'),
        nextBtn = $('.next-btn');
    let planetPremium = $('.planet.premium'),
        planetAdvance = $('.planet.advance'),
        planetEssential = $('.planet.essential');
    let infoAdvance = $('.pack-wrapper.advance'),
        infoEssential = $('.pack-wrapper.essential'),
        infoPremium = $('.pack-wrapper.premium');
    let tlPremium = new TimelineMax();
    let tlEssential = new TimelineMax();
    let tlAdvance = new TimelineMax();
    let tlNext = new TimelineMax();
    function updatePlanet(el) {
        console.log(el);
        if (el.hasClass("premium")) {
            showPremuimPackage(el);
        } else if (el.hasClass("essential")) {
            showEssentialPackage(el);
        } else if (el.hasClass("advance")) {
            showAdvancePackage(el);
        }
    }
    // functions
    function showPremuimPackage(el) {
        $('.planet.advance, .planet.essential').addClass('unselected');
        planetPremium.removeClass('unselected');
        tlPremium
            .to(planetPremium.parent(), .9, { rotation: 10, ease: Power1.easeOut })
            .to(planetPremium, .7, { width: 220, height: 220, rotation: -10, left: '-15%', ease: Power1.easeOut }, '-=1')
            .to(planetPremium.children('.planet-info'), .8, { autoAlpha: 1 }, '-=.50')
            // Update the info
            .to(infoAdvance, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoAdvance, { display: 'none' })
            .to(infoEssential, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoEssential, { display: 'none' })
            .set(infoPremium, { display: 'block' })
            .to(infoPremium, .8, { autoAlpha: 1 });
        // if unselected planets
        // if Premium is selected
        if (planetAdvance.hasClass('unselected') && planetEssential.hasClass('unselected')) {
            let tlArrange = new TimelineMax();
            tlArrange
                // Set advance
                .to(planetAdvance.parent(), .6, { rotation: 25, ease: Power1.easeOut})
                .to(planetAdvance, .6, { width: 80, height: 80, left: '-3%', ease: Power1.easeOut }, '-=.7')
                .to(planetAdvance.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                // set essential
                .to(planetEssential.parent(), .6, { rotation: -8, ease: Power1.easeOut }, '-=.50')
                .to(planetEssential, .6, { width: 80, height: 80, left: '-3%', ease: Power1.easeOut }, '-=.7')
                .to(planetEssential.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                //.to($('#premiumBtn'),.6, {scale: 1.5})
                .to($('.planet-icon'), .6, { stroke: '#CECECE' })
                .to($('#premiumBtn').find('path.planet-icon'), .6, { stroke: '#f37b8a' })
                ;
        }
    }
    function showEssentialPackage(el) {
        $('.planet.advance, .planet.premium').addClass('unselected');
        planetEssential.removeClass('unselected');
        tlEssential
            .to(planetEssential.parent(), .6, { rotation: 0, ease: Power1.easeOut })
            .to(planetEssential, .7, { width: 220, height: 220, rotation: 0, left: '-9.5%', ease: Power1.easeOut }, '-=1')
            .to(planetEssential.children('.planet-info'), .5, { autoAlpha: 1 }, '-=.50')
            // Update the info
            .to(infoAdvance, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoAdvance, { display: 'none' })
            .to(infoPremium, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoPremium, { display: 'none' })
            .set(infoEssential, { display: 'block' })
            .to(infoEssential, .8, { autoAlpha: 1 });
        // if Essential is selected
        if (planetAdvance.hasClass('unselected') && planetPremium.hasClass('unselected')) {
            let tlArrange = new TimelineMax();
            tlArrange
                // Set advance
                .to(planetAdvance.parent(), .6, { rotation: 25, ease: Power1.easeOut })
                .to(planetAdvance, .6, { width: 80, height: 80, left: '-3%' }, '-=.7')
                .to(planetAdvance.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                // set premium
                .to(planetPremium.parent(), .6, { rotation: -48, ease: Power1.easeOut }, '-=.50')
                .to(planetPremium, .6, { width: 80, height: 80, left: '-4.9%' }, '-=.7')
                .to(planetPremium.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                //.to($('#essentialBtn'),.6, {scale: 1.5})
                .to($('.planet-icon'), .6, { stroke: '#CECECE' })
                .to($('#essentialBtn').find('path.planet-icon'), .6, { stroke: '#662f8f' })
                ;
        }
    }
    function showAdvancePackage(el) {
        $('.planet.essential, .planet.premium').addClass('unselected');
        planetAdvance.removeClass('unselected');
        tlAdvance
            .to(planetAdvance.parent(), .6, { rotation: 0, ease: Power1.easeOut })
            .to(planetAdvance, .7, { width: 220, height: 220, rotation: 0, left: '-9.5%', ease: Power1.easeOut }, '-=1')
            .to(planetAdvance.children('.planet-info'), .5, { autoAlpha: 1 }, '-=.50')
            // Update the info
            .to(infoEssential, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoEssential, { display: 'none' })
            .to(infoPremium, .4, { autoAlpha: 0 }, '-=.50')
            .set(infoPremium, { display: 'none' })
            .set(infoAdvance, { display: 'block' })
            .to(infoAdvance, .8, { autoAlpha: 1 })
        // if Advance is selected
        if (planetPremium.hasClass('unselected') && planetEssential.hasClass('unselected')) {
            let tlArrange = new TimelineMax();
            tlArrange
                // Set premium
                .to(planetPremium.parent(), .6, { rotation: 40, ease: Power1.easeOut })
                .to(planetPremium, .6, { width: 80, height: 80, left: '-5%' }, '-=.7')
                .to(planetPremium.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                //set essential
                .to(planetEssential.parent(), .6, { rotation: -37, ease: Power1.easeOut }, '-=.50')
                .to(planetEssential, .6, { width: 80, height: 80, left: '-3%' }, '-=.7')
                .to(planetEssential.children('.planet-info'), .5, { autoAlpha: 0 }, '-=1')
                // .to($('#advanceBtn'),.6, {scale: 1.5})
                .to($('.planet-icon'), .6, { stroke: '#CECECE' })
                .to($('#advanceBtn').find('path.planet-icon'), .6, { stroke: '#7822ff' })
                ;
        }
    }
    // Planets click events listener
    planets.click(function () {
        planets.not(this).addClass('unselected');
        $(this).removeClass('unselected');
        updatePlanet($(this));
    });
    // nextBtn click listener
    nextBtn.click(function (e) {
        // if is advance btn > go to Premium
        if ($(e.target).hasClass('advance')) {
            //got to premium packege
            showPremuimPackage();
        }
        // if is premuim btn > go to Essential
        if ($(e.target).hasClass('premium')) {
            //got to Essential packege
            showEssentialPackage();
        }
        // if is essential btn > go to Advance
        if ($(e.target).hasClass('essential')) {
            //got to advance packege
            showAdvancePackage();
        }
    });
    // New UI Click Event Listener
    $('#essentialBtn').click(function (e) {
        showEssentialPackage();
    });
    $('#advanceBtn').click(function (e) {
        showAdvancePackage();
    });
    $('#premiumBtn').click(function (e) {
        showPremuimPackage();
    });
})(jQuery);