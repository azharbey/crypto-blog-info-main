import { FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "crypto",
    label: "Crypto",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

 export const firebaseConfig = {
  apiKey: "AIzaSyATiHdSrke89YgXsBi-RjgktB6S_bcIiDY",
  authDomain: "coin-mixture.firebaseapp.com",
  projectId: "coin-mixture",
  storageBucket: "coin-mixture.appspot.com",
  messagingSenderId: "277749861690",
  appId: "1:277749861690:web:1a3be48b5cd21e7b851403",
  measurementId: "G-TX1FET4LE6"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}