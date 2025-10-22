import {
  FaCogs,
  FaShoppingCart,
  FaBuilding,
  FaWrench,
  FaTree,
  FaQuoteLeft,
  FaCheckCircle,
  FaStar,
  FaFlask,
  FaExclamationTriangle,
  FaPencilRuler,
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { DiReact, DiNodejsSmall, DiMysql } from "react-icons/di";
import {
  SiRedux,
  SiBootstrap,
  SiPrisma,
  SiAxios,
  SiFormik,
  SiJsonwebtokens,
  SiExpress,
  SiReactbootstrap,
  SiReactrouter,
} from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { TfiFiles } from "react-icons/tfi";
import { RiPassValidLine } from "react-icons/ri";

const BlogPost = () => {
  const frontendStack = [
    "React ",
    "React Router DOM ",
    "React Bootstrap ",
    "Bootstrap",
  ];
  const stateManagementStack = [
    "Redux Toolkit ",
    "React Redux ",
    "Redux Persist ",
  ];
  const apiStack = ["Axios ", "Custom Axios Instance"];
  const formStack = ["Formik ", "Yup "];
  const backendStack = [
    "Node.js (ES6+ modules)",
    "Express.js ",
    "MySQL with Prisma ORM",
    "JWT Authentication",
    "Nodemailer",
    "Helmet, bcrypt, express-rate-limit",
    "Zod validation",
    "Custom Logging System",
  ];

  const challengesAndSolutions = [
    {
      challenge:
        "Securing dual-role access control for both customers and admins.",
      solution: (
        <>
          I tackled this by implementing robust, custom Express middleware that
          verified user identity and role using{" "}
          <span className="font-bold">JWT</span> tokens. Furthermore, user
          passwords were secured using <span className="font-bold">bcrypt</span>
          , ensuring strict, role-based access control across all sensitive API
          endpoints.
        </>
      ),
    },
    {
      challenge:
        "Managing complex, multi-step state related to package consolidation and order submission across the frontend.",
      solution: (
        <>
          I deployed a centralized state management solution using{" "}
          <span className="font-bold">Redux Toolkit</span> and integrated{" "}
          <span className="font-bold">Redux Persist</span>. This strategy
          guaranteed state integrity across complex forms and provided a
          persistent, seamless user experience even upon browser refresh.
        </>
      ),
    },
    {
      challenge:
        "Enforcing data integrity and validating complex form inputs on both the client and server to prevent database corruption.",
      solution: (
        <>
          I enforced strict validation rules using{" "}
          <span className="font-bold">Formik/Yup</span> on the client for
          immediate user feedback, backed by{" "}
          <span className="font-bold">Zod</span> schemas on the backend API.
          This dual-layer strategy prevents malformed data from reaching the{" "}
          <span className="font-bold">MySQL</span> database.
        </>
      ),
    },
  ];

  const customerFeatures = [
    "Virtual Indian Address Generation (Automated provisioning and management)",
    "Package Consolidation & Tracking (Efficient shipment merging workflow)",
    "End-to-End Order Management (Real-time status updates via Nodemailer)",
    "Real-time Shipping Calculator (Complex tariff logic implementation)",
    "Integrated Wallet System for Payments (Detailed transactional logging)",
    "Assisted Personal Shopping Service (Custom request system)",
    "Direct Purchase Capability (Automated order placement)",
  ];

  const adminFeatures = [
    "Comprehensive Order Dashboard (Advanced filtering and search functionality)",
    "Customer Management System (Detailed profiling and history lookup)",
    "Shipment Lifecycle Management (Step-by-step operational controls)",
    "Operational Controls & Tariff Configuration (Dynamic pricing model management)",
  ];

  const getTechIcon = (techName) => {
    const iconClass = "w-4 h-4 mr-2";

    if (techName.includes("React Bootstrap"))
      return <SiReactbootstrap className={iconClass} color="#7952B3" />;
    if (techName.includes("React Router"))
      return <SiReactrouter className={iconClass} color="#7952B3" />;
    if (techName.includes("Redux"))
      return <SiRedux className={iconClass} color="#764ABC" />;
    if (techName.includes("React"))
      return <DiReact className={iconClass} color="#61DAFB" />;
    if (techName.includes("Bootstrap"))
      return <SiBootstrap className={iconClass} color="#7952B3" />;
    if (techName.includes("Node.js"))
      return <DiNodejsSmall className={iconClass} color="#8CC84A" />;
    if (techName.includes("Express.js"))
      return <SiExpress className={iconClass} color="#333333" />;
    if (techName.includes("MySQL"))
      return <DiMysql className={iconClass} color="#00758F" />;
    if (techName.includes("Prisma"))
      return <SiPrisma className={iconClass} color="#1A202C" />;
    if (techName.includes("JWT"))
      return <SiJsonwebtokens className={iconClass} color="#E86E00" />;
    if (techName.includes("Axios"))
      return <SiAxios className={iconClass} color="#5A29E4" />;
    if (techName.includes("Formik"))
      return <SiFormik className={iconClass} color="#3863D4" />;
    if (techName.includes("Nodemailer"))
      return <CiMail className={iconClass} color="#4A4A4A" />;
    if (techName.includes("Helmet"))
      return <MdOutlineSecurity className={iconClass} color="#4A4A4A" />;
    if (techName.includes("Zod"))
      return <GrValidate className={iconClass} color="#4A4A4A" />;
    if (techName.includes("Log"))
      return <TfiFiles className={iconClass} color="#4A4A4A" />;
    if (techName.includes("Yup"))
      return <RiPassValidLine className={iconClass} color="#4A4A4A" />;

    return <FaStar className="w-3 h-3 mr-2" color="#FACC15" />;
  };

  const renderList = (title, items) => (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-xl border border-gray-100 transform hover:scale-103 transition duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b-2 border-blue-100 flex items-center">
        <FaCheckCircle className="text-blue-500 mr-2" /> {title}
      </h3>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, i) => (
          <li key={i} className="flex items-start">
            <GoCheckCircleFill className="flex-shrink-0 w-5 h-5 text-green-500 mr-2 mt-1" />
            <span className="font-medium text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderStack = (title, items) => (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-gray-900 mb-5 border-l-4 border-blue-500 pl-4 flex items-center">
        <FaStar className="text-yellow-500 mr-2" /> {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {items.map((tech, i) => (
          <span
            key={i}
            className=" px-5 py-2 rounded-full shadow-lg text-base font-medium transition duration-300 hover:scale-105 hover:shadow-xl transform cursor-default flex items-center"
          >
            {getTechIcon(tech)}
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen font-sans">
      <header className="relative bg-gradient-to-r from-blue-800 to-purple-900 text-white py-24 px-6 sm:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(at 10% 50%, #4a90e2 0%, transparent 50%), radial-gradient(at 90% 20%, #8b5cf6 0%, transparent 50%)",
            opacity: 0.3,
            zIndex: 0,
          }}
        ></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-md font-bold uppercase tracking-widest text-blue-200 mb-3">
            Full-Stack Development • Internship Project Showcase
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-5 leading-tight drop-shadow-lg">
            ShipMySpree: Building a Global E-commerce Logistics Platform
          </h1>
          <p className="text-xl sm:text-2xl max-w-4xl mx-auto opacity-90 leading-relaxed">
            A deep dive into the architecture, implementation, and challenges of
            creating an international package forwarding solution.
          </p>
          <div className="mt-8 text-lg font-medium text-blue-300">
            <span className="font-bold text-white">October 2025</span> •
            Developed by{" "}
            <span className="font-extrabold text-teal-300">Mohd Umair</span>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="bg-gradient-to-r from-indigo-50 to-white p-10 rounded-2xl shadow-3xl mb-16 border border-indigo-200">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-indigo-300 pb-4 flex items-center">
            <FaFlask className="text-indigo-600 mr-4 text-4xl" /> Project Scope
            & Key Development Milestones
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This project represented a complete, real-world application
            build-out, requiring full commitment across all development layers.
            My responsibilities went beyond simple feature completion, demanding
            proactive decisions on performance, security, and scalability from
            the very first line of code. The key milestones below demonstrate
            the breadth of my full-stack capability and project management
            skills.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center mt-6">
            <div className="p-4 bg-white rounded-lg shadow-lg border-t-4 border-indigo-400">
              <p className="text-5xl font-extrabold text-indigo-600">10+</p>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                Core Feature Modules
              </p>
              <p className="text-sm text-gray-500">
                Implemented for two distinct user roles
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg border-t-4 border-indigo-400">
              <p className="text-5xl font-extrabold text-indigo-600">Full</p>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                Stack Ownership
              </p>
              <p className="text-sm text-gray-500">Architecture, API, UI/UX</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg border-t-4 border-indigo-400">
              <p className="text-5xl font-extrabold text-indigo-600">Secure</p>
              <p className="text-lg font-semibold text-gray-700 mt-2">
                Authentication Layer
              </p>
              <p className="text-sm text-gray-500">
                Built using JWT and bcrypt
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 rounded-2xl shadow-3xl mb-16 border border-blue-100 hover:shadow-4xl transition-all duration-300 ease-in-out">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-blue-200 pb-4 flex items-center">
            <FaPencilRuler className="text-indigo-600 mr-4 text-4xl" /> Project
            Context and Rationale
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-indigo-700">
            Introduction, Background, and Problem Definition
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The project began with a clear{" "}
            <span className="font-bold">Problem Definition</span>: the
            significant logistical and commercial barriers faced by
            international customers accessing the vast Indian e-commerce market.
            Customers lacked the mandatory local shipping address, struggled
            with complex customs and tax calculations, and had difficulty
            efficiently consolidating multiple shipments. This environment
            created a demonstrable <span className="font-bold">market gap</span>{" "}
            for a unified, custom-built digital platform.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-indigo-700">
            Purpose and Scope (Why This Project?)
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-2">
            The primary <span className="font-bold">Purpose</span> of
            ShipMySpree was to establish a single, secure platform to eliminate
            this friction. <br /> The strategic goals included:
          </p>
          <ul className="list-decimal list-inside text-lg text-gray-700 mb-4 pl-4 space-y-1">
            <li>
              <span className="font-bold">Providing Virtual Presence</span> via
              an automated address system.
            </li>
            <li>
              <span className="font-bold">Optimizing Cost</span> through
              shipment consolidation.
            </li>
            <li>
              <span className="font-bold">Ensuring Security</span> across
              payments and sensitive data flows.
            </li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The project's <span className="font-bold">Background</span> analysis
            indicated a substantial demand for a solution that centralized the
            entire purchasing and shipping process.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 text-indigo-700">
            Feasibility and Architectural Approach
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The <span className="font-bold">Scope</span> of the project was
            defined as a complete, two-sided platform (Customer Portal and Admin
            Dashboard). A detailed{" "}
            <span className="font-bold">Feasibility Study</span> confirmed that
            an in-house application was the only viable path to meet the unique
            requirements for dynamic tariff calculation and personalized
            consolidation workflows. This validated the decision to architect
            the solution using a modern MERN-adjacent stack for optimal
            performance, security, and maintainability, driven by my total
            ownership of the technical implementation.
          </p>
        </section>

        <section className="py-10 mb-16 p-10 bg-gradient-to-br rounded-2xl shadow-3xl border border-red-200">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-red-300 pb-4 flex items-center">
            <FaExclamationTriangle className="text-red-600 mr-4 text-4xl" />{" "}
            Overcoming Technical Roadblocks
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Building a full-scale logistics platform presented several
            non-trivial engineering challenges. Successfully tackling these
            obstacles demonstrated my deep problem-solving skills and technical
            versatility:
          </p>

          {challengesAndSolutions.map((item, index) => (
            <div
              key={index}
              className="mb-6 p-4 border-l-4 border-red-500 bg-red-50 rounded-lg shadow-sm"
            >
              <p className="font-bold text-xl text-red-700 mb-2">
                Challenge {index + 1}: {item.challenge}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-red-700">Solution:</span>{" "}
                {item.solution}
              </p>
            </div>
          ))}
        </section>

        <section className="py-16 bg-white rounded-2xl shadow-3xl mb-16 border border-purple-100">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center flex items-center justify-center">
            <FaLaptopCode className="text-blue-600 mr-4 text-4xl" /> The
            Full-Stack Toolkit
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 px-8">
            <div className="p-8 bg-gray-50 rounded-xl shadow-inner border-t-4 border-blue-400">
              {renderStack("Client-Side (Frontend)", frontendStack)}
              {renderStack("State & API Management", [
                ...stateManagementStack,
                ...apiStack,
              ])}
              {renderStack("Form Handling & Validation", formStack)}
            </div>
            <div className="p-8 bg-gray-50 rounded-xl shadow-inner border-t-4 border-purple-400">
              {renderStack("Server-Side (Backend & Database)", backendStack)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-3xl mb-16 border border-gray-200">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center flex items-center justify-center">
            <FaCogs className="text-green-600 mr-4 text-4xl" /> Deep Dive: Core
            Platform Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-8">
            <div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
                <FaShoppingCart className="mr-4 text-3xl text-indigo-600" />{" "}
                Customer-Facing Services
              </h3>
              {renderList("User Services Implemented", customerFeatures)}
            </div>
            <div>
              <h3 className="text-3xl font-bold text-indigo-800 mb-6 flex items-center">
                <FaBuilding className="mr-4 text-3xl text-indigo-600" />{" "}
                Operational & Admin Systems
              </h3>
              {renderList("Operational Management Systems", adminFeatures)}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white rounded-2xl shadow-3xl border border-teal-100 p-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-2 border-teal-300 pb-4 flex items-center">
            <FaWrench className="text-red-600 mr-4 text-4xl" /> Final Thoughts
            on Architecture and Growth
          </h2>

          <div className="mb-8 border-l-4 border-green-500 pl-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaTree className="mr-3 text-green-600 text-3xl" /> Building a
              Robust Foundation
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              My core design principle was to prioritize{" "}
              <span className="font-bold text-green-700">
                long-term maintainability and defense
              </span>
              . The entire codebase adheres to a modular design with a{" "}
              <span className="font-bold text-green-700">
                clean separation of concerns
              </span>
              , ensuring any future updates or feature additions can be
              integrated smoothly. Leveraging{" "}
              <span className="font-bold text-green-700">Prisma ORM</span> with
              MySQL was a crucial choice for providing{" "}
              <span className="font-bold text-green-700">type safety</span> and
              abstracting complex database queries, which directly enhances
              system stability. Furthermore, I proactively implemented defensive
              measures, including utilizing{" "}
              <span className="font-bold text-green-700">Helmet</span> and
              rate-limiting middleware, to ensure the system was built to
              withstand potential threats.
            </p>
          </div>

          <div className="mb-8 border-l-4 border-indigo-500 pl-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <FaQuoteLeft className="mr-3 text-indigo-600 text-3xl" /> The
              Takeaway: Professional Growth
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Taking this project from a business concept to a fully functional
              application was the defining experience of my development journey.
              It was a comprehensive exercise in{" "}
              <span className="font-bold text-indigo-700">
                technical leadership and accountability
              </span>
              , moving far beyond theoretical knowledge. This process cemented
              my confidence in my abilities to architect a secure, scalable
              platform from scratch, implement advanced{" "}
              <span className="font-bold text-indigo-700">
                security best practices
              </span>
              , and successfully manage a complex project scope entirely on my
              own initiative.
            </p>
          </div>

          <blockquote className="mt-12 border-l-4 border-indigo-600 bg-indigo-50 p-7 rounded-lg italic text-gray-700 shadow-xl max-w-4xl mx-auto text-center text-xl">
            “Successfully driving ShipMySpree from a business need into a
            fully-functional application has prepared me to tackle any
            full-stack development challenge with confidence and total
            ownership.”
          </blockquote>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-200 py-10 mt-16 border-t-4 border-indigo-600 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-semibold mb-4 text-white">
            Ready to build the next great platform. Let's connect!
          </p>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/mohd-umair-saboowala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 flex items-center text-lg font-medium"
            >
              <FaLinkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Umair-1404/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-300 flex items-center text-lg font-medium"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © 2025 Mohd Umair. All Rights Reserved.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Passionate Full-Stack Developer | Project ShipMySpree Showcase
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
