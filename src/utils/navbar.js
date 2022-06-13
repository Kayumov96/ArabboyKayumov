import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import DetailPage from "../components/DetailProductPage";

export const navbar = [
  {
    id: 1,
    title: "Men",
    path: "/men",
    element: <Men />,
    children: [],
    hidden: false,
  },
  {
    id: 2,
    title: "Women",
    path: "/women",
    element: <Women />,
    children: [],
    hidden: false,
  },
  {
    id: 3,
    title: "Kids",
    path: "/kids",
    element: <Kids />,
    children: [],
    hidden: false,
  },
  {
    id: 4,
    title: "Product Description",
    path: "/productdescription",
    element: <DetailPage />,
    hidden: true,
    children: [],
  },
];
