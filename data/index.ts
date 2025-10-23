import React from "react"; // You may need this for the icon type

// 1. ADD THIS PART: This exports the TYPE (the shape)
export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactElement; // Make icon optional
}

// 2. YOU ALREADY HAVE THIS: This exports the DATA (the array)
export const navItems: NavItem[] = [ // Use the type here
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I’m very flexible with communication across different time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate tech enthusiast focused on software development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation and 3D library",
    description: "Behind the Scenes",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
    email: "albertmaverick99@gmail.com"
  },
];

export const projects = [
  {
    id: 1,
    title: "A landing Page for An NGO",
    des: "Explore the wonders AOS Animations in Land ing Page",
    img: "/ngo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://aguikefoundation.org.ng/",
  },
  {
    id: 2,
    title: "A video editing Application",
    des: "A Video Editor easy to use, quick to learn, and surprisingly powerful video editor. Take a quick look at some of our most popular features and capabilities.",
    img: "/video.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.openshot.org/",
  },
  {
    id: 3,
    title: "AI Powered Health Application",
    des: "Connects you to certified doctors and nurses on your terms. Get help fast, from the comfort of your home or on the go.",
    img: "/kenei.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "next.svg"],
    link: "https://www.kenei-health.com/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Juliet was an absolute pleasure! She completely transformed our outdated website into a sleek, responsive, and user-friendly platform that perfectly reflects our brand. What stood out most was her attention to detail and her willingness to go the extra mile to ensure everything functioned seamlessly. Communication was always smooth, and deadlines were met without any stress. I’d gladly recommend her to anyone looking for a professional web developer who truly cares about her craft.",
    name: "Sarah Johnson",
    title: "CEO, Bloom Digital Agency",
  },
  {
    quote:
      "I’ve collaborated with many developers, but Juliet stands out for her creativity and problem-solving approach. She built a custom portfolio website for our design studio that not only looks stunning but also performs flawlessly. She was proactive, responsive, and always open to feedback. Her ability to blend aesthetics with functionality is rare, and I’m thrilled with the final result. Juliet is definitely my go-to developer for future projects!",
    name: "Emily Carter",
    title: "Creative Director, Carter & Co. Designs",
  },
  {
    quote:
      "Juliet helped us build our e-commerce website from scratch, and the results exceeded our expectations. She understood our business needs and turned them into a fast, secure, and visually appealing website that boosted our online sales within weeks. Her technical skills are impressive, but her patience and professionalism made the whole process effortless. We still rely on her for updates and maintenance because she always delivers with excellence.",
    name: "Daniel Okoro",
    title: "Founder, GreenCart Nigeria",
  },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Peter Johnson",
//     title: "Director of AlphaStream Technologies",
//   },
//   {
//     quote:
//       "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//     name: "Michael Gloria",
//     title: "Director of AlphaStream Technologies",
//   },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of an AI-powered health platform using Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/fem.png",
  },
  {
    id: 2,
    title: "Mobile App Dev - Kenei-Health",
    desc: "Contributed in development of mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/code.png",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a web app for a client, from initial design concept to hosting.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained SEO optimised Web apps using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/lap.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "1",
    img: "/git.svg",
    link: 'https://github.com/Maverickj8'
  },
  {
    id: 2,
    name: "2",
    img: "/X.png",
    link: 'https://x.com/MaverickAlbert5'
  },
  {
    id: 3,
    name: "3",
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/chisom-eze-15213826b/'
  },
];