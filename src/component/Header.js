import React, { useEffect, useState } from "react";
import Logo from "../assets/images/youtube_logo.png";
import SidebarToggle from "../assets/images/HamburgerMenu.png";
import UserIcon from "../assets/images/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { searchCache } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCacheRes = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacheRes[searchText]) {
        setSearchList(searchCacheRes[searchText]);
      } else {
        getSearchResult();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const getSearchResult = async () => {
    console.log(searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSearchList(json[1]);
    dispatch(searchCache({ [searchText]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col p-3 shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1 gap-4 justify-start items-center ">
        <img
          className="h-6 cursor-pointer"
          src={SidebarToggle}
          alt="HamburgerMenu"
          onClick={() => handleToggleMenu()}
        />
        <img
          className="h-6 cursor-pointer"
          src={Logo}
          alt="Youtube Logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="col-span-10 px-10 ml-20">
        <div>
          <form
            action=""
            onSubmit={() => {
              navigate("/search?q=" + searchText);
              setShowSuggestion(false);
            }}
          >
            <input
              className=" w-1/2 border-gray-400 border-pixel border p-1 rounded-l-2xl"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSuggestion(true)}
              // onBlur={() => {
              //   setShowSuggestion(false);
              // }}
            />
            <Link to={"/search?q=" + searchText}>
              <button className="border-gray-400 border p-1 rounded-r-2xl">
                Search
              </button>
            </Link>
          </form>
        </div>

        {showSuggestion && searchText !== undefined && (
          <div className="absolute bg-white w-[430px] shadow-lg rounded-md border border-gray-100">
            <ul>
              {searchList.map((list) => {
                return (
                  <li
                    className="hover:bg-gray-100 px-5 py-1"
                    onClick={() => {
                      setSearchText(list);
                      navigate("/search?q=" + list);
                      setShowSuggestion(false);
                    }}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <img className="h-8" src={UserIcon} alt="UserIcon" />
      </div>
    </div>
  );
};

export default Header;
