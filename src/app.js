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
                    {
                        link: 'Demos <i class="fas fa-chevron-down"></i>',
                        menu: [
                            'Home 1',
                            'Home 2',
                            'Home 3',
                        ]
                    },
                    
                    {
                        link: 'Pages <i class="fas fa-chevron-down"></i>',
                        menu: [
                            'About Us',
                            'Services',
                            'Single Service',
                            'Pricing Table',
                            'Testimonials',
                            'Team',
                            'Partners',
                            'Contact Us'
                        ]
                    },

                    {
                        link: 'Portfolio <i class="fas fa-chevron-down"></i>',
                        menu: [
                            'Full Width',
                            'With Sidebar',
                            'Single Portfolio',
                        ]
                    },

                    {
                        link: 'Blog <i class="fas fa-chevron-down"></i>',
                        menu: [
                            'Full Width',
                            'With Sidebar',
                            'Single Portfolio',
                        ]
                    },

                    { link: 'Shop' },

                    { link: '<i class="fas fa-search"></i>' },

                    { link: '<i class="fas fa-shopping-bag"></i>' }
                    
                ],

            },

            header:{

                images:[
                    'images/bg-1.jpg',
                    'images/bg-2.jpg',
                    'images/bg-3.jpg',
                ],

                slider: [
                    {
                        h1: 'Business Consulting',
                        p: 'We drive product and service innovation, improve financial performance, accelerate market speed.'
                    },
                    
                    {
                        h1: 'Financial Risk',
                        p: 'The right outcomes depend on continuous rigor in governance, models, and processes across the finance function.'
                    },
                    
                    {
                        h1: 'Audit & Assurance',
                        p: 'Our focus is to map the technologies to solve the business transformation, offering services.'
                    },
                ]
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
            },

            activeIndex: 0
        },

        methods:{

            nextImg: function() {

                this.activeIndex++;

                if (this.activeIndex >= this.header.slider.length) {
                    this.activeIndex = 0;
                }
            }
        },

        mounted: function() {

            setInterval(() => {
                this.nextImg();
            }, 3000);
        }
        
    })
}

document.addEventListener('DOMContentLoaded', initVue)