import IndustryPage from '../components/IndustryPage';

const TravelHospitality = () => {
    return (
        <IndustryPage
            title="Travel & Hospitality Solutions"
            subtitle="Enhancing Guest Experiences"
            description="Booking engines, property management systems, and personalized guest apps for the travel industry. Create memorable journeys for your customers."
            ctaText="Start Your Project"
            ctaLink="/contact"

            heroImage="/industries/travel-hospitality/677cafada2a4d18c8db642a0_Industries (4).webp"
            showHeroForm={false}
            whyUs={[
                "Seamless Booking – Optimized flows for flights, hotels, and tours.",
                "Personalization – AI-driven recommendations for travelers.",
                "Operational Efficiency – Unified systems for managing reservations and housekeeping.",
                "Global Reach – Multi-currency and multi-language support."
            ]}
            servicesOffered={[
                {
                    title: "Hotels & Resorts",
                    description: "Property management systems (PMS), direct booking engines, and guest experience apps to maximize occupancy and revenue."
                },
                {
                    title: "Travel Agencies (OTA)",
                    description: "Custom booking portals, itinerary management tools, and GDS integrations for online travel agencies and tour operators."
                },
                {
                    title: "Airlines & Aviation",
                    description: "Flight booking systems, loyalty program management, and crew scheduling software for efficient airline operations."
                },
                {
                    title: "Restaurants & Food Service",
                    description: "Point of sale (POS) systems, table reservation apps, and online ordering platforms for the hospitality and dining sector."
                },
                {
                    title: "Car Rentals & Transportation",
                    description: "Fleet management software, vehicle booking systems, and route optimization tools for logistics and transport providers."
                },
                {
                    title: "Destination Management",
                    description: "Platforms for promoting tourism destinations, managing events, and coordinating local services for visitors."
                }
            ]}
            process={[
                {
                    title: "Guest Journey Map",
                    description: "Identifying touchpoints to enhance the traveler experience.",
                    duration: "2 Weeks"
                },
                {
                    title: "System Architecture",
                    description: "Designing integrations with GDS and OTA channels.",
                    duration: "3 Weeks"
                },
                {
                    title: "Development",
                    description: "Building the booking engine and guest-facing applications.",
                    duration: "10-14 Weeks"
                },
                {
                    title: "Launch",
                    description: "Rolling out the solution with seasonal marketing campaigns.",
                    duration: "2 Weeks"
                }
            ]}
            howCanWeHelp={[
                "Booking Engines",
                "Travel Management Systems (TMS)",
                "Hotel Property Management Systems (PMS)",
                "Loyalty Programs",
                "Travel Apps"
            ]}
            integrations={[
                "Sabre",
                "Amadeus",
                "Travelport",
                "Airbnb API",
                "Booking.com API",
                "Expedia Partner Solutions",
                "Stripe",
                "Twilio",
                "AWS",
                "Salesforce"
            ]}
            caseStudy={{
                title: "Booking Platform Scale-Up",
                client: "Wanderlust Travel Group",
                challenge: "The client's booking engine crashed repeatedly under the load of 1 million+ daily searches during peak holiday seasons.",
                solution: "We migrated their middleware to a serverless microservices architecture and implemented advanced Redis caching strategies.",
                outcome: "Achieved 99.99% uptime during the peak holiday season and reduced infrastructure costs by 35% through optimized resource usage.",
                image: "/images/services/native-mobile-app.jpg",
                duration: "6 Months",
                technologies: ["Redis", "AWS Lambda", "Node.js", "React"]
            }}
            faqs={[
                {
                    question: "Can you integrate with Global Distribution Systems (GDS)?",
                    answer: "Yes, we have deep expertise in integrating with major GDS providers like Sabre, Amadeus, and Travelport for real-time inventory."
                },
                {
                    question: "Do you build mobile apps for travelers?",
                    answer: "Yes, we design and develop native mobile apps for iOS and Android that offer seamless booking, itinerary management, and navigation."
                },
                {
                    question: "How do you handle multi-currency payments?",
                    answer: "We integrate with global payment gateways that support multi-currency transactions and real-time exchange rate conversion."
                }
            ]}
            testimonials={[
                {
                    name: "Tarun Verma",
                    role: "CTO",
                    company: "Wanderlust Travel",
                    content: "Our booking engine is lightning fast now. Fraylon's architectural overhaul saved our peak season revenue.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/men/11.jpg"
                },
                {
                    name: "Anita Desai",
                    role: "Marketing Director",
                    company: "Stay Boutique",
                    content: "The loyalty program app they built has increased our repeat bookings by 25%. A fantastic team to work with.",
                    rating: 5,
                    image: "https://randomuser.me/api/portraits/women/15.jpg"
                }
            ]}
        />
    );
};

export default TravelHospitality;
