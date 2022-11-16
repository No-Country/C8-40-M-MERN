import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <Topbar handleOpenMenu={() => setMenuOpen(!menuOpen)} />
      <Sidebar menuPosition={menuOpen ? 'left-0' : '-left-[1000px]'} />
    </>
  );
}

export default Navbar;
