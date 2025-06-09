import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

//! must have access to currentTheme, setCurrentTheme, handleChangeTheme

const ChooseTheme = () => {
  return (
    <>
      <div className="absolute right-10 bottom-10">
        <DropdownMenu>
          <DropdownMenuTrigger>Change theme</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Forest</DropdownMenuItem>
            <DropdownMenuItem>Cozy cafe</DropdownMenuItem>
            <DropdownMenuItem>Library</DropdownMenuItem>
            <DropdownMenuItem>Mountains</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ChooseTheme;
