const navItems = [
  {
    title: "Urgent Care",
    url: "#",
    isMobile: false,
    subMenu: true,
    iconUrl: "",
    icon: "",
    subMenuContent: [
      {
        id: "1",
        name: "Common Conditions",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "Mild to moderate asthma attacks",
            url: "#",
            description: "",
            img: "/menu-img/healthcare_automated.jpg",
          },
          {
            id: "2",
            name: "Ear infections or pain",
            url: "#",
            description: "",
            img: "/menu-img/hospital_management.jpg",
          },
          {
            id: "3",
            name: "Eye infections (e.g., conjunctivitis/pink eye)",
            url: "#",
            description: "",
            img: "/menu-img/laboratory-management.jpg",
          },
          {
            id: "4",
            name: "Minor allergic reactions",
            url: "#",
            description: "",
            img: "/menu-img/pharmacy-management.jpg",
          },
          {
            id: "5",
            name: "Skin rashes without fever",
            url: "#",
            description: "",
            img: "/menu-img/electronic_health_record.jpg",
          },
          {
            id: "6",
            name: "Migraines or severe headaches (not first-time or worst-ever)",
            url: "#",
            description: "",
            img: "/menu-img/billing_automation.jpg",
          },
        ],
      },
      {
        id: "2",
        name: "Minor Injuries",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "Sprains and strains",
            url: "#",
            description: "",
            img: "/menu-img/telemedicine.jpg",
          },
          {
            id: "2",
            name: "Burns (first-degree or minor second-degree)",
            url: "#",
            description: "",
            img: "/menu-img/patient_portal.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Mental Health",
    url: "#",
    isMobile: false,
    subMenu: true,
    iconUrl: "",
    icon: "",
    subMenuContent: [
      {
        id: "1",
        name: "Common Mental Health Conditions",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "Anxiety disorders (e.g., Generalized Anxiety Disorder, Panic Disorder)",
            url: "#",
            description: "",
            img: "/menu-img/healthcare_automated.jpg",
          },
          {
            id: "2",
            name: "Bipolar disorder",
            url: "#",
            description: "",
            img: "/menu-img/hospital_management.jpg",
          },
          {
            id: "3",
            name: "Depression (Major Depressive Disorder, Dysthymia)",
            url: "#",
            description: "",
            img: "/menu-img/laboratory-management.jpg",
          },
          {
            id: "4",
            name: "Obsessive-Compulsive Disorder (OCD)",
            url: "#",
            description: "",
            img: "/menu-img/pharmacy-management.jpg",
          },
        ],
      },
      {
        id: "2",
        name: "Addiction & Substance Use",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "Alcohol use disorder",
            url: "#",
            description: "",
            img: "/menu-img/telemedicine.jpg",
          },
          {
            id: "2",
            name: "Nicotine dependence",
            url: "#",
            description: "",
            img: "/menu-img/patient_portal.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Sexual & Reproductive Health",
    isMobile: true,
    url: "#",
    subMenu: false,
    subMenuContent: [],
    iconUrl: "",
  },
];

export default navItems;
