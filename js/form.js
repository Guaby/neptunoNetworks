// ===== Form Interaction ===== //

(function($) {

function formInteraction() {
    let steps = $('.step');
    let stepsBtn = steps.find('.btn');
    let tl = new TimelineMax();
    // step click button
    stepsBtn.click(function () {
        let currentStep = $(this).parent().parent(steps);
        let nextStep = $(this).parent().parent(steps).next();
        tl
            .to(currentStep, .6, { autoAlpha: 0 })
            .set(currentStep, { display: 'none' })
            // new step in
            .set(nextStep, { display: 'block' })
            .to(nextStep, .6, { autoAlpha: 1 })
            ;
    });
}
formInteraction();
})(jQuery);