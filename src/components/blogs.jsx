import React, { useEffect, useState } from "react";
import axios from "axios";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

import sortAndSetCategory from "./util/SortAndSetCategory";
function Blogs() {
  const [data, setmediumdata] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Mages.Studio";

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@buddhasource"
      )
      .then((res) => {
        setmediumdata(res.data);

        console.log(data);
      });
  }, []);
  return (
    <div
      className=' bg-gray-200 relative'
      style={{
        minHeight: "100vh",
        borderBottomRightRadius: "7%",
        borderBottomLeftRadius: "7%",
      }}>
      <div
        className='absolute flex justify-between  z-10 w-full '
        style={{ width: "100vw" }}>
        <div
          style={{ display: !isOpen ? "none" : "block" }}
          className='bg-gray-800  w-full pb-16 h-76'>
          <p
            className='text-blue-300 p-4 w-4/5 text-3xl'
            style={{
              fontFamily: "Poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}>
            Mages
          </p>

          <p className='text-white text-xl p-4 w-full  text-center'>HOME</p>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/contact'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>
              Contact
            </p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <Link to='/blog'>
            {" "}
            <p className='text-white p-4 w-full text-xl  text-center'>Blog</p>
          </Link>
          <div className='h-1 w-4/5 m-auto text-center bg-blue-300'></div>
          <a href='https://wa.me/+916238023468'>
            <p className='text-white p-4 w-full text-xl text-center'>
              Click <span style={{ color: "#44b2e5" }}> here </span>to Whatsapp
              us
            </p>
          </a>
          <a href='mailto:Hello@mages.studio'>
            {" "}
            <p className='text-white p-4 w-full text-xl text-center'>
              hello@mages.com
            </p>
          </a>
        </div>
        </div>
        <div className="flex justify-between">
        <div className='flex items-center  justify-between'>
          <p
            className='text-3xl p-4 md:p-8 md:px-20   '
            style={{
              fontFamily: "poppins",
              color: "#44b2e5",
              fontWeight: 700,
            }}>
            Mages<span className='text-green-300'></span>
          </p>
          <div style={{ float: "right" ,zIndex:1000}} className='md:hidden text-blue-300'>
            {" "}
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        <div className=' p-8 px-12 hidden md:flex group'>
          <a href='/'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-black hover:text-blue-300'
              style={{ fontFamily: "poppins", textTransform: "uppercase" }}>
              HOME{" "}
            </p>
          </a>
          <Link to='/contact'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-black hover:text-blue-300'
              style={{ fontFamily: "poppins" , textTransform: "uppercase"}}>
              Contact
            </p>
          </Link>{" "}
          <Link to='/blogs'>
            {" "}
            <p
              className='text-xl font-bold p-2 px-6 ease-in duration-100 text-black hover:text-blue-300'
              style={{ fontFamily: "poppins" , textTransform: "uppercase"}}>
              Blog
            </p>
          </Link>
      
      </div>
      </div>

      <div className='top-64  md:top-32 flex flex-wrap md:p-4 justify-center ' >
        {/* {

          data?.items.map((item,index)=>{return(

            <img src={item.thumbnail} alt=""/>
          )}
          )} */}
        {data.items?.map((item, index) => {
          return (
            <div className='h-full w-full md:w-1/3 md:h-4/5  m-4 bg-white shadow-2xl hover:shadow-xl p-2'>
              <a href={item.link}>
                <img
                  src={item.thumbnail}
                  alt=''
                  className='w-full h-full'
                  style={{ objectFit: "cover" }}
                />
                <h1 className='text-center font-bold'>{item.title}</h1>
                {/* <h2>{item.content.length>100?item.content.slice(0,100):item.content}</h2> */}
                <h2 className="text-gray-600 p-2">{item.content.length>200?`${item.content.replace(/<\/?[^>]+>/gi, '').slice(0,150) + "..."}`:item.content}</h2>
                <div className='flex items-center'>
                  {data ? (
                    <img
                      src={data?.feed?.image}
                      className='w-12 h-12  rounded-full'
                    />
                  ) : null}
                  {data ? (
                    <div className="flex-col px-2">
                      <p className="text-gray-700">{item?.author}</p>
                        <p className="text-gray-700">{item?.pubDate.substr(0,10)}</p>
                    </div>
                  ) : null}
                  {}
                </div>
              </a>
            </div>
          );
        })}

        {/* <img src={{url:data?.feed?.image}} className="w-64 h-64"/> */}
      </div>
    </div>
  );
}

export default Blogs;