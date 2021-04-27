function initVue(){

    new Vue ({

        el: '#app',
        data: {

            nav: {

                contacts: [
                    
                    'Open Hours: Mon-Sat-9:00-18:00',
                    '+1 (305) 1234-5678',
                    'hello@example.com'
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