import ExpertItem from "@/components/expertItem/ExpertItem";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { DiScrum } from "react-icons/di";
import {
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNode,
  FaWordpress,
  FaGithub,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  RiJavascriptFill,
  RiTailwindCssFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiTensorflow,
} from "react-icons/si";

import "./style.css";

const Page = () => {
  return (
    <div className="pr-4 overflow-auto h-full">
      <div className="text-lg font-bold border-b-2 border-main w-fit py-1">
        Expertice
      </div>
      <div className="my-5">
        <div className="group">
          Front-End
          <div>
            <ExpertItem
              color={"#F0DB4F"}
              percent={95}
              icon={<RiJavascriptFill />}
            />
            <ExpertItem color={"#61DBFB"} percent={75} icon={<FaReact />} />
            <ExpertItem
              color={"#007ACC"}
              percent={70}
              icon={<BiLogoTypescript />}
            />
            <ExpertItem
              color={"#38B2AC"}
              percent={95}
              icon={<RiTailwindCssFill />}
            />
            <ExpertItem color={"#7952B3"} percent={95} icon={<FaBootstrap />} />
            <ExpertItem color={"#E44D26"} percent={95} icon={<FaHtml5 />} />
            <ExpertItem color={"#1572B6"} percent={95} icon={<FaCss3Alt />} />
            <ExpertItem color={"#CC6699"} percent={95} icon={<FaSass />} />
          </div>
        </div>
        <div className="group">
          Back-end
          <div>
            <ExpertItem
              color={"#000000"}
              percent={90}
              icon={<RiNextjsFill />}
            />
            <ExpertItem color={"#000000"} percent={70} icon={<SiExpress />} />
            <ExpertItem color={"#8CC84B"} percent={75} icon={<FaNode />} />
            <ExpertItem color={"#899BBA"} percent={95} icon={<SiPhp />} />
            <ExpertItem color={"#21759B"} percent={95} icon={<FaWordpress />} />
          </div>
        </div>
        <div className="group">
          Database
          <div>
            <ExpertItem color={"#00758F"} percent={95} icon={<GrMysql />} />
            <ExpertItem
              color={"#336791"}
              percent={95}
              icon={<SiPostgresql />}
            />
            <ExpertItem
              color={"#47A248"}
              percent={95}
              icon={<BiLogoMongodb />}
            />
          </div>
        </div>
        <div className="group">
          DevOps
          <div>
            <ExpertItem color={"#211F20"} percent={75} icon={<FaGithub />} />
          </div>
        </div>
        <div className="group">
          Project Management
          <div>
            <ExpertItem color={"#007ACC"} percent={60} icon={<DiScrum />} />
          </div>
        </div>
        <div className="group">
          Data (in progress)
          <div>
            <ExpertItem color={"#DA5B24"} percent={35} icon={<SiNumpy />} />
            <ExpertItem color={"#150458"} percent={35} icon={<SiPandas />} />
            <ExpertItem color={"#EE6622"} percent={20} icon={<SiPytorch />} />
            <ExpertItem
              color={"#FF6F00"}
              percent={20}
              icon={<SiTensorflow />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
