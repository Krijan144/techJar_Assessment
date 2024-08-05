import { FaUser } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { MdSell } from "react-icons/md";

export const bardata = {
  data: [1100, 1000, 900, 1222, 2333, 2222, 1000],
  labels: ["January", "February", "March", "April", "May", "June", "July"],
};
export const linedata = {
  data: [65, 59, 80, 81, 56, 55, 40],
  labels: ["January", "February", "March", "April", "May", "June", "July"],
};

export const doughnutdata = {
  data: [50, 10, 5, 20, 15],
  labels: ["Nepal", "Australia", "USA", "India", "Others"],
  colors: ["#ffa800", "#f64e60", "#8950fc", "#0095fe", "#4ab58e"],
};

type cardType = {
  number: string;
  text: string;
  color: string;
  icon: React.ReactNode;
  iconBg: string;
};

export const cardData: cardType[] = [
  {
    number: "2k",
    text: "Total Sales",
    color: "#ffe2e5",
    icon: <AiFillDollarCircle />,
    iconBg: "#fa5a7d",
  },
  {
    number: "456",
    text: "Total Order",
    color: "#FFF4DE",
    icon: <HiMiniSquare3Stack3D />,
    iconBg: "#FF947A",
  },
  {
    number: "567",
    text: "Product Sold",
    color: "#DCFCE7",
    icon: <MdSell />,
    iconBg: "#3CD856",
  },
  {
    number: "12",
    text: "New Customers",
    color: "#F3E8FF",
    icon: <FaUser />,
    iconBg: "#BF83FF",
  },
];

export const employeeData = [
  {
    id: 1,
    email: "johnDoe@gmail.com",
    firstname: "John",
    lastname: "Doe",
  },
  {
    id: 2,
    email: "johnDuck@gmail.com",
    firstname: "John",
    lastname: "Doe",
  },
];
