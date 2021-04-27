function initVue(){

    new Vue ({

        el: '#app',
        data: {

            nav: {

                left: [

                    '<i class="fas fa-clock"></i> Open Hours: Mon-Sat-9:00-18:00',
                ],

                right: [
                    
                    '<i class="fas fa-phone-alt"></i> +1 (305) 1234-5678',
                    '<i class="fas fa-envelope"></i> hello@example.com',
                    '<i class="fab fa-facebook-f"></i>',
                    '<i class="fab fa-twitter"></i>',
                    '<i class="fab fa-linkedin-in"></i>'
                ],
    
                links: [
                    'Demos',
                    'Pages',
                    'Portfolio',
                    'Blog',
                    'Shop'
                ],
            },


            footer: {

                company: [
                    'Institutional',
                    'Social &amp; Events',
                    'Innovation',
                    'Enviroment',
                    'Technology'
                ],

                services: [
                    'Audit &amp; Assurance',
                    'Financial Advisory',
                    'Analytics and M&amp;A',
                    'Middle Marketing',
                    'Legal Cosulting'
                ],

                consultants: [
                    'David Cooper',
                    'Oliver Jones',
                    'Emma Lopez',
                    'T. Johnson',
                    'Jacob Hill Jr'
                ]
            }
        },

        methods: {

        }
    })
}

document.addEventListener('DOMContentLoaded', initVue)