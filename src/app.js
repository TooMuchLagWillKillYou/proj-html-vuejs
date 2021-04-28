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
    
                pages: [
                    'Demos <i class="fas fa-chevron-down"></i>',
                    'Pages <i class="fas fa-chevron-down"></i>',
                    'Portfolio <i class="fas fa-chevron-down"></i>',
                    'Blog <i class="fas fa-chevron-down"></i>',
                    'Shop',
                    '<i class="fas fa-search"></i>',
                    '<i class="fas fa-shopping-bag"></i>'
                ],
            },


            footer: {

                company: {

                    title: 'Company',

                    text: [

                        'Institutional',
                        'Social &amp; Events',
                        'Innovation',
                        'Enviroment',
                        'Technology'
                    ]
                },

                services: {

                    title: 'Services',

                    text: [

                        'Audit &amp; Assurance',
                        'Financial Advisory',
                        'Analytics and M&amp;A',
                        'Middle Marketing',
                        'Legal Cosulting'
                    ]
                },

                consultants: {

                    title: 'Consultants',

                    text: [

                        'David Cooper',
                        'Oliver Jones',
                        'Emma Lopez',
                        'T. Johnson',
                        'Jacob Hill Jr'
                    ]
                }
            }
        },

    })
}

document.addEventListener('DOMContentLoaded', initVue)