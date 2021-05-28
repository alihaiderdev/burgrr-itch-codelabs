import React from 'react';

// logout
import { IoLogOutOutline } from 'react-icons/io5';

// facebook
import { ImFacebook2 } from 'react-icons/im';

// instagram
import { AiFillInstagram } from 'react-icons/ai';

// twitter
import { FaTwitterSquare } from 'react-icons/fa';

// open eye password
import { AiFillEye } from 'react-icons/ai';

// close eye password
import { AiFillEyeInvisible } from 'react-icons/ai';

// email envelop
import { BiEnvelope } from 'react-icons/bi';

// arrow left
import { HiArrowLeft } from 'react-icons/hi';

// edit
import { MdModeEdit } from 'react-icons/md';

// add
import { MdAddCircle } from 'react-icons/md';

// phone
import { MdLocalPhone } from 'react-icons/md';

// More
import { MdMore } from 'react-icons/md';

// toggleOn
import { BsToggleOn } from 'react-icons/bs';

// toggleOff
import { BsToggleOff } from 'react-icons/bs';

// minus
import { AiFillMinusCircle } from 'react-icons/ai';

// close
import { AiOutlineClose } from 'react-icons/ai';

// dollar
import { AiFillDollarCircle } from 'react-icons/ai';

// location
import { BiCurrentLocation } from 'react-icons/bi';

// time
import { BiTimeFive } from 'react-icons/bi';

// location
import { ImLocation } from 'react-icons/im';

// delete
import { RiDeleteBin5Fill } from 'react-icons/ri';

// arrow up expand
import { IoIosArrowDropupCircle } from 'react-icons/io';

// arrow down collapse
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Icon = ({ children, style, onClick }) => {
  return (
    <div className='icon' style={style} onClick={onClick}>
      {children}
    </div>
  );
};

export default Icon;
