﻿define(['plugins/router', 'services/appsecurity', 'services/errorhandler'],
    function (router, appsecurity, errorhandler) {        

        var viewmodel = {

            router: router,

            appsecurity: appsecurity,

            logout: function () {
                var self = this;
                appsecurity.logout()
                    .done(function () {
                        appsecurity.clearAuthInfo();
                        if (router.activeInstruction().config.authorize) {
                            router.navigate("account/login");
                        }
                    })
                    .fail(self.handlevalidationerrors);
            },

            attached: function () {
                $('.toggler').on('click', function () {
                    $(".navbar-toggle").click();
                });
            }



        };

        errorhandler.includeIn(viewmodel);

        return viewmodel;
    });