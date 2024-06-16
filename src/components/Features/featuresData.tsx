import { Feature } from "@/types/feature";
import { IoIosBusiness } from "react-icons/io";
import { FaBuilding , FaHospital} from "react-icons/fa";
import { BiSolidBank, BiSolidBuildingHouse, BiSolidInstitution } from "react-icons/bi";
import { MdMuseum , MdStadium, MdFactory } from "react-icons/md";
import { CiAirportSign1 } from "react-icons/ci";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaHotel , FaSchool, FaDatabase, FaWarehouse, FaTreeCity } from "react-icons/fa6";
import { HiBuildingStorefront } from "react-icons/hi2";
import { SiMetrodeparis } from "react-icons/si";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <IoIosBusiness size={40} />
    ),
    title: "IT Parks",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaBuilding size={35} />
    ),
    title: "Commercial Buildings",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <BiSolidBank size={40} />
    ),
    title: "Banks",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <MdMuseum size={40} />
    ),
    title: "Museums",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <CiAirportSign1 size={40} />
    ),
    title: "Airports",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <MdStadium size={40} />
    ),
    title: "Stadiums",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <PiBuildingOfficeFill size={40} />
    ),
    title: "Offices",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaHotel size={32} />
    ),
    title: "Hotels",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaHospital size={35} />
    ),
    title: "Hospitals",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },

  {
    id: 1,
    icon: (
      <HiBuildingStorefront size={40} />
    ),
    title: "Shopping Malls",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <BiSolidBuildingHouse size={40} />
    ),
    title: "Residential Buildings",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaSchool size={35} />
    ),
    title: "Schools",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <BiSolidInstitution size={40} />
    ),
    title: "Institutions",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaDatabase size={35} />
    ),
    title: "Data Centers",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <SiMetrodeparis size={35} />
    ),
    title: "Metro Stations",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <MdFactory size={35} />
    ),
    title: "Factory",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaTreeCity size={40} />
    ),
    title: "Neighbor-hoods",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <FaWarehouse size={35} />
    ),
    title: "Warehouse",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
