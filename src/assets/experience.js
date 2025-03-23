const ruby = "ruby";
const js = "js";
const elixir = "elixir";
const react = "react";
const vue = "vue";
const postgresql = "postgresql";
const mongodb = "mongodb";
const java = "java";

export const experience = [
    {
        companyName: "Job&Talent",
        notes: "",
        location: "Madrid, Spain",
        icon: "jobandtalent.jpg",
        remote: true,
        technologies: [ruby, react, js, elixir, postgresql],
        timeSlots: [
            {
                start: "08/2023",
                end: null,
                jobTitle: "Senior Software Engineer",
                details: [
                    "Integrated Devengo APIs into the payroll system, reducing the cost of early wages by 40%",
                    "Created a service to calculate and recover money paid in advance to employees, using Ruby on Rails, which increased recurring revenue by €40K",
                    "Mentored, onboarded and supported new employees joining the team.",
                    "Collaborated with product managers to define project scope and deliverables.",
                    "Implemented a service to keep track of legal procedures passing the deadline, saving €10K+ of annual fines.",
                    "Automated the tax calculation process through a pipline of a PDF parser and data processor that achieved compliance while reducing the process time by 50%"
                ]
            },
            {
                start: "08/2022",
                end: "08/2023",
                jobTitle: "Software Engineer",
                details: [
                    "Maintained and optimized internal tools for managing worker payments and legal documents.",
                    "Contributed in streamlining the data entry process in legal institutions' websites using Puppeteer bots.",
                    "Lead the migration of the system's frontend from Embedded Ruby to React.js, reducing the average latency time from 3 seconds to 0.2 second.",
                    "Utilized analytical tools like Watchdog, Rollbar and AWS CloudWatch to collect metrics and take data-driven decisions.",
                    "Collaborated with stakeholders to identify and implement permanent solutions for issues and incorporate missing features, resulting in a 60% reduction in support tickets within 1 year."
                ]
            }
        ]
    },
    {
        companyName: "Blink22",
        notes: "",
        location: "Alexandria, Egypt",
        icon: "blink22.png",
        remote: false,
        technologies: [ruby, react, js, mongodb],
        timeSlots: [
            {
                start: "08/2021",
                end: "08/2022",
                jobTitle: "Software Engineer",
                details: [
                    <span>Contributed to integrating Stripe payments in <a className="external-link" href="https://www.rectanglehealth.com/pcihipaa/" rel="noreferrer" target="_blank">Rectangle Health</a> using Ruby on Rails.</span>,
                    "Migrated the system's frontend from Angular1 to React.js, which improved UX.",
                    "Developed test coverage for the system's legacy code using RSpec.",
                    "Optimized a survey management system by discarding 500+ redundant database queries"
                ]
            }
        ]
    },
    {
        companyName: "Pharos Solutions",
        notes: "",
        location: "Alexandria, Egypt",
        icon: "pharos.png",
        remote: false,
        technologies: [ruby, js, vue, postgresql],
        timeSlots: [
            {
                start: "08/2020",
                end: "08/2021",
                jobTitle: "Software Engineer",
                details: [
                    <span>Developed a service for booking classes in <a className="external-link" href="https://skoolix.app/" rel="noreferrer" target="_blank">Skoolix</a> E-learning system.</span>,
                    "Integrated Google Calendar and Google Hangouts Apis into the system enabling virtual classes.",
                    "Led the development of B-Rex, a virtual exhibition system, using VueJS"
                    ]
            }
        ]
    },
    {
        companyName: "Triumph Shipping",
        notes: "Mandatory military service",
        location: "Alexandria, Egypt",
        icon: "triumph.png",
        remote: false,
        technologies: [ruby, vue, java],
        timeSlots: [
            {
                start: "08/2019",
                end: "08/2020",
                jobTitle: "Software Engineer",
                details: [
                    "As part of my military service, I developed VueJS-based front-end systems for a government-owned company.",
                    "This included a financial system for recording transactions and a fleet management system for tracking ship maintenance."
                ]
            }
        ]
    },
];

export default experience;