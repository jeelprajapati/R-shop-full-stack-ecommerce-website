import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import AtmOutlinedIcon from '@mui/icons-material/AtmOutlined';
export const cardData=[
    {
        title:'USERS',
        growth:2,
        totle:0,
        see:'user',
        Color:'red',
        icon:<PersonOutlineIcon/>,
        to:'user'
    },
    {
        title:'ORDERS',
        growth:2,
        totle:80,
        see:'orders',
        Color:'green',
        icon:<ShoppingCartOutlinedIcon/>,
        to:'order'
    },
    {
        title:'EARNING',
        growth:50,
        totle:50000,
        see:'user',
        Color:'yellow',
        icon:<CurrencyRupeeOutlinedIcon/>,
        to:'user'
    },
    {
        title:'MY BALANCE',
        growth:2,
        totle:7000,
        see:'detail',
        Color:'pink',
        icon:<AtmOutlinedIcon/>,
        to:'user'
    }
]

export const userdata=[
     {
        userid:'45463266565',
        username:'jeel',
        email:'prajapatijeel@gmail.com',
        srno:1
     },
     {
        userid:'49796555',
        username:'roshani',
        email:'prajapatiroshani@gmail.com',
        srno:2
     },
     {
        userid:'45463266565',
        username:'jeel',
        email:'prajapatijeel@gmail.com',
        srno:3
     },
     {
        userid:'49796555',
        username:'roshani',
        email:'prajapatiroshani@gmail.com',
        srno:4
     },
     {
        userid:'45463266565',
        username:'jeel',
        email:'prajapatijeel@gmail.com',
        srno:5
     },
     {
        userid:'49796555',
        username:'roshani',
        email:'prajapatiroshani@gmail.com',
        srno:6
     },
     {
        userid:'45463266565',
        username:'jeel',
        email:'prajapatijeel@gmail.com',
        srno:7
     },
     {
        userid:'49796555',
        username:'roshani',
        email:'prajapatiroshani@gmail.com',
        srno:8
     }

]
 
export const productitem=[
   {
      id:1,
      title:"t-shirt",
      img:"req.body.img",
      categories:"men",
      subcat:"t-shirt",
      size:["X","XL"],
      color:["red"],
      price:123,
      rating:3
    },
    {
      id:2,
      title:"t-shirt",
      img:"req.body.img",
      categories:"men",
      subcat:"t-shirt",
      size:["X","XL"],
      color:["red"],
      price:123,
      rating:3
    },
    {
      id:3,
      title:"t-shirt",
      img:"req.body.img",
      categories:"men",
      subcat:"t-shirt",
      size:["X","XL"],
      color:["red"],
      price:123,
      rating:3
    },
    {
      id:4,
      title:"t-shirt",
      img:"req.body.img",
      categories:"men",
      subcat:"t-shirt",
      size:["X","XL"],
      color:["red"],
      price:123,
      rating:3
    },
    
]
 
export const orderdata=[
   {
      Userid:1,
      Product:[
         {
            Productid:1,
            Quantity:2,
            Price:25
         }
      ],
      Address:"kuvasana",
      Status:"panding"
   },
   {
      Userid:1,
      Product:[
         {
            Productid:1,
            Quantity:2,
            Price:25
         }
      ],
      Address:"kuvasana",
      Status:"delivered"
   },
   {
      Userid:1,
      Product:[
         {
            Productid:1,
            Quantity:2,
            Price:25
         },
         {
            Productid:1,
            Quantity:2,
            Price:25
         },
         {
            Productid:1,
            Quantity:2,
            Price:25
         }
      ],
      Address:"kuvasana",
      Status:"panding"
   }
]