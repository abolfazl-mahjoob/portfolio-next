import Experience from "@/components/experience/Experience";
import "./style.css";

export default function Home() {
  return (
    <div className="md:pr-4 h-full overflow-auto">
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-bold">Hi everyone i&apos;m</h4>
        <h1 className="text-3xl font-bold">
          <span className="text-main font-black">abolfazl</span> mahjoob
        </h1>
        <h5 className="text-sm font-bold">
          Full-Stack Web Developer | React, Next.js, Node.js, PHP, WordPress
        </h5>
        <p className="text-sm text-justify">
          Experienced Full-Stack Web Developer with over 5 years of expertise in
          React, Next.js, Node.js, PHP, and WordPress. Adept at delivering
          high-performance solutions, I recently spearheaded a full rewrite of a
          dashboard panel for Hamyar, converting it from WordPress to a PWA
          using Next.js, boosting its speed by 70%. With a strong foundation in
          problem-solving, creativity, and teamwork, I am actively exploring
          opportunities in dynamic development teams while building my skills in
          data science, AI, and machine learning.
        </p>
        <div className="flex justify-between items-center gap-4 flex-wrap mt-5 mb-3">
          View CV:
          <a
            className="w-48 text-sm font-bold flex justify-center items-center h-10 rounded-md transition-all duration-300 bg-main text-white hover:bg-second"
            target="_blank"
            href="https://drive.google.com/file/d/1jdweIFP5FZXn_Up981Y2Ts_LsNtoGAzw/view?usp=sharing"
          >
            view
          </a>
        </div>
      </div>
      <div>
        <div className="text-lg font-bold my-5 border-b-2 border-main w-fit py-1">
          Professional Experience
        </div>
        <ul className="relative experience-wrap">
          <Experience
            compeny="Hamyar Academy"
            date="2023 - 2024"
            position="Senior Developer & Project Manager"
          >
            <ul>
              <li>
                Led the migration of a WordPress dashboard to a PWA using
                Next.js, enhancing the performance by 70%.
              </li>
              <li>
                Reduced query execution by rewriting WooCommerce methods and
                personalizing SQL queries, then caching them for minimal load.
              </li>
              <li>
                Developed a mini-app by integrating a Telegram bot with the
                dashboard for extended functionality.
              </li>
              <li>
                Redesigned the backend API of WordPress from scratch with
                security enhancements and optimized it for performance.
              </li>
            </ul>
          </Experience>
          <Experience
            compeny="7learn"
            date="2023 - current "
            position="WordPress Mentor"
          >
            <ul>
              <li>
                Acted as a WordPress mentor for over 10,000 students, providing
                expert guidance and answering technical questions.
              </li>
              <li>
                Helped students troubleshoot complex WordPress issues, offering
                best practices for performance optimization and security.
              </li>
            </ul>
          </Experience>
          <Experience
            compeny="Freelance"
            date="2018 - 2023"
            position="Full-Stack Developer"
          >
            <ul>
              <li>
                Delivered custom web solutions for a variety of clients,
                leveraging full-stack technologies such as Node.js, PHP, React,
                and WordPress.
              </li>
              <li>
                Specialized in high-performance web development and user
                experience optimization.
              </li>
              <li>
                Managed both frontend and backend development processes,
                ensuring smooth deployment and maintenance.
              </li>
            </ul>
          </Experience>
          <Experience
            compeny="Faramouj"
            date="2023 - 2023"
            position="Wordpress Developer"
          >
            <ul>
              <li>
                Reduced website design timelines from 30 days to 10 days,
                significantly improving project delivery speed.
              </li>
              <li>
                Implemented efficient development workflows and optimized design
                processes to accelerate project completion.
              </li>
            </ul>
          </Experience>
        </ul>
      </div>
    </div>
  );
}
